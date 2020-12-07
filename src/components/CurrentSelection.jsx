import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { baseURL, config } from "../services";

const CurrentSelection = (props) => {
  const [currentBook, setCurrentbook] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  useEffect(() => {
    const getCurrent = async () => {
      const response = await axios.get(baseURL, config);
      currentBook(response.data.records);
      console.log(response);
    };
  
    // return currentSelection(() => {
      
    // });
  
  }, [])
};
  
export default CurrentSelection;