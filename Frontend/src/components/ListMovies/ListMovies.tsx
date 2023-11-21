import { useSelector } from "react-redux";
import FavoriteMovie from "./FavoriteMovie/FavoriteMovie";
import styles from "./List.movies.module.scss";
import { IMovie } from "../../interfaces/IMove";
import { RootState } from "../../store";

const ListMovies = () => {
  const favorites = useSelector((state: RootState) => {
    const favoritesReduce = state.favorites.reduce(
      (itens: IMovie[], favoriteItens: IMovie) => {
        const item = state.favorites.find(
          (item) => item.id === favoriteItens.id
        );
        itens.push({
          ...item,
          id: favoriteItens.id,
          poster: favoriteItens.poster,
          title: favoriteItens.title,
        });
        return itens;
      },
      []
    );
    return favoritesReduce;
  });

  return (
    <>
      <h1 className={styles.title}>
        {favorites.length > 0
          ? "Filmes Favoritos"
          : "Você não possui filmes salvos"}
      </h1>
      <ul className={styles.movieList}>
        {favorites.map((favorite) => {
          return (
            <FavoriteMovie
              key={favorite.id}
              id={favorite.id}
              poster={favorite.poster}
              title={favorite.title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ListMovies;
