import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import Swal from "sweetalert2";

import "../style/AddRecipe.scss";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(
    "No selected file. Please select image recipe."
  );
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [video, setVideo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Recipe";
  }, []);

  const submitRecipe = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("image", image);
    formData.append("video", video);
    formData.append("direction", directions);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/recipe`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(() => {
        Swal.fire({
          title: "Add Success",
          text: "Add a recipe success",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Add Recipe Failed",
          text:
            error?.response?.data?.message ?? "Something wrong with our app",
          icon: "error",
        });
      });
  };

  return (
    <div className="AddRecipe">
      <Navbar />

      {/* <!-- Start of add recipe section --> */}
      <section id="form-input-recipe" className="container">
        <div className="row align-items-center justify-content-center">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="mb-3">
              <div
                id="form-file"
                className="align-items-center justify-content-center d-flex"
                onClick={() => document.querySelector(".img-selector").click()}
              >
                <input
                  class="form-control img-selector"
                  type="file"
                  onChange={({ target: { files } }) => {
                    if (files[0]) {
                      setImage(files[0]);
                    }
                    setFileName(files[0].name);
                    setPreview(URL.createObjectURL(files[0]));
                  }}
                  hidden
                />

                {image ? (
                  <img className="img-preview" src={preview} alt={fileName} />
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon="image"
                      style={{ fontSize: "125px", color: "rgb(215, 154, 255)" }}
                    />
                    <p>{fileName}</p>
                  </>
                )}
              </div>
            </div>
            <div className="mb-3">
              {/* title */}
              <input
                type="text"
                className="input-register form-control"
                placeholder="Enter title of recipe"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* ingredients */}
            <div className="mb-3">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter ingredients of recipe"
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              <small>
                *please use commas (,) and space ( ) to separate ingredient.
                <br />
                i.e. onion, salt, sugar
              </small>
            </div>
            {/* directions */}
            <div className="mb-3">
              <textarea
                class="form-control"
                rows="7"
                placeholder="Enter directions of recipe"
                onChange={(e) => setDirections(e.target.value)}
              ></textarea>
              <small>
                *please use semicolon (;) and space ( ) to separate step.
                <br />
                i.e. chop onion; add salt; add sugar
              </small>
            </div>
            {/* link video */}
            <div className="mb-3">
              <input
                type="text"
                className="input-register form-control"
                placeholder="Enter link video (youtube only)"
                onChange={(e) => setVideo(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button
                id="btn-register"
                type="submit"
                className="btn btn-primary btn-lg mt-4"
                onClick={submitRecipe}
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- End of add recipe section --> */}
    </div>
  );
};

export default AddRecipe;
