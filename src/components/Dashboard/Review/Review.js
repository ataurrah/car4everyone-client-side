
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';



const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth()

  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
  const onSubmit = data => {
    const review = data.review
    const name = user.displayName
    const img = user.photoURL
    fetch(`https://murmuring-inlet-82514.herokuapp.com/review`, {

      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ rating, name, review, img })
    }).then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setRating(0)
          alert("Thank You")
          reset()

        }
      })

  }

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("review",)} />

        <input type="submit" />
      </form>


      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  );
};

export default Review;