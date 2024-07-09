import { useState } from "react";
import s from "./Gallery.module.css";
import Card from "../Card/Card";
import { nanoid } from "nanoid";

export default function Gallery({ photos, setModalIsOpen, setPicObj }) {
  return (
    <>
      <ul className={s.gallery}>
        {photos.map((picObj) => {
          return (
            <li key={nanoid()} className={s.card}>
              <Card
                photos={photos}
                setModalIsOpen={setModalIsOpen}
                picObj={picObj}
                setPicObj={setPicObj}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
