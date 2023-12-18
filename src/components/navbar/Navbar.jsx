import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import NavHeader from './NavHeader';
import Navlinks from './Navlinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='-translate-y-7 relative z-40'>
            <NavHeader setOpen={setOpen}/>
            <Navlinks/>
            <MobileMenu open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Navbar;