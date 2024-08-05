interface AboutMeProp {
  AboutMeImage: string;
}

function AboutMe({ AboutMeImage }: AboutMeProp) {
  return (
    <section
      className="about-me py-20 px-8 grid gap-x-8 mx-auto max-w-5xl"
      id="about"
    >
      <h2 className="section__title section__title--about text-4xl leading-none m-0">
        Who I am
      </h2>
      <p className="m-0 text-xl bg-accent font-mono mb-4 py-1 px-4 relative pl-4 -left-4 w-sectionSubtitleWidth pr-sectionSubtitleAboutPaddingRight col-span-full row-start-2 ">
        Lorem Ipsum Dolor Sit Amet
      </p>

      <div className="about-me__body pt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img
        src={AboutMeImage}
        alt="placeholder3"
        className="about-me__img shadow-bs relative z-2"
      />
    </section>
  );
}

export default AboutMe;
