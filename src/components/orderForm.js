import React from 'react';
import storage from '../storage/storage';
import styled from 'styled-components';
import Img from 'gatsby-image';

const textType = "Shop";
const crossName = "Cross.png";

const mailToTag = "mailto:fouracesquartet@gmail.com?subject=";
const bodyTag ="&body=";

const newLine = "\n";
const newLineSeparator = "- ";
const timesTag = "x ";
const point = ".";

export default class OrderForm extends React.Component {

    constructor(props){

        super(props);

        this.state = { name: "", address: ""}
    }

    getMailData(){

        console.log("StTAE_" + JSON.stringify(this.state));

        
    }

    continue(text){

        console.log("Continue_" + JSON.stringify(text));

        //this.getMailData();
        window.location.href = mailToTag + text.subject + bodyTag + this.getBody(text);

        this.handleClose();
    }

    getBody(text){

        let body = text.greeting + newLine + newLine + text.order + newLine +
            this.getProducts() +  text.total + this.props.total + point + 
            text.address + newLine + this.state.address + point + newLine + 
            text.shippingCost + newLine + newLine + text.goodbye + newLine + this.state.name;

        body = encodeURIComponent(body);

        return body;
    }

    getProducts(){

        let products = "";

        for(let i = 0; i < this.props.orderData.length; i++){

            let numItems = this.props.orderData[i];

            if(numItems === 0){

                continue;
            }
            products += newLineSeparator + this.props.orderData[i] + 
                timesTag + this.props.productData[i].title + newLine;
        }
        return products;
    }

    updateFields(fieldIndex, value){

        console.log("updateFields_" + fieldIndex + "_" + value);
        
        if(fieldIndex === 0){
        
            if(this.state.name !== value){

                this.setState({ name: value, address: this.state.address })
            }

        } else if(fieldIndex === 1){
            
            if(this.state.address !== value){

                this.setState({ name: this.state.name, address: value })
            }
        }
    }

    handleClose(){

        this.props.closeToDefault();
    }

    render(){

        let text = storage.textStorage.getObject(textType);
        let cross = storage.imageStorage.getImageByName(crossName);

        //console.log("text_" + JSON.stringify(text));
        /*<Input 
            type="text"
            name="Name"/>
            <Input 
                type="text"
                name="Address"/>
            */
        return(
        <StyledForm>

            <TopMargin/>
            
            <CrossContainer
                onClick={this.handleClose.bind(this)}>
            <Cross sizes={cross}/>
          </CrossContainer>

            <Title>{text.nameTag}</Title>
            <Input 
                type="text"
                placeholder={text.namePlaceholder}
                onChange={e => this.updateFields(0, e.target.value)}/>

            <Title>{text.addressTag}</Title>
            <Input 
                type="text"
                placeholder={text.addressPlaceholder}
                onChange={e => this.updateFields(1, e.target.value)}/>

            <ProceedButton
                href="mailto:fouracesquartet@gmail.com"
                body={this.getMailData.bind(this)}
                onClick={e => this.continue(text)}
            >
                {text.proceedText}
            </ProceedButton>

        </StyledForm>)
    }
}

const StyledForm = styled.div`

    
`

const CrossContainer = styled.div`

    position: absolute;
    left: 75vw;
    top: 20vh;
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

    padding-top: 10vh;
`


const Title = styled.div`

    text-align: center;
    font-size: 2vw;
    margin: 10vh 0vw 0vh 25vw;
    width: 50vw;
`

const Input = styled.input`

    margin: 2vh 0vw 0vh 30vw;
    display: block;
    width: 40vw;
`

const ProceedButton = styled.button`

    display: block;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    width: 10vw;
    height: 10vh;
`