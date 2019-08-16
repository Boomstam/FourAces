import state from '../state/state'

const nl = "NL";
const en = "EN";

const menuType = "Menu";
const detailsType = "Details";
const infoType = "Info"
const otherType = "Other"
const typeColl = [ menuType, detailsType, infoType, otherType ];

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

    getText(type, contentIndex)
    {
        //console.log("getText_" + type + "_" + contentIndex);

        /*if(type === infoType)
        {
            this.nlText.forEach(el => {
                console.log(JSON.stringify(el));
            });
        }*/
        var text = this.nlText;
        var nl = state.languageState.getLanguage();
        //console.log(nl);

        if(state.languageState.getLanguage() == false)
        {
            text = this.enText;
        }
        var typeIndex = typeColl.indexOf(type);
        
        //console.log("typeIndex_" + typeIndex);
        //console.log("contentIndex_" + contentIndex);
        //console.log("length_" + text.length);

        //console.log("text_" + JSON.stringify(text[typeIndex]));
        
        //var 
        /*if(text[typeIndex] === undefined)
        {
            return undefined;
        }*/
        return text[typeIndex][contentIndex];
    }

    setText(allMarkdownRemark)
    {
        this.parseMenu(allMarkdownRemark);

        this.parseDetails(allMarkdownRemark);

        this.parseInfo(allMarkdownRemark);

        this.parseOther(allMarkdownRemark);
    }

    parseInfo(allMarkdownRemark)
    {
        var nodeColl = this.getNodes(allMarkdownRemark, infoType);
        
        var nlInfo = nodeColl.filter(obj => { return obj.frontmatter.language === nl });
        var enInfo = nodeColl.filter(obj => { return obj.frontmatter.language === en });

        nlInfo = nlInfo.sort((a, b) => a.frontmatter.index > b.frontmatter.index);
        enInfo = enInfo.sort((a, b) => a.frontmatter.index > b.frontmatter.index);

        //console.log("Parse_" + JSON.stringify(nlInfo));
        //console.log("Parse_" + JSON.stringify(enInfo));

        var infoIndex = typeColl.indexOf(infoType);

        this.nlText[infoIndex] = nlInfo;
        this.enText[infoIndex] = enInfo;
    }

    parseDetails(allMarkdownRemark)
    {
        var nodeColl = this.getNodes(allMarkdownRemark, detailsType);
        
        var nlDetails = nodeColl.filter(obj => { return obj.frontmatter.language === nl });
        var enDetails = nodeColl.filter(obj => { return obj.frontmatter.language === en });
    
        nlDetails = nlDetails.sort((a, b) => a.frontmatter.index > b.frontmatter.index);
        enDetails = enDetails.sort((a, b) => a.frontmatter.index > b.frontmatter.index);

        var detailsIndex = typeColl.indexOf(detailsType);

        this.nlText[detailsIndex] = nlDetails;
        this.enText[detailsIndex] = enDetails;
    }

    parseMenu(allMarkdownRemark)
    {
          var nodeColl = this.getNodes(allMarkdownRemark, menuType);

          var nlMenu = nodeColl.find(obj => { return obj.frontmatter.language === nl });
          var enMenu = nodeColl.find(obj => { return obj.frontmatter.language === en });

          var nlMenuItems = nlMenu.html.split(separator);
          var enMenuItems = enMenu.html.split(separator);

          for(let i = 0; i < nlMenuItems.length; i++)
          {
              nlMenuItems[i] = nlMenuItems[i].replace(htmlTag1, '');
              nlMenuItems[i] = nlMenuItems[i].replace(htmlTag2, '');

              enMenuItems[i] = enMenuItems[i].replace(htmlTag1, '');
              enMenuItems[i] = enMenuItems[i].replace(htmlTag2, '');
          }
          var menuIndex = typeColl.indexOf(menuType);

          this.nlText[menuIndex] = nlMenuItems;
          this.enText[menuIndex] = enMenuItems;
    }
    
    parseOther(allMarkdownRemark)
    {
        var nodeColl = this.getNodes(allMarkdownRemark, otherType);

        var nlOther = nodeColl.find(obj => { return obj.frontmatter.language === nl });
        var enOther = nodeColl.find(obj => { return obj.frontmatter.language === en });

        console.log("otherNL_" + JSON.stringify(nlOther));
        console.log("otherEN_" + JSON.stringify(enOther));

        nlOther = nlOther.frontmatter.calTitles.split(otherSeparator);
        enOther = enOther.frontmatter.calTitles.split(otherSeparator);

        var otherIndex = typeColl.indexOf(otherType);

        this.nlText[otherIndex] = nlOther;
        this.enText[otherIndex] = enOther;
    }

    getNodes(allMarkdownRemark, type)
    {
        var nodeColl =[];

        for(let i = 0; i < allMarkdownRemark.edges.length; i++)
        {
            var node = allMarkdownRemark.edges[i].node;

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