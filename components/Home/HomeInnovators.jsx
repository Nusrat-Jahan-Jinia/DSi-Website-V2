import moment from "moment";
import Link from "next/link";
import { grabImageURLFromGhostPost } from "../../scripts/utility";
const HomeInnovators = (props) => {
  let innovators = props.dataset.map((post) => {
    let img = grabImageURLFromGhostPost(post.html, "onRegularList");
    return (
      <div key={post.id} className="flex flex-col items-center">
        <div className="flex justify-center py-4 px-12">
          <img
            className="w-32 bg-white rounded-full"
            src={img ? img : "/images/rectangle3.jpg"}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold font-body text-white">
            {post.meta_title}
          </p>
          <p className="text-xs font-body text-white items-center mt-2">
            {post.meta_description}
          </p>
        </div>
      </div>
    );
  });

  return <>{innovators}</>;
};

export default HomeInnovators;
