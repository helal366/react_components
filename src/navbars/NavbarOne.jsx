import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const NavbarOne = () => {
    const [open, setOpen] = useState(false);
    const links = (
        <>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </>
    )
    return (
        <nav className="navbar bg-[#b2e32a80] shadow-sm z-10 flex justify-between padding">
            <div className='flex gap-2 items-center relative'>
                <ul className={`w-40 rounded absolute duration-500 bg-[#6b8383] lg:hidden p-6 ${open ? "flex flex-col gap-3 top-11" : "-top-60"}`}>
                    {links}
                </ul>
                <button onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer'>
                    {open ? <X /> : <Menu />}
                </button>
                <h3 className='font-bold '>myNavBar</h3>
            </div>
            <ul className='hidden lg:flex items-center justify-center gap-3'>
                {links}
            </ul>
            <button type='button' className='navButton'>Login</button>
        </nav>
    );
};

export default NavbarOne;