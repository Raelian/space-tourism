import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "../../utils/fadeVariants";
import "./Destination.scss";
import moonImage from "/images/destination/image-moon.png";
import marsImage from "/images/destination/image-mars.png";
import europaImage from "/images/destination/image-europa.png";
import titanImage from "/images/destination/image-titan.png";

const planets = [
    {
        name: "moon",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        time: "3 DAYS",
        image: moonImage,
    },
    {
        name: "mars",
        description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 MIL KM",
        time: "9 MONTHS",
        image: marsImage,
    },
    {
        name: "europa",
        description: "The smallest of the fourr Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With and icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabing.",
        distance: "628 MIL. KM",
        time: "3 YEARS",
        image: europaImage,
    },
    {
        name: "titan",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        time: "7 YEARS",
        image: titanImage,
    },
]

const Destination = () => {

    const [selectedPlanet, setSelectedPlanet] = useState(0);

    const changePlanet = (index) => {
        setSelectedPlanet(index);
    }

    return (
        <main className="destination-container">
            <AnimatePresence mode="wait">
                <div className="planet-img-wrapper">
                    <motion.img 
                        src={planets[selectedPlanet].image} 
                        alt={planets[selectedPlanet].name} 
                        className="planet-img" 
                        key={planets[selectedPlanet].image}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                    />
                </div>
            </AnimatePresence>
            <div className="description-container">
                <ul className="planet-nav">
                    {planets.map((planet, index) =>(
                        <li key={planet.name}>
                            <button onClick={() => changePlanet(index)} className={selectedPlanet === index ? "active" : ""}>
                                {planet.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={planets[selectedPlanet].name}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                    >
                        <h2>{planets[selectedPlanet].name}</h2>
                        <p className="planet-description">{planets[selectedPlanet].description}</p>
                        <div className="planet-stats-container">
                            <p className="distance-text">avg. distance</p>
                            <p className="distance-planet">{planets[selectedPlanet].distance}</p>
                            <p className="time-text">est. travel time</p>
                            <p className="time-planet">{planets[selectedPlanet].time}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>  
            </div>
        </main>
    )
}

export default Destination;