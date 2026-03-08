import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navData = [
  {
    id: 1,
    path: "/",
    name: "Home"
  },
  {
    id: 2,
    path: "/about",
    name: "About"
  },
  {
    id: 3,
    path: "/services",
    name: "Services"
  },
  {
    id: 4,
    path: "/blog",
    name: "Blog"
  },
  {
    id: 5,
    path: "/contact",
    name: "Contact"
  }
];
const NavbarOne = () => {
    const [open, setOpen] = useState(false);
    // const links = (
    //     <>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Contact</li>
    //     </>
    // )
    const links= navData.map(singleLink=> <li key={singleLink.id} className='singleNavLink'>
        <a href={singleLink.path}>
           {singleLink.name}
        </a>
    </li>)
    return (
        <nav className="navbar bg-[#b2e32a80] shadow-sm z-10 flex justify-between padding py-3">
            <div className='flex gap-2 items-center relative'>
                <ul className={`navLinks ${open ? "flex flex-col gap-2 top-11" : "-top-80"}`}>
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