import React from 'react';
import { useParams } from "react-router-dom";

const Genre = (props) => {
  const { genreName } = useParams();

  const genreObj = props.books.reduce((genreObj, book) => {
    if (!genreObj[book.fields.genre]) {
      genreObj[book.fields.genre] = [];
    }
    genreObj[book.fields.genre].push(book);
    return genreObj;
  }, {}); 

  return (
    <div>
      <h1>{genreName}</h1>
      {genreObj[genreName].map(book => {
        return (
          <p>{book.fields.title}</p>
      
          // console.log(genreObj)
  
      )})}
    </div>
  );
};

export default Genre;