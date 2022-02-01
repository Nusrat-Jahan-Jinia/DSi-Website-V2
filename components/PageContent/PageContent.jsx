const PageContent = (props) => {
  return (
    <div
      className="bg-gray-700 md:px-6"
      style={{
        backgroundImage:
          "url('/_next/static/images/pattern-ff2d84dd4b9bbe9f3ab7b07bb9e3fa19.png')",
      }}
    >
      <div
        className="mid-column-content p-12 font-body text-white "
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  );
};
export default PageContent;
