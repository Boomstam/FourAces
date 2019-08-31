import React from 'react';
import storage from '../storage/storage';
import styled from 'styled-components';
import Img from 'gatsby-image';

const crossName = "Cross.png";
const currency = "€";
const priceSeparator = " - ";

export default class Order extends React.Component {

    constructor(props){
        
        super(props);

        this.state = { orderData: props.orderData }
    }

    handleClose()
    {
      this.props.closeToDefault();
    }

    updateInput(index, value){

        let orderData = this.state.orderData;

        orderData[index] = value;

        this.setState( { orderData: orderData } );
    }

    addItem(index){

        let orderData = this.state.orderData;

        orderData[index] = orderData[index] + 1;

        this.setState( { orderData: orderData } );
    }

    getTotalAmount(){

        let orderData = this.state.orderData;
        let productData = this.props.productData;

        let amount = 0;
        
        for(let i = 0; i < productData.length; i++){
            
            amount += productData[i].price * orderData[i];
        }
        return amount;
    }

    render(){
        
        let cross = storage.imageStorage.getImageByName(crossName);

        let orderData = null;

        if(this.state === null){

            this.setState( { orderData: this.props.orderData } );
            orderData = this.props.orderData;

        } else {

            orderData = this.state.orderData;
        }
        let productData =this.props.productData;
        let currentProduct = this.props.currentProduct;
        let text = this.props.text;
        //console.log("TEXT_" + JSON.stringify(text))
        return(
            <StyledOrder>
                <CrossContainer
                onClick={this.handleClose.bind(this)}>
            <Cross sizes={cross}/>
          </CrossContainer>

            <Products>
          {productData.map((product, i) => 
            <ProductLine>
                {i === 0 &&
                    <TopMargin style={{ marginTop: "20vh" }}/>
                }
                <ProductName>{product.title}</ProductName>
                <Price>{priceSeparator + product.price + currency}</Price>
                <Amount 
                type="number"
                value={orderData[i]}
                min={0}
                onChange={e => this.updateInput(i, e.target.value)}/>
            </ProductLine>
          )}
          </Products>
            <Total>{text.totalTag}</Total>
            <TotalAmount>{this.getTotalAmount() + currency}</TotalAmount> 
            </StyledOrder>
        )
    }
}

const StyledOrder = styled.div`
    
    margin: 0vh 0vw 20vh 0vw;
`

const CrossContainer = styled.div`
    position: absolute;
    left: 75vw;
`

const Cross = styled(Img)`
    width: 3vw;
    z-index: 3;
    cursor: pointer;
    &:hover {
        width: 4vw;
    }
`

const TopMargin = styled.div`

    
`

const Products = styled.div`

`

const ProductLine = styled.div`

    height: 2vhh;
    margin: 5vh 0vw 5vh 30vw;
`

const ProductName = styled.div`


display: inline;
`

const Amount = styled.input`

position: absolute;
left: 60vw;

display: inline;
width: 5vw;
`

const Price = styled.div`
display: inline;
    
`

const Total = styled.div`
margin: 0vh 0vw 0vh 30vw;
display: inline;
    
`

const TotalAmount = styled.div`
position: absolute;
left: 60vw;

display: inline;
    
`

const ProceedButton = styled.div`

    
`

const Disclaimer = styled.div`

    
`