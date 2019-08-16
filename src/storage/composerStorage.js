const composers = ["Scriabin", "Bizet", "Chopin", "Bach",
    "Quartet", "Mozart", "Debussy", "Rachmaninoff"]
const numComposers = composers.length;
const cutSuffix = "Cut.png";
const composerStorage = { 
    composers,
    numComposers,
    sceneIndex
 }

 function sceneIndex(sceneName)
 {
    var comp = sceneName.replace(cutSuffix, '');
     
    //console.log(sceneName + "_" + comp);

    return composers.indexOf(comp);
 }

export default composerStorage;