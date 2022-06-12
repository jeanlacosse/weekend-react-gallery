import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import NewGalleryItem from '../NewGalleryItem/NewGalleryItem';


function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    // need get items here
    getGallery();
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('response', response)
        setGalleryList(response.data)
      })
      .catch((err) => {
        alert('ERR in the GET');
        console.log(err);
      })
  }

  const addGalleryItem = (itemToAdd) => {
    console.log('item to post', itemToAdd)
    axios.post('/gallery', itemToAdd)
      .then(() => {
        // here I rerun the axios.GET
        getGallery()
      })
      .catch(err => {
        alert('error adding item')
        console.log('err is', err)
      })
  }

  const onClickLike = (likeItem) => {
    console.log('likeItem.id', likeItem.id)
    axios.put(`/gallery/like/${likeItem.id}`)
      .then(() => {
        console.log('like success')
        getGallery();
      })
      .catch((err) => {
        console.log('like failed', err)
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <NewGalleryItem 
      addGalleryItem={addGalleryItem}
      />
      <GalleryList
        galleryList={galleryList}
        onClickLike={onClickLike}
      />
    </div>
  );
}

export default App;
