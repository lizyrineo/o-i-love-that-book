import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookInfo from "./BookInfo";
import "./Genre.css";

const Genre = (props) => {
  //useParams reads the ":id" from the URL
  const { genreName } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [bookId, setBookId] = useState("");

  const genreObj = props.books.reduce((genreObj, book) => {
    if (!genreObj[book.fields.genreName[0]]) {
      genreObj[book.fields.genreName[0]] = [];
    }
    genreObj[book.fields.genreName[0]].push(book);
    return genreObj;
  }, {});
  //modal function using state, see cite below
  const handleClick = (e) => {
    setBookId(e.target.id);
    setModalOpen(true);
  };

  if (genreObj[genreName] === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="genre-info">
      <h1 className="genre-name-font">{genreName}</h1>
      {genreObj[genreName].map((book) => {
        return (
          <div>
            <div className="book">
              <img
                className="bookCover"
                src={book.fields.bookCover}
                alt={book.fields.bookCover}
              />
              <div>
                <h1 className="book-stats" id={book.id} onClick={handleClick}>
                  {book.fields.title}
                </h1>
                <h1 className="book-stats" id={book.id} onClick={handleClick}>
                  {book.fields.author}
                </h1>
              </div>
            </div>
          </div>

          // console.log(genreObj)
        );
      })}

      {modalOpen ? (
        <BookInfo
          bookId={bookId}
          setModalOpen={setModalOpen}
          setToggleFetch={props.setToggleFetch}
        />
      ) : null}
    </div>
  );
};

export default Genre;

//modal functionality from Medium, "Reuseable Custom Modal with React JS" by Infinity Paul April 13, 2019
