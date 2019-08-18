import storage from '../storage/storage'
import React from 'react';

var isOpen = false;
var reRenderCallback = null;

export default class MenuToggler extends React.Component{

    componentDidMount()
    {
        if(window.innerWidth > storage.constStorage.smartphoneWidth)
        {
            this.isOpen = true;
        }
    }
    
    setReRenderCallback(callback)
    {
        this.reRenderCallback = callback;
    }

    toggleMenu(){

        this.isOpen = !this.isOpen;

        this.reRenderCallback();
    }

    close()
    {
        this.isOpen = false;

        this.reRenderCallback();
    }
}