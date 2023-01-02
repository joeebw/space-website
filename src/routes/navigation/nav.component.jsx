import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarMobile from "../../component/nav-mobile/nav-bar.component";
import NavMenu from "../../component/nav-mobile/nav-menu.componet";




const Navigation = () => {
    const [navMobile, setNavMobile] = useState('hidden');

    const toggleNavBurguer = (action) => {
       if(action === true) return setNavMobile('right-0');
       setNavMobile('hidden');
        
    }


    return(
        <Fragment>
            <nav className="mt-6">
               <NavMenu toggleNav={toggleNavBurguer}/>
               <NavBarMobile toggleNav={toggleNavBurguer} navMobile={navMobile}/>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;