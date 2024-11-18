import { useState } from 'react';
import './App.css';
import { audios } from './audiodata';
import Audiofiles from './components/Audiofiles'
import Player from './components/Player';
function App() {
  const [songs,setSongs] = useState(audios);
  const [currentIndex,setCurrentIndex] = useState(null);
  const [currentSong,setCurrentSong] = useState(songs[0]) 
  const getSongData = (song,index) =>{
    setCurrentIndex(index)
    setCurrentSong(song)

  }
  const nextSong = () => {
    setCurrentIndex(currentIndex + 1)
    setCurrentSong(audios[currentIndex + 1])
  }
  const prevSong = () => {
    setCurrentIndex(currentIndex - 1)
    setCurrentSong(audios[currentIndex - 1])
  }
  
  return (
    <>
    <div className='player-main'>
    <Player 
    currentSong={currentSong}
    currentIndex={currentIndex}
    nextSong={nextSong}
    prevSong={prevSong}
    />
    </div>
   
    
 </>
  );
}

export default App;
