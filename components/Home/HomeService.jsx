import Link from "next/link";
import Image from "next/image";
const HomeService = (props) => {
  let homeItems = props.service.map((item) => {
    return (
      <Link key={item.id} href={"/services#" + item.id}>
        <div className="hover:bg-white hover:shadow-lg cursor-pointer px-8 flex flex-col items-center sm:items-start border border-indigo-100 m-0">
          <div className="w-20 my-4 lg:mt-6">
            <Image
              alt={item.title}
              src={
                item.feature_image
                  ? item.feature_image
                  : "/images/rectangle3.jpg"
              }
              width="200"
              height="200"
              layout="responsive"
              objectFit="fill"
              quality={100}
            />
          </div>
          <div className="pb-4">
          <p className="font-extrabold font-headline text-md sm:text-base md:text-lg lg:text-lg sm:mb-4 sm:w-4/5 ml-5 sm:ml-0 leading-relaxed block">
            {item.title}
          </p>
          <p className="font-headline block mb-0 md:mb-8 font-medium text-base leading-6">
            {item.excerpt}
            </p>
            </div>
        </div>
      </Link>
    );
  });
  return <>{homeItems}</>;
};

export default HomeService;
