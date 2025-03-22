import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const navigate = useNavigate();

    const exploreRandomPage = () => {
        const pages = [
            "/destination",
            "/crew",
            "/technology",
        ];
    
        const randomPage = pages[Math.floor(Math.random() * pages.length)];

        navigate(randomPage);
    };

    return (
        <main className="home-container">
            <div className="home-text">
                <p className="first-text">so, you want to travel to</p>
                <h2>space</h2>
                <p className="second-text">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the 
                    edge of it. Well sit back, and relax because we'll give
                    you a truly out of this world experience!
                </p>
            </div>
            <button className="explore-btn" onClick={exploreRandomPage}>
                <span className="border-btn"></span>
                explore
            </button>
        </main>
    )
}

export default Home;