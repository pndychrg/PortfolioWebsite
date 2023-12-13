'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="flex text-lg items-center justify-between px-6 md:px-10  py-5 font-montserrat">
            <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                Chirag Pandey
            </Link>
            <div className="hidden h-full gap-12 lg:flex">
                <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">About</Link>
                <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Projects</Link>
                <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Resume</Link>
            </div>
            <div className="lg:hidden ">
                <button onClick={() => (setToggleDropdown(!toggleDropdown))}>
                    Menu
                </button>
                {toggleDropdown && <div className="absolute right-0 flex flex-col mt-3 w-full p-5 r min-w-[210px]  gap-2 justify-end items-end">
                    <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">About</Link>
                    <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Projects</Link>
                    <Link href="/" className=" flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Resume</Link>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar