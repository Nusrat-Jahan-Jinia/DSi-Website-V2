import Link from "next/link";
import Image from "next/image";

const FeaturedItems = (props) => {
  let featuredItems = props.data.map((item) => {
    return (
      <Link key={item.id} href={props.path + item.id}>
        <div className="flex flex-1 flex-col group rounded-lg p-6 bg-gray-100 hover:bg-white hover:shadow-md cursor-pointer">
          <Image
            alt={item.title}
            src={
              item.feature_image ? item.feature_image : "/images/rectangle3.jpg"
            }
            width="823"
            height="1235"
            layout="intrinsic"
            objectFit="cover"
            quality={100}
          />
          <h2 className="text-2xl font-medium mt-6 mb-0">{item.meta_title}</h2>
          <div className="mt-2 mb-6 font-body text-sm overflow-ellipsis overflow-hidden italic">
            {item.meta_description}
          </div>
          <div
            className="mb-12 font-body text-sm overflow-ellipsis overflow-hidden"
            dangerouslySetInnerHTML={{ __html: item.excerpt }}
          ></div>
          <a className="opacity-0 group-hover:opacity-100 ">View Detail</a>
        </div>
      </Link>
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-4  md:flex-row">
      {featuredItems}
    </div>
  );
};
export default FeaturedItems;
