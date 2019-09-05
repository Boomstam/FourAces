import React from 'react';
import storage from '../storage/storage';
import OrderForm from './orderForm';
import styled from 'styled-components';
import Img from 'gatsby-image';

const crossName = "Cross.png";
const currency = "€";
const priceSeparator = " - ";

export default class Order extends React.Component {

    constructor(props){
        
        super(props);

        this.state = { orderData: props.orderData, hasContinued: false }
    }

    continue(){

        this.setState( { orderData: this.state.orderData, hasContinued: true } );
    }

    handleClose()
    {
      this.props.closeToDefault();

      this.setState( { orderData: this.state.orderData, hasContinued: false } );
    }

    updateInput(index, value){

        let orderData = this.state.orderData;

        orderData[index] = value;

        this.setState( { orderData: orderData, hasContinued: false } );
    }

    addItem(index){

        let orderData = this.state.orderData;

        orderData[index] = orderData[index] + 1;

        this.setState( { orderData: orderData, hasContinued: false } );
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

            this.setState( { orderData: this.props.orderData, hasContinued: false } );
            orderData = this.props.orderData;

        } else {

            orderData = this.state.orderData;
        }
        let productData =this.props.productData;
        let currentProduct = this.props.currentProduct;
        let text = this.props.text;;

        if(this.state.hasContinued === false){
            
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

            <ProceedButton 
                onClick={this.continue.bind(this)}>
                {text.proceedText}
                </ProceedButton>

            <Disclaimer>{text.disclaimer}</Disclaimer>
            </StyledOrder>
        )
            } else {

                return(
                    <OrderForm 

                        orderData={orderData}
                        productData={productData}
                        total={this.getTotalAmount() + currency}
                        closeToDefault={this.props.closeToDefault}/>
                )
            }
    }
}

const StyledOrder = styled.div`
    
    margin: 0vh 0vw 20vh 0vw;
`

/*@media (min-width: 650px) {
    left: 90vw;
}*/
const CrossContainer = styled.div`
    position: absolute;
    left: 88vw;
    @media (min-width: 650px) {
        left: 80vw;
    }
`

const Cross = styled(Img)`
    width: 5vw;
    @media (min-width: 650px) {
        &:hover {
            width: 4vw;
        }
    }
    z-index: 3;
    cursor: pointer;
    &:hover {
        width: 6vw;
    }
`

const TopMargin = styled.div`

    
`

const Products = styled.div`

`

const ProductLine = styled.div`
    @media (min-width: 650px) {
        margin: 5vh 0vw 5vh 30vw;
    }
    height: 2vh;
    margin: 5vh 0vw 5vh 15vw;
    

`

const ProductName = styled.div`


display: inline;
`

//display: inline;
const Amount = styled.input`

position: absolute;
left: 75vw;

width: 10vw;

    @media (min-width: 650px) {
        left: 60vw;
        width: 5vw;
    }
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

const ProceedButton = styled.button`
    display: block;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 30vw;
    height: 10vh;
    @media (min-width: 650px) {
        width: 10vw;
    }
`

const Disclaimer = styled.div`

    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 70vw;
    @media (min-width: 650px) {
        width: 50vw;
    }
    text-align: center;
    
`