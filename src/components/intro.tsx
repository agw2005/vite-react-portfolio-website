interface IntoProp {
  IntroImage: string;
}

function Introduction({ IntroImage }: IntoProp) {
  return (
    <section
      className="intro py-20 px-8 relative sm:grid sm:w-min sm:mx-auto sm:gap-x-4 sm:grid-cols-minmax"
      id="home"
    >
      <h1 className="text-5xl leading-none m-0 mb-1 font-thin">
        <span className="truncate font-medium">Hi, I am</span>
        <strong className="block font-black">Danial</strong>
      </h1>
      <p className="m-0 text-xl bg-accent font-mono mb-4 py-1 px-4 inline-block sm:self-start sm:col-span-full sm:row-start-2 sm:text-right sm:relative sm:-left-8 sm:w-sectionSubtitleWidth">
        Lorem Ipsum
      </p>
      <img
        src={IntroImage}
        alt="placeholder2"
        className="intro__img shadow-bs sm:min-w-60 sm:relative sm:z-2"
      />
    </section>
  );
}

export default Introduction;
