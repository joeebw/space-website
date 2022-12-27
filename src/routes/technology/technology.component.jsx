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
        <section>
            <div className="container mx-auto flex flex-col items-center pt-6 pb-20">
                <h3><span className=" text-gray-500 pr-3">03</span>SPACE LAUNCH 101</h3>
                <div className="pt-8"><img src={img}></img></div>

                <div className="flex gap-4 my-9">
                    <div className={`py-2 px-4 rounded-full border border-white ${currentlaunch === vehicle ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(vehicle) }>1</div>
                    <div className={`py-2 px-4 rounded-full border border-white ${currentlaunch === spaceport ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(spaceport) }>2</div>
                    <div className={`py-2 px-4 rounded-full border border-white ${currentlaunch === capsule ? 'text-black bg-white' : 'text-white'}` } onClick={() => changeLaunch(capsule) }>3</div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-400">THE TERMINOLOGY...</p>
                    <h3 className="mt-1 mb-4 text-2xl font-normal tracking-wide">{title}</h3>
                    <p className="">{description}</p>
                </div>
            </div>
    </section>
    )
}

export default Technology;