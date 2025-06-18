import { useState } from 'react'
import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar';
import searchImages from './api';
import './App.css';



function App() {
  const [images,setImages]=useState([]);

  const handleSubmit = async (term) =>{
    // console.log('inside a handle submit ',term);
    // const result = searchImages(term);
    // console.log(result);
    // need await because searchImages is async function

    const result = await searchImages(term);
    // console.log(result);

    setImages(result);

  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
