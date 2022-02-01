import Slider from "react-slick";
import SampleNextArrow from "../HomeSlider/SampleNextArrow";
import Link from "next/link";
import SamplePrevArrow from "../HomeSlider/SamplePrevArrow";
import { grabImageURLFromGhostPost } from "../../../scripts/utility";
import Image from "next/image";
const HomeInnovators = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let dsiInnovators = props.posts.map((item) => {
    let img = grabImageURLFromGhostPost(item.html, "onRegularList");
    return (
      <Link key={item.id} href={`./people/innovator/${item.id}`}>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center p-0 md:py-4 md:px-12">
            <Image
              className="w-12 md:w-32 bg-white flex items-center justify-center"
              alt="slider image"
              src={img ? img : "/images/rectangle3.jpg"}
              width="150"
              height="150"
              layout="intrinsic"
              objectFit="fill"
              quality={100}
            />
          </div>
          <div className="flex flex-col items-center hidden md:block text-center">
            <p className="font-semibold font-body text-white text-center">
              {item.meta_title}
            </p>
            <p className="text-xs font-body text-white items-center mt-2 text-center">
              {item.meta_description}
            </p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="px-4 text-white">
      <Slider {...settings}>{dsiInnovators}</Slider>
    </div>
  );
};

export default HomeInnovators;
