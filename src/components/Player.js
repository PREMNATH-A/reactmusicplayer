import React,{ useState ,useRef, useEffect} from 'react'
import Music from '../assets/music.jpg'
 import { 
    BiSkipPreviousCircle,
    BiPlayCircle,
    BiPauseCircle,
    BiSkipNextCircle

 } from "react-icons/bi";
export default function Player({
  currentSong,
  CurrentIndex,
  nextSong,
  prevSong
}) {
  
    const [Isplaying,setIsplaying] = useState(false);
    const audioRef = useRef(null);
    const toggleplay = () => {
        setIsplaying(!Isplaying)
    }

    useEffect(() =>{
      if(Isplaying){
        audioRef.current.play();
      }
      else{
        audioRef.current.pause();
      }
    },[Isplaying, CurrentIndex])
  return (
    <div>
      <audio
      ref={audioRef}
      src={currentSong.music}
      >

      </audio>
        <div className='player-card'>
                <div className='image-container'>
                <img className='music-image' src={Music} alt='Music' />
                </div>
                 <h2 className='activeSong-name'>{currentSong.name}</h2>
                 <h4 className='activeArtist-name'>{currentSong.Creator}</h4> 
            <div className='control-icon'>
        < BiSkipPreviousCircle 
        color='white'
        className='icons'
        size={40}
        onClick={prevSong}
         />
        
         {Isplaying ? (
          <BiPauseCircle
          color='#6200ea'
          className='icons'
          size={50}
          onClick={toggleplay}
           />

         ) : (
          <BiPlayCircle
          color='#6200ea'
          className='icons'
          size={50}
          onClick={toggleplay}
           />
         )}
        
         <BiSkipNextCircle
        color='white'
        className='icons'
        size={40}
        onClick={nextSong}
         />
         </div>
        </div>
    </div>
  )
}
