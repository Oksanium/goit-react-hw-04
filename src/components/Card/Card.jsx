import s from "./Card.module.css";

export default function Card({ setModalIsOpen, imgSet, picObj, setPicObj }) {
  function openModal() {
    setPicObj(picObj);
    setModalIsOpen(true);
  }
  return (
    <div className={s.imgWrapper} onClick={openModal}>
      <img src={picObj.webformatURL} alt={picObj.tags} className={s.img} />
    </div>
  );
}
