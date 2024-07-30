import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareTwitter,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  <FontAwesomeIcon icon={faSquareGithub} />,
  <FontAwesomeIcon icon={faSquareTwitter} />,
  <FontAwesomeIcon icon={faLinkedin} />,
  <FontAwesomeIcon icon={faDiscord} />,
];

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:danial.agw2005@gmail.com" className="footer__link">
        danial.agw2005@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/agw2005"
            target="_blank"
          >
            <i className="fa-brands fa-square-github">{icons[0]}</i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fa-brands fa-square-twitter">{icons[1]}</i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/danial-walangadi-b1a69b243/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin">{icons[2]}</i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fa-brands fa-discord">{icons[3]}</i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
