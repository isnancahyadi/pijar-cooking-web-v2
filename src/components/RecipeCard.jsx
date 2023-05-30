import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { title, image } = props;

  return (
    <>
      <div className="col-md-4 col-xs-12 animate__animated animate__tada">
        <Link
          to={`/detail/${title?.toLowerCase()?.split(" ")?.join("-")}`}
          style={{ textDecoration: "none" }}
        >
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
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
