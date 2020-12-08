import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import GenreSelect from "./GenreSelect";
import './Homepage.css'
import Header from "./Header"


const Homepage = (props) => {
  let { id } = useParams();
  //display current book club selection
  const [currentSelection, setCurrentSelection] = useState([]);
  // const [genreSelect, setGenreSelect] = useState([]);

  useEffect(() => {
    let getSelection = async () => {
      let response = await axios.get(`${baseURL}/${id}`, config);
      setCurrentSelection(response.data.records);
      console.log(getSelection);
    };
    getSelection();
  }, [id]);

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
    <div className="current-club-selection">
      {currentSelection.fields && (
          <h1>{currentSelection.fields.title}</h1>
          <img
            className="book-cover"
            src={currentSelection.fields.bookCover} alt={currentSelection.fields.title}
          ></img>
          <h3 className="title">{currentSelection.fields.title}</h3>
          <h3 className="author">{currentSelection.fields.author}</h3>
          <p>{currentSelection.fields.description}</p>
      )}
    </div>
          
    <div className="search-bars">
          <h2>
            <label htmlFor="title-search">Search by Title</label>
            <input
              type="text"
              value={props.inputValue}
              onChange={props.titleFilterOnChange}
            />
          </h2>
          <h2>
            <label htmlFor="author-search">Search by Author</label>
            <input
              type="text"
              value={props.inputValue}
              onChange={props.authorFilterOnChange}
            />
          </h2>
    </div>     
      )}
      {Object.keys(genreObj).map((genre, index) => {
        return <GenreSelect key={index} genre={genre} />;
      })
};

export default Homepage;
