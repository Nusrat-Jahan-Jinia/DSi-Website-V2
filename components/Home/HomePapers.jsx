import Image from "next/image";
import Link from "next/link";
const HomePapers = (props) => {
  let homeItems = props.paper.map((item) => {
    return (
      <div key={item.id} className="flex md:w-5/12 mt-2 sm:mt-4 items-center">
        <div className="self-start w-1/3  mr-8">
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

        <div className="self-start w-2/3 flex flex-col">
          <Link href={"whitepapers/whitepaper/" + item.id}>
            <a className="text-bright-blue font-semibold font-body w-full text-md sm:text-lg md:text-xl leading-tight">
              {item.title}
            </a>
          </Link>
          <p className="w-full font-body text-sm text-gray-600 leading-tight">
            {item.meta_title}
          </p>
          <p className="w-full font-body text-sm  leading-tight">
            {item.meta_description}
          </p>
        </div>
      </div>
    );
  });
  return <>{homeItems}</>;
};

export default HomePapers;
