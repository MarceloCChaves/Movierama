import { toast } from "react-toastify";
import styles from "./Favorite.movie.module.scss";
import { IMovie } from "../../../interfaces/IMove";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../store/reducers/favorites";

const FavoriteMovie = ({id, poster, title}: IMovie) => {

  const dispatch = useDispatch();

  const handleRemoveMovie = () => {
    dispatch(removeFavorite({
      id: id,
      title: title,
      poster: poster
    }));
    toast.success("Filme removido");
  };
  return (
    <li className={styles.movieItem}>
      <img src={poster} alt="Movie Poster" className={styles.movieImg} />
      <div className={styles.movieInfo}>
        <div className={styles.movieTitle}>{title}</div>
        <button className={styles.removeBtn} onClick={handleRemoveMovie}>
          Remover
        </button>
      </div>
    </li>
  );
};

export default FavoriteMovie;
