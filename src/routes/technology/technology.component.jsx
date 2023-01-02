import { useState } from "react";
import { launchDescription } from "../../objects/description";

const Technology = () => {
    const {capsule, spaceport, vehicle} = launchDescription;
    const [currentlaunch, setCurrentLaunch] = useState(vehicle);
    const {description, img, title} = currentlaunch;

    const changeLaunch = (launch) => {
        setCurrentLaunch(launch);
    }

    return(
        <section className="mt-10 md:mt-20 md:flex md:flex-col md:gap-5">
            <h3 className="text-center md:text-start md:text-xl"><span className=" text-gray-500 pr-3">03</span>SPACE LAUNCH 101</h3>
            
            <div className="flex flex-col items-center pb-20  md:flex-row-reverse md:gap-7">
                <div className="pt-8 md:w-5/12"><img className="md:w-[500px]" src={img}></img></div>

                <div className="md:flex md:flex-row md:w-7/12">
                    <div className="flex justify-center gap-4 my-9 md:flex-col md:w-1/6">
                        <div className={`py-2 px-4 rounded-full border self-start cursor-pointer border-white md:py-4 md:px-6 ${currentlaunch === vehicle ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(vehicle) }>1</div>
                        <div className={`py-2 px-4 rounded-full border self-start cursor-pointer border-white md:py-4 md:px-6 ${currentlaunch === spaceport ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(spaceport) }>2</div>
                        <div className={`py-2 px-4 rounded-full border self-start cursor-pointer border-white md:py-4 md:px-6 ${currentlaunch === capsule ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(capsule) }>3</div>
                    </div>

                    <div className="text-center md:w-5/6 md:text-start">
                        <p className="text-sm text-gray-400 md:text-lg">THE TERMINOLOGY...</p>
                        <h3 className="mt-1 mb-4 text-2xl font-normal tracking-wide md:text-4xl md:overflow-y-hidden">{title}</h3>
                        <p className="md:text-lg md:leading-loose xl:pr-32">{description}</p>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Technology;