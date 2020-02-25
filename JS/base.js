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
        });

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
        });

    // window.addEventListener(`resize`, () => {
    //     alert(`Window Height: ${window.innerHeight} - Window Width: ${window.innerWidth}`);
    //     console.log(`Window Height: ${window.innerHeight} - Window Width: ${window.innerWidth}`);
    // });

    /* -------------------- Media Query Grid Setup -------------------- */

    function resize(){
        let heights = window.innerHeight;
        document.getElementsByTagName(`html`)[0].style.height = heights + "px";
    }

    const layouts = 
    [`gridDesktop`,
     `gridTabLand`,
     `gridTabPort`, 
     `gridMobileLand`,
     `gridMobilePort`, 
     `gridTV`
    ];

    function getCorrectGrid(gridScreen, number){
            gridScreen.classList.remove(`gridDesktop`);
            gridScreen.classList.remove(`gridTabLand`);
            gridScreen.classList.remove(`gridTabPort`);
            gridScreen.classList.remove(`gridMobileLand`);
            gridScreen.classList.remove(`gridMobilePort`);
            gridScreen.classList.remove(`gridTV`);
            gridScreen.classList.add(layouts[number]);
}
const a = window.matchMedia(`(max-width: 320px)`);
const b = window.matchMedia(`(max-width: 375px)`);
const c = window.matchMedia(`(max-width: 500px)`); // Max Width For Mobile Portrait Grid
const d = window.matchMedia(`(max-width: 750px)`);
const e = window.matchMedia(`(max-width: 950px)`); // Max Width For Tablet Portrait Grid
const f = window.matchMedia(`(max-width: 1250px)`); // Max Width For Tablet Landscape Grid
const g = window.matchMedia(`(max-width: 1500px)`);
const h = window.matchMedia(`(max-width: 1750px)`);
const j = window.matchMedia(`(max-width: 2000px)`);

// Mobile Landscapes
const z = window.matchMedia(`(max-height: 500px) and (orientation: landscape)`);
const y = window.matchMedia(`(max-height: 375px) and (orientation: landscape)`);
const x = window.matchMedia(`(max-height: 320px) and (orientation: landscape)`);

// Tablet Landscapes
const v = window.matchMedia(`(max-height: 800px) and (orientation: landscape)`);
const u = window.matchMedia(`(max-height: 700px) and (orientation: landscape)`);

    /////////////////////////////////////////////////
    //  Determining Correct Grid

    // Home Screen Media Queries
    
    if(j.matches){
        getCorrectGrid(homeScreen, 0);
    }
    else{
        console.log(`I'm more than 2000px`);
    }

    if(h.matches){
        getCorrectGrid(homeScreen, 0);
    }
    else{
        console.log(`I'm more than 1750px`);
    }

    if(g.matches){
        getCorrectGrid(homeScreen, 0);
    }
    else{
        console.log(`I'm more than 1500px`);
    }

    if(f.matches){
        getCorrectGrid(homeScreen, 1);
    }
    else{
        console.log(`I'm more than 1250px`);
    }

    if(e.matches){
        getCorrectGrid(homeScreen, 2);
    }
    else{
        console.log(`I'm more than 950px`);
    }

    if(d.matches){
        getCorrectGrid(homeScreen, 2);
    }
    else{
        console.log(`I'm more than 750px`);
    }

    if(c.matches){
        getCorrectGrid(homeScreen, 4);
    }
    else{
        console.log(`I'm more than 500px`);
    }

    if(b.matches){
        getCorrectGrid(homeScreen, 4);
    }
    else{
        console.log(`I'm more than 375px`);
    }

    if(a.matches){
        getCorrectGrid(homeScreen, 4);
    }
    else{
        console.log(`I'm not less than 320px`);
    }

    if(v.matches){
        getCorrectGrid(homeScreen, 1);
    }
    if(u.matches){
        getCorrectGrid(homeScreen, 1);
    }

    if(z.matches){
        getCorrectGrid(homeScreen, 3);
    }
    if(y.matches){
        getCorrectGrid(homeScreen, 3);
    }
    if(x.matches){
        getCorrectGrid(homeScreen, 3);
    }
    

    if(homeScreen.classList.contains(`gridMobilePort`) || homeScreen.classList.contains(`gridMobileLand`) || homeScreen.classList.contains(`gridTabPort`) || homeScreen.classList.contains(`gridTabLand`)){
                resize();
            }
            window.onresize = function() {
                resize();
            };