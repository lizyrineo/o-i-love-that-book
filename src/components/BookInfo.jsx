import React, { useParams, useEffect, useState } from 'react';
import Axios from 'axios';
import { baseURL, config } from '../services';



const BookInfo = (props) => {
  let { id } = useParams();
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    let getBookInfo = async () => {
      let response = await Axios.get(`${baseURL}/${id}`, config);
      setBook(response.data.records);
      console.log(getBookInfo);
    };
    getBookInfo();
  }, [id]);

  return (
    <div className="book-info-text">
      {props.book.fields && (
        <div>
          <h1>{book.fields.title}</h1>
          <h2>{book.fields.author}</h2>
          <img className="book-info-image" src={book.fields.bookCover} alt={book.fields.bookCover}></img>
          <h5>{book.fields.description}</h5>
        </div>

      )}
      
    </div>
  );
};

export default BookInfo;