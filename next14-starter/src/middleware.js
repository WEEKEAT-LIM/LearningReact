import { NextResponse} from "next/server";
import {withAuth} from "next-auth/middleware"

export default withAuth(
    function middleware(request, response, next)
    {
        // console.log("middleware function")
        // console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/blog"))
        {
            return NextResponse.next();
        }

        if (request.nextUrl.pathname.startsWith("/admin") &&
        request.nextauth.token?.isAdmin)
        {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/", request.url));
    },
    {
        pages:
        {
            signIn:"/login",
        },
        callbacks:
        {
            authorized({token})
            {
                // console.log("authorized")
                // console.log(token?.isAdmin);
                // return false
            }
        },
    }
) 

export const config = {
    matcher:["/blog", "/admin"],
};