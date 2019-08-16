import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import storage from '../storage/storage'
import Img from 'gatsby-image';

const textType = "Menu";

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { mediaHover: false, infoHover: false };
    }

    clicked(name)
    {
        console.log("clicked_" + name);

        if(name === "media")
        {
            this.setState({ mediaHover : !this.state.mediaHover, infoHover: false });
        }
        if(name === "info")
        {
            this.setState({ mediaHover : false, infoHover: !this.state.infoHover });
        }
    }

    mouseEntered(name){

        console.log("mouse entered_" + name);

        if(name === "media")
        {
            this.setState({ mediaHover : true, infoHover: false });
        }
        if(name === "info")
        {
            this.setState({ mediaHover : false, infoHover: true });
        }
    }

    mouseLeft(){
        
        this.setState({ mediaHover : false, infoHover: false });

        console.log("mouse left");
    }

    render(){
        
        const home = "/";
        const calendar = "/calendar";
        const audio = "/audio";
        const video = "/video";
        const project = "/project";
        const bio = "/bio";
        const program = "/program";
        const contact = "/contact";
        const press = "/press";
        
        var dropdownState;

        if(this.state != null)
        {
            if(this.state.mediaHover)
            {
                dropdownState = "media";
            }
            if(this.state.infoHover)
            {
                dropdownState = "info";
            }
        }

if(dropdownState === "media")
{
    return(
        <StyledMenu> 
            <StyledLink to={home}>
               {storage.textStorage.getText(textType, 0)}
            </StyledLink>
            <StyledLink to={calendar}>
            {storage.textStorage.getText(textType, 1)}
            </StyledLink>
            <Dropdown 
            onClick={(e) => {this.clicked("media")}}
             onMouseEnter={(e) => {this.mouseEntered("media")}}
             onMouseLeave={(e) => {this.mouseLeft("media")}}>
                {storage.textStorage.getText(textType, 2)}
            <DropdownItem to={audio}>
            {storage.textStorage.getText(textType, 3)}
            </DropdownItem>
            <DropdownItem to={video}>
            {storage.textStorage.getText(textType, 4)}
            </DropdownItem>
            </Dropdown>
            <StyledLink to={project}>
            {storage.textStorage.getText(textType, 5)}
            </StyledLink>
            <Dropdown
            onClick={(e) => {this.clicked("info")}}
            onMouseEnter={(e) => {this.mouseEntered("info")}}
            onMouseLeave={(e) => {this.mouseLeft("info")}}>
                {storage.textStorage.getText(textType, 6)}
            </Dropdown>
        </StyledMenu>    
    );
}
if(dropdownState === "info")
{
    return(
        <StyledMenu> 
            <StyledLink to={home}>
            {storage.textStorage.getText(textType, 0)}
            </StyledLink>
            <StyledLink to={calendar}>
            {storage.textStorage.getText(textType, 1)}
            </StyledLink>
            <Dropdown
            onClick={(e) => {this.clicked("media")}}
            onMouseEnter={(e) => {this.mouseEntered("media")}}
            onMouseLeave={(e) => {this.mouseLeft("media")}}>
                {storage.textStorage.getText(textType, 2)}
            </Dropdown>
            <StyledLink to={project}>
                {storage.textStorage.getText(textType, 5)}
            </StyledLink>
            <Dropdown
            onClick={(e) => {this.clicked("info")}}
            onMouseEnter={(e) => {this.mouseEntered("info")}}
            onMouseLeave={(e) => {this.mouseLeft("info")}}>
                {storage.textStorage.getText(textType, 6)}
            <DropdownItem to={bio}>
            {storage.textStorage.getText(textType, 7)}
            </DropdownItem>
            <DropdownItem to={program}>
            {storage.textStorage.getText(textType, 8)}
            </DropdownItem>
            <DropdownItem to={contact}>
            {storage.textStorage.getText(textType, 9)}
            </DropdownItem>
            <DropdownItem to={press}>
            {storage.textStorage.getText(textType, 10)}
            </DropdownItem>
            </Dropdown>
        </StyledMenu>
    );
}
else
{
    return(
        <StyledMenu> 
            <StyledLink to={home}>
               {storage.textStorage.getText(textType, 0)}
            </StyledLink>
            <StyledLink to={calendar}>
            {storage.textStorage.getText(textType, 1)}
            </StyledLink>
            <Dropdown
            onClick={(e) => {this.clicked("media")}}
            onMouseEnter={(e) => {this.mouseEntered("media")}}
            onMouseLeave={(e) => {this.mouseLeft("media")}}>
                {storage.textStorage.getText(textType, 2)}
            </Dropdown>
            <StyledLink to={project}>
            {storage.textStorage.getText(textType, 5)}
            </StyledLink>
            <Dropdown
            onClick={(e) => {this.clicked("info")}}
            onMouseEnter={(e) => {this.mouseEntered("info")}}
            onMouseLeave={(e) => {this.mouseLeft("info")}}>
                {storage.textStorage.getText(textType, 6)}
            </Dropdown>
        </StyledMenu>
    );
}
    
    }
}

const StyledMenu = styled.div`
    font-weight: 1000;
    font-size: 7vw;
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    margin: 5vh 0vw 0vh 38vw;
    
    @media (min-width: 650px) {
      margin: 2vh 0vw 0vh 27vw;
      font-weight: 1000;
      font-size: 2.5vw;
    }
`
/*
background-image: radial-gradient(rgba(255,255,255,0.8), transparent);
background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1));
background-color: rgba(0.8, 0.8, 0.8, 0.8);
    background-size: cover;
*/
const StyledLink = styled(Link)`
    
    display: block;

    
    margin: 0vh 2vw 0vh 0vw;
    @media (min-width: 650px) {
        display: inline; 
      }
    text-decoration-line: none;
    color: rgba(8, 19, 17, 1);


    &:hover{
        color: rgba(8, 19, 17, 1);
        text-decoration-line: underline;
    }
` 
//background-image: none;
//background-image: radial-gradient(rgba(222,224,236,1), transparent);
const Dropdown = styled.div`
    
    &:hover{
    background-color:rgba(222,224,236,0.7);
    }
    margin: 0vh 2vw 0vh 0vw;

    display: inline-grid;
`
/* 
    @media (min-width: 650px) {
    font-weight: 1000;
    font-size: 8vw;
    }
*/
const DropdownItem = styled(Link)`
@media (max-width: 650px) {
    font-weight: 800;
    font-size: 6vw;
    }
    display: block;
    color: rgba(8, 19, 17, 1);
    &:hover{
        color: rgba(8, 19, 17, 1);
        text-decoration: underline;
    }
`

export default Menu;