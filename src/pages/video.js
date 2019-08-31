import { React, Component} from "react";
import Layout from "../components/layout";
import YouTube from '../components/youtube';
import ZoomBgImg from '../components/zoomBgImg';

const imgName = "Video.png";

class Video extends Component {
  
/*

    const opts = {

      width: this.state.width * windowPercentageWidth,
      height: this.state.height * windowPercentageHeight,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
*/
  render() {

    return (
        <Layout>
      <YouTube/>
      <ZoomBgImg imgName={imgName}/>
      </Layout>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
/*<YouTube
      videoId="PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10"//"YfZsr8xt3f4"
      opts={opts}
      onReady={this._onReady}
    />*/
export default Video;
