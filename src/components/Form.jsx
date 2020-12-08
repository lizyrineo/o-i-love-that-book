import axios from 'axios';
import React, { useState } from 'react';
import { baseURL, config } from '../services';

const Form = (props) => {
  const [review, setReview] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(baseURL, { fields: review }, config);
    props.setToggleFetch((prev) => !prev);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          review="review"
          value={review}
          omChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <button onClick="review()">Submit Review</button>
      </form>
    </div>
  );
};

export default Form;
