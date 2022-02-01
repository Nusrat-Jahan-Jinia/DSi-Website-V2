import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import HomeNews from "../components/Home/HomeNews";
import HomeBlogs from "../components/Home/HomeBlogs";
import HomeService from "../components/Home/HomeService";
import HomeContributors from "../components/Home/HomeContributors";
import HomeWorks from "../components/Home/HomeWorks";
import HomePapers from "../components/Home/HomePapers";
import HomeAddress from "../components/Home/HomeOfficeAddress";
import Innovators from "../components/Home/HomeInnovators";
import Slider from "../components/Home/Client/slider";
import HeroHome from "../components/HeroSection/HeroHome";
import { getPageDataBySlug, getPosts } from "../api/GhostAPI";
import { grabImageURLFromGhostPost } from "../scripts/utility";
import HomeClientsSlider from "../components/Home/HomeSlider/HomeClientsSlider";
import HomeInnovatorsSlider from "../components/Home/HomeSlider/HomeInnovators";
import WorkDomain from "../components/Home/WorkDomain"
import ServiceBasket from "../components/Home/ServiceBasket"
import HomeResult from "../components/Home/Result"

export async function getStaticProps(context) {
  let pageData = await getPageDataBySlug(
    process.env.NEXT_PUBLIC_PAGE_SLUG_HOME
  );
  // latest news fetch
  const fetchedNews = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_NEWS +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_FEATUREDONHOME,
    include: "date,excerpt",
    limit: "all",
  };
  // latest blogs fetch
  const fetchedBlogs = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_BLOG +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_FEATUREDONHOME,
    include: "date,excerpt",
    limit: "all",
  };
  // latest service fetch
  const fetchedServices = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_SERVICE +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_FEATUREDONHOME,
    include: "date,excerpt",
    limit: "all",
  };
  // clients fetch
  const fetchedContributors = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_CONTRIBUTE,
    include: "date,excerpt",
    limit: "all",
  };

  // latest projects fetch
  const fetchedFeaturedWorks = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_PROJECT +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_FEATUREDONHOME,
    include: "date,excerpt",
    limit: "all",
  };
  // latest papers fetch
  const fetchedFeaturedPapers = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_WHITEPAPER +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_FEATUREDONHOME,
    include: "date,excerpt",
    limit: "all",
  };
  // latest Client fetch
  const fetchedClients = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_CLIENT,
    include: "date,excerpt",
    limit: "all",
  };
  // our innovators fetch
  const fetchedDsiInnovators = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_PEOPLE + "+tag:featuredonhome",
    include: "date,excerpt",
    limit: "all",
  };
    // real results fetch
    const fetchedDsiRealResults = {
      filter: "tag:" + process.env.NEXT_PUBLIC_TAG_RESULT + "+tag:featuredonhome",
      include: "date,excerpt",
      limit: "all",
    };

  // our domain projects fetch
  const fetchedDsiProjectsCatA = {
    filter:
      "tag:" + process.env.NEXT_PUBLIC_TAG_PROJECT + "+tag:featuredonhome",
    include: "date,excerpt",
    limit: "all",
  };
  const fetchedDsiProjectsCatB = {
    filter:
      "tag:" + process.env.NEXT_PUBLIC_TAG_PROJECT + "+tag:featuredonhome",
    include: "date,excerpt",
    limit: "all",
  };
  const fetchedDsiProjectsCatC = {
    filter:
      "tag:" + process.env.NEXT_PUBLIC_TAG_PROJECT + "+tag:featuredonhome",
    include: "date,excerpt",
    limit: "all",
  };

  let homeNews = await getPosts(fetchedNews);
  let homeBlogs = await getPosts(fetchedBlogs);
  let homeServices = await getPosts(fetchedServices);
  let homeContributors = await getPosts(fetchedContributors);
  let homeFeaturedWorks = await getPosts(fetchedFeaturedWorks);
  let homeFeaturedPapers = await getPosts(fetchedFeaturedPapers);
  let homeInnovators = await getPosts(fetchedDsiInnovators);
  let newclients = await getPosts(fetchedClients);
  let homeCatA = await getPosts(fetchedDsiProjectsCatA);
  let homeCatB = await getPosts(fetchedDsiProjectsCatB);
  let homeCatC = await getPosts(fetchedDsiProjectsCatC);
  let homeRealResults = await getPosts(fetchedDsiRealResults);

  return {
    props: {
      pageData: pageData,
      postsData: {
        news: homeNews,
        blogs: homeBlogs,
        services: homeServices,
        contributors: homeContributors,
        works: homeFeaturedWorks,
        papers: homeFeaturedPapers,
        dsiclients: newclients,
        innovators: homeInnovators,
        catA: homeCatA,
        catB: homeCatB,
        catC: homeCatC,
        realResults:homeRealResults
      },
    },
    revalidate: 3600,
  };
}

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{process.env.homeTitle}</title>
        <meta name={process.env.homeName} content={process.env.homeContent} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
      </Head>
      <HeroHome
        featureImage={props.pageData.feature_image}
        header={props.pageData.meta_title}
        tagline={props.pageData.meta_description}
      />
 
      <div className="bg-white">
        {/* Dedicated Development Teams That Deliver */}
        <div
          className="bg-black md:px-6"
          style={{ backgroundImage: `url("images/pattern.png")` }}
        >
          <div className="mx-auto xl:max-w-screen-lg">
            <div className="flex flex-col items-center py-16 sm:py-16 md:pb-16 md:pt-16 lg:pb-16 md:flex-row">
              <div className="flex flex-col items-center md:items-start w-4/5 md:h-40 ">
                <p className="flex w-full md:w-11/12 lg:w-2/3 font-headline flex-col text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Build a better business with a superior custom software
                </p>
                <p className="w-full font-headline font-thin md:w-4/5 pt-4 text-2xl md:text-lg text-gray-400">
                A pool of 180+ specialized developers are ready to help you materialize your technology product ideas
                </p>
              </div>
              <div className="md:border-l-2 md:border-sky-btn">
                <div className="w-full flex">
                <p className="text-8xl md:text-4xl text-white font-extrabold font-headline md:pl-8 pt-2 leading-loose">
                  20 
                  </p>
                  <span className="text-3xl text-white">+</span>
                </div>
              
                <p className="flex text-2xl md:text-3xl lg:text-3xl text-white font-headline w-full md:pl-8">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* work domain */}
        <div className="bg-gray-100 w-full py-28">
          <WorkDomain />
        </div>
           {/* service basket */}
          <div className="bg-white w-full py-20 sm:py-28">
          <div className="grid mid-home-column">
            <div className="pb-12 md:pb-20">
            <h2 className="flex flex-col font-headline items-center break-words w-4/6 sm:w-2/3 md:w-2/3 lg:w-3/5 mx-auto text-center font-extrabold text-2xl sm:text-5xl lg:text-5xl md:text-4xl mb-1 leading-10">
            Service Basket
          </h2>
          <p className="flex flex-col font-headline items-center text-base sm:text-2xl leading-8 mb-0 md:mb-8 text-neutral-600">
          for Custom Software Development
            </p>
            </div>
            <div className="grid sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-3  justify-center gap-9">
            <HomeService service={props.postsData.services} />
          </div>
        </div>
        </div>
        {/* proven process */}
        <div className="bg-gray-100 w-full py-20 sm:py-28">
          <div className="grid mid-home-column">
            <div className="pb-12 md:pb-20 items-center">
            <h2 className="flex flex-col font-headline text-center font-extrabold text-5xl mb-1 leading-10">
           Proven process, real results
          </h2>
          <p className="flex flex-col font-headline items-center text-base sm:text-2xl leading-8 mb-0 md:mb-8 text-neutral-600">
          Number that make a Difference
            </p>
            </div>
            <div className="grid sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 justify-center gap-20">
            <HomeResult service={props.postsData.realResults} />
          </div>
        </div>
        </div>

 
       
        {/* Whats Happening */}
        <div className="bg-white w-full py-20 sm:py-28">
          <div className="mid-home-column">
            <div className="pb-12 md:pb-20 items-center">
            <h2 className="flex flex-col items-center font-headline text-center font-extrabold text-5xl leading-10 mb-1">
            Happening Now
          </h2>
          <p className="flex flex-col items-center text-base sm:text-2xl leading-8 mb-0 md:mb-8 text-gray-600">
            DSi's Latest News &amp; Blog
          </p> 
          </div>
          <div className="flex flex-col md:flex-row mx-8 md:mx:auto ">
            <div className="w-full md:w-2/3 mr-6">
              <p className="flex-col font-body text-2xl items-center mb-4 block md:hidden">
                Latest News
              </p>
              {/* Featured News */}
              <HomeNews news={props.postsData.news} />
              <Link href={"news/1"}>
                <button className="flex border-2 border-black hover:bg-black hover:text-white font-medium font-button px-8 py-2 text-sm mx-auto md:mx-4 mt-8 ">
                  SEE ALL NEWS
                </button>
              </Link>
            </div>
            <div className="w-full md:w-2/3">
              <p className="flex-col font-body mt-12 text-2xl items-center block md:hidden">
                Latest Blog Posts
              </p>
              {/* Featured News */}
              <HomeBlogs blog={props.postsData.blogs} />
              <Link href={"blogs/1"}>
                <button className="flex border-2 border-black hover:bg-black hover:text-white font-medium font-button px-8 py-2 text-sm mx-auto md:mx-4 mt-8">
                  SEE ALL BLOGS
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
        

        {/* Our Happy Clients */}
        <div className="bg-white w-full pb-20 sm:pb-28">
          <div className="mid-column">
          <div className="pb-12 md:pb-20 items-center">
          <h2 className="flex flex-col items-center break-words w-full mx-auto font-headline text-center font-extrabold text-5xl leading-10 pb-2 mt-16">
            Our Happy Clients
          </h2>
          <p className="flex flex-col items-center text-base sm:text-2xl leading-8 mb-0 md:mb-8 text-gray-600">
            Home & Abroad
              </p>
              </div>
          <div className="slideWrapperContainer">
            <HomeClientsSlider posts={props.postsData.dsiclients} />
          </div>
        </div>
        </div>
        
        

        {/* Where We Contributed */}
        <div className="bg-black w-full py-20 sm:py-28">
          <div className="mid-column mx-8 md:mx-auto">
            <h2 className="text-white flex font-headline flex-col items-center break-words w-full mx-auto text-center leading-10 font-extrabold text-2xl sm:text-5xl md:text-5xl lg:text-5xl mb-2">
            Verticals We Contributed
            </h2>
            <p className="flex flex-col font-body items-center mb-0 md:mb-8 leading-8 text-2xl font-normal text-white">
              Domain Knowledge - Check
            </p>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 px-12">
              <HomeContributors contributor={props.postsData.contributors} />
            </div>
          </div>
        </div>
        {/* Featured Works */}
        <div className="bg-white w-full py-20 sm:py-28 flex">
          <div className="mid-column mx-8 md:mx-auto flex flex-col">
          <div className="pb-12 md:pb-20 items-center flex flex-col">
          <h2 className="flex flex-col items-center break-words w-full mx-auto font-headline text-center font-extrabold text-5xl leading-10 pb-2 mt-16">
            Featured Works
              </h2>
              <p className="flex flex-col items-center text-base sm:text-2xl leading-8 mb-0 md:mb-8 text-gray-600">
              Team Augmentations, Partnerships, Ground up Projects
            </p>
              </div>
            <HomeWorks work={props.postsData.works} />
            <div className="flex items-center">
          <Link href={"projects/1/"}>
              <button className="text-center flex border-2 border-black hover:bg-black hover:text-white font-medium font-button px-8 py-2 text-sm mx-auto md:mx-4 mt-8">
              SEE ALL PROJECTS
                </button>
              </Link>
              </div>
          </div>
          </div>
        {/* Meet the mentors */}
        <div
          className="bg-gray-200"
        >
          <div className="mx-auto xl:max-w-screen-lg mt-16">
            <div className="flex justify-center items-center md:-mx-4">
              <div className="w-full mx-20">
                <h2 className="flex flex-col font-headline items-center font-semibold text-white text-2xl sm:text-3xl md:text-4xl mb-1 pt-8">
                  Meet The Innovators
                </h2>
                <p className="flex flex-col font-body items-center text-white mb-4">
                  They are up for a new project
                </p>
                <div className="slideWrapperContainer">
                  <HomeInnovatorsSlider posts={props.postsData.innovators} />
                </div>
                <Link href={"people/1/"}>
                  <a className="flex w-44 bg-yellow-btn hover:bg-white rounded-full px-6 py-1 mb-8 text-xs font-button font-semibold mx-auto items-center justify-center mt-8">
                    SEE ALL INNOVATORS
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Get in touch */}
        <HomeAddress />
      </div>
    </Fragment>
  );
};

export default Home;
