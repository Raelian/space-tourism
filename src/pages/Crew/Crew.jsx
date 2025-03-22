import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "../../utils/fadeVariants";
import "./Crew.scss";
import douglasImage from "/images/crew/image-douglas-hurley.png";
import markImage from "/images/crew/image-mark-shuttleworth.png";
import victorImage from "/images/crew/image-victor-glover.png";
import anousheshImage from "/images/crew/image-anousheh-ansari.png";

const team = [
    {
        name: "douglas hurley",
        title: "commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: douglasImage,
    },
    {
        name: "mark shuttleworth",
        title: "mission specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: markImage,
    },
    {
        name: "victor glover",
        title: "pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the international Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image: victorImage,
    },
    {
        name: "anousheh ansari",
        title: "flight engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image: anousheshImage,
    },
]

const Crew = () => {
    const [crewMember, setCrewMember] = useState(0);

    const changeCrewMember = (index) => {
        setCrewMember(index);
    }

    return (
        <div className="crew-container">
            <div className="img-wrapper">
                <AnimatePresence mode="wait">
                    <motion.img 
                        src={team[crewMember].image} 
                        alt={team[crewMember].name} 
                        className="crew-img"
                        key={team[crewMember].image}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                    />
                </AnimatePresence>
            </div>
            <ul className="crew-nav">
                {team.map((crew, index) => (
                    <li key={crew.name}>
                        <button onClick={() => changeCrewMember(index)} className={crewMember === index ? "active" : ""}></button>
                    </li>
                ))}
            </ul>
            <AnimatePresence mode="wait">
                <motion.div 
                    className="crew-details"
                    key={team[crewMember].title}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeVariants}
                >
                    <p className="crew-title">{team[crewMember].title}</p>
                    <p className="crew-name">{team[crewMember].name}</p>
                    <p className="crew-bio">{team[crewMember].bio}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Crew;