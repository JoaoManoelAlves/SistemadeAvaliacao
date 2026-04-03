import { useState } from "react";
import AddTypeModal from "../../components/AddTypeModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import "./TypesPage.css";


//Lá nas outras telas tem só uma função basica q retorna um h1, so pra não deixar vazio, basicamente trabalhei com uma tela Types(Tipos)
//os campos dos cards estão obrigatórios, para mais informações, ta tudo no AddTypeModal, ta nos componentes
//enfim, ta faltando as outras telas, ainda ia criar os services pra preparar pra as api q nos for usar, mas eu nem sei quais exatamente vamos usar entao...
//A primeira página Types ta praticamente funcional já, falta o backend 

interface Subtype {
    name: string;
    description: string;
}

interface Type {
    id: string; //o id pra ser chamado, já que por nome podia bugar e na hora do BD confudir se fosse apenas o titulo
    title: string;
    subtypes: Subtype[];
}

export default function TypesPage() {

    const [types, setTypes] = useState<Type[]>([]);
    //Aqui defini a parte pra abrir o modal para editar, excluir e adicionar
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typeToEdit, setTypeToEdit] = useState<Type | null>(null); 
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [typeToDelete, setTypeToDelete] = useState<Type | null>(null);

    function handleEditType(type: Type) {

        setTypeToEdit(type);

        setIsModalOpen(true);
    }
        //Função que atualiza/edita os card
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
    } //Função criada pro modal de confirmar se apaga ou não.
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