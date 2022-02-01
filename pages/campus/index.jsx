import Head from "next/head";
import HeroSection from "../../components/HeroSection/HeroSection";
import Link from "next/link";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import { grabAllImageURLFromGhostPost } from "../../scripts/utility";
import { getPageDataBySlug } from "../../api/GhostAPI";
import { redirectTo500 } from "../../scripts/utility";

export async function getStaticProps(context) {
  let pageData = await getPageDataBySlug(
    process.env.NEXT_PUBLIC_PAGE_SLUG_CAMPUS
  );

  if (!pageData) {
    return redirectTo500();
  }

  return {
    props: {
      pageData: pageData,
    },
    revalidate: 3600,
  };
}

// Gallery Setup
const photos = [
  {
    src: "/images/campus-1.jpeg",
    width: 2048,
    height: 1535,
  },
  {
    src: "/images/campus-2.jpeg",
    width: 1820,
    height: 1537,
  },
  {
    src: "/images/campus-3.jpeg",
    width: 2048,
    height: 1538,
  },
  {
    src: "/images/campus-4.jpeg",
    width: 1443,
    height: 2048,
  },
  {
    src: "/images/campus-5.jpeg",
    width: 1871,
    height: 1537,
  },
];
//Automate gal images
// let totalImageCount = 4;
// let campusGalImages = (() => {
//   let images = [];
//   for (let i = 0; i < totalImageCount; i++) {
//     images.push(<img src={`/images/campus_gallary/campus-${i}.jpeg"`} />);
//   }
//   return images;
// })();
// console.log("Campus images: " + campusGalImages);
const Campus = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.campusTitle}</title>
        <meta
          name={process.env.campusName}
          content={process.env.campusContent}
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js" />
      </Head>
      <HeroSection
        featureImage={props.pageData.feature_image}
        header={props.pageData.meta_title}
        tagline={props.pageData.meta_description}
      />
      <div className="mid-column mt-0 pt-12">
        <h2 className="text-2xl pb-12 text-center">
          From an excellent working environment to personal growth, DSi ensures
          a workplace that people love to work.
        </h2>
      </div>
      <div className="mid-column ">
        <div className="md:px-32 lg:px-40 xl:px-52">
          <Gallery photos={photos} />
        </div>
      </div>
      <div className="p-12 bg-campus-facilities my-16">
        <div className="mid-column ">
          <h2 className="text-5xl text-center">Facilities</h2>
          <p className="flex flex-col font-body items-center mb-0 md:mb-8">
            Live your best office life
          </p>
          <div className="flex gap-6 md:gap-0 flex-wrap flex-col sm:flex-row justify-center">
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-festival@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Festival Bonus
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-marriage bonus@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Marriage Bonus
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-meal@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Buffet Lunch
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-increment@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Yearly Increment
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-workhour@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Flexible Working Hour
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-indoor games@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Indoor Games
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-tour@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Annual Retreat
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-maternity leave@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Paid Maternity Leave
                </p>
              </div>
            </div>
            <div className="flex my-4 w-1/3  items-center">
              <div className="w-24 mr-8">
                <Image
                  alt="Hero image for news section"
                  src="/images/ico-cosy environment@3x-8.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  quality={100}
                />
              </div>
              <div className="break-words flex flex-col">
                <p className="font-semibold font-body text-md sm:text-lg md:text-xl">
                  Cosy Environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-column mt-0">
        <h2 className="text-5xl text-center">Tour our Campus</h2>
        <h2 className="text-1xl pb-12 pt-8 text-center">Explore DSi life</h2>
      </div>
      <div className="mid-column my-12 ">
        <div
          className="fotorama "
          data-keyboard="true"
          data-nav="thumbs"
          data-transition="crossfade"
          data-allowfullscreen="true"
          data-width="100%"
          data-ratio="3/2"
        >
          <img src="/images/campus_gallary/slide-1.jpg" />
          <img src="/images/campus_gallary/slide-2.jpg" />
          <img src="/images/campus_gallary/slide-3.jpg" />
          <img src="/images/campus_gallary/slide-4.jpg" />
          <img src="/images/campus_gallary/slide-5.jpg" />
          <img src="/images/campus_gallary/slide-6.jpg" />
          <img src="/images/campus_gallary/slide-7.jpg" />
          <img src="/images/campus_gallary/slide-8.jpg" />
          <img src="/images/campus_gallary/slide-9.jpg" />
          <img src="/images/campus_gallary/slide-10.jpg" />
          <img src="/images/campus_gallary/slide-11.jpg" />
          <img src="/images/campus_gallary/slide-12.jpg" />
          <img src="/images/campus_gallary/slide-13.jpg" />
          <img src="/images/campus_gallary/slide-14.jpg" />
          <img src="/images/campus_gallary/slide-15.jpg" />
          <img src="/images/campus_gallary/slide-16.jpg" />
          <img src="/images/campus_gallary/slide-17.jpg" />
          <img src="/images/campus_gallary/slide-18.jpg" />
          <img src="/images/campus_gallary/slide-19.jpg" />
          <img src="/images/campus_gallary/slide-20.jpg" />
        </div>
      </div>
      <div>
        <div className="mid-column-content p-12 flex flex-col md:flex-row justify-center ">
          <div className="w-full md:w-1/3 flex justify-center md:flex justify-end">
            <div className="w-72">
              <Image
                alt="We are hiring"
                src="/images/we-are-hiring.png"
                width="300"
                height="300"
                layout="intrinsic"
                quality={100}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:ml-12">
            <h2 className="page-header my-8 text-center md:text-left">
              Check out new openings
            </h2>
            <p className="text-center md:text-left">
              DSi is growing and we need experts in different fields. See our
              open positions and apply with your updated CV. We are very
              responsive in the hiring process.
            </p>
            <div className="text-center md:text-left">
              <Link href="https://apply.workable.com/dsinnovators/">
                <a
                  target="_blank"
                  className=" text-center inline-block bg-yellow-btn hover:bg-blue-royalblue hover:text-white font-button rounded-full px-8 py-2 text-xs font-semibold mt-6 mx-auto"
                >
                  <p className="text-2xl">Check Now</p>@workable
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;
