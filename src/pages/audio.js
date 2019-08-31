import React from "react";
import Layout from "../components/layout";
import Spotify from "../components/spotify";
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Audio.png";

class Audio extends React.Component {

render(){
  return(
<Layout>
  <Spotify/>
  <ZoomBgImg imgName={imgName}/>
  </Layout>
)}
  }

export default Audio;