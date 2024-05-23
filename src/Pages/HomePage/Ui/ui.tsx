import "./ui.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {Menu}  from "../../../Components/Menu/menu";
import { useRef, useState } from "react";

interface props {
  resultHandler: null | any;
  errorState: boolean;
}


const Ui: React.FC<props> =  ({resultHandler, errorState}) => {
  const sliderRef = useRef<Slider>(null);
  

  const topTenResults = resultHandler.length > 1 && resultHandler.filter((each: any, index: any) => index < 10 && each)
  console.log(topTenResults);

  

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div >
      <Menu/>
      <div className="container">
      <div className="navArrow">
        <button onClick={() => sliderRef.current?.slickPrev()} className="leftArrow">
          <FaChevronLeft />
        </button>
        <button onClick={() => sliderRef.current?.slickNext()} className="rightArrow">
          <FaChevronRight />
        </button>
      </div>

     {!errorState ? 
       resultHandler.length > 1 ? (
        <div className="sliderCont">
          <Slider ref={sliderRef} {...settings}>
            {topTenResults.map((eachResult: any) => (
              
              <div key={eachResult.trackMetadata.displayImageUri}>
                <img
                  className="images"
                  src={eachResult.trackMetadata.displayImageUri}
                  alt="thumbnail"
                />
                <h3 style={{color: "white", textAlign: "center"}}> {eachResult.trackMetadata.trackName}</h3>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <h1 style={{ color: "white" }}> Loading....</h1>
      )
      : <h1 style={{color: "white"}}> Error </h1>}
      
    </div>
    </div>
  );
};

export default Ui;
