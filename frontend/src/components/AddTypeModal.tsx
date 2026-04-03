import { useState, useEffect } from "react";
import "./AddTypeModal.css";

interface Subtype {
    name: string;
    description: string;
}

interface Type {
    id: string;
    title: string;
    subtypes: Subtype[];
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAddType: (type: Type) => void;
    typeToEdit: Type | null;
}

export default function AddTypeModal({
    isOpen,
    onClose,
    onAddType,
    typeToEdit
}: Props) {

    const [title, setTitle] = useState("");
    const [subtypes, setSubtypes] = useState<Subtype[]>([
        { name: "", description: "" }
    ]);
    const [error, setError] = useState("");

    useEffect(() => {

        if (typeToEdit) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(typeToEdit.title);
            setSubtypes(typeToEdit.subtypes);

        }   else {

            setTitle("");
            setSubtypes([
                { name: "", description: "" }
            ]);

        }


    }, [typeToEdit]);

    if (!isOpen) return null;



    function addSubtype() {

        setSubtypes([
            ...subtypes,
            { name: "", description: "" }
        ]);

    }



    function updateSubtype(
        index: number,
        field: string,
        value: string
    ) {

        const updated = [...subtypes];

        updated[index] = {
            ...updated[index],
            [field]: value
        };

        setSubtypes(updated);
    }



    function handleSubmit() {
        if (title.trim() === "") {
            setError("Título é obrigatório");
            return;
        }

        const hasEmptySubtype = subtypes.some(
            sub =>
                sub.name.trim() === "" ||
                sub.description.trim() === ""
        );

        if (hasEmptySubtype) {
            setError("Preencha todos os subtipos e descrições");
            return;
        }

        setError("");

        const newType: Type = {
            id: typeToEdit?.id || crypto.randomUUID(),
            title,
            subtypes
        };

        onAddType(newType);

        setTitle("");

        setSubtypes([
            { name: "", description: "" }
        ]);
    }


    
    return (

        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>Adicionar Tipo</h2>

                    <button
                        className="close"
                        onClick={onClose}
                    >
                        X   
                    </button>

                </div>

                <div className="modal-body">
                        {error && (
                            <p className="error">
                            {error}
                            </p>
                        )}

                    <label>Título do Tipo</label>
                    <input
                        type="text"
                        placeholder="Título do tipo"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    <div className="subtype-header">

                        <label>Subtipos</label>

                        <button
                            className="add-subtype"
                            onClick={addSubtype}
                        >
                            + Adicionar Subtipo
                        </button>

                    </div>

                    {subtypes.map((sub, index) => (

                        <div
                            key={index}
                            className="subtype-box"
                        >

                            <p>Subtipo {index + 1}</p>

                            <input
                                type="text"
                                placeholder="Nome do subtipo"
                                value={sub.name}
                                onChange={(e) =>
                                    updateSubtype(
                                        index,
                                        "name",
                                        e.target.value
                                    )
                                }
                            />

                            <textarea
                                placeholder="Descrição"
                                value={sub.description}
                                onChange={(e) =>
                                    updateSubtype(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    ))}

                </div>

                <div className="modal-footer">

                    <button
                        className="cancel"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className="add"
                        onClick={handleSubmit}
                    >
                        Adicionar
                    </button>

                </div>

            </div>

        </div>
    );
}