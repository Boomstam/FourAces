import ImageStorage from './imageStorage';
import TextStorage from './textStorage';
import constStorage from './constStorage';
import callbackStorage from './callbackStorage';
import composerStorage from './composerStorage';
import CalStorage from './calStorage';

const imageStorage = new ImageStorage();
const textStorage = new TextStorage();
const calStorage = new CalStorage();

const storage = { 
    imageStorage, 
    textStorage, 
    constStorage, 
    callbackStorage,
    composerStorage,
    calStorage
 }

export default storage;