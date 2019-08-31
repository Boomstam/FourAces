import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import storage from '../storage/storage'

const textType = "Menu";

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { mediaHover: false };
    }

    clicked(name)
    {
        if(name === "media")
        {
            this.setState({ mediaHover : !this.state.mediaHover });
        }
    }

    mouseEntered(name){

        if(name === "media")
        {
            this.setState({ mediaHover : true });
        }
    }

    mouseLeft(){
        
        this.setState({ mediaHover : false });
    }

    render(){
        
        const home = "/";
        const project = "/project";
        const calendar = "/calendar";
        const audio = "/audio";
        const video = "/video";
        const photos = "/photos";
        const press = "/press";
        const shop = "/shop"
        const contact = "/contact";
        
        var dropdownState;

        if(this.state != null)
        {
            if(this.state.mediaHover)
            {
                dropdownState = "media";
            }
        }

if(dropdownState === "media")
{
    return(
        <StyledMenu> 
            <StyledLink to={home}>
               {storage.textStorage.getText(textType, 0)}
            </StyledLink>

            <StyledLink to={project}>
            {storage.textStorage.getText(textType, 1)}
            </StyledLink>

            <StyledLink to={calendar}>
            {storage.textStorage.getText(textType, 2)}
            </StyledLink>

            <Dropdown 
            onClick={(e) => {this.clicked("media")}}
             onMouseEnter={(e) => {this.mouseEntered("media")}}
             onMouseLeave={(e) => {this.mouseLeft("media")}}>
                {storage.textStorage.getText(textType, 3)}
            <DropdownItem to={audio}>
            {storage.textStorage.getText(textType, 4)}
            </DropdownItem>
            <DropdownItem to={video}>
            {storage.textStorage.getText(textType, 5)}
            </DropdownItem>
            <DropdownItem to={photos}>
            {storage.textStorage.getText(textType, 6)}
            </DropdownItem>
            <DropdownItem to={press}>
            {storage.textStorage.getText(textType, 7)}
            </DropdownItem>
            </Dropdown>

            <StyledLink to={shop}>
            {storage.textStorage.getText(textType, 8)}
            </StyledLink>

            <StyledLink to={contact}>
            {storage.textStorage.getText(textType, 9)}
            </StyledLink>
        </StyledMenu>    
    );
} else
{
    return(
        <StyledMenu> 
            <StyledLink to={home}>
               {storage.textStorage.getText(textType, 0)}
            </StyledLink>

            <StyledLink to={project}>
            {storage.textStorage.getText(textType, 1)}
            </StyledLink>

            <StyledLink to={calendar}>
            {storage.textStorage.getText(textType, 2)}
            </StyledLink>

            <Dropdown
            onClick={(e) => {this.clicked("media")}}
            onMouseEnter={(e) => {this.mouseEntered("media")}}
            onMouseLeave={(e) => {this.mouseLeft("media")}}>
                {storage.textStorage.getText(textType, 3)}
            </Dropdown>
            
            <StyledLink to={shop}>
            {storage.textStorage.getText(textType, 8)}
            </StyledLink>

            <StyledLink to={contact}>
            {storage.textStorage.getText(textType, 9)}
            </StyledLink>
        </StyledMenu>
    );
}
    
    }
}

const StyledMenu = styled.div`
    font-weight: 400;
    font-size: 7vw;
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    margin: 5vh 0vw 0vh 36vw;
    
    @media (min-width: 650px) {
      margin: 2vh 0vw 0vh 25vw;
      font-size: 2vw;
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

    
    margin: 0vh 1vw 0vh 1vw;
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

const Dropdown = styled.div`
    
    &:hover{
    background-color:rgba(222,224,236,0.7);
    }
    padding: 0vh 1vw 0vh 1vw;
    display: inline-grid;
`

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