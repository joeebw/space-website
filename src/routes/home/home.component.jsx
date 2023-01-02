import { Fragment } from "react";
import Explore from "../../../public/assets/img1.png"

const Home = () => {
    return(
        <Fragment>
            <section className=" mt-14 text-white md:mt-64">
                <div className="container mx-auto md:flex md:pr-4">
                    <div className=" flex flex-col gap-7 text-center md:text-left md:pr-10 lg:pr-72 xl:pr-96">
                        <h1 className="md:text-2xl">SO, YOU WANT TO TRAVEL TO</h1>
                        <span className="text-7xl md:text-9xl overflow-y-hidden ">SPACE</span> 
                        <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="flex justify-center mt-20 md:mt-10 md:w-full"><img src={Explore} className="md:w-[220px] lg:w-[260px] h-auto" alt="" /></div>
                </div>
            </section>
        </Fragment>
        )
}

export default Home;