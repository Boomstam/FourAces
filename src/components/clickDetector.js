import React from 'react';
import CoorParser from '../helpers/CoorParser';
import Details from './Details';
import Media from 'react-media'
import storage from '../storage/storage'

const imgWidth = 512;
const imgHeight = 457;// 458?
const aspectRatio = 1.118610421836228;

const pixelMapSizeThresh = 99999;//used to filter the pixel map from the other .md files, since its waaay bigger. 

const smartphoneMod = 1 / 2.2;// based on the 220vw of the smartphone img

var coorParser = undefined;

class ClickDetector extends React.Component {

    constructor(props) {
        
        super(props);

        this.reset = this.reset.bind(this);
        
        this.setState({ index: -1, width: window.outerWidth });
      }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    try{

      this.setState({ index: -1, width: window.outerWidth });
    }
    catch{}
  }

    handleClick = (event) =>
    {
      let sizeMod = this.getSizeMod();
      
      let xCoor = event.nativeEvent.offsetX * sizeMod;
      let yCoor = event.nativeEvent.offsetY * sizeMod;

      yCoor = imgHeight - yCoor;

      let coorIndex = coorParser.getCoorIndex(xCoor, yCoor);

      this.setState({ index: coorIndex, width: window.outerWidth });

      if(coorIndex > -1)
      {
        storage.callbackStorage.toggleHomeImgPos(); 

        for(let i = 0; i < storage.composerStorage.numComposers; i++)
        {    
          storage.callbackStorage.toggleOverlays[i](); 
        }
      }
    }

    reset = () =>
    {
      this.setState({ index: -1, width: window.outerWidth });
    }
  
  getSizeMod() 
  {
    if(window.outerWidth > storage.constStorage.smartphoneWidth)
    {
      return imgWidth / this.state.width;
    }
    return (imgWidth / this.state.width) * smartphoneMod;
  }

    setCoors() {
      if (coorParser == undefined) {
        coorParser = new CoorParser();
      }
      const { coors } = this.props;

      var coorNode = coors.find(
        obj => { 
          var rawText = JSON.stringify(obj.node);
          
          return rawText.length > pixelMapSizeThresh;
        }).node;
      
      coorParser.setCoors(coorNode, imgWidth, imgHeight);
    }
    
    render() {
        
      this.setCoors();
      //console.log(this.state);
      if(this.state === null)
      {
        return (<div/>);
      }
      //console.log(this.state.index);
      if(this.state.index >= 0)
      {
        return (
          <div>

          <Details 
            customClick={this.reset.bind(this)}
            index={this.state.index}
            details={this.props}/>
            
            </div>
        )
      }
    return (
      <Media query={{ minWidth: storage.constStorage.smartphoneWidth }}>
          {matches =>
            matches ? (
              <div onClick={(e) => {this.handleClick(e)}}
          style=
          {{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100vw",
              height:"90vw",
              zIndex: "1"
              }}>
      </div>
            ) : (
              <div onClick={(e) => {this.handleClick(e)}}
          style=
          {{
              position: "absolute",
              left: 0,
              top: 0,
              width: "220vw",
              height:"182vw",
              zIndex: "1"
              }}>
      </div>
           )
          }
        </Media>
    )
  }
}

export default ClickDetector;

/*
setCoors() {
    if (coorParser == undefined) {
      coorParser = new CoorParser();
    }
    const { coors } = this.props;
    coorParser.setCoors(coors[pixelMapIndex].node, imgWidth, imgHeight);
  }
  
  */