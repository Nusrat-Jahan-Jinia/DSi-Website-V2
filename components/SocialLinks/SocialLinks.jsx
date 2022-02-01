import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
const SocialLinks = (param) => {
  // Work in progress
  return (
    <div className="text-4xl text-bright-blue  pb-4">
      <div
        className={`inline-block mr-4 ${param.twitter === null && "hidden"}`}
      >
        <Link href={param.twitter === null ? "#" : param.twitter}>
          <a target="_blank" className="cursor-pointer">
            <FaTwitter />
          </a>
        </Link>
      </div>
      <div
        className={`inline-block mr-4 ${
          param.linkedin === null ? "hidden" : ""
        }`}
      >
        <Link href={param.linkedin === null ? "#" : param.linkedin}>
          <a target="_blank" className="cursor-pointer">
            <FaLinkedin />
          </a>
        </Link>
      </div>
      <div
        className={`inline-block mr-4 ${
          param.facebook === null ? "hidden" : ""
        }`}
      >
        <Link href={param.facebook === null ? "#" : param.facebook}>
          <a target="_blank" className="cursor-pointer">
            <FaFacebook />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default SocialLinks;
