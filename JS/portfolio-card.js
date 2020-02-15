
//////////////////////////////////////////////////
//            Portfolio Cards             //
    pureCard = document.createElement(`section`);
    pureHeader = document.createElement(`header`);
    pureDiv1 = document.createElement(`div`);
    pureDiv2 = document.createElement(`div`);
    pureCoverImage = document.createElement(`img`);
    pureInfo = document.createElement(`section`);
    pureP = document.createElement(`p`);
    pureFooter = document.createElement(`footer`);

    hangCard = document.createElement(`section`);
    hangHeader = document.createElement(`header`);
    hangDiv1 = document.createElement(`div`);
    hangDiv2 = document.createElement(`div`);
    hangCoverImage = document.createElement(`img`);
    hangInfo = document.createElement(`section`);
    hangP = document.createElement(`p`);
    hangFooter = document.createElement(`footer`);

    class Card {
        constructor(element, element2, element3, element4, element5, element6, element7 ){
            this.section = element;
            this.header = element2;
            this.imageContainer = element3;
            this.imageCollection = element4;
            this.paragraph = element5;
            this.info = element6;
            this.tech = element7;
        }
        addClass(element, Class){
            element.classList.add(Class);
        }
        createCard(element, element2, element3, element4, element5, element6, element7, element8, Class, Class2, Class3, Class4, Class5, Class6, Class7){
            this.addClass(element, Class);
            this.addClass(element2, Class2);
            this.addClass(element3, Class3);
            this.addClass(element4, Class4);
            this.addClass(element6, Class5);
            this.addClass(element7, Class6);
            this.addClass(element8, Class7);

            element.append(element2);
            element.append(element3);
            element3.append(element4);
            element4.append(element5);
            element.append(element6);
            element6.append(element7);
            element6.append(element8);
        }

        addProjectTitle(element, value){
            element.textContent = value;
        }
        addProjectCoverImage(element, value, value2){
            element.append(value);
            value.src = value2.src;
            
        };
    
        addProjectInfo(element, value){
            element.textContent = value;
        };
    
        addTechStack(element, value){
            element.textContent = value;
        };
    }


    /* Card Functions */

    function addProjectInfo(element, value){
        element.textContent = value;
    };

    function addTechStack(element, value){
        element.textContent = value;
    };

    const PURE = new Card(pureCard, pureHeader, pureDiv1, pureDiv2, pureInfo, pureP, pureFooter);
    const Hangman = new Card(hangCard, hangHeader, hangDiv1, hangDiv2, hangInfo, hangP, hangFooter);

    PURE.createCard(pureCard, pureHeader, pureDiv1, pureDiv2, pureCoverImage,  pureInfo, pureP, pureFooter, `portfolio-card`, `portfolio-card_header`, `portfolio-card_image`, `image`, `portfolio-card_info`, `portfolio-card_info-paragraph`, `portfolio-card_info-footer`);
    
    Hangman.createCard(hangCard, hangHeader, hangDiv1, hangDiv2, hangCoverImage,  hangInfo, hangP, hangFooter, `portfolio-card`, `portfolio-card_header`, `portfolio-card_image`, `image`, `portfolio-card_info`, `portfolio-card_info-paragraph`, `portfolio-card_info-footer`);

    /* Card Creation */;
        PURE.addProjectTitle(pureHeader, `PureNOvation`);
        PURE.addProjectCoverImage(pureDiv2, pureCoverImage, pureArray[0]);
        PURE.addProjectInfo(pureP, `My personal experimental playground`);
        PURE.addTechStack(pureFooter, `HTML5 | CSS3 | JavaScript | Vue.js | Node.js`);

        Hangman.addProjectTitle(hangHeader, `Hangman`);
        Hangman.addProjectCoverImage(hangDiv2, hangCoverImage, hmanArray[0]);
        Hangman.addProjectInfo(hangP, `Create your own word, and others can guess!`);
        Hangman.addTechStack(hangFooter, `HTML5 | CSS3 | JavaScript | SCSS`);
        console.log(pureArray[0]);