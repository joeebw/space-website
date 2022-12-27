import { Link } from "react-router-dom";

const NavMenuMobile = ({toggleNav, navMobile})  => {
    return(
        <div className={` absolute z-50 top-0 w-4/6 h-screen bg-[#80808066] backdrop-blur-xl shadow-2xl transition duration-700 ease-in-out ${navMobile}`}>
            <div className="container px-8">
                <div onClick={() => toggleNav(false)} className="flex justify-end pt-8 text-3xl"><i className="fa-solid fa-xmark text-gray-500"></i></div>

                <div className=" mt-20">
                    <ul className="flex flex-col gap-8 text-white" onClick={() => toggleNav(false)}>
                       <Link to='/'><li><span className=" font-semibold pr-2">00</span>HOME </li></Link> 
                       <Link to='/destination'><li><span className=" font-semibold pr-2">01</span>DESTINATION</li> </Link>
                        <Link to='/crew'><li><span className=" font-semibold pr-2">02</span>CREW </li></Link> 
                       <Link to='/technology'><li><span className=" font-semibold pr-2">03</span>TECHNOLOGY </li></Link> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenuMobile;