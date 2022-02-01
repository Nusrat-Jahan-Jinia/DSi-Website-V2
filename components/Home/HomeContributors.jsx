import Image from "next/image";
const HomeContributors = (props) => {
  let homeItems = props.contributor.map((item) => {
    return (
      <div
        key={item.id}
        className="flex mt-2 sm:mt-4 items-center border-b border-gray-800 pb-8 hover:border-white"
      >
        <div className="h-24 w-24 mr-8">
          <Image
            alt={item.title}
            src={
              item.feature_image ? item.feature_image : "/images/rectangle3.jpg"
            }
            width="200"
            height="200"
            layout="responsive"
            objectFit="fill"
            quality={100}
          />
        </div>
        <div className="break-words flex flex-col">
          <p className="font-body font-extrabold sm:text-2xl text-lg md:text-2xl lg:text-2xl text-white">
            {item.title}
          </p>
          <p className="w-4/5 font-body text-base font-medium mt-1 text-white">{item.excerpt}</p>
        </div>
      </div>
    );
  });
  return <>{homeItems}</>;
};

export default HomeContributors;
