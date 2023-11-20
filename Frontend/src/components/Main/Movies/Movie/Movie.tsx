import { useEffect, useState } from "react";
import styles from "./Movie.module.scss";
import { IMovie } from "../../../../interfaces/IMove";
import API from "../../../../services/api";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState<IMovie[]>([]);
  const params = useParams();

  useEffect(() => {
    API.get(`/movies/${params.id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className={styles.content}>
      <div className={styles.card}>
        {movie.map((m) => {
          return (
            <div key={m.id}>
              <h1 className={styles.title}>{m.title}</h1>
              <img
                className={styles.poster}
                src={m.poster}
                alt={m.title}
                loading="lazy"
              />
              <div className={styles.cardContent}>
                <div className={styles.rating}>
                  <b>Avaliação:</b> {m.rating}
                </div>
                <hr />
                <div className={styles.overview}>{m.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Movie;
