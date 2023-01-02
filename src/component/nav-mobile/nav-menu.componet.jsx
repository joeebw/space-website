import StarLogo from "../../../public/assets/star.svg"
import { Link } from "react-router-dom";
import NavLinksMenu from "../nav-links-menu/nav-links.component";

const NavMenu = ({toggleNav}) => {
    return(
        <div className="relative flex justify-between items-center">
            <div onClick={() => toggleNav(false)}>
               <img src={StarLogo} className=" w-10" />
            </div>
            
            <div className="md:hidden" onClick={() => toggleNav(true)}>
                <i className=" text-3xl text-white fa-solid fa-bars"></i>
            </div>

            <div className="hidden md:block absolute z-30 lg:w-[25%] xl:w-[29%]  lg:h-[0.5px] lg:left-24 bg-slate-50"></div>

            <NavLinksMenu/>
        </div>
    )
}

export default NavMenu;