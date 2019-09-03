import React from 'react';
import storage from '../storage/storage';
import Order from './order';
import ProductDetails from './productDetails';
import styled from 'styled-components';
import Img from 'gatsby-image';

const textType = "Shop";

const tabulaRasaImgName = "TabulaRasa.jpg";
const forAcesImgName = "ForAces.jpg";
const odysseeImgName = "Odyssee.jpg";
const puzzleImgName = "Puzzle.png";

export default class Products extends React.Component {

    constructor(props){
        
        super(props);

        this.state = { currentProduct: -1, orderData: null };
    }

    placeOrder(index){

        let orderData = [0, 0, 0, 0]
        orderData[index] = orderData[index] + 1;

        this.setState({ currentProduct: -2, orderData: orderData });
    }

    closeToDefault(){

        this.setState( { currentProduct: -1, orderData: null } );
    }

    showDetails(index){
        
        let currentProduct = -1;
        
        if(this.state !== undefined){
            
            currentProduct = index;
        } 
        this.setState({ currentProduct: currentProduct, orderData: null });
    }

    getProductData(text){
        
        let tabulaRasaImg = storage.imageStorage.getImageByName(tabulaRasaImgName);
        let forAcesImg = storage.imageStorage.getImageByName(forAcesImgName);
        let odysseeImg = storage.imageStorage.getImageByName(odysseeImgName);
        let puzzleImg = storage.imageStorage.getImageByName(puzzleImgName);

        let tabulaRasaData = { 
            index: 0,
            title: text.tabulaRasaProduct,
            details: text.tabulaRasaTracks,
            image: tabulaRasaImg,
            price: text.tabulaRasaPrice
        }
        let forAcesData = { 
            index: 1,
            title: text.forAcesProduct,
            details: text.forAcesTracks,
            image: forAcesImg,
            price: text.forAcesPrice
        }
        let odysseeData = { 
            index: 2,
            title: text.odysseeProduct,
            details: text.odysseeTracks,
            image: odysseeImg,
            price: text.odysseePrice
        }
        let puzzleData = { 
            index: 3,
            title: text.puzzleProduct,
            details: text.puzzleInfo,
            image: puzzleImg,
            price: text.puzzlePrice
        }
        let productData = [
            tabulaRasaData,
            forAcesData,
            odysseeData,
            puzzleData,
        ];
        return productData;
    }

    render(){
        
        let text = storage.textStorage.getObject(textType);
        let productData = this.getProductData(text);

        let currentProduct = -1;

        if(this.state !== undefined){

            currentProduct = this.state.currentProduct;
        }
        if(currentProduct === -2){

            let orderData = this.state.orderData;

            return(
                <Order
                    orderData={orderData}
                  productData={productData}
                  currentProduct={currentProduct}
                  text={text}
                  closeToDefault={this.closeToDefault.bind(this)}
                />
            )
        } else if(currentProduct === -1){
        return(
            <ProductsList>
                <Title>{text.title}</Title>
                <ProductGrid>
                {productData.map((product, i) =>
                <Product>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ImgContainer onClick={(e) => {this.showDetails(i)}}>
                        <ProductImg sizes={product.image}></ProductImg>
                    </ImgContainer>
                    <OrderLink onClick={(e) => {this.placeOrder(i)}}>
                        {text.title}
                    </OrderLink>
                </Product>)
                }
                </ProductGrid>
            </ProductsList>
        )
    } else {
        return(
            <ProductDetails
              product={productData[currentProduct]}
              currentProduct={currentProduct}
              text={text}
              closeToDefault={this.closeToDefault.bind(this)}
              placeOrder={this.placeOrder.bind(this)}
            />
        )
    }
    }
}

const ProductsList = styled.div`

    margin: 20vh 0vw 20vh 0vw;
    text-align: center;
`

const ProductGrid = styled.div`
    margin: 0vh 0vw 0vh 20vw;
    display: grid;
    grid-template-columns: repeat(2, 25vw);
    grid-column-gap: 10vw;
`

const Title = styled.div`
    margin: 0vh 0vw 5vh 0vw;
    font-size: 2.5vw;
    font-weight: 900;
`

const Product = styled.div`
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
    `
    
    const ProductTitle = styled.div`
    
    margin: 3vh 0vw 2vh 0vw;
    font-size: 2vw;
    `
    
    const ImgContainer = styled.div`

    &:hover{
        border-width: 3px;
        border-style: solid;
    }
    cursor: pointer;
    
`

const ProductImg = styled(Img)`
    
    
`

const OrderLink = styled.div`
    &:hover{
        text-decoration: underline;
    }
    margin: 3vh 0vw 2vh 0vw;
    cursor: pointer;
`