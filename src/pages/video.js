import { React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import YouTube from 'react-youtube';
 
class Example extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
        <Layout>
      <YouTube
        videoId="YfZsr8xt3f4"
        opts={opts}
        onReady={this._onReady}
      />
      </Layout>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example;