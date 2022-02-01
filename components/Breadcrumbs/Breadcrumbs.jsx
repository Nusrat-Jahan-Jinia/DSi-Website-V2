import Link from "next/link";
const Breadcrumbs = (props) => {
  const home_link = (
    <>
      <Link href="/">
        <a title="" className="inline-block mr-2">
          Home
        </a>
      </Link>
      <span className="inline-block mr-2 ">/</span>
    </>
  );
  let links = [];
  if (props.crumbs) {
    links = props.crumbs.map((item) => {
      return (
        <>
          <Link href={item.link}>
            <a title={item.title} className="inline-block mr-2">
              {item.title}
            </a>
          </Link>
          <span className="inline-block mr-2">/</span>
        </>
      );
    });
  }

  return (
    <>
      {props.inlcudeHome === "true" && home_link}
      {props.crumbs && links}
      <span className="text-gray-400 ">{props.current && props.current}</span>
      {/* <hr className="height:2px;border-width:0;color:red;background-color:red" /> */}
      <hr className="mt-2 border-e34040" />
    </>
  );
};
export default Breadcrumbs;
