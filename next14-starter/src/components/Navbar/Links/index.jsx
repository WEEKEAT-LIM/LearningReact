"use client";

import styles from './links.module.css';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import Image from 'next/image';
import { signOut, signIn, useSession } from 'next-auth/react';


function Links()
{
    const [open,setOpen] = useState(false);

    const linkArray = [
        {title: "Homepage", path: "/",},
        {title: "About", path: "/about",},
        {title: "Contact", path: "/contact",},
        {title: "Blog", path: "/blog",},
    ];

    const {data:session} = useSession();
    // console.log("Navbar log", session);
    return (
        <div className={styles.container}>
        
        <div className={styles.links}>
            {linkArray.map((link => 
                <NavLink item={link} key={link.title}/>
            ))
            }

            {
            session?(
                <>
                {
                session?.user?.isAdmin && (<NavLink item={{title:"Admin", path:"/admin"}}/>)
                }
                <form action={signOut}>
                    <button className={styles.logout}>Logout</button>
                </form>
                
                </>
            ):
            (
            <NavLink item={{title:"Login", path:"/login"}}/>
            )
            }
        </div>

        {/* <button className={styles.menuBtn} onClick={()=> setOpen(prev => !prev)}>Menu</button> */}
        <Image className={styles.menuBtn} src="/menu.png" alt="" width={30} height={30} onClick={()=> setOpen(prev => !prev)}/>
        {
            open && (
            <div className={styles.mobileLinks}>
                {linkArray.map((link) =>(
                    <NavLink item={link} key={link.title}/>
                ))}

            {
                session?(
                    <>
                    {
                    session?.user?.isAdmin && (<NavLink item={{title:"Admin", path:"/admin"}}/>)
                    }
                    <button className={styles.logout} onClick={signOut}>Logout</button>
                    </>
                ):
                (<NavLink item={{title:"Login", path:"/login"}}/>)
            }
            </div>
            
        )}

        
        </div>
    );
}

export default Links