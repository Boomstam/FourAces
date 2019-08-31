import React from 'react';
import storage from '../storage/storage';
import styled from 'styled-components';
import Img from 'gatsby-image';

const crossName = "Cross.png";
const currency = "€";

const trackSeparator = ';';
const newLine = "\n";

export default class ProductDetails extends React.Component {

    constructor(props){
        
        super(props);
    }

    handleClose()
    {
      this.props.closeToDefault();
    }

    getDetails(product){

        let details = product.details;

        if(details.includes(trackSeparator) === false){

            return [ details ];
        }
        let detailColl = details.split(trackSeparator);

        return detailColl;
    }

    placeOrder(index){
        
        this.props.placeOrder(index);
    }

    render(){
        
        let cross = storage.imageStorage.getImageByName(crossName);
        let text = this.props.text;
        let product = this.props.product;

        let details = this.getDetails(product);

        return(
            <StyledDetails>

                <CrossContainer
                onClick={this.handleClose.bind(this)}>
            <Cross sizes={cross}/>
          </CrossContainer>
          
          
<Title>{product.title}</Title>
            <Details>
                {details.map((detail, i) => 
                <DetailLine>{detail}</DetailLine>) }
            </Details>
                <Price>{text.priceTag + " " + product.price + currency}</Price>
                <OrderLink onClick={(e) => {this.placeOrder(product.index)}}>
                        {text.title}
                    </OrderLink>
                    <StyledImg sizes={product.image}/>
            </StyledDetails>
        )
    }
}


const StyledDetails = styled.div`

    text-align: center;
    margin: 20vh 0vw 0vh 0vw;
`

const CrossContainer = styled.div`

    position: absolute;    
    left: 75vw;
`

const Cross = styled(Img)`

    width: 3vw;
    z-index: 3;
    cursor: pointer;

    &:hover{
        width: 4vw;
    }
`

const Title = styled.div`
    font-size: 2.5vw;
  font-weight: 700;
  margin: 0vh 0vw 10vh 0vw;
`

const Price = styled.div`
    
    margin: 10vh 0vw 5vh 0vw;
    font-size: 2vw;
`

const Details = styled.div`

    margin: 0vh 0vw 0vh 27vw;
`

const DetailLine = styled.div`

text-align: left;
`

const OrderLink = styled.div`
font-size: 3vw;
    &:hover{
        font-weight: 900;
    }
    margin: 3vh 0vw 7h 0vw;
    text-decoration: underline;
    cursor: pointer;
`

const StyledImg = styled(Img)`

    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    margin-bottom: 10vh;
    width: 30vw;
`