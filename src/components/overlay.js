import Img from 'gatsby-image';
import { Keyframes } from "react-spring/renderprops";
import React from 'react';
import Media from 'react-media'
import storage from '../storage/storage'

function randomSpeed()
{
  var speed = (Math.random() * 1500) + 1000;

  return speed;
}

const Anim = Keyframes.Spring(async next => {
  
  var speed = randomSpeed();

    while (true) {
      await next({
        config: {duration: speed},
        from: { opacity: 0.1 },
        to: { opacity: 0.4 },
      })
      await next({
        config: {duration: speed},
        from: { opacity: 0.4 },
        to: { opacity: 0.1 },
      })
    }
  })

class Overlay extends React.Component {

  constructor(props) {

    super(props);

    this.state = { visible: true };

    var imgName = props.image.fluid.originalName;

    var index = storage.composerStorage.sceneIndex(imgName);

    //console.log(imgName + "_" + index);

    storage.callbackStorage.toggleOverlays[index] = this.toggleOverlay.bind(this);
  }

  componentDidMount()
  {
    //console.log("updated_" + this.state.visible); 
  }

componentDidUpdate()
{
  //console.log("updated_" + this.state.visible); 
}

  toggleOverlay()
  {
    //console.log("Pre toggle overlay_" + this.state.visible);
    if(this.state.visible === true)
    {
      this.setState({ visible: false });
      
      return;
    }
    this.setState({ visible: true });
  }

    render() {

      if(this.state.visible === false)
      {
        //console.log("falsch")
        return(<div/>);
      }
      //console.log("richtig")
      return (
        <Media query={{ minWidth: storage.constStorage.smartphoneWidth }}>
        {matches =>
          matches ? (
            <Anim>
                {props =>(
                  <Img
                  sizes={this.props.image.sizes}
                  style={{
                  ...props,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100vw",
                  zIndex: -2,
                }}>
              </Img>
                )}
              </Anim>
          ) : (
            <Anim>
                {props =>(
                  <Img
                  sizes={this.props.image.sizes}
                  style={{
                  ...props,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "220vw",
                  zIndex: -2,
                }}>
              </Img>
                )}
              </Anim>
          )
        }
      </Media>    
      );
    }
}

export default Overlay;