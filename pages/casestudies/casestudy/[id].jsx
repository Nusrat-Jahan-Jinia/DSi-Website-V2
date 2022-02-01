import { Fragment } from "react";
import Head from "next/head";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import SinglePaper from "../../../components/SingleItem/SinglePaper";

import {
  getAllPostIDs,
  getStaticIDPaths,
  getPageDataByID,
} from "../../../api/GhostAPI";

import { redirectTo500 } from "../../../scripts/utility";

export const getStaticPaths = async () => {
  return getAllPostIDs(process.env.NEXT_PUBLIC_TAG_CASESTUDY).then((ids) => {
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
  return {
    props: {
      post: pageData,
      twoColumnData: setTwoColumn(pageData.tags),
    },
    revalidate: 3600,
  };
}
const setTwoColumn = (twoColumnData) => {
  if (twoColumnData === null) return false;
  let twoCol = false;
  twoColumnData.forEach((tag) => {
    tag.name === "two-column" ? (twoCol = true) : null;
  });
  return twoCol;
};
const SingleCaseDetails = (props) => {
  const breadcrumbs = [
    {
      title: "Case Studies",
      link: "../1",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>{process.env.caseTitle}</title>
        <meta name={process.env.caseName} content={process.env.caseContent} />
      </Head>
      <section id="breadcrumbs" className="mid-column mt-24 mb-5">
        <Breadcrumbs
          crumbs={breadcrumbs}
          inlcudeHome="true"
          current={props.post.title}
        />
      </section>
      <SinglePaper
        post={props.post}
        twoColumn={props.twoColumnData}
        path="/casestudies/1"
      />
    </Fragment>
  );
};

export default SingleCaseDetails;
