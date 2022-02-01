import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import ViewButton from "../SingleItem/ViewButton";

const SingleProject = (props) => {
  return (
    <>
      <Fragment>
        <Head>
          <title>DSi - {props.post.title}</title>
        </Head>
        <div className="mid-column mt-0 bg-white divide-y-2 divide-black divide-opacity-25">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <Image
                alt="Logo of Dynamic Solution Innovators Ltd."
                src={props.post.feature_image}
                width="100"
                height="70"
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="w-full md:w-1/2 pt-10 md:pt-0 md:pl-16">
              <div className="flex-auto text-4xl md:text-5xl">
                {props.post.title}
              </div>
              <div className="font-body my-8 border-b border-black pb-8 italic ">
                {props.post.excerpt}
              </div>
            </div>
          </div>
          <div
            className={`post-content font-body border-none mt-4 mb-8 py-8 md:p-12 text-justify ${
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

export default SingleProject;
