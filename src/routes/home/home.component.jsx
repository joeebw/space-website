import { Fragment } from "react";
import Explore from "../../../public/assets/img1.png"

const Home = () => {
    return(
        <Fragment>
            <section className=" mt-14 text-white">
                <div className="container mx-auto">
                    <div className=" flex flex-col gap-7 text-center ">
                        <h1 className="">SO, YOU WANT TO TRAVEL TO</h1>
                        <span className="  text-7xl overflow-y-hidden ">SPACE</span> 
                        <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="flex justify-center mt-20"><img src={Explore} alt="" /></div>
                </div>
            </section>
        </Fragment>
        )
}

export default Home;