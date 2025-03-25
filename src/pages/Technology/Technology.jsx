import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import { fadeVariants } from "../../utils/fadeVariants";
import "./Technology.scss";
import vehicleLandscape from "/images/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "/images/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "/images/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "/images/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "/images/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "/images/technology/image-space-capsule-portrait.jpg";

const technology = [
    {
        name: "launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
        imageLandscape: vehicleLandscape,
        imagePortrait: vehiclePortrait,
    },
    {
        name: "spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
        imageLandscape: spaceportLandscape,
        imagePortrait: spaceportPortrait,
    },
    {
        name: "space capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imageLandscape: spaceCapsuleLandscape,
        imagePortrait: spaceCapsulePortrait,
    },
]

const Technology = () => {
    const [tech, setTech] = useState(0);
    const [loading, setLoading] = useState(true);
    const [resizedImage, setResizedImage] = useState(technology[tech].imageLandscape);

    const changeTechIndex = (index) => {
        setTech(index);
    }

    useEffect(() => {
        setLoading(true);
        const currentTech = technology[tech];
        const newImage = window.innerWidth >= 1024 ? currentTech.imagePortrait : currentTech.imageLandscape;

        const img = new Image();
        img.src = newImage;
        img.onload = () => {
            setResizedImage(newImage);
            setLoading(false);
        };
    }, [tech]);  

    return (
        <div className="technology-container">
            <AnimatePresence mode="wait">
                <motion.img 
                    src={resizedImage} 
                    alt={technology[tech].name} 
                    className="technology-img"
                    key={tech}
                    initial={{opacity: 0}}
                    animate={{opacity: loading ? 0.5 : 1}}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5}}
                />
            </AnimatePresence>
            <ul className="technology-nav">
                {technology.map((techItem, index) => (
                    <li key={techItem.name}>
                        <button onClick={() => changeTechIndex(index)} className={tech === index ? "active" : ""}>{index + 1}</button>
                    </li>
                ))}
            </ul>
            <AnimatePresence mode="wait">
                <motion.div 
                    className="technology-description"
                    key={technology[tech].name}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeVariants}
                >
                    <p className="terminology">the terminology...</p>
                    <h4 className="name">{technology[tech].name}</h4>
                    <p className="summary">{technology[tech].description}</p>
                </motion.div>
            </AnimatePresence>  
        </div>
    )
}

export default Technology;