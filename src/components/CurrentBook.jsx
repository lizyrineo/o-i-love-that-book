import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
import Homepage from "./Homepage";

const CurrentBook = (props) => {
  let { id } = useParams();
  const [currentBook, setCurrentBook] = useState({});

  //api call for a single book returned
  useEffect(() => {
    let getBook = async () => {
      let response = await axios.get(`${baseURL}/${id}`, config);
      setCurrentBook(response.data);
    };
    getBook();
  }, [id]);

  return (
    <div className='current-club-book'>
      <h1>{currentBook.fields.title}</h1>
          <img
            className='current-book-cover'
            src={currentBook.fields.imgURL} alt={currentBook.fields.title}></img>
          <h3 className='current-book-title'>
            {currentBook.fields.title}</h3>
          <h3 className='current-book-author'>
            {currentBook.fields.author}</h3>
          <p>
            {currentBook.fields.description}
          </p>
    </div>
  );
};

export default CurrentBook;