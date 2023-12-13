'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-10  py-5">
            <Link href="/">
                Chirag Pandey
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                <Link href="/" className="regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">About</Link>
                <Link href="/" className="regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Projects</Link>
                <Link href="/" className="regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Resume</Link>
            </ul>
        </nav>
    )
}

export default Navbar