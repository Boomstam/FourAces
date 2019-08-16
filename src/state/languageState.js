export default class LanguageState{
    
    constructor(){
        this.nl = true;
    }

    setLanguage(nl)
    {
        if(nl === this.nl)
        {
            return;
        }
        this.nl = nl;
    }

    getLanguage()
    {
        return this.nl;
    }
}