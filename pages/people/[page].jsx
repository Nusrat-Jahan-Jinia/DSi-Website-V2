import Head from "next/head";
import Link from "next/link";
import HeroSection from "../../components/HeroSection/HeroSection";
import List from "../../components/Lists/ListPeople";
import FeaturedItems from "../../components/Lists/FeaturedPeople";
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
    process.env.NEXT_PUBLIC_TAG_PEOPLE,
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
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_PEOPLE + "+featured:true",
    include: "date,excerpt",
    limit: "all",
  };
  const listPagedConfig = {
    filter: "tag:" + process.env.NEXT_PUBLIC_TAG_PEOPLE + "+featured:false",
    include: "date,excerpt",
    page: context.params.page,
  };

  let pageData = await getPageDataBySlug(
    process.env.NEXT_PUBLIC_PAGE_SLUG_PEOPLE
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

const People = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.peopleTitle}</title>
        <meta
          name={process.env.peopleName}
          content={process.env.peopleContent}
        />
      </Head>
      <HeroSection
        featureImage={props.pageData.feature_image}
        header={props.pageData.meta_title}
        tagline={props.pageData.meta_description}
      />
      <div className="mid-column mt-0 pt-12">
        <h2 className="text-4xl pb-12 text-center">Key Personnel</h2>
        <FeaturedItems
          data={props.postsData.featured}
          path="/people/innovator/"
        />
      </div>
      <div className="mid-column py-12 font-body ">
        <h2 className="flex justify-center text-4xl pb-12 text-center ">
          <p className="w-2/3">
            120 people are working to make software that satisfies clients need.
          </p>
        </h2>
        <div className="flex flex-wrap">
          <List data={props.postsData.listPaged} path="/people/innovator/" />
        </div>
        <div className="mb-16 px-0 ">
          <Pagination
            currentIndex={props.pagination.page}
            totalPages={props.pagination.pages}
            nextPage={props.pagination.next}
            prevPage={props.pagination.prev}
            path="/people/"
          />
        </div>
        <div className="mid-column flex flex-col p-8">
          <p className="block text-center font-bold text-3xl py-4">Join Us!</p>
          <Link
            href="https://apply.workable.com/dsinnovators/"
            className="text-center block justofy-center"
          >
            <span
              target="_blank"
              className="block justify-center text-center inline-block bg-yellow-btn hover:bg-blue-royalblue hover:text-white font-button rounded-full px-8 py-2 text-xs font-semibold mt-6 mx-auto"
            >
              <p className="text-2xl ">See all openings</p>@workable
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default People;
