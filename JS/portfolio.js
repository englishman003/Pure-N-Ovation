//////////////////////////////////////////////
/*          Portfolio Page           */

        ///////////////////////////////////////
        //    Variables

            /* Page Elements */
                const bigProjectPicture = document.getElementsByClassName(`big-project-picture`)[0];
                const sampleMediaContainer = document.getElementsByClassName(`project-media-container_images`)[0];

                const bigPortfolio = document.getElementsByClassName(`big-portfolio-viewport`)[0];
                const bigLeftDoor = document.getElementsByClassName(`big-portfolio-viewport_door-left`)[0];
                const bigRightDoor = document.getElementsByClassName(`big-portfolio-viewport_door-right`)[0];
                const bigPortfolioClose = document.getElementsByClassName(`project-bio-container_header_close`)[0];
                const smallPortfolio = document.getElementsByClassName(`small-portfolio-container`)[0];
                const portfolioCards = document.getElementsByClassName(`portfolio-card`);

            // Image Tag, Image Source, Added Class, Put In The Array For Manipulation.

        ///////////////////////////////////////
        //    Classes

        // pureArray.forEach((item) => {
        //     sampleMediaContainer.append(item);
        // })

        /* To create the cards you need to do the following:
            -> Create more card elements (Copy & Paste the ones on the portfolio-card.js)
            -> Initialize the new Card using the newly created and renamed elements.
            -> Use the newly created card's `createCard` method, with the renamed elements and the same classes as each of the other card's elements.
            -> Use other card methods to assign proper values to the card.
            -> Lastly, append said card's `section` to the small portfolio container.
        */

        smallPortfolio.append(PURE.section);
        smallPortfolio.append(Hangman.section);


        function revealSmallPortfolio(element){
            smallPortfolio.style.display = `flex`;
        }

        function revealBigPortfolio(element){
            bigPortfolioClose.style.display = `flex`;
        }

        bigPortfolioClose.addEventListener(`click`, () => {
            bigLeftDoor.style.transform = `translateX(0)`;
            bigRightDoor.style.transform = `translateX(0)`;
            setTimeout(revealSmallPortfolio, 1100);
        })

        PURE.section.addEventListener(`click`, () => {
            smallPortfolio.style.display = `none`;
            setTimeout(revealBigPortfolio, 1200);
            bigLeftDoor.style.transform = `translateX(-100%)`;
            bigRightDoor.style.transform = `translateX(100%)`;
            
        });

        Hangman.section.addEventListener(`click`, () => {
            smallPortfolio.style.display = `none`;
            bigPortfolio.style.display =`flex`;
            bigLeftDoor.style.transform = `translateX(-100%)`;
            bigRightDoor.style.transform = `translateX(100%)`;
            
        });
