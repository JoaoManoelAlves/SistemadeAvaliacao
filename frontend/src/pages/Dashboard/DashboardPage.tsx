import { Link } from "react-router-dom";
import './DashBoardCSS.css'

export default function DashBoard() {
    return (
        <>
        
            <div className="Corpo">
                <div className="Principal">
                    <div className="Coluna1">
                    <h1>DASHBOARD</h1>
                        <div className="card">
                            <h1>Titulo 1</h1>
                            <p>Pequena descrição</p>
                            <button><Link to={'/First'}>Cliquee para ver mais</Link></button>
                        </div>
                            <div className="card">
                            <h1>Titulo 2</h1>
                            <p>Pequena descrição</p>
                            <button><Link to={'/Second'}>Cliquee para ver mais</Link></button>
                        </div>
                    </div>
                    <div className="Coluna2">
                        <div className="card">
                            <h1>Titulo 3</h1>
                            <p>Pequena descrição</p>
                            <button><Link to={'/Third'}>Cliquee para ver mais</Link></button>
                        </div>
                        <div className="card">
                            <h1>Titulo 4</h1>
                            <p>Pequena descrição</p>
                            <button><Link to={'/Four'}>Cliquee para ver mais</Link></button>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
}
 