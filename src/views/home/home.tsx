import React, { useEffect } from "react";
import { CharacterCard } from "../../components/characterCard";
import { useCharacter } from "../../hooks/character.hook";
import { usePaginator } from "../../hooks/paginator";

import styles from "./home.module.css";

export const Home = () => {
  const [getCharacter, characters, charactersError, isLoading] = useCharacter();
  const { page, nextPage, previousPage } = usePaginator(1);
  useEffect(() => {
    getCharacter(page);
  }, [getCharacter, page]);

  if (isLoading) {
    return (
      <div>
        <span>Is loading...</span>
      </div>
    );
  }
  if (!!charactersError) {
    return (
      <div>
        <span>{charactersError}</span>
      </div>
    );
  }
  return (
    <div>
      <h1>Rick and Morty</h1>
      <section className={styles.grid}>
        {characters.map((item) => (
          <CharacterCard key={item.id} {...item} />
        ))}
      </section>
      <div className={styles.paginatorContainer}>
        <button onClick={previousPage}>Previous</button>
        <span className="page">{page}</span>
        <button onClick={nextPage}>Previous</button>
      </div>
    </div>
  );
};
