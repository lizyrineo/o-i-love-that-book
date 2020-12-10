import axios from 'axios';
import React, { useState } from 'react';
import { baseURL, config } from '../services';
import "./Form.css";

const Form = (props) => {
  const [review, setReview] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(`${baseURL}/reviews`, { fields: { review, books: [props.bookId] } }, config);
    props.setToggleFetch((prev) => !prev);
  }
  return (
    <div>
      <h3>Share your thoughts here!</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="review-box"
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}/>
            
        <button type="submit">Submit</button>
        <h2>Here is what other readers are saying...</h2>
      </form>
    </div>
  );
}

export default Form;
