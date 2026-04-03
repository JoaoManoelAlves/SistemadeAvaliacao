import { Outlet } from "react-router-dom";
import TopNav from "../components/nav/TopNav";
import "./DashboardLayout.css";

export default function DashboardLayout() {
    return (
        <div className="dashboard-container">

            <h1 className="dashboard-title">
                Dashboard de Apresentações {/*Resolvi a parte dos modais */}
            </h1>

            <TopNav />

            <div className="dashboard-content">
                <Outlet />
            </div>

        </div>
    );
}