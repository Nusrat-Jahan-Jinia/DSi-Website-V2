import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-royalblue">
      <div className="flex py-10 px:5 items-center mid-column xl:mx-auto">
        <div className="flex flex-col w-1/3 items-start">
          <div className="flex flex-col items-start text-white">
            <Link href="/projects/1/">
              <a
                title="Projects"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                Projects
              </a>
            </Link>
            <Link title="White Papers" href="/whitepapers/1">
              <a
                title="White papers"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                White Papers
              </a>
            </Link>
            <Link href="/casestudies/1">
              <a
                title="Case Studies"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                Case Studies
              </a>
            </Link>
            <Link href="/people/1">
              <a
                title="People"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                People
              </a>
            </Link>
            <Link href="/campus">
              <a
                title="Campus"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                Campus
              </a>
            </Link>
            <Link href="/news/1">
              <a
                title="News"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                News
              </a>
            </Link>
            <Link href="/blogs/1">
              <a
                title="Blog"
                className="hover:text-yellow-btn font-headline text-xs sm:text-sm md:text-base"
              >
                Blog
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div>
            <p className="text-white font-semibold font-body text-xs sm:text-sm md:text-base">
              Connect with us
            </p>
          </div>
          <div className="flex mt-3">
            <div className="text-3xl md:text-4xl text-white  pb-4">
              <div className="inline-block ">
                <Link href="https://www.facebook.com/DynamicSolutionInnovators">
                  <a target="_blank" className="cursor-pointer">
                    <FaTwitter />
                  </a>
                </Link>
              </div>
              <div className="inline-block mx-4">
                <Link href="https://www.linkedin.com/company/dsinnovators/">
                  <a target="_blank" className="cursor-pointer">
                    <FaLinkedin />
                  </a>
                </Link>
              </div>
              <div className="inline-block">
                <Link href="https://www.facebook.com/DynamicSolutionInnovators">
                  <a target="_blank" className="cursor-pointer">
                    <FaFacebook />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex w-1/3 flex-col items-end">
          <Link href="/">
            <a title="Go back to Home">
              <img
                alt="Logo of Dynamic Solution Innovators Ltd."
                src="/images/dsi_logo_footer.png"
                width="70"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
