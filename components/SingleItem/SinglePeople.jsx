import Link from "next/link";
import Nextprev from "../../components/Pagination/Nextprev";
import Image from "next/image";
import SolicalLinks from "../../components/SocialLinks/SocialLinks";
import {
  grabImageURLFromGhostPost,
  removeImageFromGhostPost,
} from "../../scripts/utility";

const SinglePeople = (props) => {
  // Grab main image
  let image = (() => {
    if (grabImageURLFromGhostPost(props.post.html, "onProfilePage")) {
      return grabImageURLFromGhostPost(props.post.html, "onProfilePage");
    } else if (grabImageURLFromGhostPost(props.post.html, "onRegularList")) {
      return grabImageURLFromGhostPost(props.post.html, "onRegularList");
    } else {
      item.feature_image;
    }
  })();
  return (
    <>
      <section id="Main" className="w-full">
        <div key={props.post.id}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <Image
                alt={props.post.title}
                src={image ? image : "/images/rectangle3.jpg"}
                width="960"
                height="1200"
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="flex w-full md:w-1/2 pl-0 md:pl-8 lg:pl-16 ">
              <div className="self-end">
                <div className="font-headline items-center font-semibold text-black text-2xl sm:text-2xl md:text-4xl mb-1 pt-8">
                  {props.post.meta_title}
                </div>
                <div className="text-gray-600">
                  {props.post.meta_description}
                </div>
                <div className="py-4">{props.post.excerpt}</div>
                <SolicalLinks
                  twitter={props.post.twitter_title}
                  linkedin={props.post.twitter_description}
                  facebook={props.post.canonical_url}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <Nextprev next={props.next} prev={props.prev} path={props.path} />
          </div>
          <hr className="mt-2 border-e34040" />
          <div className="mid-column mt-0 py-12">
            <h2 className="text-4xl ">About me</h2>
          </div>
          <div
            className="bg-white post-content pb-8 font-body text-2-column"
            dangerouslySetInnerHTML={{
              __html: removeImageFromGhostPost(
                removeImageFromGhostPost(props.post.html, "onProfilePage"),
                "onRegularList"
              ),
            }}
          ></div>
        </div>
        <div className="mid-column my-12">
          <Link href={props.path}>
            <button className="flex bg-blue-royalblue m-auto rounded-full px-4 py-1 text-xs md:text-xs font-medium font-button text-white items-center">
              View all Innovators
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SinglePeople;
