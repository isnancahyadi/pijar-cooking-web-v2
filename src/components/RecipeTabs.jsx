import React from "react";
import RecipeCard from "../components/RecipeCard";

const RecipeTabs = () => {
  return (
    <>
      {/* <!-- Start of tabs navs --> */}
      <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
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
              <RecipeCard
                title="American Shrimp Fried Rice with Chili Fish Sauce"
                image="american-shrimp-fried-rice-with-chili-fish-sauce.jpg"
              />
              <RecipeCard
                title="Chicken Curry Black Cup with Rice Noodles"
                image="chicken-curry-black-cup-with-rice-noodles.jpg"
              />
              <RecipeCard
                title="Penne Pasta Tomato Sauce with Chicken Tomatoes"
                image="penne-pasta-tomato-sauce-with-chicken-tomatoes.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of tabs content --> */}
    </>
  );
};

export default RecipeTabs;
