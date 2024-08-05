import ServiceItem from "./serviceItem";

function MyService() {
  return (
    <section
      className="my-services after:content-[''] py-20 px-8 bg-serviceBackgroundImage bg-serviceBackgroundColor bg-cover bg-blend-multiply text-light text-center"
      id="services"
    >
      <h2 className="section__title section__title--services after:content-[''] after:block after:w-16 after:h-1 after:mx-auto after:mb-8  after:mt-8 after:bg-light after:opacity-50 text-4xl text-accent relative leading-none m-0">
        What I do
      </h2>
      <div className="max-w-lg mx-auto md:flex md:max-w-5xl md:mx-auto">
        <ServiceItem
          title="Web Development"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tortor vel tellus vestibulum condimentum a eget urna. Nulla ultrices tortor vitae odio pellentesque, in feugiat justo accumsan."
        />
        <ServiceItem
          title="Civitas UNNES"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tortor vel tellus vestibulum condimentum a eget urna. Nulla ultrices tortor vitae odio pellentesque, in feugiat justo accumsan."
        />
        <ServiceItem
          title="Text"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tortor vel tellus vestibulum condimentum a eget urna. Nulla ultrices tortor vitae odio pellentesque, in feugiat justo accumsan."
        />
      </div>
      <a
        href="#work"
        className="duration-200 ease-in-out inline-block py-2 px-10 bg-accent text-dark decoration-none cursor-pointer no-underline text-sm uppercase tracking-wide font-black mt-16 hover:scale-150"
      >
        My Work
      </a>
    </section>
  );
}

export default MyService;
