import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar-title">
                Dashboard
            </div>

            <nav>

                <Link to="/dashboard">Home</Link>
                <Link to="/types">Tipos</Link>
                <Link to="/presentations">Apresentações</Link>
                <Link to="/users">Usuários</Link>
                <Link to="/ranking">Ranking</Link>

            </nav>

        </div>
    );
}