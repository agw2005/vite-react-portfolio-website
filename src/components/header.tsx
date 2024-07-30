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
    <header>
      <div className="logo">
        <img src={HeaderImage} alt="placeholder1" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleClick}
        style={{ position: "fixed" }}
      >
        <span className="hamburger"></span>
      </button>
      <nav
        className="nav"
        style={{
          transform: isTranslated ? "translate(100%)" : "translate(0%)",
          transition: "transform 0.3s ease",
        }}
      >
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              My services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
