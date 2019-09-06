import state from '../state/state';

const nl = "NL";
const en = "EN";

const menuType = "Menu";
const detailsType = "Details";
const infoType = "Info"
const otherType = "Other"
const shopType = "Shop"
const typeColl = [ 
    menuType, detailsType, infoType, 
    otherType, shopType
    ];

const separator = " ";
const otherSeparator = "-";

const htmlTag1 = "<p>";
const htmlTag2 = "</p>"

export default class TextStorage {
    
    constructor()
    {
        this.getText = this.getText.bind(this);
        this.setImages = this.setText.bind(this);
        
        this.nlText = [];
        this.enText = [];
    }

    getObject(type)
    {  
        let text = this.nlText;
        let nl = state.languageState.getLanguage();

        if(nl === false)
        {
            text = this.enText;
        }
        let typeIndex = typeColl.indexOf(type);

        return text[typeIndex];
    }

    getText(type, contentIndex)
    {   
        let text = this.nlText;
        let nl = state.languageState.getLanguage();

        if(nl === false)
        {
            text = this.enText;
        }
        let typeIndex = typeColl.indexOf(type);
        
        return text[typeIndex][contentIndex];
    }

    setText(allMarkdownRemark)
    {
        this.parseMenu(allMarkdownRemark);

        this.parseDetails(allMarkdownRemark);

        this.parseInfo(allMarkdownRemark);

        this.parseOther(allMarkdownRemark);

        this.parseShop(allMarkdownRemark);
    }

    parseInfo(allMarkdownRemark)
    {
        let nodeColl = this.getNodes(allMarkdownRemark, infoType);
        
        let nlInfo = nodeColl.filter(obj => { return obj.frontmatter.language === nl });
        let enInfo = nodeColl.filter(obj => { return obj.frontmatter.language === en });

        nlInfo = nlInfo.sort((a, b) => a.frontmatter.index > b.frontmatter.index ? 1 : -1);
        enInfo = enInfo.sort((a, b) => a.frontmatter.index > b.frontmatter.index ? 1 : -1);

        let infoIndex = typeColl.indexOf(infoType);

        this.nlText[infoIndex] = nlInfo;
        this.enText[infoIndex] = enInfo;
    }

    parseDetails(allMarkdownRemark)
    {
        let nodeColl = this.getNodes(allMarkdownRemark, detailsType);
        
        let nlDetails = nodeColl.filter(obj => { return obj.frontmatter.language === nl });
        let enDetails = nodeColl.filter(obj => { return obj.frontmatter.language === en });
    
        nlDetails = nlDetails.sort((a, b) => a.frontmatter.index > b.frontmatter.index ? 1 : -1);
        enDetails = enDetails.sort((a, b) => a.frontmatter.index > b.frontmatter.index ? 1 : -1);
        
        let detailsIndex = typeColl.indexOf(detailsType);
        this.nlText[detailsIndex] = nlDetails;
        this.enText[detailsIndex] = enDetails;
        
        /*console.log(JSON.stringify(this.nlText[detailsIndex]) + 
            "_" + JSON.stringify(this.enText[detailsIndex]));*/
    }

    parseMenu(allMarkdownRemark)
    {
        let nodeColl = this.getNodes(allMarkdownRemark, menuType);

          let nlMenu = nodeColl.find(obj => { return obj.frontmatter.language === nl });
          let enMenu = nodeColl.find(obj => { return obj.frontmatter.language === en });

          let nlMenuItems = nlMenu.html.split(separator);
          let enMenuItems = enMenu.html.split(separator);

          for(let i = 0; i < nlMenuItems.length; i++)
          {
              nlMenuItems[i] = nlMenuItems[i].replace(htmlTag1, '');
              nlMenuItems[i] = nlMenuItems[i].replace(htmlTag2, '');

              enMenuItems[i] = enMenuItems[i].replace(htmlTag1, '');
              enMenuItems[i] = enMenuItems[i].replace(htmlTag2, '');
          }
          let menuIndex = typeColl.indexOf(menuType);

          this.nlText[menuIndex] = nlMenuItems;
          this.enText[menuIndex] = enMenuItems;
    }
    
    parseOther(allMarkdownRemark)
    {
        let nodeColl = this.getNodes(allMarkdownRemark, otherType);

        let nlOther = nodeColl.find(obj => { return obj.frontmatter.language === nl });
        let enOther = nodeColl.find(obj => { return obj.frontmatter.language === en });

        nlOther = nlOther.frontmatter.calTitles.split(otherSeparator);
        enOther = enOther.frontmatter.calTitles.split(otherSeparator);

        let otherIndex = typeColl.indexOf(otherType);

        this.nlText[otherIndex] = nlOther;
        this.enText[otherIndex] = enOther;
    }

    parseShop(allMarkdownRemark)
    {
        let nodeColl = this.getNodes(allMarkdownRemark, shopType);

        let nlShop = nodeColl.find(obj => { return obj.frontmatter.language === nl }).frontmatter;
        let enShop = nodeColl.find(obj => { return obj.frontmatter.language === en }).frontmatter;

        let shopIndex = typeColl.indexOf(shopType);

        this.nlText[shopIndex] = nlShop;
        this.enText[shopIndex] = enShop;
    }

    getNodes(allMarkdownRemark, type)
    {
        let nodeColl =[];

        for(let i = 0; i < allMarkdownRemark.edges.length; i++)
        {
            let node = allMarkdownRemark.edges[i].node;

            if(node.frontmatter === undefined)
            {
                continue;
            }
          if(node.frontmatter.type === type)
          {
              nodeColl.push(node);
          }
      }
      return nodeColl;
    }
}