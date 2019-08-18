import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Media from 'react-media';
import storage from '../storage/storage'

const absPos = "absolute";
const fixPos = "fixed";

class HomeImg extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = { position: absPos };

    storage.callbackStorage.toggleHomeImgPos = this.togglePosition.bind(this);
  }

  togglePosition()
  {
    if(this.state.position === absPos)
    {
      this.setState({ position: fixPos });

      return;
    }
    this.setState({ position: absPos });
  }

  render() {
    const { image } = this.props;

    return (

      <div>
       <Media query={{ minWidth: storage.constStorage.smartphoneWidth }}>
          {matches =>
            matches ? (
              <Img
              sizes={image.sizes}
              style={{//Styled component not working here...
                position: this.state.position,
                left: 0,
                top: 0,
                width: "100vw",
                zIndex:"-3",
              }}>
              </Img>
            ) : (
              <Img
              sizes={image.sizes}
              style={{
                position: this.state.position,
                left: 0,
                top: 0,
                width: "220vw",
                zIndex:"-3",
              }}>
              </Img>
            )
          }
        </Media>
        {this.props.children}
        </div>
        
    )
  }
}
HomeImg.propTypes = {
  images: PropTypes.array.isRequired,
}

export default HomeImg;