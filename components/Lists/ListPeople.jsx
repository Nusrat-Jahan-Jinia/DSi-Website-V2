import moment from "moment";
import { Fragment } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { grabImageURLFromGhostPost } from "../../scripts/utility";

const List = (props) => {
  let regularposts = props.data.map((item) => {
    let image = grabImageURLFromGhostPost(item.html, "onRegularList")
      ? grabImageURLFromGhostPost(item.html, "onRegularList")
      : item.feature_image;

    return (
      <Link key={item.id.toString()} href={props.path + item.id}>
        <div
          key={item.id.toString()}
          className="flex-none w-32 md:w-48 cursor-pointer "
        >
          <div className="rounded-lg w-full hover:shadow-md">
            <Image
              alt={item.title}
              src={image ? image : "/images/rectangle3.jpg"}
              width="500"
              height="500"
              layout="responsive"
              objectFit="cover"
              quality={100}
              className="rounded-lg bg-gray-300 p-8 "
            />
          </div>
          <div className=" text-center">
            <h2 className="text-xl font-medium my-6 mb-0">{item.meta_title}</h2>
            <p className="font-body text-sm">{item.meta_description}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <section className="w-full">
      <div className="flex flex-wrap justify-center gap-20">{regularposts}</div>
    </section>
  );
};
export default List;
