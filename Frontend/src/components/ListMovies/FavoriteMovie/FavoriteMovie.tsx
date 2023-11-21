import { toast } from "react-toastify";
import styles from "./Favorite.movie.module.scss";
import { IMovie } from "../../../interfaces/IMove";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../store/reducers/favorites";
import Button from "../../Button/Button";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const FavoriteMovie = ({id, poster, title}: IMovie) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      <img src={poster} alt="Movie Poster" className={styles.movieImg} onClick={() => navigate(`/filme/${id}`)} />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
          <Button
            text={<FaTrash color="brown" size={15}/>}
            classes={styles.removeBtn}
            type="button"
            onclick={handleRemoveMovie}
          />
      </div>
    </li>
  );
};

export default FavoriteMovie;
