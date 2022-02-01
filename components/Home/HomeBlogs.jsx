import moment from "moment";
import Link from "next/link";
import Image from "next/image";
const HomeBlogs = (props) => {
  let homeItems = props.blog.map((item) => {
    return (
      <div key={item.id} className="mx-4 my-6">
        <div className="flex flex-col sm:flex-row">
          <div className="flex gap-3 flex-col sm:flex-row w-full mt-2 sm:mt-4">
            <Link href={"blogs/post/" + item.id}>
              <a className="block w-full md:w-1/3">
                <Image
                  alt={item.title}
                  src={
                    item.feature_image
                      ? item.feature_image
                      : "/images/rectangle3.jpg"
                  }
                  width="370"
                  height="232"
                  layout="responsive"
                  objectFit="fill"
                  quality={100}
                />
              </a>
            </Link>
            <div className="group md:w-2/3 break-words flex flex-col">
              <Link href={"blogs/post/" + item.id}>
              <p className="text-black font-headline text-xl font-extrabold m-0"> {item.title}</p>
              </Link>
              <p className="w-full text-xs mt-1 font-headline font-medium">
              {item.meta_title} <span className="text-gray-400 stroke-2 font-extrabold mx-2">|</span>  {item.meta_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{homeItems}</div>;
};

export default HomeBlogs;
