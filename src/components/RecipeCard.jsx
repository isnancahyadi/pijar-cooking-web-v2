import React from "react";

const RecipeCard = () => {
  return (
    <>
      <div className="col-md-4 col-xs-12">
        <div
          className="my-recipe mt-2 mb-2"
          style={{
            backgroundImage:
              "url('/assets/img/recipe/spicy-fried-tubtim-fish-salad-spicy.jpg')",
          }}
        >
          <h2
            className="text-white"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            Spicy Fried Tubtim Fish Salad Spicy
          </h2>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
