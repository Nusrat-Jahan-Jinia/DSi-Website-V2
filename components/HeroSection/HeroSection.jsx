import Image from "next/image";

const HeroSection = (props) => {
  return (
    <section id="HeroWrapper" className="bg-gray-500">
      <div id="imgContainer" className="w-full relative">
        <Image
          alt="DSi"
          id="heroImage"
          src={props.featureImage ? props.featureImage : ""}
          width="1440"
          height="229"
          layout="responsive"
          objectFit="cover"
          loading="eager"
          quality={100}
          className="w-2/6 md:w-full "
        />
        <div className="w-full py-4 md:py-16 lg:py-20 xl:py-28 2xl:py-36 absolute top-0">
          <div className="mid-column ">
            <p className=" hero-header mt-16 md:mt-0 text-2xl md:text-3xl lg:text-5xl text-black">
              {props.header}
            </p>
            <p className=" hero-tagline text-black hidden md:block">
              {props.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
