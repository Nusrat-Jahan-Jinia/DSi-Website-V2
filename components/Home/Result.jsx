import Link from "next/link";
import Image from "next/image";
const HomeService = (props) => {
  let homeItems = props.service.map((item) => {
    return (
      <Link key={item.id} href={"/services#" + item.id}>
        <div className="hover:border-black cursor-pointer p-8 flex flex-col items-center sm:items-start m-0 border-b-2 border-neutral-600">
          <div className="pb-4">
            <p className="font-extrabold font-headline text-5xl md:text-8xl sm:mb-4 sm:w-4/5 ml-5 sm:ml-0 block leading-10">
                {item.title}
            </p>
            <p className="font-headline block mb-0 md:mb-8 md:text-3xl leading-10 font-normal">
                {item.meta_title}
                </p>
            </div>
                <div className="font-headline block mb-0 md:mb-8 text-base md:text-2xl leading-8 font-normal text-neutral-600">
                {item.meta_description}
            </div>
        </div>
      </Link>
    );
  });
  return <>{homeItems}</>;
};

export default HomeService;
