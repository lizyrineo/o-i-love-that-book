import React from 'react';
import { Link } from 'react-router-dom';
import BookInfo from './BookInfo';


const GenreSelect = (props) => {
  console.log(props);
  return (
    <div>

    
      <div className="genre-select-container">
      <Link className="genre-link" to={`/genre/${props.genre}`} >
        <button className='genre-button'>{`${props.genre}`}</button>
        </Link>
        </div>
      
      </div>
  );
};

export default GenreSelect;

// const genres = [
  //   "Biography/Autobiography",
  //   "Classics",
  //   "Contemporary",
  //   "Cultural",
  //   "Drama",
  //   "Historical Fiction",
  //   "Mystery",
  //   "Sci-Fi",
  //   "Spirituality",
  //   "Suspense",
  //   "Women's Fiction/Chick-Lit",
  //   "Young Adult",
  // ];