import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const WorkDomain = () => {
    return (

        <div className="grid mid-home-column">
        <div className="flex flex-col w-full text-center pb-9">
        <h2 className="pb-2 font-headline break-wordsmx-auto leading-tight font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl">
          How we work
        </h2>
        <p className="font-headline text-2xl font-normal text-neutral-600">Pick a Plan Tailord to Your Needs</p>
        </div>
        <div className="grid sm:grid-rows-1 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-3 gap-4">
          <div className="border border-black hover:bg-black text-black hover:text-white">
          <div className="text-center p-8 sm:h-72 md:h-80 lg:h-80 overflow-hidden">
              <div className="font-headline text-2xl font-extrabold py-4">
                Team augmentation
              </div>
              <div className="font-headline text-base font-normal ">
              DSi is experienced in developing 
              high-value end-to-end big data 
              environments, with machine learning and  data-science technologies  learning and  data-science technologies
              </div>
              <div className="text-right">
                <Image
                  alt="DSi"
                  src="/images/arrow-black.png"
                  width="20"
                  height="20"
                  layout="intrinsic"
                  objectFit="fill"
                  quality={100}
                />
              </div>
            </div>
            <div className="bg-black text-right hover:block pr-8 py-2">
            <Image
                alt="DSi"
                src="/images/arrow.png"
                width="20"
                height="20"
                layout="intrinsic"
                objectFit="fill"
                quality={100}
              />
            </div>
          </div>
          <div className="border border-black hover:bg-black text-black hover:text-white">
          <div className="text-center p-8 sm:h-72 md:h-80 lg:h-80 overflow-hidden">
              <div className="font-headline text-2xl font-extrabold py-4">
                End-to-end development
              </div>
              <div className="font-headline text-base font-normal">
              DSi is experienced in developing 
              high-value end-to-end big data 
              environments, with machine learning and  data-science technologies
              </div>
              <div className="text-right">
                <Image
                  alt="DSi"
                  src="/images/arrow-black.png"
                  width="20"
                  height="20"
                  layout="intrinsic"
                  objectFit="fill"
                  quality={100}
                />
              </div>
            </div>
            <div className="bg-black text-right hover:block pr-8 py-2">
            <Image
                alt="DSi"
                src="/images/arrow.png"
                width="20"
                height="20"
                layout="intrinsic"
                objectFit="fill"
                quality={100}
              />
            </div>
          </div>
          <div className="border border-black hover:bg-black text-black hover:text-white">
          <div className="text-center p-8 sm:h-72 md:h-80 lg:h-80 overflow-hidden">
              <div className="font-headline text-2xl font-extrabold py-4">
                Consultancy
              </div>
              <div className="font-headline text-base font-normal">
              DSi is experienced in developing 
              high-value end-to-end big data 
              environments, with machine learning and  data-science technologies
              </div>
              <div className="text-right">
                <Image
                  alt="DSi"
                  src="/images/arrow-black.png"
                  width="20"
                  height="20"
                  layout="intrinsic"
                  objectFit="fill"
                  quality={100}
                />
              </div>
            </div>
            <div className="bg-black text-right hover:block pr-8 py-2">
            <Image
                alt="DSi"
                src="/images/arrow.png"
                width="20"
                height="20"
                layout="intrinsic"
                objectFit="fill"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>  
    )
}
export default WorkDomain;