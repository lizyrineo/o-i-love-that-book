import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
import "./CurrentBook.css";

const CurrentBook = (props) => {
  let { id } = useParams();
  const [currentBook, setCurrentBook] = useState({});

  //api call for a single book returned
  useEffect(() => {
    let getBook = async () => {
      let response = await axios.get(`${baseURL}/current/`, config);
      setCurrentBook(response.data.records[0]);
    };
    getBook();
  }, [id]);

  return (
    <div>
      <div className='book-container'>
        {currentBook.fields && <>
          <h1 className='current-book-title'>{currentBook.fields.title}</h1>
          <img
            className='current-book-cover'
            src={currentBook.fields.bookCover} alt={currentBook.fields.title}></img>
          <h3 className='current-book-author'>
            {currentBook.fields.author}</h3>
      <p className="description">
        {currentBook.fields.description}
      </p>
            
        </>
        
   
        }
      </div>
    </div>

  );
};

export default CurrentBook;