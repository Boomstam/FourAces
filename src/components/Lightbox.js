import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <div>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.node.sizes.src}>
              <a href={img.node.sizes.src} alt="Composer Image" onClick={e => this.handleClick(e, i)}>
                <StyledImg sizes={img.node.sizes}/>
              </a>
            </GalleryItem>
          ))}
        </Gallery>
        </div>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <LightboxContent>
            <Img sizes={images[selectedImage].node.sizes} />
            <Controls>
              <Button onClick={this.closeModal}>Close</Button>
                <Button onClick={this.goBack} disabled={selectedImage === 0}>
                  Previous
                </Button>
                <Button onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                  Next
                </Button>
            </Controls>
          </LightboxContent>
          <TextBackground>
              lorem ipsum
              lorem ipsum
              lorem ipsum
              lorem ipsum
            </TextBackground>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: contain;
  }
`

const Gallery = styled.div`
  margin: 0vh 6vw 0vh 6vw;
  padding: 3vh 0vw 5vh 0vw;

  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
`

const GalleryItem = styled.div`
  display: inline-block;
  position: relative;
`

const Button = styled.button`
  display: block;
  background-image: radial-gradient(white, black);
  text-color: yellow;
`

const LightboxModal = styled.div`
  position: fixed;
  width: 100%; 
  height: 100%;
  top:0;
  left:0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, 0%);
  margin: 15px;
`

const Controls = styled.div`
  margin: 0vh 0vw 0vh 0vw;
  display: flex;
  height: 10vh;
  
  justify-content: space-between;
`

const TextBackground = styled.div`
  margin: 80vh 10vw 10vh 10vw;
  background-color: white;
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
