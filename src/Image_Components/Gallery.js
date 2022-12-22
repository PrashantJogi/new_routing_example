import React from "react";
import DataArr from "../Constants/DataArr";
import {
  
  Link,
  useLocation,
  useNavigate,
 
  
} from "react-router-dom";



function Gallery() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location, "location");

  
  const imgs = DataArr.map((e) => {
    return (
      <Link to={`${location.pathname}/${e.title}`} target="_blank">

        <img
          src={e.imgSrc}
          id={e.id}
          alt={e.title}
          width="250"
          height="200"
          
        />
      </Link>
      
    );
});


  return (
    <>
      <div id="images_div">{imgs}</div>
      
      <br />
      
    </>
  );
}

export default Gallery;
