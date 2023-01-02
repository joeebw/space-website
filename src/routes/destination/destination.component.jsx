import { Fragment, useEffect, useState } from "react";
import { destinationDescription } from "../../objects/description";

const Destination = () => {
    const {moon,mars,europa, titan} = destinationDescription;
    const [currenPlanet, setCurrentPlanet] = useState(moon);
    const {name,img,description,distance,timeTravel } = currenPlanet;
    const animatedEffect = 'after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:animate-appear-animated after:bg-gray-400'; 

    const selectPlanet = (planet) => {
        setCurrentPlanet(planet);
        
    }

    return(
        <Fragment>
            <section>
               <div className="container mx-auto flex flex-col items-center pt-6 pb-20 md:flex-row md:mt-12">

                   <div className="flex flex-col item-center md:w-1/2 ">
                        <h3 className="md:text-2xl"><span className=" text-gray-500 pr-3">01</span>PICK YOUR DESTINATION</h3>
                        <div className="pt-7 self-center md:pt-16 "><img className="md:w-[300px]" src={`${img}`}></img></div>
                    </div> 

                    <div className="md:flex md:w-1/2 md:flex-col md:items-start md:pt-10 xl:pr-40 2xl:pr-60">
                        <div className="flex justify-center items-center mt-8 h-10">
                            <ul className="flex gap-7 text-sm " id="menuPlanet">
                                <li className={`relative cursor-pointer ${name === 'MOON' ? animatedEffect : '' }`} onClick={() => selectPlanet(moon)}>MOON</li>
                                <li className={`relative cursor-pointer ${name === 'MARS' ? animatedEffect : '' }`} onClick={() => selectPlanet(mars)}>MARS</li>
                                <li className={`relative cursor-pointer ${name === 'EUROPA' ? animatedEffect : '' }`} onClick={() => selectPlanet(europa)}>EUROPA</li>
                                <li className={`relative cursor-pointer ${name === 'TITAN' ? animatedEffect : '' }`} onClick={() => selectPlanet(titan)}>TITAN</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2 text-center mt-6 md:gap-4 md:mb-6">
                            <h4 className="text-6xl overflow-y-hidden md:text-start lg:text-9xl">{name}</h4>
                            <p className="text-sm md:text-start">{description}</p>
                        </div>
                        <div className="mt-3 bg-white opacity-50 w-full h-[1px]"></div>
                        
                        <div className="mt-3 text-center md:flex md:gap-36 md:mt-6">
                            <div className="flex flex-col gap-2 mb-5">
                                <p className="text-sm">AVG. DISTANCE</p>
                                <p className="text-3xl">{distance}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm">EST. TRAVEL TIME</p>
                                <p className="text-3xl">{timeTravel}</p>
                            </div>
                        </div>
                    </div> 
                    
               </div>
            </section>
        </Fragment>
    )
}

export default Destination;