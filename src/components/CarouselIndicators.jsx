import React from "react";

const CarouselIndicators = (props) => {
  const { k } = props;

  return (
    <>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={k}
        className={k === 0 ? "active" : ""}
        // aria-current="true"
        aria-label={`Slide ${k + 1}`}
      ></button>
    </>
  );
};

export default CarouselIndicators;
