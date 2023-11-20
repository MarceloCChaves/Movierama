import { useNavigate } from "react-router-dom";
import { IMovie } from "../../../interfaces/IMove";
import Button from "../../Button/Button";
import styles from "./Movies.module.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../../store/reducers/favorites";
import { RootState } from "../../../store";

const Movies = ({ id, title, poster, rating, overview }: IMovie) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFavorite = useSelector((state: RootState) =>
    state.favorites.some((itemOnFavorite) => itemOnFavorite.id === id)
  );

  const handleSaveMovie = () => {
    dispatch(
      addFavorite({
        id: id,
        title: title,
        poster: poster,
      })
    );
    if (!isFavorite) {
      toast.success("Filme salvo com sucesso!");
    } else {
      toast.info("Você já salvou esse filme!");
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <img
        className={styles.poster}
        src={poster}
        alt={title}
        loading="lazy"
        onClick={() => navigate(`/filme/${id}`)}
      />
      <div className={styles.cardContent}>
        <div className={styles.rating}>
          <b>Avaliação:</b> {rating}
        </div>
        <hr />
        <div className={styles.overview}>{overview}</div>
        <div className={styles.buttons}>
          <Button
            text={!isFavorite ? "Salvar" : "Salvo"}
            type="button"
            classes={styles.saveMovie}
            disabled={isFavorite}
            onclick={handleSaveMovie}
          />
          <Button
            text="Visualizar filme"
            type="button"
            classes={styles.clickTrailer}
            disabled={false}
            onclick={() => navigate(`/filme/${id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
