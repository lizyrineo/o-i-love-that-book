import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import GenreSelect from "./GenreSelect";
import CurrentSelection from "./CurrentSelection";
import "./Homepage.css"

const Homepage = (props) => {
  let { id } = useParams();
  //display current book club selection
  const [currentSelection, setCurrentSelection] = useState([]);
  const [genreSelect, setGenreSelect] = useState([]);

  useEffect(() => {
    let getSelection = async () => {
      let response = await axios.get(`${baseURL}/${id}`),
        config;
      setCurrentSelection(response.data.records);
      console.log(getSelection);
    };
    getSelection();
  }, []);

  const genreObj = props.books.reduce((genreObj, book) => {
    console.log(book)
    if (!genreObj[book.fields.genreName[0]]) {
      genreObj[book.fields.genreName[0]] = [];
    }
    genreObj[book.fields.genreName[0]].push(book);
    return genreObj;
  }, {});
  console.log(genreObj);
  //return the image, title, author and description to Homepage
  return (
    <div className="current-selection">
      {currentSelection.fields && (
        <div>
          <h1>{currentSelection.fields.title}</h1>
          <img
            className="book-cover"
            src={currentSelection.fields.bookCover}
          ></img>
          <h3 className="title">{currentSelection.fields.title}</h3>
          <h3 className="author">{currentSelection.fields.author}</h3>
          <p>{currentSelection.fields.description}</p>
          {/* search bars for title and author */}
          <h2>
            <label htmlFor="title-search">Search by Title</label>
            <input
              type="text"
              value={props.inputValue}
              onChange={props.titleFilterOnChange}
            />
          </h2>
          {/* search bars for title and author */}
          <h2>
            <label htmlFor="author-search">Search by Author</label>
            <input
              type="text"
              value={props.inputValue}
              onChange={props.authorFilterOnChange}
            />
          </h2>
          {/* <GenreSelect /><button onClick={props.fields.genre}>${props.fields.genre}</button> */}
          ))
        </div>
      )}
      {Object.keys(genreObj).map((genre) => {
        return <GenreSelect genre={genre} />;
      })}
    </div>
  );
};

export default Homepage;
