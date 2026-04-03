import { useState } from "react";
import AddTypeModal from "../../components/AddTypeModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import "./TypesPage.css";

interface Subtype {
    name: string;
    description: string;
}

interface Type {
    id: string;
    title: string;
    subtypes: Subtype[];
}

export default function TypesPage() {

    const [types, setTypes] = useState<Type[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typeToEdit, setTypeToEdit] = useState<Type | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [typeToDelete, setTypeToDelete] = useState<Type | null>(null);

    function handleEditType(type: Type) {

        setTypeToEdit(type);

        setIsModalOpen(true);
    }

    function handleSaveType(newType: Type) {

        if (typeToEdit) {

            const updatedTypes = types.map(type =>
                type.id === typeToEdit.id
                    ? newType
                    : type
            );

            setTypes(updatedTypes);

            setTypeToEdit(null);

        } else {

            setTypes([...types, newType]);

        }

        setIsModalOpen(false);
    }
        function confirmDelete() {

        if (!typeToDelete) return;

        const updatedTypes = types.filter(
            type => type.id !== typeToDelete.id
        );

        setTypes(updatedTypes);

        setTypeToDelete(null);
        setIsDeleteModalOpen(false);
    }

    return (

        <div className="types-container">

            <div className="types-header">

                <h2>Tipos de Apresentações</h2>

                <button
                    className="add-button"
                    onClick={() => {
                        setTypeToEdit(null);
                        setIsModalOpen(true);
                    }}
                >
                    Adicionar Tipo
                </button>

            </div>

            {types.map((type) => (

                <div
                    key={type.id}
                    className="type-card"
                >

                    <div className="type-card-header">

                        <h3>{type.title}</h3>

                        <div className="type-actions">

                            <button
                                className="edit"
                                onClick={() => handleEditType(type)}
                            >
                                Editar
                            </button>

                            <button 
                                className="delete"
                                    onClick={() => {
                                        setTypeToDelete(type);
                                        setIsDeleteModalOpen(true);
                                    }}
                            >
                                Excluir
                            </button>

                        </div>

                    </div>

                    <div className="subtypes">

                        {type.subtypes.map((sub, i) => (

                            <div
                                key={i}
                                className="subtype"
                            >

                                <strong>{sub.name}</strong>

                                <p>{sub.description}</p>

                            </div>

                        ))}

                    </div>

                </div>

            ))}

            <AddTypeModal
                isOpen={isModalOpen}
                onClose={() => {
                        setIsModalOpen(false);
                        setTypeToEdit(null);
                    }}
                onAddType={handleSaveType}
                typeToEdit={typeToEdit}
            />
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                title={typeToDelete?.title || ""}
                onCancel={() => {
                        setIsDeleteModalOpen(false);
                        setTypeToDelete(null);
                    }}
                onConfirm={confirmDelete}
            />

        </div>
    );
}