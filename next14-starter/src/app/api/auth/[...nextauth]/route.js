import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export let CURRENT_USER;

async function loginFunc(credentials)
{
    
    try {
        await connectToDb();
        // console.log(credentials)

        const user = await User.findOne({username:credentials.username});
        // console.log(user);
        if (!user)
        {
            console.log("User not found!")
            return null;
            // throw new Error("User not found!");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect)
        {
            console.log("login() => Password incorrect!");
            return null;
            // throw new Error("login() => Password incorrect!");
        }

        return user;
    } 
    catch (error) 
    {
        console.log(error);
        // throw new Error("login() => Failed to login");
    }
}

export const authOptions = {
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt",
    },
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name:"credentials",
            async authorize(credentials)
            {
                try 
                {
                    const user = await loginFunc(credentials);
                    console.log(user);
                    CURRENT_USER = user;
                    return user;
                } 
                catch (error) 
                {
                    return null;
                }
            },
        }),
    ],
    callbacks:{
        async signIn({user, account, profile})
        {
            // console.log("signIn function callbacks");
            // console.log(user, account, profile);
            if (account.provider === "github")
            {
                await connectToDb()
                
                try {
                    const user = await User.findOne({email:profile.email});

                    if (!user)
                    {
                        const newUser = new User({
                            username:profile.login,
                            email:profile.email,
                            image:profile.avatar_url,
                            password:"123456",
                        });

                        await newUser.save();
                        CURRENT_USER = newUser;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
                CURRENT_USER = user;
                // return true;
            }
            return Promise.resolve(user);
        },
        async jwt({token, user, session, trigger})
        {
            // if (trigger === "update" && session?.name)
            // {

            // }

            // pass db id, username, isAdmin to token
            if (user)
            {
                return {
                    ...token,
                    id:user._id,
                    username:user.username,
                    isAdmin:user.isAdmin,
                }
            }
            // console.log("jwt callback =>", {token, user, session});
            return token;
        },
        async session({session, token, user})
        {
            // pass id | username | isAdmin => session.user
            // console.log("session callback[config] =>" , {session, token, user});
            
            if (token)
            {
                return {
                ...session,
                user:{
                    ...session.user,
                    id: token.id,
                    username:token.username,
                    isAdmin:token.isAdmin,
                }
            };
            }
            
        },
    },
};

// export const handlers = NextAuth(...authConfig, authOptions);
export const handlers = NextAuth(authOptions);
export {handlers as GET, handlers as POST};