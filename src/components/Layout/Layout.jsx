import {Outlet, useLocation} from "react-router-dom";
import "./Layout.scss";
import Navigation from "../Navigation/Navigation";
import PageHeader from "../PageHeader/PageHeader";

const Layout = () => {
    const location = useLocation();

    const currentPage = {
        "/": "home-page",
        "/destination": "destination-page",
        "/crew": "crew-page",
        "/technology": "technology-page",
    }[location.pathname] || "home-page";

    return (
        <div className={`page-container ${currentPage}`}>
            <Navigation />
            <PageHeader />
            <Outlet/>
        </div>
    )
}

export default Layout;