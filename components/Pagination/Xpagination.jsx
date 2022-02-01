import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = (props) => {
  const CURRENT_INDEX = props.currentIndex;
  const TOTAL_PAGES = props.totalPages;
  const PREVIOUS_LINK = props.prevPage;
  const NEXT_LINK = props.nextPage;

  // Error check for missing props
  if (!CURRENT_INDEX || !TOTAL_PAGES) {
    console.error("Pagination > " + "Invalid values.");
    return <></>;
  }
  // Don't showup if only one page
  if (TOTAL_PAGES == 1) {
    console.log("Pagination > " + "only one page");
    return <div className="flex flec-col mt-12">&#160;</div>;
  }

  // Create pagination bullets
  let bullets = [];
  for (let i = 0; i < TOTAL_PAGES; i++) {
    let bullet;
    if (CURRENT_INDEX == i + 1) {
      bullet = (
        <a key={i.toString()} className="cursor-default">
          <div className="rounded-full h-2 w-2 bg-blue-royalblue rounded-full mx-2 mt-4">
            &#160;
          </div>
        </a>
      );
    } else {
      bullet = (
        <Link key={i.toString()} href={props.path + (i + 1)}>
          <a className="group cursor-pointer">
            <div className="rounded-full h-2 w-2 bg-gray-300 rounded-full mx-2 mt-4 group-hover:bg-gray-500 ">
              &#160;
            </div>
          </a>
        </Link>
      );
    }
    bullets.push(bullet);
  }

  return (
    <div className="flex flec-col mt-12">
      <Link href={PREVIOUS_LINK ? String(PREVIOUS_LINK) : "-1"}>
        <a
          className={`flex-auto text-bright-blue flex  ${
            PREVIOUS_LINK
              ? "cursor-pointer"
              : "opacity-25 cursor-default pointer-events-none"
          }`}
        >
          <BsChevronLeft className=" text-5xl md:text-3xl inline-block" />{" "}
          <span className="invisible md:visible md:text-md mb-1">Previous</span>
        </a>
      </Link>
      {bullets}
      <Link href={NEXT_LINK ? String(NEXT_LINK) : "-1"}>
        <a
          className={`flex-auto text-bright-blue flex items-end justify-end ${
            NEXT_LINK
              ? "cursor-pointer"
              : "opacity-25 cursor-default pointer-events-none"
          }`}
        >
          <span className="invisible md:visible md:text-md mb-1">Next</span>
          <BsChevronRight className="text-5xl md:text-3xl inline-block" />
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
