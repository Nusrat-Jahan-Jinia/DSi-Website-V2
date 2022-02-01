import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import ViewButton from "../SingleItem/ViewButton";
const SinglePaper = (props) => {
  return (
    <>
      <Fragment>
        <Head>
          <title>DSi - {props.post.title}</title>
        </Head>
        <div className="mid-column mt-0 bg-white divide-y-2 divide-black divide-opacity-25">
          <div className="mt-2 mb-8">
            <div className="flex">
              <div className="flex-auto text-4xl md:text-5xl">
                {props.post.title}
              </div>
            </div>
            <div className="font-body text-xl font-thin">
              By - {props.post.meta_title}
            </div>
            <div className="font-body mt-4">{props.post.excerpt}</div>
          </div>
          <div className="w-full">
            <Image
              alt="post feature image."
              src={props.post.feature_image}
              width={700}
              height={300}
              layout="responsive"
              quality={100}
            />
          </div>
          <div
            className={`post-content mid-column font-body border-none mt-4 mb-8 py-8 md:p-12 text-justify ${
              props.twoColumn && "text-2-column"
            }`}
            dangerouslySetInnerHTML={{
              __html: props.post.html,
            }}
          ></div>
        </div>
        <div className="mid-column my-8">
          <ViewButton path={props.path} />
        </div>
      </Fragment>
    </>
  );
};

export default SinglePaper;
