import Link from "next/link";
import Image from "next/image";

const List = (props) => {
  let regularposts = props.data.map((item) => {
    return (
      <Link href={props.path + item.id}>
        <div
          key={item.id.toString()}
          className="group flex flex-1 gap-4 flex-col md:flex-row cursor-pointer rounded-lg p-6 bg-gray-100 hover:bg-white hover:shadow-md fixed-height-div"
        >
          <div className="w-full md:w-1/3 overflow-hidden">
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
          </div>
          <div className="w-full md:w-2/3 overflow-hidden">
            <a className="text-2xl font-bold my-6">{item.title}</a>
            <p className="text-1xl font-bold py-4">{item.meta_title}</p>
            <div
              className="mb-12 font-body text-sm overflow-ellipsis overflow-hidden"
              dangerouslySetInnerHTML={{ __html: item.excerpt }}
            ></div>

            <Link href={props.path + item.id}>
              <button className="uppercase flex bg-blue-royalblue rounded-full px-8 py-2 font-bold text-md font-button text-white mx-auto items-center opacity-0 group-hover:opacity-100  mt-6 mr-0">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <section>
      <div className="flex flex-wrap flex-col gap-8">{regularposts}</div>
    </section>
  );
};
export default List;
