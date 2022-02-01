import moment from "moment";
import Link from "next/link";
import Image from "next/image";
const HomeNews = (props) => {
  let homeItems = props.news.map((item) => {
    return (
      <div key={item.id} className="mx-4 my-6">
        <div className="flex flex-col sm:flex-row">
          <div className="flex gap-3 flex-col sm:flex-row w-full mt-2 sm:mt-4">
            <Link href={"news/story/" + item.id}>
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
            <div className="group md:w-2/3 break-words flex flex-col pl-4">
              <Link href={"news/story/" + item.id}>
                <p className="text-black font-headline text-xl font-extrabold m-0"> {item.title}</p>
              </Link>
              <p className="w-full text-xs mt-1 font-headline font-extralight">
                {moment(item.updated_at).format("MMMM Do YYYY")}
              </p>
            </div>
          </div>
        </div>
        <p className="font-headline w-11/12 mt-4 text-base text-gray-600 font-normal">{item.excerpt}</p>
      </div>
    );
  });
  return <div>{homeItems}</div>;
};

export default HomeNews;
