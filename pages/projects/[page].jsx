import Head from "next/head";
import HeroSection from "../../components/HeroSection/HeroSection";
import List from "../../components/Lists/List";
import FeaturedItems from "../../components/Lists/FeaturedItems";
import Pagination from "../../components/Pagination/Xpagination";
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
  const featuredConfig = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_PROJECT + "+featured:true",
    include: "date,excerpt",
    limit: "all",
  };
  const listPagedConfig = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_PROJECT + "+featured:false",
    include: "date,excerpt",
    page: context.params.page,
  };

  let pageData = await getPageDataBySlug(
    process.env.NEXT_PUBLIC_PAGE_SLUG_PROJECTS
  );
  let featuredData = await getPosts(featuredConfig);
  let listPagedData = await getPosts(listPagedConfig);

  if (!pageData || !featuredData || !listPagedData) {
    return redirectTo500();
  }
  let pagination = listPagedData.meta.pagination;

  return {
    props: {
      pageData: pageData,
      postsData: {
        featured: featuredData,
        listPaged: listPagedData,
      },
      pagination: pagination,
    },
    revalidate: 3600,
  };
}

const Projects = (props) => {
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
      <div className="mid-column mt-0 pt-12">
        <h2 className="text-4xl pb-12 text-center">Featured Projects</h2>
        <FeaturedItems
          data={props.postsData.featured}
          path="/projects/project/"
        />
      </div>
      <div className="mid-column py-12 font-body ">
        <h2 className="flex justify-center text-4xl pb-12 text-center ">
          <p className="w-2/3">Other important projects</p>
        </h2>
        <div className="flex flex-wrap">
          <List data={props.postsData.listPaged} path="/projects/project/" />
        </div>
        <div className="mb-16 px-0 ">
          <Pagination
            currentIndex={props.pagination.page}
            totalPages={props.pagination.pages}
            nextPage={props.pagination.next}
            prevPage={props.pagination.prev}
            path="/projects/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
