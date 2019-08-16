const textureSeparator = '/';
const coorPairSeparator = ',';
const coorSeparator = '_';

//const nameSeparator = ':';
/*const clickables = ["Scriabin", "Bizet", "Chopin", "Bach",
    "Quartet", "Mozart", "Debussy", "Rachmaninoff"];*/

const numIrrelevantChars = 20;
var coors = null;

class CoorParser
{
    getCoorIndex(x, y)
    {
        var index = coors[Math.round(x)][Math.round(y)];

        if(index === undefined)
        {
            return -1;
        }
        return index;
    }

    setCoors(node, width, height)
    {
        if(coors != null)
        {
            return;
        }
        this.setFromText(node, width, height);
    }

    setFromText(node, width, height)
    {
        coors = new Array(width);
        
        for(let x = 0; x < width; x++)
        {
            coors[x] = new Array(height);

            for(let y = 0; y < width; y++)
            {
                coors[x][y] = -1;
            }
        }
        this.parseText(node);
    }

    parseText(node)
    {
        let text = JSON.stringify(node);
        text = text.substring(numIrrelevantChars, text.length - numIrrelevantChars);
        
        let textures = text.split(textureSeparator);
        
        let coorPairs = this.parseCoorPairs(textures);
        
        this.parseCoors(coorPairs);
    }

    parseCoorPairs(textures)
    {
        let coorPairs = new Array(textures.length);

        for(let i = 0; i < textures.length; i++)
        {
            let texture = textures[i];

            coorPairs[i] = texture.split(coorPairSeparator);
        }
        return coorPairs;
    }

    parseCoors(coorPairs)
    {
        for(let textureIndex = 0; textureIndex < coorPairs.length; textureIndex++)
        {
            let coorPairColl = coorPairs[textureIndex];

            for(let coorPairIndex = 0; coorPairIndex < coorPairColl.length; coorPairIndex++)
            {
                let coorPair = coorPairColl[coorPairIndex];

                let coor = coorPair.split(coorSeparator);

                let x = coor[0];
                let y = coor[1];

                if(y == undefined)  
                {
                    continue;
                }
                coors[x][y] = textureIndex;
            }
        }
    }
}

export default  CoorParser;