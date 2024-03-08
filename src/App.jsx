import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trending from './Trending/Trending'
import Search from './Search/Search'
import Emoji from './Emoji/Emoji'

// const giphyApiKey = 'qgDuVF2oQiWg2IRGLQZmEoTVOXmhdfpc';
export default function App() {
  //manage other app states here 
  return (
    <div className="App">
      <h1>GIPHY App</h1>
      <Trending />
      <Emoji />
      <Search />
      {/* Other components or elements */}
    </div>
  );
}


