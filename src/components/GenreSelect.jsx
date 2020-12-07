import React from 'react';
import { Link } from 'react-router-dom';

const GenreSelect = (props) => {
  console.log(props);
  return (
  <Link to={`/genre/${props.genre}`}>
    
    <button className="genreObj">{`${props.genre}`}</button>
   </Link>
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