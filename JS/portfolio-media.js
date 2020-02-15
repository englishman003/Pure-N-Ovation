/////////////////////////////////////////////////////////
//  Pure N Ovation Media

    /* Images */
        const pure1 = document.createElement(`img`);
        const pure2 = document.createElement(`img`);
        const pure3 = document.createElement(`img`);
        const pure4 = document.createElement(`img`);
        const pure5 = document.createElement(`img`);

        // Image Assignments
            pure1.src = `Design_Files/Project-Screenshots/PureNOvation-Screenshot.png`
            pure2.src = `Design_Files/Project-Screenshots/PureNOvation-Screenshot-About.png`
            pure3.src = `Design_Files/Project-Screenshots/PureNOvation-Screenshot-Skills.png`
            pure4.src = `Design_Files/Project-Screenshots/PureNOvation-Screenshot-DititalCreativity.png`;

            // Image Class Assignments
                pure1.classList.add(`sample-image`);
                pure1.classList.add(`image`);
                pure1.classList.add(`screenshot`);
                pure1.classList.add(`column_1-4`);
                pure1.classList.add(`row_1-4`);

                pure2.classList.add(`sample-image`);
                pure2.classList.add(`image`);
                pure2.classList.add(`screenshot`);
                pure2.classList.add(`column_1-4`);
                pure2.classList.add(`row_1-4`);

                pure3.classList.add(`sample-image`);
                pure3.classList.add(`image`);
                pure3.classList.add(`screenshot`);
                pure3.classList.add(`column_1-4`);
                pure3.classList.add(`row_1-4`);

                pure4.classList.add(`sample-image`);
                pure4.classList.add(`image`);
                pure4.classList.add(`screenshot`);
                pure4.classList.add(`column_1-4`);
                pure4.classList.add(`row_1-4`);

    /* Video */
        pureVid = document.createElement(`video`);

/////////////////////////////////////////////////////////
//  Hangman Media

    /* Images */
        const hman1 = document.createElement(`img`);
        const hman2 = document.createElement(`img`);
        const hman3 = document.createElement(`img`);
        const hman4 = document.createElement(`img`);
        const hman5 = document.createElement(`img`);
        const hman6 = document.createElement(`img`);

        hman1.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot1.png`;
        hman2.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot2.png`;
        hman3.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot3.png`;
        hman4.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot4.png`;
        hman5.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot5.png`;
        hman6.src = `Design_Files/Project-Screenshots/Hangman-Media/Hangman-Screenshot6.png`;

        // Image Class Assignments
        hman1.classList.add(`sample-image`);
        hman1.classList.add(`image`);
        hman1.classList.add(`screenshot`);
        hman1.classList.add(`column_1-4`);
        hman1.classList.add(`row_1-4`);

        hman2.classList.add(`sample-image`);
        hman2.classList.add(`image`);
        hman2.classList.add(`screenshot`);
        hman2.classList.add(`column_1-4`);
        hman2.classList.add(`row_1-4`);

        hman3.classList.add(`sample-image`);
        hman3.classList.add(`image`);
        hman3.classList.add(`screenshot`);
        hman3.classList.add(`column_1-4`);
        hman3.classList.add(`row_1-4`);

        hman4.classList.add(`sample-image`);
        hman4.classList.add(`image`);
        hman4.classList.add(`screenshot`);
        hman4.classList.add(`column_1-4`);
        hman4.classList.add(`row_1-4`);

        hman5.classList.add(`sample-image`);
        hman5.classList.add(`image`);
        hman5.classList.add(`screenshot`);
        hman5.classList.add(`column_1-4`);
        hman5.classList.add(`row_1-4`);

        hman6.classList.add(`sample-image`);
        hman6.classList.add(`image`);
        hman6.classList.add(`screenshot`);
        hman6.classList.add(`column_1-4`);
        hman6.classList.add(`row_1-4`);

    /* Video */
        hmanVid = document.createElement(`video`);

/////////////////////////////////////////////////////////
//  Food Pantry Media

    /* Images */
    const food1 = document.createElement(`img`);
    const food2 = document.createElement(`img`);
    const food3 = document.createElement(`img`);
    const food4 = document.createElement(`img`);
    const food5 = document.createElement(`img`);

    /* Video */
        foodVid = document.createElement(`video`);

/////////////////////////////////////////////////////////
//  Droom Media

    /* Images */
    const droom1 = document.createElement(`img`);
    const droom2 = document.createElement(`img`);
    const droom3 = document.createElement(`img`);
    const droom4 = document.createElement(`img`);
    const droom5 = document.createElement(`img`);

    /* Video */
        droomVid = document.createElement(`video`);

        ///////////////////////////////////////
        //    Objects

            /* Arrays */
            const pureArray = [];
            const hmanArray = [];

        ///////////////////////////////////////
        //    Functions
            function pushMedia(media, array){
                return array.push(media);
            }

        pushMedia(pure1, pureArray);
        pushMedia(pure2, pureArray);
        pushMedia(pure3, pureArray);
        pushMedia(pure4, pureArray);

        pushMedia(hman1, hmanArray);
        pushMedia(hman2, hmanArray);
        pushMedia(hman3, hmanArray);
        pushMedia(hman4, hmanArray);
        pushMedia(hman5, hmanArray);
        pushMedia(hman6, hmanArray);




        
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
