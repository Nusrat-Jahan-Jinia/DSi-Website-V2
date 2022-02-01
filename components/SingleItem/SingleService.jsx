import Link from "next/link";
import Image from "next/image";

const SingleService = (props) => {
  let services = props.data.map((item) => {
    return (
      <>
        <div className="my-12 flex flex-col md:flex-row my-12">
          <div className="w-full md:w-1/4">
            <Image
              alt="post feature image."
              src={item.feature_image}
              width="170"
              height="170"
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className="post-content w-full md:w-3/4 pt-10 md:pt-10 md:pl-16">
            <div id={item.id} className="flex-auto text-4xl md:text-5xl">
              {item.title}
            </div>
            <div className="font-body my-8">{item.excerpt}</div>
            <div
              className="font-body my-8 pb-8"
              dangerouslySetInnerHTML={{
                __html: item.html,
              }}
            ></div>
          </div>
        </div>
      </>
    );
  });

  return <div className="mid-column mt-0 bg-white">{services}</div>;
};

export default SingleService;
