import React, { useRef } from 'react';

function Audio({ audioData, title, button }) {

  const audioRef = useRef(null);

  const play = () => {
    const audioElem = document.getElementsByClassName("audio-player-controls");

    for (let i = 0; i < audioElem.length; i++) {
      if (audioElem[i].dataset.playing === 'true') {
        audioElem[i].dataset.playing = 'false';
        audioElem[i].pause();
        break;
      };     
    };

    audioRef.current.dataset.playing = 'true';    
  };

  const pause = () => {
    audioRef.current.dataset.playing = 'false';
  };

  return (
    <div className="audio-player-container" role='presentation'>
      {/* <p className='audio-player-title'>{title}</p> */}
      <div className='audio-player-sub-container'>
        <audio 
          controls 
          className='audio-player-controls'
          ref={audioRef}
          onPlay={() => play()}   
          onPause={() => pause()} 
          data-playing='false' 
          title={`audio player for ${audioData}`}     
          aria-label={`audio player for ${audioData}`}   
        >
          <source 
            src={`./audio/${audioData}.mp3`} 
            type='audio/mpeg'
          />  
        </audio>   

        <a 
          className='audio-player-transcript'
          href={`./audio/transcript/${audioData}.html`} 
          target="_blank" 
          rel="noopener noreferrer"
          title={`audio transcript for ${audioData}`}
        >              
          <span aria-hidden="true" className="sr-only">{audioData}</span>
          <span className='audio-player-transcript-text'>{button}</span> 
          <span className='sr-only'>{`Opens in a new window`}</span>
        </a> 
      </div>
    </div>
  )
}

export default Audio;