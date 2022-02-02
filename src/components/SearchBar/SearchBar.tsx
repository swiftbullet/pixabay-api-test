import React, { useState } from "react";
import ICard from "../../interfaces/ICard";
import fetchData from "../../utils/fetchData";

import styles from "./SearchBar.module.css";

interface ISearchBar {
  setCards: React.Dispatch<React.SetStateAction<ICard[] | null>>;
}

export default function SearchBar({ setCards }: ISearchBar) {
  const [query, setQuery] = useState("");

  const setData = async () => {
    if (query.trim()) {
      const result = await fetchData(query);
      const data = result.map((obj: any) => {
        return {
          id: obj.id,
          url: obj.webformatURL,
        };
      });
      setCards(data);
    } else {
      setCards(null);
    }
  };

  const handleSubmit = async () => {
    await setData();
  };

  const handleEnterPressed = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      await setData();
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.search}
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnterPressed}
      />
      <input
        className={styles.submit}
        type="submit"
        value="Search"
        onClick={handleSubmit}
      />
    </div>
  );
}
