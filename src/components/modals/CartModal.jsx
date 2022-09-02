import "./cartModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartModal = ({ isOpen, closeModal }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <button className="closeModal" onClick={closeModal}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <div className="modal__dialog__container">
          <h4 className="title">Carrito</h4>
          <hr />
          <div className="body">body</div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
