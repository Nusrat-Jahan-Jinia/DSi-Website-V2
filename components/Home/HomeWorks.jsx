import Image from "next/image";
import Link from "next/link";
const HomeWorks = (props) => {
  let homeItems = props.work.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row w-5/6 mx-auto mt-10 bg-gray-100 hover:bg-white hover:shadow-lg p-5 rounded-lg fixed-height-div"
      >
        <div className="mr-8 overflow-hidden fixed-width-home-project">
          <Image
            alt={item.title}
            src={
              item.feature_image ? item.feature_image : "/images/rectangle3.jpg"
            }
            width="676"
            height="478"
            layout="responsive"
            objectFit="fill"
            quality={100}
          />
        </div>

        <div className="break-words flex flex-col">
          <div className="pb-8">
          <p className="text-black font-headline text-xl font-extrabold m-0">
            {item.title}
          </p>
            <p className="w-full font-body text-base mt-2">{item.meta_title}</p>
            <div className="font-headline block mb-0 md:mb-8 md:text-3xl leading-10 font-normal">
            {item.meta_description}
            </div>
          <p className="w-full font-body text-sm mt-2 text-gray-600 leading-tight">
            {item.excerpt}
            </p>
            </div>
          <Link href={"projects/project/" + item.id}  className="">
            <button className="flex px-4 py-8 font-body text-sm font-bold text-royalblue items-center justify-center mt-6 mr-0 right-0 border-t border-gray-200">
              GO TO PROJECT
            </button>
          </Link>
        </div>
      </div>
    );
  });
  return <>{homeItems}</>;
};

export default HomeWorks;
