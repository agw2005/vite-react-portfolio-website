interface PortfolioItemProp {
  PortfolioImage: string;
  PortfolioLink: string;
}

function PortfolioItem({ PortfolioImage, PortfolioLink }: PortfolioItemProp) {
  return (
    <a href={PortfolioLink} target="_blank" className="portfolio__item">
      <img src={PortfolioImage} alt="placeholder4" className="portfolio__img" />
    </a>
  );
}

export default PortfolioItem;
