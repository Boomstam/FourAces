import Logos from './logos';
import Sponsors from './sponsors';
import React from 'react';
import Nav from './nav';
import state from '../state/state';

export default class Togglabels extends React.Component {
    constructor(props) {
        
        super(props);

        let isOpenState = state.menuToggler.getOpenState();

        this.state = { isOpen: isOpenState };

        this.valueChanged = this.valueChanged.bind(this);
    }

    componentDidMount() {

        state.menuToggler.setReRenderCallback(this.valueChanged);
    }

    valueChanged() {

        let menuIsOpen = state.menuToggler.getOpenState();
        
        this.setState({ isOpen: menuIsOpen });
    }

    render(){

        if(this.state === null){

            return(<div/>);
        }
        if(this.state.isOpen)
        {
        return(
            <div>
                <Nav bannerImg={this.props.bannerImg}/>
                <Sponsors/>
                <Logos/>
            </div>
        )
        } else {
            return(
                <div/>
            )
        }
    }
}