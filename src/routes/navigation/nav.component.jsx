import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavMenuMobile from "../../component/nav-mobile/nav-menu.component";
import NavBarMobile from "../../component/nav-mobile/nav-barMobile.componet";



const Navigation = () => {
    const [navMobile, setNavMobile] = useState('hidden');

    const toggleNavBurguer = (action) => {
       if(action === true) return setNavMobile('right-0');
       setNavMobile('hidden');
        
    }


    return(
        <Fragment>
            <nav className="pt-6">
               <NavBarMobile toggleNav={toggleNavBurguer}/>
               <NavMenuMobile toggleNav={toggleNavBurguer} navMobile={navMobile}/>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;