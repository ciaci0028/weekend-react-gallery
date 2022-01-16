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

  // Axios post for posting new photo
  const addNewPic = ((newPic) => {
    console.log('in addNewPic', newPic);

    axios.post('/gallery', newPic)
      .then((response) => {
        console.log('post success', response);
        fetchGallery();
      })
      .catch((error) => {
        console.log('post failure', error);
      })
  });


  // Axios put for sending likes to server
  const addLike = (event) => {
    console.log('in addLike function', event)

    // axios request for put
    axios.put(`/gallery/like/${event.id}`)
      .then(response => {
        console.log('put success', response);
        fetchGallery();
      })
      .catch( (err) => {
        console.log('put failure', err);
      })


  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p className='yo'>Hello this is a test</p>
        <GalleryList 
          galleryList={galleryList}
          addLike={addLike}
          addNewPic={addNewPic}
        />
      </div>
    );
}

export default App;
