import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "../../components/HeroSection/HeroSection";
import List from "../../components/Lists/List";
import FeaturedItems from "../../components/Lists/FeaturedItems";
import Pagination from "../../components/Pagination/Xpagination";
import DomainProject from "../../components/Lists/DomainProjects";
import {
  getAllPostCount,
  genStaticPagePaths,
  getPageDataBySlug,
  getPosts,
} from "../../api/GhostAPI";
import { redirectTo500 } from "../../scripts/utility";

export const getStaticPaths = async () => {
  return getAllPostCount(
    process.env.NEXT_PUBLIC_TAG_PROJECT,
    "+featured:false"
  ).then((count) => {
    return {
      paths: genStaticPagePaths(count),
      fallback: false,
    };
  });
};

export async function getStaticProps(context) {
  let pageData = await getPageDataBySlug(
    process.env.NEXT_PUBLIC_PAGE_SLUG_PROJECTS
  );

  const fetchedDsiProjectsCatB = {
    filter:
      "tag:" +
      process.env.NEXT_PUBLIC_TAG_PROJECT +
      "+tag:" +
      process.env.NEXT_PUBLIC_TAG_PROJECTB,
    include: "date,excerpt",
    limit: "all",
  };
  let homeCatB = await getPosts(fetchedDsiProjectsCatB);
  return {
    props: {
      pageData: pageData,
      postsData: {
        catB: homeCatB,
      },
      // pagination: pagination,
    },
    revalidate: 3600,
  };
}

const Domain = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.projectTitle}</title>
        <meta
          name={process.env.projectName}
          content={process.env.projectContent}
        />
      </Head>
      <HeroSection
        featureImage={props.pageData.feature_image}
        header={props.pageData.meta_title}
        tagline={props.pageData.meta_description}
      />
      <div className="mid-column py-12 font-body ">
        <h2 className="font-headline font-semibold flex justify-center text-4xl pb-12 text-center ">
          Integrated Service Delivery Platform
        </h2>
        <div className="flex flex-wrap">
          <DomainProject data={props.postsData.catB} path="/domainB/project/" />
        </div>
      </div>
    </>
  );
};

export default Domain;
