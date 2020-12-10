import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import GenreSelect from "./GenreSelect";
import "./Homepage.css";
import "./GenreSelect.css";
import CurrentBook from "./CurrentBook";

const Homepage = (props) => {
  let { id } = useParams();
  //display current book club selection
  const [currentSelection, setCurrentSelection] = useState([]);
  // const [genreSelect, setGenreSelect] = useState([]);

  useEffect(() => {
    let getSelection = async () => {
      let response = await axios.get(`${baseURL}/books/${id}`, config);
      setCurrentSelection(response.data.records);
      console.log(getSelection);
    };
    getSelection();
  }, [id]);

  const genreObj = props.books.reduce((genreObj, book) => {
    console.log(book);
    if (!genreObj[book.fields.genreName[0]]) {
      genreObj[book.fields.genreName[0]] = [];
    }
    genreObj[book.fields.genreName[0]].push(book);
    return genreObj;
  }, {});
  console.log(genreObj);
  //return the image, title, author and description to Homepage
  return (
    <div className="home">
      <CurrentBook />
      <section>
        <h1 className='click-notice'>Click on a genre to see the books</h1>
        <div className="whole-container">
          {Object.keys(genreObj).map((genre, index) => {
            return <GenreSelect className="buttons" key={index} genre={genre} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
