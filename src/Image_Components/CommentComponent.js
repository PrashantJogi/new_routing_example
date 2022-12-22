import React from 'react';
import { useLocation, useParams } from 'react-router';
import DataArr from '../Constants/DataArr';
const CommentComponent = () =>{
  const location = useLocation();
  console.log(location,"location");
  let id = useParams();
  console.log(id,"id");
  let commantTitle = Object.values(id).toString();
  // console.log(commantTitle, "commantTitle");
  let comment = "";

  if(commantTitle){
    DataArr &&
      DataArr.map((data) => {
        return data.comments.map((Cdata) => {
          
          if(Cdata.commntTitle===commantTitle){
            
              comment=
              <div>
                 <h3>{Cdata.fullCommnt}</h3>
              </div>
            
          }
        });
      }); 
    
  }

  return (
    <>
      <br />
      {commantTitle}
        {comment}
      
    </>
  );
}

export default CommentComponent;