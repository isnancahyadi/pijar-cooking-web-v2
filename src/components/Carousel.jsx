import React from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide animate__animated animate__zoomIn"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <CarouselIndicators />
        </div>

        <div className="carousel-inner">
          <CarouselItem />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
