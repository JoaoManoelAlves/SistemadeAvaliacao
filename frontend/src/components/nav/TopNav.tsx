import { NavLink } from "react-router-dom";
import "./TopNav.css";

export default function TopNav() {
    return (
        <div className="topnav">

            <NavLink to="/types"> Tipos</NavLink>

            <NavLink to="/presentations"> Apresentações</NavLink>

            <NavLink to="/users"> Usuários </NavLink>

            <NavLink to="/ranking"> Ranking</NavLink>

        </div>
    );
}