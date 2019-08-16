import LanguageState from './languageState'
import MenuToggler from './menuToggler'

const menuToggler = new MenuToggler();
const languageState = new LanguageState();
const state = { languageState, menuToggler }

export default state;