import GhostContentAPI from "@tryghost/content-api";
import Head from "next/head";
import HeroSection from "../../components/HeroSection/HeroSection";
import SingleService from "../../components/SingleItem/SingleService";

export async function getStaticProps() {
  const PAGE_SLUG = process.env.NEXT_PUBLIC_PAGE_SLUG_SERVICES;

  // Connection to Ghost
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_BLOG_URL,
    key: process.env.NEXT_PUBLIC_CONTENT_API_KEY,
    version: process.env.NEXT_PUBLIC_VERSION,
  });
  // Fetch page data frm Ghost
  let pageData = await api.pages
    .read({ slug: PAGE_SLUG })
    .then((page) => {
      return page;
    })
    .catch((err) => {
      console.error(err);
    });
  // Fetch posts related to this page from Ghost
  let postsData = await api.posts
    .browse({
      filter: "tag:" + process.env.NEXT_PUBLIC_TAG_SERVICE,
      include: "date,excerpt",
    })
    .then((posts) => {
      return posts;
    })
    .catch((err) => {
      console.error(err);
    });

  if (!pageData) {
    return {
      redirect: {
        destination: "/NotFount",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pageData,
      postsData,
    },
    revalidate: 3600,
  };
}
const ServiceList = (props) => {
  return (
    <div>
      <Head>
        <title>{process.env.serviceTitle}</title>
        <meta
          name={process.env.serviceName}
          content={process.env.serviceContent}
        />
      </Head>
      <HeroSection
        featureImage={props.pageData.feature_image}
        header={props.pageData.meta_title}
        tagline={props.pageData.meta_description}
      />
      <SingleService data={props.postsData} />
    </div>
  );
};

export default ServiceList;
