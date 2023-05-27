import React from "react";

const CarouselItem = () => {
  return (
    <>
      <div className="carousel-item active">
        <img
          src="/assets/img/recipe/spicy-fried-tubtim-fish-salad-spicy.jpg"
          className="d-block w-100 menu-recipe"
        />
        <div className="carousel-caption d-block">
          <h2 className="h2-home" style={{ textShadow: "2px 2px 4px #000000" }}>
            Spicy Fried Tubtim Fish Salad Spicy
          </h2>
          <p className="fs-5" style={{ textShadow: "2px 2px 4px #000000" }}>
            For those of you who want to enjoy protein and nutritious dishes
            with a spicy sensation
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/assets/img/recipe/sinigang-na-lechon-kawali.jpg"
          className="d-block w-100 menu-recipe"
        />
        <div className="carousel-caption d-block">
          <h2 className="h2-home" style={{ textShadow: "2px 2px 4px #000000" }}>
            Sinigang na Lechon Kawali
          </h2>
          <p className="fs-5" style={{ textShadow: "2px 2px 4px #000000" }}>
            A typical Filipino dish made from pork that is fried using flour and
            then combined with soup
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/assets/img/recipe/penne-pasta-tomato-sauce-with-chicken-tomatoes.jpg"
          className="d-block w-100 menu-recipe"
        />
        <div className="carousel-caption d-block">
          <h2 className="h2-home" style={{ textShadow: "2px 2px 4px #000000" }}>
            Penne Pasta Tomato Sauce with Chicken
          </h2>
          <p className="fs-5" style={{ textShadow: "2px 2px 4px #000000" }}>
            A pasta from Italy cooked with tomato sauce and sliced chicken
          </p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
