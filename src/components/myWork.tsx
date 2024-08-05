import PortfolioItem from "./portfolioItem";

interface MyWorkProp {
  img: string[];
  link: string[];
}

function MyWork(prop: MyWorkProp) {
  return (
    <section className="py-20 px-8 bg-dark text-light text-center" id="work">
      <h2 className="section__title section__title--work text-4xl leading-none mb-5">
        My Work
      </h2>
      <p className="m-0 text-xl section__subtitle--work text-accent font-black mb-8">
        A selection of my range of work
      </p>

      <div className="grid grid-cols-divPortfolioList">
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
