import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import "./BookInfo.css";
import Form from "./Form";

const BookInfo = (props) => {
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);

  let getBookInfo = async () => {
    let response = await axios.get(`${baseURL}/books/${props.bookId}`, config);
    setBook(response.data);
    console.log(response);
  };

  let getBookReview = async () => {
    let response = await axios.get(`${baseURL}/reviews/`, config);
    setReviews(response.data.records);
    console.log(response.data.records);
  };

  useEffect(() => {
    getBookInfo();
    getBookReview();
  }, []);

  //this filters all reviews for reviews specific to the book that was selected
  const bookReviews = reviews.filter((review) => {
    console.log(review.fields.books);
    return review.fields.books && review.fields.books[0] === book.id;
  });
  console.log(bookReviews);

  //this creates JSX for each book review
  const bookReviewsJSX = bookReviews.map((review) => {
    return (
      <div>
        <p>{review.fields.review}</p>
      </div>
    );
  });

  return (
    <div className="modal-content">
      {book.fields && (
        <div className="book-info-text">
          <button
            className="closeModal"
            onClick={() => props.setModalOpen(false)}
          >
            &times;
          </button>
          <h1>{book.fields.title}</h1>
          <h2>{book.fields.author}</h2>
          <div className="book-info-box">
            <img
              className="book-info-image"
              src={book.fields.bookCover}
              alt={book.fields.bookCover}
            ></img>
            <div>
              <h5>{book.fields.description}</h5>
              <Form
                bookId={props.bookId}
                setToggleFetch={props.setToggleFetch}
              />
            </div>
            {bookReviewsJSX}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInfo;
