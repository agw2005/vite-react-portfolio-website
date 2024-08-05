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
    <footer className="bg-black text-accent text-center p-10 text-5xl">
      <a
        href="mailto:danial.agw2005@gmail.com"
        className="hover:underline hover:opacity-70 text-xl font-black no-underline"
      >
        danial.agw2005@gmail.com
      </a>
      <ul className="list-none flex justify-center p-0 mt-8">
        <li className="m-2">
          <a
            className="hover:opacity-70 text-inherit p-2 no-underline"
            href="https://github.com/agw2005"
            target="_blank"
          >
            <i className="fa-brands fa-square-github">{icons[0]}</i>
          </a>
        </li>
        <li className="m-2">
          <a
            className="hover:opacity-70 text-inherit p-2 no-underline"
            href="#"
          >
            <i className="fa-brands fa-square-twitter">{icons[1]}</i>
          </a>
        </li>
        <li className="m-2">
          <a
            className="hover:opacity-70 text-inherit p-2 no-underline"
            href="https://www.linkedin.com/in/danial-walangadi-b1a69b243/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin">{icons[2]}</i>
          </a>
        </li>
        <li className="m-2">
          <a
            className="hover:opacity-70 text-inherit p-2 no-underline"
            href="#"
          >
            <i className="fa-brands fa-discord">{icons[3]}</i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
