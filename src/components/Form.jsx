import axios from 'axios';
import React, { useState } from 'react';
import { baseURL, config } from '../services';

const Form = (props) => {
  const [review, setReview] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(`${baseURL}/reviews`, { fields: { review, books: [props.bookId] } }, config);
    props.setToggleFetch((prev) => !prev);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}/>
            
            <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
