interface PortfolioItemProp {
  PortfolioImage: string;
  PortfolioLink: string;
}

function PortfolioItem({ PortfolioImage, PortfolioLink }: PortfolioItemProp) {
  return (
    <a
      href={PortfolioLink}
      target="_blank"
      className="focus:relative focus:z-2 bg-accent overflow-hidden"
    >
      <img
        src={PortfolioImage}
        className="portfolio__img hover:scale-125 hover:opacity-50"
      />
    </a>
  );
}

export default PortfolioItem;
