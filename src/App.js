import { baseURL, config } from "./services";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Book from "./components/CurrentBook";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Genre from "./components/Genre";



function App() {
  const [books, setBooks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(`${baseURL}/books`, config);
      setBooks(response.data.records);
      console.log(response);
    };
    
    getBooks();
  }, [toggleFetch]);

  useEffect(() => {
    const getReview = async () => {
      const resp = await axios.get(`${baseURL}/reviews`, config);
      setReview(resp.data.records);
      console.log(resp);
    };
    getReview();
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Homepage books={books} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/Book">
        {books.map(book => (
          <Book books={books} key={book.id} setToggleFetch={setToggleFetch} />
        ))}
        </Route>
        <Route path="/Form">
          <Form reviews={review} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/Genre/:genreName">
          <Genre books={books} setToggleFetch={setToggleFetch}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
