import React from 'react';
import iconblocks from '../../assets/iconblocks.png';
import iconcar from '../../assets/iconcar.png';
import icondoll from '../../assets/icondoll.png';
import icongun from '../../assets/icongun.png';
import iconpuzzel from '../../assets/iconpuzzel.png';
import iconrobot from '../../assets/iconrobot.png';
import iconspinner from '../../assets/iconspinner.png';
import iconteddy from '../../assets/iconteddy.png';

const Navlinks = () => {

    const navlinks = [
        {
            title: "Blocks",
            icon: iconblocks,
            link: "/blocks"
        },
        {
            title: "Teddys",
            icon: iconteddy,
            link: "/teddys"
        },
        {
            title: "Fidget Spinners",
            icon: iconspinner,
            link: "/spinners"
        },
        {
            title: "Water Guns",
            icon: icongun,
            link: "/waterguns"
        },
        {
            title: "Robots",
            icon: iconrobot,
            link: "/robots"
        },
        {
            title: "Puzzels",
            icon: iconpuzzel,
            link: "/puzzels"
        },
        {
            title: "Dolls",
            icon: icondoll,
            link: "/dolls"
        },
        {
            title: "Car toys",
            icon: iconcar,
            link: "/cartoys"
        }
    ]
    return (
        <div className='bg-white lg:py-7 py-5 relative -top-7 z-30 hidden lg:block'>
            <ul className='flex items-center justify-center space-x-8'>
                {
                    navlinks?.map((item, i)=>(
                        <li key={i}>
                            <a href={item.link} className='flex flex-col items-center space-y-3 text-sm font-semibold text-neutral-600 hover:text-elemental duration-300 '>
                                <img src={item.icon} alt="icon" className='h-10  object-cover'/>
                                <span>{item.title}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Navlinks;