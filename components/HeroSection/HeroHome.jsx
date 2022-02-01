import Image from "next/image";
import Link from "next/link";
const HeroHome = (props) => {
  return (
    <section id="Hero">
       <div className="w-full relative">
        <div className="hidden md:block w-full">
        <Image
              alt="DSi"
              src="/images/group-banner.png"
              width="2000"
              height="650"
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
        </div>
        <div className="block md:hidden">
            <Image
              alt="DSi"
              src="/images/group-banner.png"
              width="320"
              height="482"
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
        </div>
        <div className="w-full py-4 md:py-16 lg:py-20 xl:py-28 2xl:py-36 absolute top-0">
            <div className="mid-home-column mt-36 md:mt-0">
              <div className="mt-20">
                <p className="hero-header text-center md:text-left mt-16  bold text-2xl md:text-5xl lg:text-8xl text-white">
                  {props.header}
                </p>
                <div className="text-center md:text-left">
                  <Link href="/resources/Brochure-DSi-2020.pdf" target="_blank">
                    <a>
                      <p
                        target="_blank"
                        className="tmd:ext-2xl text-center inline-block bg-yellow-btn hover:bg-blue-royalblue hover:text-white font-button rounded-full px-8 py-2 text-xs font-semibold mt-6 mx-auto"
                      >
                        GET STARTED
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
export default HeroHome;
