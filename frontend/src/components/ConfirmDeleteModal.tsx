import './ConfirmDeleteModal.css'

interface Props {
    isOpen: boolean;
    title: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function ConfirmDeleteModal({
    isOpen,
    title,
    onCancel,
    onConfirm
}: Props) {

    if (!isOpen) return null;

    return (

        <div className="confirm-overlay">

            <div className="confirm-modal">

                <h3>Excluir Tipo</h3>

                <p>
                    Tem certeza que deseja excluir
                    <strong> {title} </strong>?
                </p>

                <div className="confirm-buttons">

                    <button
                        className="cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    <button
                        className="delete"
                        onClick={onConfirm}
                    >
                        Excluir
                    </button>

                </div>

            </div>

        </div>
    );
}