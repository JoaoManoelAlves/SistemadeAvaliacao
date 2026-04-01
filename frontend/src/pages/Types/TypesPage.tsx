import "./TypesPage.css";

interface Subtype {
    name: string;
    description: string;
}

interface Type {
    title: string;
    subtypes: Subtype[];
}

export default function TypesPage() {

    // dados mockados (depois vem do backend)
    const types: Type[] = [
        {
            title: "Técnica",
            subtypes: [
                {
                    name: "Backend",
                    description: "Desenvolvimento de servidores e APIs"
                },
                {
                    name: "Frontend",
                    description: "Desenvolvimento de interfaces"
                }
            ]
        },
        {
            title: "Design",
            subtypes: [
                {
                    name: "UI/UX",
                    description: "Design de interfaces e experiência do usuário"
                },
                {
                    name: "Gráfico",
                    description: "Design gráfico e identidade visual"
                }
            ]
        }
    ];

    return (
        <div className="types-container">

            <div className="types-header">

                <h2>Tipos de Apresentações</h2>

                <button className="add-button">
                    Adicionar Tipo
                </button>

            </div>

            {types.map((type, index) => (

                <div key={index} className="type-card">

                    <div className="type-card-header">

                        <h3>{type.title}</h3>

                        <div className="type-actions">
                            <button className="edit">Editar</button>
                            <button className="delete">Excluir</button>
                        </div>

                    </div>

                    <div className="subtypes">

                        {type.subtypes.map((sub, i) => (
                            <div key={i} className="subtype">

                                <strong>{sub.name}</strong>
                                <p>{sub.description}</p>

                            </div>
                        ))}

                    </div>

                </div>

            ))}

        </div>
    );
}