import React from "react";
import { useLocation } from "react-router-dom";

import "../style/Detail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import recipeList from "../models/menu.json";

const Detail = () => {
  const detailRecipe = recipeList.menu;
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);

  React.useEffect(() => {
    const currentSlug = location?.pathname?.split("/")[2];

    window.scrollTo(0, 0);

    setCurrentRecipe(detailRecipe.find((res) => res.slug === currentSlug));
  }, []);

  return (
    <div className="Detail">
      <Navbar />

      {/* <!-- Start of section --> */}
      <section id="content">
        <div className="container-fluid">
          <h1 className="text-center text-primary-emphasis">
            {currentRecipe?.title}
          </h1>
          <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <img
              src={`/assets/img/recipe/${currentRecipe?.image}`}
              className="main-image"
            />
          </div>
          <div className="container animate__animated animate__fadeIn">
            <div className="row mt-5 justify-content-md-center">
              <div className="col-6">
                <h2 className="h2-detail mb-3">Ingredients</h2>
                <ul className="fs-5">
                  <li>400 grams chicken fillet</li>
                  <li>1 cup brown basmati rice</li>
                  <li>1/2 red bell pepper</li>
                  <li>1/2 onion</li>
                  <li>1 cup mushroom</li>
                  <li>1 carrot</li>
                  <li>1 head broccoli</li>
                  <li>2 table spoon fresh basil</li>
                  <li>1/2 cup canned whole baby corn</li>
                  <li>1 cup unsweetened plant-based milk</li>
                  <li>1,5 table spoon maple syrup</li>
                  <li>2 tea spoon curry paste</li>
                  <li>1/2 tea spoon coconut extract (optional)</li>
                </ul>
              </div>
              <div className="col-6">
                <h2 className="h2-detail mb-3">Directions</h2>
                <ul className="fs-5">
                  <li>
                    Cook the rice. Add the dry rice to a pot. You will need
                    twice as much water as rice. Add water to the pot, cover,
                    and bring to a boil over medium-high heat. Reduce heat to
                    low and simmer for 35-45 minutes or until the water is
                    absorbed and the rice is soft. Check on the rice
                    periodically to prevent any sticking or burning on the
                    bottom. Remove from the heat, fluff with a fork, set aside.
                    Looking for a faster option? Cook in a rice cooker or just
                    use pre-cooked/frozen rice
                  </li>
                  <li>
                    Produce prep: Wash the produce and pat dry. Slice onion,
                    mushrooms, and carrots. Chop broccoli into florets. De-seed
                    and dice red pepper. Finely chop basil. Drain and rinse baby
                    corn
                  </li>
                  <li>
                    In a large saute pan over high heat, cook the onion and
                    chicken. Slowly reduce the heat as the onion browns,
                    stirring continuously
                  </li>
                  <li>
                    Add the mushrooms, broccoli, red pepper, carrots, and baby
                    corn. Cover and cook until their colors turn bright and they
                    still have snap/crunch
                  </li>
                  <li>
                    In a saucepan over medium-high heat, combine the non-dairy
                    milk, coconut extract (if using), maple syrup, and curry
                    paste. Stir until warm and well combined
                  </li>
                  <li>
                    Pour over the cooked vegetables and serve with the brown
                    basmati rice and garnish with basil
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container animate__animated animate__fadeIn">
            <h2 className="h2-detail mt-5 mb-3">Video Directions</h2>
            <iframe
              className="video-directions"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                currentRecipe?.video?.split("=")[1]
              }`}
              title={`How to Make - ${currentRecipe?.title}`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* <!-- End of section --> */}

      <Footer />
    </div>
  );
};

export default Detail;
