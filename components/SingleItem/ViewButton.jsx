import Link from "next/link";
const ViewButton = (props) => {
  return (
    <Link href={props.path}>
      <button className="flex bg-blue-royalblue  m-auto rounded-full px-4 py-1 text-base md:text-base px-5 py-2 font-medium font-button text-white items-center">
        View all Items
      </button>
    </Link>
  );
};

export default ViewButton;
