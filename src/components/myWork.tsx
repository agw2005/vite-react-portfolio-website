import PortfolioItem from "./portfolioItem";

interface MyWorkProp {
  img: string[];
  link: string[];
}

function MyWork(prop: MyWorkProp) {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <PortfolioItem
          PortfolioImage={prop.img[0]}
          PortfolioLink={prop.link[0]}
        />

        <PortfolioItem
          PortfolioImage={prop.img[1]}
          PortfolioLink={prop.link[1]}
        />

        <PortfolioItem
          PortfolioImage={prop.img[2]}
          PortfolioLink={prop.link[2]}
        />

        <PortfolioItem
          PortfolioImage={prop.img[3]}
          PortfolioLink={prop.link[3]}
        />

        <PortfolioItem
          PortfolioImage={prop.img[4]}
          PortfolioLink={prop.link[4]}
        />

        <PortfolioItem
          PortfolioImage={prop.img[5]}
          PortfolioLink={prop.link[5]}
        />
      </div>
    </section>
  );
}

export default MyWork;
