import Slider from "react-slick";
import Image from "next/image";
import SampleNextArrow from "../HomeSlider/SampleNextArrow";
import SamplePrevArrow from "../HomeSlider/SamplePrevArrow";
const HomeClientsSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let dsiClients = props.posts.map((item) => {
    return (
      <div key={item.id} className="w-16 md:w-32 mx-2 justify-center">
        <div className="flex justify-center p-0 md:p-4">
          <div className="w-20 md:w-32 bg-white rounded-full">
            <Image
              alt={item.title}
              src={
                item.feature_image
                  ? item.feature_image
                  : "/images/rectangle3.jpg"
              }
              width="150"
              height="150"
              layout="intrinsic"
              objectFit="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="p-0 md:px-8">
      <Slider {...settings}>{dsiClients}</Slider>
    </div>
  );
};

export default HomeClientsSlider;
