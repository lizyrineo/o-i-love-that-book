import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";

const Book = (props) => {
  let { id } = useParams();
  const [currentBook, setCurrentBook] = useState({});

  //api call for a single book returned
  useEffect(() => {
    let getBook = async () => {
      let response = await axios.get(`${baseURL}/${id}`, config);
      setCurrentBook(response.data);
    };
    getBook();
  }, []);

  return (
    <div>
      <h1>{currentBook.fields.title}</h1>
          <img
            className='book-cover'
            src={currentBook.fields.imgURL}></img>
          <h3 className='title'>
            {currentBook.fields.title}</h3>
          <h3 className='author'>
            {currentBook.fields.author}</h3>
          <p>
            {currentBook.fields.description}
          </p>
    </div>
  );
};

export default Book;