// Components
import Header from "./components/header.tsx";
import Introduction from "./components/intro.tsx";
import MyService from "./components/service.tsx";
import AboutMe from "./components/aboutMe.tsx";
import MyWork from "./components/myWork.tsx";
import Footer from "./components/footer.tsx";

// Images
import placeholder1 from "./assets/img/placeholder1.png";
import placeholder2 from "./assets/img/placeholder2.jpg";
import placeholder3 from "./assets/img/placeholder3.jpeg";
import placeholder4 from "./assets/img/placeholder4.png";
import placeholder5 from "./assets/img/placeholder5.png";
import placeholder6 from "./assets/img/placeholder6.png";
import placeholder7 from "./assets/img/placeholder7.png";
import placeholder8 from "./assets/img/placeholder8.png";
import placeholder9 from "./assets/img/placeholder9.png";

// Variables
let myWorkImages = [
  placeholder4,
  placeholder5,
  placeholder6,
  placeholder7,
  placeholder8,
  placeholder9,
];
let myWorkLinks = [
  "https://github.com/agw2005/biayaHotel",
  "https://github.com/agw2005/Rumah",
  "https://github.com/agw2005/simpleCalculator",
  "#",
  "#",
  "#",
];

function App() {
  return (
    <>
      <Header HeaderImage={placeholder1} />
      <Introduction IntroImage={placeholder2} />
      <MyService />
      <AboutMe AboutMeImage={placeholder3} />
      <MyWork img={myWorkImages} link={myWorkLinks} />
      <Footer />
    </>
  );
}

export default App;
