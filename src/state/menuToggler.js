const storageKey = 'menuState';
const trueKey = 'true';

export default class MenuToggler {

    constructor()
    {   
        if(typeof localStorage === 'undefined')
        {
               this.isOpen = false;
        } else {

            let isOpen = (localStorage.getItem(storageKey) === trueKey);

            if(isOpen !== undefined){

                this.isOpen = isOpen;
            } else {
                localStorage.setItem(storageKey, false);
            }
        }
        this.getOpenState = this.getOpenState.bind(this);
    }

    getOpenState(){

        return this.isOpen;
    }
    
    setReRenderCallback(callback)
    {
        this.reRenderCallback = callback;
    }

    toggleMenu(){

        this.isOpen = !this.isOpen;
        
        localStorage.setItem(storageKey, this.isOpen);
        
        this.reRenderCallback();
    }
}