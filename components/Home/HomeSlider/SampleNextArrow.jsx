import { BsChevronRight } from "react-icons/bs";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight className=" text-5xl md:text-3xl inline-block" />
    </div>
  );
};

export default SampleNextArrow;
