import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <header className={styles.footer}>
      <span>
        Built and designed by {" "}
        <a href="https://github.com/MarceloCChaves" target="_blank">
          Marcelo Chaves <FaGithub size={20} color="#fff" />
        </a>
      </span>
    </header>
  );
};

export default Footer;
