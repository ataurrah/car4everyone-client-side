
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


  


const Review = () => {
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

    return (
        <div>
            <h1>{rating}</h1>
            

            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
    );
};

export default Review;