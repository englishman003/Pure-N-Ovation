//////////////////////////////////////////////
/*               Base JS                 */

    //  Variables
        /* States */
            // Boolean
                /* -- Initialize the state of the navigation. -- */
                let navOpen = false;

        /* Page Elements */

            // The Grid Desktop
            const homeScreen = document.getElementById(`screen`);

            // Navigation
                const navBars = document.getElementsByClassName(`nav-bars`)[0];
                const navClose = document.getElementsByClassName(`nav-times`)[0];
                const navButton = document.getElementsByClassName(`main-site-nav-cover`)[0];
                const navContainer = document.getElementsByClassName('main-site-nav-container')[0];
                const navigation = document.getElementsByClassName('main-site-nav')[0];

                /* Navigation Initializations */
                let revealed = 0;

            // The Footer
            const footer = document.getElementsByClassName(`site-footer`)[0];
            const socialMediaLink = document.getElementsByClassName(`social-media-link`);

            /* -- Footer Links -- */
                // My Logo
                    const logoContainer = document.getElementsByClassName(`logo-container`)[0];
                    const myLogo = document.getElementsByClassName(`my-logo`)[0];
                // Footer Button - Connect With Me
                    const footerButton = document.getElementsByClassName(`site-footer-button`)[0];
                // Contact Me - Envelope Container
                    const homeContact = document.getElementsByClassName(`home-contact`)[0];
                    const contactIcon = document.getElementsByClassName(`home-contact-envelope`)[0];

            /* Footer Related Initializations */

                // Footer Social Media Connections
                let socialMediaRevealed = false;

    //////////////////////////////////////////////
    //  Functions

        /* Any Page */

            // Navigation
            /* -- Open The Navigation -- */
            function revealNavigation() {
                navigation.style.display = `flex`;
                revealed = 1;
            }

            //  Footer
                /* -- Reveal or Hide Footer & Social Media Connections -- */
                function revealSocialMedia(){
                    socialMediaLink[0].style.display = `flex`;
                    socialMediaLink[1].style.display = `flex`;
                    socialMediaLink[2].style.display = `flex`;
                    socialMediaLink[3].style.display = `flex`;
                    socialMediaRevealed = true;
                }
                function hideSocialMedia(){
                    socialMediaLink[0].style.display = `none`;
                    socialMediaLink[1].style.display = `none`;
                    socialMediaLink[2].style.display = `none`;
                    socialMediaLink[3].style.display = `none`;
                    socialMediaRevealed = false;
                }



     //////////////////////////////////////////////
    //  Event Listeners

        /* Navigation */
        // Listen To Navigation Click
        navButton.addEventListener('click', () => {
            navContainer.classList.toggle('nav-full-height');
            if(revealed === 0){
                setTimeout(revealNavigation, 1);
                navBars.style.display = 'none';
                navClose.style.display = 'inline-block';
            }
            if(revealed === 1){
                revealed = 0;
                navigation.style.display = `none`;
                navBars.style.display = 'inline-block';
                navClose.style.display = 'none';
            }    
        })

        /* Navigation */
        // Listen To Footer Button Click
        footerButton.addEventListener(`click`, () => {
            footer.classList.toggle(`reveal-footer`);
            if(socialMediaRevealed === false){
              setTimeout(revealSocialMedia, 1000);  
            }
            else if(socialMediaRevealed === true){
                hideSocialMedia();
            }
        })