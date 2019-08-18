import SpotifyPlayer from 'react-spotify-player';
import React from "react";
import styled from 'styled-components';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: "100%",
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 

class Spotify extends React.Component {

    render(){
      return(
          <Player>
    <SpotifyPlayer
      uri="spotify:album:6Z8ucC2nIYbEtnOCyMXrZU"
      size={size}
      view={view}
      theme={theme}/>
    
      <SpotifyPlayer
      uri="spotify:album:3HNTBYxmRSOrYYFdabWn3Z"
      size={size}
      view={view}
      theme={theme}/>
        <p>
        </p>
      </Player>
    )}
      }
    
    export default Spotify;

    const Player = styled.div`
    position: fixed;
    top: 15vh;
    left: 25vw;
      width: 52.5vw;
      height: 37.5vh;

    `