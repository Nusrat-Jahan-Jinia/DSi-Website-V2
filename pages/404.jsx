import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mid-column-content">
      <h1 className="hero-header text-center">😊 Oopsy Daisy</h1>
      <p className=" my-4 mx-8 text-center">
        The requested content cannot be found. Please try another page.
      </p>
      <Link href={"/"}>
        <a className="flex w-44 bg-yellow-btn hover:bg-blue-royalblue hover:text-white rounded-full px-6 py-1 mb-8 text-xs font-button font-semibold mx-auto items-center justify-center my-8">
          BACK TO HOMEPAGE
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
