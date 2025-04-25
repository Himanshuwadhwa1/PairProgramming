import Link from "next/link";
import { Button } from "./ui/button";
import { spaceMonoHeavy } from "@/app/layout";
import { Laptop } from "lucide-react";

const login = (<ul className="flex justify-end gap-4 w-100 text-xl font-bold">
    <li><Button variant="ghost" size={'xl'}>Login</Button></li>
    <li><Button variant="outline" size={"xl"}>Signup</Button></li>
</ul>)
const Navbar = ()=>{
    return (
    <section className={` ${spaceMonoHeavy.className} flex gap-6 h-30 w-full bg-[#604652] text-amber-100 items-center justify-center`}>
        <Laptop size={40} />
        <ul className="flex justify-evenly w-200 text-xl">
            <li className="nav-items"><Link href={'/'}>Home</Link></li>
            <li className="nav-items"><Link href={'/playground'}>Playground</Link></li>
            <li className="nav-items"><Link href={'/languages'}>Languages</Link></li>
        </ul>
        {login}
    </section>
    )
}
export default Navbar;