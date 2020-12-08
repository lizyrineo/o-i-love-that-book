import React from 'react';
import { useParams } from "react-router-dom";

const Genre = (props) => {
  //useParams reads the ":id" from the URL 
  const { genreName } = useParams();

  const genreObj = props.books.reduce((genreObj, book) => {
    if (!genreObj[book.fields.genreName[0]]) {
      genreObj[book.fields.genreName[0]] = [];
    }
    genreObj[book.fields.genreName[0]].push(book);
    return genreObj;
  }, {}); 
  if (genreObj[genreName] === undefined) {
  return <h1>Loading...</h1>
}
  return (
    <div>
      <h1>{genreName}</h1>
      {genreObj[genreName].map(book => {
        return (
          <div>
          <img className="bookCover" src={book.fields.bookCover} alt={book.fields.title}/>
          <p>{book.fields.title}</p>
          </div>
          // console.log(genreObj)
  
      )})}
    </div>
  );
};

export default Genre;