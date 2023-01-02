import { useState } from "react";
import { Link } from "react-router-dom";
import { SetLocalStorage } from "../local-storage/local-storage.component";

const NavLinksMenu = () => {
    const [menuSection, setMenuSection] = SetLocalStorage('menuSection', 'home');
    const underlineMenuDecoration = <div className="absolute bottom-0 h-[3px] w-full bg-white"></div>;

    const selecSection = (section) => {
        setMenuSection(section);
    }

    return(
        <div className="hidden lg:px-2 md:flex justify-center items-center pl-2 md:w-4/5 lg:w-4/6 h-20 bg-[#2b272773] backdrop-blur-sm shadow-2xl">
            <ul className="flex h-full gap-14 lg:gap-20 md:text-xs xl:text-base text-white">
                <div className="relative flex">
                    <Link className="self-center" onClick={() => selecSection('home')}  to='/'><li><span className=" font-semibold pr-2">00</span>HOME </li></Link> 
                    {menuSection === 'home' ? underlineMenuDecoration : null}                            
                </div>
                <div className="relative flex">
                    <Link className="self-center" onClick={() => selecSection('destination')} to='/destination'><li><span className=" font-semibold pr-2">01</span>DESTINATION</li> </Link>
                    {menuSection === 'destination' ? underlineMenuDecoration : null} 
                </div>
                <div className="relative flex">
                    <Link className="self-center" onClick={() => selecSection('crew')} to='/crew'><li><span className=" font-semibold pr-2">02</span>CREW </li></Link> 
                    {menuSection === 'crew' ? underlineMenuDecoration : null} 
                </div >
                <div className="relative flex">
                    <Link className="self-center" onClick={() => selecSection('technology')} to='/technology'><li><span className=" font-semibold pr-2">03</span>TECHNOLOGY </li></Link> 
                    {menuSection === 'technology' ? underlineMenuDecoration : null} 
                </div>
            </ul>
        </div>
    )
}

export default NavLinksMenu;