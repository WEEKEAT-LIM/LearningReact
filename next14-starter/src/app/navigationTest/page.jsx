"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavigationTest()
{
    const router = useRouter();

    function handleClick()
    {
        console.log("Clicked");
        router.push("/"); //client side render
    }

    return(
    <div>
        <h1>Navigation Test Page</h1>
        <Link href="/" prefetch={false}>Click Here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
    );
}
export default NavigationTest