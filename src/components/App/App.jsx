import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList'

function App() {
  // Setting up variables
  let [galleryList, setGalleryList] = useState([]);

  // Only render once
  useEffect( () => {
    fetchGallery();
  }, []);

  // Render/fetch function
  const fetchGallery = () => {
    console.log('in fetchGallery');

    // Get axios to retrieve data
    axios.get('/gallery')
      .then(response => {
        console.log('get success', response.data);
        setGalleryList(response.data);
      })
      .catch( (err) => {
        console.log('get failure', err);
      })
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList}/>
      </div>
    );
}

export default App;
