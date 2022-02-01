import { Fragment } from "react";
import Head from "next/head";
import SinglePeople from "../../../components/SingleItem/SinglePeople";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import {
  getAllPostIDs,
  getStaticIDPaths,
  getPageDataByID,
  getNextPrevIDs,
} from "../../../api/GhostAPI";
import { redirectTo500 } from "../../../scripts/utility";

export const getStaticPaths = async () => {
  return getAllPostIDs(process.env.NEXT_PUBLIC_TAG_PEOPLE).then((ids) => {
    return {
      paths: getStaticIDPaths(ids),
      fallback: false,
    };
  });
};

export async function getStaticProps(context) {
  let pageData = await getPageDataByID(context.params.id);
  if (!pageData) {
    return redirectTo500();
  }

  let nav = await getNextPrevIDs(context.params.id);
  nav = nav === null ? { next: null, prev: null } : nav;

  return {
    props: {
      post: pageData,
      nav: nav,
    },
    revalidate: 3600,
  };
}

const SingleProfileDetails = (props) => {
  const breadcrumbs = [
    {
      title: "People",
      link: "../1",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>{process.env.peopleTitle}</title>
        <meta
          name={process.env.peopleName}
          content={process.env.peopleContent}
        />
      </Head>
      <section id="breadcrumbs" className="mid-column mt-24 mb-5">
        <Breadcrumbs
          crumbs={breadcrumbs}
          inlcudeHome="true"
          current={props.post.title}
        />
      </section>
      <main className="mid-column">
        <SinglePeople
          post={props.post}
          path="/people/1"
          id={props.post.id}
          next={props.nav.next}
          prev={props.nav.prev}
        />
      </main>
    </Fragment>
  );
};

export default SingleProfileDetails;
