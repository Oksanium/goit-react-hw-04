import s from "./Header.module.css";

export default function Header({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input type="text" autoComplete="off" autoFocus />
      <button type="submit" className={s.searchBtn}>
        search
      </button>
    </form>
  );
}
