import { baseURL, config } from "./services";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Book from "./components/Book";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Genre from "./components/Genre";


function App() {
  const [books, setBooks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(baseURL, config);
      setBooks(response.data.records);
      console.log(response);
    };
    
    getBooks();
  }, []);


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
          <Form setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/genre/:genreName">
          <Genre books={books}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
