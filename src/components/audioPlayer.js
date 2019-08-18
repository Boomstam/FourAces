import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {
  
  state = {
    selectedImage: 0,
  }
  
  render() {
    const fadeTime = 2;
    
    const { audio } = this.props

    return (
      <div>
       {fadeTime}
      </div>
    )
  }
}

export default AudioPlayer;

AudioPlayer.propTypes = {
  audio: PropTypes.array.isRequired,
}

/*
  <Sound
      url={sound}
      playStatus={Sound.status.PLAYING}
      playFromPosition={10000}
      muted={false}
    />
*/

/*{audio.map((sound, i) => (
              <source src={sound.node.publicURL.src}>
          )
          )
          }*/

          /*
           <h1>
          Test
        </h1>
        <h1>
          {audio.length}
        </h1>

        <h1>
        {audio.map((sound, i) => (
              <h1 key={sound.node.name}>
              {sound.node.name}
               URL:{sound.node.publicURL}
              </h1>
          ))}
        </h1>
        
        <audio>
        {audio.map((sound, i) => (
              <source key={sound.node.name} src={sound.node.publicURL}></source>
          ))}
        </audio>*/