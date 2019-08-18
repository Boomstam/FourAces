const sceneNames = ["ScriabinScene.png", "BizetScene.png", "ChopinScene.png", "BachScene.png",
    "QuartetScene.png", "MozartScene.png", "DebussyScene.png", "RachmaninoffScene.png"]

export default class ImageStorage {


    constructor()
    {
        this.getImages = this.getImages.bind(this);
        this.setImages = this.setImages.bind(this);
        
        this.images = [];
    }

    getImages()
    {
        if(this.images.length === 0)
        {
            throw "No images found";
        }
        return this.images;
    }

    getImageByName(name)
    {
        try{
            
        return this.images.find(
            obj => {
              return obj.node.fluid.originalName === name;
            }
            ).node.sizes;
        } catch {
            console.log("Image not found!!!_" + name);
        }
    }

    getSceneByIndex(index)
    {
        var name = sceneNames[index];

        return this.getImageByName(name);
    }

    setImages(images)
    {
        /*console.log("setImageStorage");
        images.forEach(img => {
            console.log(JSON.stringify(img))
        });*/
        this.images = images;
    }
}