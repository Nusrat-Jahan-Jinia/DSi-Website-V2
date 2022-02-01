import Link from "next/link";
import Image from "next/image";
const SingleItem = (props) => {
  return (
    <>
      <section id="Main" className="md:-mt-20 relative w-full">
        <div className="mid-column box-shadow-thin p-12 bg-white ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-auto text-4xl md:text-5xl">
              {props.post.title}
            </div>
            <div className="flex-none ">
              <Link href={props.path}>
                <button className="flex bg-blue-royalblue m-auto rounded-full px-4 py-1 text-xs md:text-xs font-medium font-button text-white items-center">
                  View all items
                </button>
              </Link>
            </div>
          </div>
          <div className="font-body my-8">{props.post.excerpt}</div>
          <Image
            alt={props.post.title}
            src={props.post.feature_image}
            width="1"
            height="1"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
          <div
            className="post-content mid-column-content py-8 md:p-12 font-body"
            dangerouslySetInnerHTML={{
              __html: props.post.html,
            }}
          ></div>
        </div>
        <div className="mid-column-content my-12">
          <Link href={props.path}>
            <button className="flex bg-blue-royalblue m-auto rounded-full px-4 py-1 text-xs md:text-xs font-medium font-button text-white items-center">
              View all items
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
