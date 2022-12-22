import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import DataArr from "../Constants/DataArr";
// import CommentComponent from "./CommentComponent";
import "./style.css";

function ImageComponent() {
  let location = useLocation();

  let id = useParams();

  let srcImage = Object.values(id).toString();

  let image = "";

  if (srcImage) {
    DataArr &&
      DataArr.map((data) => {
        if (data.title === srcImage) {
          image = (
            <div>
              <h1>{data.title}</h1>
              <img src={data.imgSrc} alt={data.title} />
              <p>Description : -</p>
              <h3>{data.description}</h3>
              <p>Comments : -</p>
              <ol>
                {data.comments &&
                  data.comments.map((data) => {
                    return (
                      <Link
                        to={`${location.pathname}/${data.commntTitle}`}
                        target="_blank"
                      >
                        <li>{data.commntTitle}</li>
                      </Link>
                    );
                  })}
              </ol>
            </div>
          );
        }
      });
  }

  return (
    <>
      <h1>ImageComponent</h1>
      {image}
    </>
  );
}

export default ImageComponent;
