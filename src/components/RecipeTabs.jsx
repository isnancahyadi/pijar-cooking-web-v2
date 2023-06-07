import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

import axios from "axios";

const RecipeTabs = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/my-recipe`)
      .then((response) => setRecipeList(response?.data?.payload));
  }, []);

  return (
    <>
      {/* <!-- Start of tabs navs --> */}
      <ul
        className="title-recipe-tabs nav nav-tabs nav-justified mb-3"
        id="ex1"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
          >
            My Recipe
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link text-primary-emphasis"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
          >
            Saved Recipe
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link text-primary-emphasis"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
          >
            Liked Recipe
          </a>
        </li>
      </ul>
      {/* <!-- End of tabs navs --> */}

      {/* <!-- Start of tabs content --> */}
      <div className="container-fluid">
        <div className="tab-content mt-5" id="ex2-content">
          <div
            className="tab-pane fade show active"
            id="ex3-tabs-1"
            role="tabpanel"
            aria-labelledby="ex3-tab-1"
          >
            <div className="row">
              {recipeList.map((item) => (
                <RecipeCard
                  title={item?.title}
                  image={item?.image}
                  id={item?.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of tabs content --> */}
    </>
  );
};

export default RecipeTabs;
