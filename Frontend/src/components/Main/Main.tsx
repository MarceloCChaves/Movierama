import { useEffect, useState } from "react";
import API from "../../services/api";
import { IMovie } from "../../interfaces/IMove";
import styles from "./Main.module.scss";
import Input from "../Input/Input";
import Movies from "./Movies/Movies";

const Main = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  useEffect(() => {
    API.get("/movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1>{loading ? "Carregando filmes..." : "Filmes disponíveis"}</h1>
      <Input
        placeholder="Buscar filme..."
        classes={styles.searchMovie}
        type="text"
        value={searchTerm}
        onchange={(event) => setSearchTerm(event.target.value)}
      />
      {movies
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          } else {
            return false;
          }
        })
        .map((movie) => {
          return (
            <Movies
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              overview={movie.overview}
            />
          );
        })}
    </main>
  );
};

export default Main;
