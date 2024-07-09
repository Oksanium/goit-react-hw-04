import s from "./LoadMore.module.css";

export default function LoadMore({ setPage, page }) {
  return (
    <button
      className={s.loadBtn}
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Load More
    </button>
  );
}
