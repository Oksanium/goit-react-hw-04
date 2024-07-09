import s from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ modalIsOpen, setModalIsOpen, picObj }) {
  Modal.setAppElement("#root");

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <img src={picObj.largeImageURL} alt={picObj.tags} />
    </Modal>
  );
}
