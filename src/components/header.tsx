import { useState } from "react";

interface HeaderProp {
  HeaderImage: string;
}

function Header({ HeaderImage }: HeaderProp) {
  const [isTranslated, setIsTranslated] = useState(true);
  function handleClick() {
    setIsTranslated(!isTranslated);
  }

  return (
    <header className="flex justify-between p-4">
      <div className="logo max-w-24">
        <img src={HeaderImage} alt="placeholder1" />
      </div>
      <button
        className="nav-toggle absolute p-2 from-transparent border-0 cursor-pointer right-4 top-4 z-maximum"
        aria-label="toggle navigation"
        onClick={handleClick}
        style={{ position: "fixed" }}
      >
        <span className="hamburger bg-accent w-8 h-1 rounded-2xl duration-200 ease-in-out before:bg-accent before:w-8 before:h-1 before:rounded-2xl before:duration-200 before:ease-in-out after:bg-accent after:w-8 after:h-1 after:rounded-2xl after:duration-200 after:ease-in-out before:top-2 after:bottom-2 before:absolute before:left-0 before:right-0 after:absolute after:left-0 after:right-0 block relative"></span>
      </button>
      <nav
        className="nav fixed bg-dark text-light top-0 left-0 right-0 bottom-0 z-50"
        style={{
          transform: isTranslated ? "translate(100%)" : "translate(0%)",
          transition: "transform 0.3s ease",
        }}
      >
        <ul className="nav__list list-none flex h-full flex-col justify-evenly items-center m-0 p-0">
          <li className="nav__item" onClick={handleClick}>
            <a
              href="#home"
              className="nav__link hover:text-accent text-inherit font-black text-5xl no-underline"
            >
              Home
            </a>
          </li>
          <li className="nav__item" onClick={handleClick}>
            <a
              href="#services"
              className="nav__link hover:text-accent text-inherit font-black text-5xl no-underline"
            >
              My services
            </a>
          </li>
          <li className="nav__item" onClick={handleClick}>
            <a
              href="#about"
              className="nav__link hover:text-accent text-inherit font-black text-5xl no-underline"
            >
              About me
            </a>
          </li>
          <li className="nav__item" onClick={handleClick}>
            <a
              href="#work"
              className="nav__link hover:text-accent text-inherit font-black text-5xl no-underline"
            >
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
