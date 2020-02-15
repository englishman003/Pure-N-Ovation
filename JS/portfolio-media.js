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
        console.log(hmanArray);
