import logo from './logo.svg';
import './App.css';


function App() {
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [description, setDescription] = useState([]);
  const [genre, setGenre] = useState([]);


  useEffect(() => {
    const getBook = async () => {
      const response = await axios.get(baseURL, config);
      console.log(response);
      setBook(response.data.records);
      console.log(response);
    };
    
    getBook();
  }, [toggleFetch]);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
