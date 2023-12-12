import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import NavHeader from './NavHeader';
import Navlinks from './Navlinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='-translate-y-7'>
            <NavHeader setOpen={setOpen}/>
            <Navlinks/>
            <MobileMenu open={open} setOpen={setOpen}/>
        </nav>
    );
};

export default Navbar;