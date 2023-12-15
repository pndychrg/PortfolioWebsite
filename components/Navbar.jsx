'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="flex text-lg items-center justify-between px-6 md:px-10  py-5 fixed w-full top-0 font-montserrat bg-white ">
            <Link href="/" className="  cursor-pointer pb-1.5 transition-all hover:font-bold">
                Chirag Pandey
            </Link>
            <div className="hidden h-full gap-12 lg:flex">
                <Link href="#About" className="cursor-pointer pb-1.5 transition-all hover:font-bold">About</Link>
                <Link href="#Project" className="cursor-pointer pb-1.5 transition-all hover:font-bold">Projects</Link>
                <Link href="https://drive.google.com/file/d/1ykDj1j0Zb3YCTLMGb7e_Xa7qon9YWk-I/view?usp=sharing" className="  cursor-pointer pb-1.5 transition-all hover:font-bold" target="_blank">Resume</Link>
            </div>
            <div className="lg:hidden ">
                <button onClick={() => (setToggleDropdown(!toggleDropdown))}>
                    Menu
                </button>
                {toggleDropdown && <div className="absolute transition-all right-0 flex flex-col mt-3 gap-2 justify-center items-center me-3 p-4 bg-white rounded-lg shadow-lg ">
                    <Link href="#About" className="  cursor-pointer  transition-all hover:font-bold  rounded p-2">About</Link>
                    <Link href="#Project" className="  cursor-pointer  transition-all hover:font-bold  rounded p-2">Projects</Link>
                    <Link href="https://drive.google.com/file/d/1ykDj1j0Zb3YCTLMGb7e_Xa7qon9YWk-I/view?usp=sharing" target="_blank" className="  cursor-pointer pb-1.5 transition-all hover:font-bold  rounded p-2">Resume</Link>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar