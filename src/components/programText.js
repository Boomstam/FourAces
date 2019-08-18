import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';

const textType = "Info";

export default class ProgramText extends React.Component {

    render() {
        var shortProgram = storage.textStorage.getText(textType, 2);
        var longProgram = storage.textStorage.getText(textType, 3);

        return (
            <div>
                <TopMargin/>

                <Title>{shortProgram.frontmatter.title}</Title>

                <StyledProgram dangerouslySetInnerHTML={{ __html: shortProgram.html }}>
                </StyledProgram>

                <SpaceBetween/>

                <Title>{longProgram.frontmatter.title}</Title>

                <StyledProgram dangerouslySetInnerHTML={{ __html: longProgram.html }}>
                </StyledProgram>
            </div>
        )
    }
}

const TopMargin = styled.div`
    margin: 15vh 0vw 0vh 0vw;
`

const Title = styled.div`
    font-size: 1.8vw;
    margin: 5vh 20vw 5vh 20vw;
    text-align: center;
`

const SpaceBetween = styled.div`
    margin: 5vh 0vw 0vh 0vw;
`

const StyledProgram = styled.div`    
    margin: 0vh 20vw 0vh 20vw;
    text-align: center;
`