import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DemoCarousel(props) {
  const data1 = props.src.map((imagen) => {
    return (
      <div className="mx-12 my-14" key={imagen}>
        <img src={imagen} alt="" />
      </div>
    );
  });
  return (
    <div className="flex justify-center flex-col items-center my-14 mx-8">
      <Carousel showArrows={true}>{data1}</Carousel>
    </div>
  );
}

export default DemoCarousel;
