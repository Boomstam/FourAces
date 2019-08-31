import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';
import state from '../state/state';

const nlFlag = "NL.png";
const ukFlag = "UK.png";

const nlLang = "NL";
const enLang = "EN";

function onLoad()
{
    var lang = getInitialLanguage();

    var nl = (lang === nlLang);
    
    state.languageState.setLanguage(nl);
}

function languageImage(data, nl)
{
    var imgName = nlFlag;
    
    if(nl === false)
    {
        imgName = ukFlag;
    }
  
    return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === imgName
    }
    ).node.sizes;
}

function handleClick(nl)
{
    var newLang = Boolean(nl);
    var currentLang = Boolean(state.languageState.getLanguage());

    if(newLang === currentLang)
    {
        return;
    }
        var lang = nlLang;

        if(newLang === false)
        {
            lang = enLang;
        }
        state.languageState.setLanguage(newLang);

        storeLanguage(lang);

        window.location.reload();
}

function getInitialLanguage() {

    if(typeof localStorage === 'undefined')
    {
        return "NL";
    
    } else {
        
        var nl = localStorage.getItem( 'language' );
    
        if(nl === undefined || nl === null)
        {
            return "NL";
        }
        return nl; 
    }
}

function storeLanguage(lang) {

    localStorage.setItem( 'language', lang )
}

const selStyle = {
    width:  "50%",
};

const unselStyle = {
    width:  "37%",
};

function flagStyle(nl)
{
    var currentLang = state.languageState.getLanguage();

    if(nl === currentLang)
    {
        return selStyle;
    }
    return unselStyle;
}

export default () => (
    <StaticQuery
        query={graphql`
        query LanguageQuery {
          
            allImageSharp {
                edges {
                    node {
                        fluid{
                            originalName
                        }
                        sizes(maxWidth: 1800) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }

        }
      `}
      
        render={data => (
            <StyledLangs onLoad={onLoad()}>
                <Container onClick={(e) => {handleClick(true)}}>
            <Flag
                style={flagStyle(true)}
                sizes={languageImage(data, true)}/>
                </Container>
                <Space/>
                <Container onClick={(e) => {handleClick(false)}}>
            <Flag 
                style={flagStyle(false)}
                sizes={languageImage(data, false)}/>
                </Container>
            </StyledLangs>
        )}
    />
)

const StyledLangs = styled.div`
@media (min-width: 650px) {
    width: 7vw;
    left: 92vw;
}
    

    position: fixed;
    left: 83vw;
    top: 0vh;
    padding: 1vmin;
    width: 16vw;
    z-index: 999;
`

const Container = styled.div`
display: inline;
&:hover{
    cursor: pointer;
}
`

const Flag = styled(Img)`
    opacity: 0.7;
    width: 45%;
    display: inline-block;
    z-index: 999;
`

const Space = styled.div`
    
    width: 10%;
    display: inline-block;
`