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
        <section>
            <div className="container mx-auto flex flex-col items-center pt-6 pb-20">
                <h3><span className=" text-gray-500 pr-3">02</span>MEET YOUR CREW</h3>
                <div className="pt-8"><img src={img}></img></div>

                <div className="flex gap-6 my-9">
                    <div className={`w-3 h-3 rounded-full ${currentMember === douglas ? 'bg-white' : "bg-gray-500" }` } onClick={() => changeMember(douglas)}></div>
                    <div className={`w-3 h-3 rounded-full ${currentMember === mark ? 'bg-white' : "bg-gray-500" } ` } onClick={() => changeMember(mark)}></div>
                    <div className={`w-3 h-3 rounded-full ${currentMember === victor ? 'bg-white' : "bg-gray-500" } ` } onClick={() => changeMember(victor)}></div>
                    <div className={`w-3 h-3 rounded-full ${currentMember === anousheh ? 'bg-white' : "bg-gray-500" }` }  onClick={() => changeMember(anousheh)}></div>
                </div>

                <div className="text-center">
                    <p className="text-lg text-gray-400">{field}</p>
                    <h3 className="mt-1 mb-4 text-2xl font-normal tracking-wide">{name}</h3>
                    <p className="">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default Crew;