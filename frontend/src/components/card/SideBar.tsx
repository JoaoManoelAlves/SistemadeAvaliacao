import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        //Era uma barra de mavegação do lado, mas substitui pelo o outro que ta na pasta nav, pode apagar, ao menos eu acho que não vai quebrar nada
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