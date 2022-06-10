import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';



function App() {

  let [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios.get('/gallery')
        .then((response) => {
          setGalleryList(response.data)
        })
        .catch((err) => {
            alert('ERR in the GET');
            console.log(err);
        })
}

  useEffect(() => {
   // need get items here
   getGallery();
}, [])


const renderInfo = (thingsToRender) => {
  console.log('things to render', thingsToRender)
  return (
        <li>{thingsToRender.description}</li>
  )
}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        galleryList={galleryList}
        renderInfo={renderInfo}
        />
      </div>
    );
}

export default App;
