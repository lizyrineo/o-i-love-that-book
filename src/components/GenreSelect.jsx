import React from 'react';
import { Link } from 'react-router-dom';
import BookInfo from './BookInfo';


const GenreSelect = (props) => {
  console.log(props);
  return (
    <div>

    <Link to={`/genre/${props.genre}`}>
    
    
      </Link>
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