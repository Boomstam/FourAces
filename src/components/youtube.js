import ReactPlayer from 'react-player'
import React from 'react';
import styled from 'styled-components'

 //AIzaSyANuS9o3OcT_Upy9bZXFu27AKRdJ_PR4Rs
//PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10

const windowPercentageWidth = 0.6;
const windowPercentageHeight = 0.6;

class Youtube extends React.Component {

    constructor(props) {
        super(props);
      }
      
      componentDidMount() {
        
        this.updateWindowDimensions();
        
        this.setState({ width: window.outerWidth, width: window.outerHeight });

        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        try{
          this.setState({ width: window.outerWidth, height: window.outerHeight });
        }
        catch{}
      }

    render(){

    if(this.state === null)
    {
      return(<div/>);
    }
 //, list: "playlist" 
        return (
            <div>
                <Player>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=_wCeIEYfH94" 
                    config={{
                        youtube: {
                          playerVars: { 
                              showinfo: 1, 
                              listType: "playlist", 
                              list:"PLO3-7gCCLZHgEOwNbBADEW8SSnFWGwTAF",
                            }
                        }
                      }}
                      width={this.state.width * windowPercentageWidth}
                      height={this.state.height * windowPercentageHeight}
                      playing
                    ></ReactPlayer>
                    </Player>
            </div>
        )
    }
}

export default Youtube;

const Player = styled.div`
    position: fixed;
    left: 20vw;
    top: 20vh;
`