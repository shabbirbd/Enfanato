import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import NavHeader from './NavHeader';
import Navlinks from './Navlinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <NavHeader setOpen={setOpen}/>
            <Navlinks/>
            <MobileMenu open={open} setOpen={setOpen}/>
        </nav>
    );
};

export default Navbar;