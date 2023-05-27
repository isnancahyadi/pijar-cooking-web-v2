import React from "react";

const RecipeCard = (props) => {
  const { title, image } = props;

  return (
    <>
      <div className="col-md-4 col-xs-12">
        <a href="" style={{ textDecoration: "none" }}>
          <div
            className="my-recipe mt-2 mb-2"
            style={{
              backgroundImage: `url('/assets/img/recipe/${image}')`,
            }}
          >
            <h2
              className="text-white"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              {title}
            </h2>
          </div>
        </a>
      </div>
    </>
  );
};

export default RecipeCard;
