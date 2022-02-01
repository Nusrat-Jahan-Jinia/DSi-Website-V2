import GhostContentAPI from "@tryghost/content-api";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import SinglePaper from "../../../components/SingleItem/SinglePaper";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

export const getStaticPaths = async () => {
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_BLOG_URL,
    key: process.env.NEXT_PUBLIC_CONTENT_API_KEY,
    version: process.env.NEXT_PUBLIC_VERSION,
  });

  let singlePostData = await api.posts
    .browse({
      filter: "tag:" + process.env.NEXT_PUBLIC_TAG_WHITEPAPER,
      include: "date,excerpt",
    })
    .then((posts) => {
      return posts;
    })
    .catch((err) => {
      console.error(err);
    });

  // map data to an array of path objects with params (id)
  const paths = singlePostData.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const PAGE_SLUG = process.env.NEXT_PUBLIC_PAGE_SLUG_WHITEPAPERS;
  // Connection to Ghost
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_BLOG_URL,
    key: process.env.NEXT_PUBLIC_CONTENT_API_KEY,
    version: process.env.NEXT_PUBLIC_VERSION,
  });
  const id = context.params.id;

  let postItem = await api.posts
    .read({ id: id })
    .then((posts) => {
      return posts;
    })
    .catch((err) => {
      console.error(err);
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
  //

  return {
    props: { post: postItem, pageData },
  };
};
const breadcrumbs = [
  {
    title: "whitepapers",
    link: "../1",
  },
];
const SinglePaperDetails = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Head>
        <title>{process.env.paperTitle}</title>
        <meta name={process.env.paperName} content={process.env.paperContent} />
      </Head>
      <section id="breadcrumbs" className="mid-column mt-24 mb-5">
        <Breadcrumbs
          crumbs={breadcrumbs}
          inlcudeHome="true"
          current={props.post.title}
        />
      </section>
      <SinglePaper post={props.post} path="/whitepapers/1" />
    </Fragment>
  );
};

export default SinglePaperDetails;
