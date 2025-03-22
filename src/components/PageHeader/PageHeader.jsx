import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import "./PageHeader.scss";

const currentPageIndex = {
    "/": 0,
    "/destination": 1,
    "/crew": 2,
    "/technology": 3,
};

const pageHeaders = [
    {
        id: "",
        title: "",
    },
    {
        id: "01",
        title: "pick your destination",
    },
    {
        id: "02",
        title: "meet your crew",
    },
    {
        id: "03",
        title: "space launch 101",
    },
    
]

const PageHeader = () => {
    const location = useLocation();
    const [currentHeaderIndex, setCurrentHeaderIndex] = useState(currentPageIndex[location.pathname] || 0);

    useEffect(() => {
        setCurrentHeaderIndex(currentPageIndex[location.pathname] || 0);
    }, [location.pathname]);

    return (
        <h3 className={`page-header ${currentHeaderIndex == 0 ? "inactive" : ""}`}>
            <span>{pageHeaders[currentHeaderIndex].id}</span>
            {pageHeaders[currentHeaderIndex].title}
        </h3>
    )
}

export default PageHeader;