import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingStars = () => {
  const [rate, setRating] = useState(0);
  
  const handleRating = () => {
    setRating(rate);
    
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = () => console.log();



  return (
    <div className="inline-flex">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
    </div>
  );
};

export default RatingStars;
