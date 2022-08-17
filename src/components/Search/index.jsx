import style from "./search.module.scss";
import Close from "../../assets/img/close.svg";

function Search({ searchValue, setSearchValue }) {
  return (
    <>
      <div className={style.wrapper}>
        <input
          className={style.root}
          type="text"
          placeholder="Поиск пиццы ..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className={style.icon}
            src={Close}
            alt="close"
          />
        )}
      </div>
    </>
  );
}

export default Search;
