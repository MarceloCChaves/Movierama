import {RiHeartFill} from "react-icons/ri";
import Logo from "../../assets/logo.png";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Movierama" />
      </Link>
      <Link to="/favoritos">
        <RiHeartFill size={30} color="#fff"/>
      </Link>
    </header>
  );
};

export default Header;
