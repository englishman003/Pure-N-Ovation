//////////////////////////////////////////////
/*            Home Page              */   


//////////////////////////////////////////////
//  Variables

/* Initialize separate variable to contain the random number to insure the right animation is removed before another one is added on. */
let currentNumber;

const homeScreen = document.getElementById(`screen`);

// Colors

const colors = ['#FFD700', '#0047AB', '#3E13AF', '#E1004C', '#70E500', '#00A47F', `#448B00`];
const bAndW = ['#000000', '#111111', '#333333', '#555555', '#777777', '#999999', '#bbbbbb', '#dddddd', '#FAFAFA', '#FFFFFF'];

/* Object Prep */

// Header
const headingContainer = document.getElementsByClassName('heading-container')[0];  // Grabbing the heading container.
const mainHeader = document.getElementsByClassName('main-header')[0];  // Grabbing the main header.
const subHeader = document.getElementsByClassName('sub-header')[0];  // Grabbing the sub header.
const homeCTA = document.getElementsByClassName('home-cta')[0];  // Grabbing the call to action button in the header.
const headerAnimation = `rotateInDownLeft`;
let index = 1;
let backgroundIndex = 1;
const previousBackgroundIndex = 6;

// Home Buttons
const navButton = document.getElementsByClassName(`main-site-nav-cover`)[0];
const navContainer = document.getElementsByClassName('main-site-nav-container')[0];
const navigation = document.getElementsByClassName('main-site-nav')[0];
const homeContact = document.getElementsByClassName(`home-contact`)[0];
const footerButton = document.getElementsByClassName(`site-footer-button`)[0];
const logoContainer = document.getElementsByClassName(`logo-container`)[0];
const myLogo = document.getElementsByClassName(`my-logo`)[0];
const navBars = document.getElementsByClassName(`nav-bars`)[0];
const contactIcon = document.getElementsByClassName(`home-contact-envelope`)[0];

// Footer
const footer = document.getElementsByClassName(`site-footer`)[0];
const socialMediaLink = document.getElementsByClassName(`social-media-link`);


//////////////////////////////////////////////
//   Objects

/*  Arrays  */

// An array of introductions to go into the main header.
const introductions = [
    `Hi, I'm Nathan Cluff!`,
    `I Love Values`,
     `Digital Creativity`,
    `Forever Learning`,
    `Connection`,
    `Well-Rounded`,
    `Interested?`
];

// An array of short introductory sentences to put into the sub header.
const expoundings = [
    `Creative Front End Developer | Husband | Father | Chiefs & Lakers Fan | Foodie | & More`,
     `Being a man of integrity, great effort & attention to detail is some of many values at the core of who I am.`,
    `I specialize in creating rich & beautiful user experiences on the full spectrum of devices.`,
    `I am always eager to learn something new to expand my skillset.  Currently, I am attending Lambda School.`,
    `I'm eagerly seeking creative minds to work, grow, and network with.  Let's get in touch!`,
    `Being a well-rounded individual is important to me, as it helps me to meaningfully contribute to life`,
    `If you want to work together, whether on an exciting project, or on the same team, get in touch!`];

// An array of call to action phrases matched w/ the corresponding main & sub headers for the button.
const callsToAction = [`Get In Touch`, `Learn More`, `Check Out My Work`, `Learn More`, `Get In Touch`, `Learn More`, `Get In Touch`];

animationArray = [`flipInX`, `fadeInDownBig`, `fadeInUpBig`, `flipInY`, `fadeInLeftBig`, `fadeInRightBig`, `lightSpeedIn`, `rotateInDownLeft`, `zoomInUp` , `rotateInDownRight`, `zoomInDown`, `rollIn`];



//////////////////////////////////////////////
//   Classes

//  Heading
class Header {
    constructor(Container, Header, SubHeader, CTA){
        this.container = Container;
        this.header = Header;
        this.subHeader = SubHeader;
        this.cta = CTA;
    }
    changeHeader(headerTitle, subTitle, buttonCTA){
                this.header.textContent = headerTitle;
                this.subHeader.textContent = subTitle;
                this.cta.textContent = buttonCTA;
            }
}

//////////////////////////////////////////////
//   Object Instances

/* Header */
const siteHeader = new Header(headingContainer, mainHeader, subHeader, homeCTA);
const siteHeader2 = new Header(headingContainer, mainHeader, subHeader, homeCTA);
const headerHome = siteHeader.changeHeader(`Hi, I'm Nathan Cluff!`, `Creative Front End Developer | Husband | Father | Chiefs & Lakers Fan | Foodie | & More`, `Get In Touch`);
const HeaderHome = siteHeader2.changeHeader(`Hi, I'm Nathan Cluff!`, `Creative Front End Developer | Husband | Father | Chiefs & Lakers Fan | Foodie | & More`, `Get In Touch`);
const headerArray = [headerHome, HeaderHome];

function addAnimation(num){
    headingContainer.classList.add(animationArray[num]);
    currentNumber = num;
    console.log(currentNumber);
    console.log(animationArray);
    return currentNumber;
}

function transitionAnimation(){
    headingContainer.classList.remove(animationArray[currentNumber]);
    console.log(`Animation Removed!`);
}
function changeScreenColor(){
    homeScreen.style.transition = `background-color 1s`;
    homeScreen.style.backgroundColor = colors[backgroundIndex];
}

function animateHeader(){

    // Checking if index is less than the introductions array length.  <-- Main Header Content
    if(index < introductions.length){
        console.log(backgroundIndex);
        // Get a random number
        let randomNumber = Math.floor(Math.random() * 12);
        // Transitioning the background color with the animation.
        changeScreenColor();
        navButton.onmouseover = function(){
            navBars.style.color = colors[backgroundIndex -1];
        }
        navButton.onmouseleave = function(){
            navBars.style.color = bAndW[8];
            navBars.style.opacity = .75;
        }
        footerButton.onmouseover = function(){
            footerButton.style.color = colors[backgroundIndex -1];
        }
        footerButton.onmouseleave = function(){
            footerButton.style.color = bAndW[8];
            footerButton.style.opacity = .75;
        }
        homeContact.onmouseover = function(){
            contactIcon.style.color = colors[backgroundIndex -1];
        }
        homeContact.onmouseleave = function(){
            contactIcon.style.color = bAndW[8];
            contactIcon.style.opacity = .75;
        }
        logoContainer.onmouseover = function(){
            myLogo.style.fill = colors[backgroundIndex -1];
        }
        logoContainer.onmouseleave = function(){
            myLogo.style.fill = bAndW[8];
            myLogo.style.opacity = .75;
        }
        homeCTA.onmouseover = function(){
            homeCTA.style.color = colors[backgroundIndex -1];
        }
        homeCTA.onmouseleave = function(){
            homeCTA.style.color = bAndW[8];
            homeCTA.style.opacity = .75;
        }
        // Adding the incoming animation for the heading container.
        // headingContainer.classList.add(headerAnimation);
        addAnimation(randomNumber);
        // Initializing a variable to change the header's content.
        let homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
            console.log(index);
            // Increment the index.
            index++;
            backgroundIndex++;
            console.log(index);
            // Set delay for the removal of the incoming animation.
            setTimeout(transitionAnimation, 2500);
        // If background index equals the colors array length, backgroundIndex = 0;
        if(backgroundIndex === colors.length && previousBackgroundIndex === 6){
            navButton.onmouseover = function(){
                navBars.style.color = colors[previousBackgroundIndex];
            }
            footerButton.onmouseover = function(){
                footerButton.style.color = colors[previousBackgroundIndex];
            }
            homeContact.onmouseover = function(){
                contactIcon.style.color = colors[previousBackgroundIndex];
            }
            logoContainer.onmouseover = function(){
                myLogo.style.fill = colors[previousBackgroundIndex];
            }
            backgroundIndex = 0;
        }
        // If index is not less than introductions array length, check if it is strictly equal to its length.
        if(index === introductions.length){
            // Set index to zero.
            index = 0;
            // Again, set the delay for the removal of the last incoming animation.
            setTimeout(transitionAnimation, 2500);
        }
    }
    
}
setInterval(animateHeader, 10000);

let revealed = 0;



function revealNavigation() {
        navigation.style.display = `flex`;
        revealed = 1;
}
navButton.addEventListener('click', () => {
    navContainer.classList.toggle('nav-full-height');
    if(revealed === 0){
        setTimeout(revealNavigation, 1500);
    }
    if(revealed === 1){
        revealed = 0;
        navigation.style.display = `none`;
    }    
})

let socialMediaRevealed = false;

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

footerButton.addEventListener(`click`, () => {
    footer.classList.toggle(`reveal-footer`);
    if(socialMediaRevealed === false){
      setTimeout(revealSocialMedia, 1000);  
    }
    else if(socialMediaRevealed === true){
        hideSocialMedia();
    }
})