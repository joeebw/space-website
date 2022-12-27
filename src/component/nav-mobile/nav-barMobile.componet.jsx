import StarLogo from "../../../public/assets/star.svg"
import { Link } from "react-router-dom";

const NavBarMobile = ({toggleNav}) => {
    return(
        <div className="container mx-auto flex justify-between items-center">
            <div onClick={() => toggleNav(false)}>
                <Link to="/"><img src={StarLogo} className=" w-10" /></Link>
            </div>
            <div onClick={() => toggleNav(true)}>
                <i className=" text-3xl text-white fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default NavBarMobile;