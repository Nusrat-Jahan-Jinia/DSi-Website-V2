import Link from "next/link";
import Image from "next/image";
const FeaturedItems = (props) => {
  let featuredItems = props.data.map((item) => {
    return (
      <Link href={props.path + item.id}>
        <div
          key={item.id}
          className="group flex flex-1 flex-col group rounded-lg p-6 bg-gray-100 hover:bg-white hover:shadow-md cursor-pointer"
        >
          <Image
            alt={item.title}
            src={
              item.feature_image ? item.feature_image : "/images/rectangle3.jpg"
            }
            width="277"
            height="196"
            layout="responsive"
            objectFit="fill"
            quality={100}
          />

          <a className="text-2xl font-medium my-6">{item.title}</a>

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
    <div className="flex flex-col md:flex-row gap-4 md:flex-row">
      {featuredItems}
    </div>
  );
};
export default FeaturedItems;
