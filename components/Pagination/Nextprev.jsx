import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Nextprev = (props) => {
  const PREVIOUS_LINK = props.prev ? props.prev.id : null;
  const NEXT_LINK = props.next ? props.next.id : null;

  return (
    <div className="flex flec-col mt-12">
      <Link href={PREVIOUS_LINK ? PREVIOUS_LINK : "-1"}>
        <a
          className={`flex-auto text-bright-blue flex  ${
            PREVIOUS_LINK
              ? "cursor-pointer"
              : "opacity-25 cursor-default pointer-events-none"
          }`}
        >
          <BsChevronLeft className=" text-5xl md:text-3xl inline-block" />
          <span className="invisible md:visible md:text-md mb-1">Previous</span>
        </a>
      </Link>

      <Link href={NEXT_LINK ? NEXT_LINK : "-1"}>
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

export default Nextprev;
