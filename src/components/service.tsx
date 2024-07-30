function MyService() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac tortor vel tellus vestibulum condimentum a eget urna. Nulla
            ultrices tortor vitae odio pellentesque, in feugiat justo accumsan.
          </p>
        </div>

        <div className="service">
          <h3>Civitas UNNES</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac tortor vel tellus vestibulum condimentum a eget urna. Nulla
            ultrices tortor vitae odio pellentesque, in feugiat justo accumsan.
          </p>
        </div>

        <div className="service">
          <h3>Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac tortor vel tellus vestibulum condimentum a eget urna. Nulla
            ultrices tortor vitae odio pellentesque, in feugiat justo accumsan.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

export default MyService;
