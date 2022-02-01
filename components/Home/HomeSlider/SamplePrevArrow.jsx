import { BsChevronLeft } from "react-icons/bs";
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft className=" text-5xl md:text-3xl inline-block" />
    </div>
  );
};

export default SamplePrevArrow;
