import { useState } from "react";
import { crewDescription } from "../../objects/description";

const Crew = () => {
    const {anousheh, douglas, mark, victor} = crewDescription;
    const [currentMember, setCurrentMember] = useState(douglas);
    const {name, img, field, description} = currentMember;

    const changeMember = (member) => {
        setCurrentMember(member);
    }



    return(
        <section className="flex flex-col mt-8 ">
            <h3 className="container mx-auto text-center md:text-left md:text-xl md:pt-16"><span className=" text-gray-500 pr-3">02</span>MEET YOUR CREW</h3>
            
            <div className="container mx-auto pb-20 md:pb-0 md:mt-6 md:flex md:items-end">
                
                <div className="flex flex-col items-center md:flex-row-reverse xl:gap-36">
                    <div className="pt-8 md:w-1/2"><img className="lg:h-[500px]" src={img}></img></div>

                    <div className="flex flex-col items-center md:items-start md:flex-col-reverse lg:gap-28 md:w-1/2">
                        <div className="flex gap-6 my-9">
                            <div className={`w-3 h-3 rounded-full cursor-pointer ${currentMember === douglas ? 'bg-white' : "bg-gray-500" }` } onClick={() => changeMember(douglas)}></div>
                            <div className={`w-3 h-3 rounded-full cursor-pointer ${currentMember === mark ? 'bg-white' : "bg-gray-500" } ` } onClick={() => changeMember(mark)}></div>
                            <div className={`w-3 h-3 rounded-full cursor-pointer ${currentMember === victor ? 'bg-white' : "bg-gray-500" } ` } onClick={() => changeMember(victor)}></div>
                            <div className={`w-3 h-3 rounded-full cursor-pointer ${currentMember === anousheh ? 'bg-white' : "bg-gray-500" }` }  onClick={() => changeMember(anousheh)}></div>
                        </div>

                        <div className="text-center md:flex md:flex-col md:gap-2 md:text-start">
                            <p className="text-lg text-gray-400 lg:text-3xl">{field}</p>
                            <h3 className="mt-1 mb-4 font-normal text-2xl tracking-wide overflow-y-hidden lg:text-4xl">{name}</h3>
                            <p className="">{description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Crew;