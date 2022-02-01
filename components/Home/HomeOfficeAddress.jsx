// import icoLocation from "../../public/images/icon_location.jpg";
import Image from "next/image";

const HomeAddress = () => {
  return (
    <div className="mx-auto md:max-w-screen-md mt-16">
      <h2 className="flex flex-col items-center font-semibold font-headline text-2xl sm:text-3xl md:text-4xl my-4">
        Get In Touch
      </h2>
      <div className="flex flex-col items-center">
        <p className="mb-1 text-xs font-body sm:text-sm md:text-base">
          Drop us a line at
        </p>
        <p className="italic font-semibold font-body text-xs sm:text-sm md:text-base">
          info@dsinnovators.com
        </p>
      </div>
      <div className="flex py-8">
        <div className="flex flex-col items-center w-1/2 border-r border-gray-300">
          <div className="flex items-center my-4">
            <Image
              alt="dsi office location"
              src="/images/icon_location.jpg"
              width="32"
              height="42"
              layout="intrinsic"
              quality={100}
            />
            <p className="font-semibold font-body text-base md:text-xl ml-2">
              Dhaka Office
            </p>
          </div>
          <p className="break-words w-2/3 font-body text-xs sm:text-sm md:text-base">
            House 177, Lane 2, New DOHS Mohakhali, Dhaka 1206, Bangladesh
            Telephone: +88-02-9887041, +88017300-374-00
          </p>
        </div>
        <div className="flex flex-col items-center w-1/2 border-l border-gray-300">
          <div className="flex items-center  my-4">
            <Image
              alt="dsi office location."
              src="/images/icon_location.jpg"
              width="32"
              height="42"
              layout="intrinsic"
              quality={100}
            />
            <p className="font-semibold font-body text-base md:text-xl ml-2">
              USA Office
            </p>
          </div>
          <p className="break-words font-body w-2/3 text-xs sm:text-sm md:text-base">
            8201 164th Ave NE, Suite 200. Redmond WA 98052 Telephone:
            404-287-0730
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAddress;
