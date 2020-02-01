//////////////////////////////////////////////
/*            Home Page              */   

    //////////////////////////////////////////////
    //  Variables
        /* Design */
            // Colors
                const colors = ['#FFD700', '#0047AB', '#3E13AF', '#E1004C', '#70E500', '#00A47F', `#448B00`];
                const bAndW = ['#000000', '#111111', '#333333', '#555555', '#777777', '#999999', '#bbbbbb', '#dddddd', '#FAFAFA', '#FFFFFF'];

        /* States */
            // Boolean

        /* Indices */
            // Initialize index that the page will start with to be able to transition to the correct next page.
            let index = 1;
            // Initialize the background index to get the correct next color for the screen.
            let backgroundIndex = 1;
            // Initialize this variable so the buttons and nav will get the same color as the background on the last page.
            const previousBackgroundIndex = 6;

        /* Initialized Only */
            // Initialize separate variable to contain the random number to insure the right animation is removed before another one is added on.
            let currentNumber;
            // Initialize the home header here so it can be accessed by both the animation function and the page on click functions.
            let homeHeader;

        /* Page Elements */

            // The Home Header
                const headingContainer = document.getElementsByClassName('heading-container')[0];  // Grabbing the heading container.
                const mainHeader = document.getElementsByClassName('main-header')[0];  // Grabbing the main header.
                const subHeader = document.getElementsByClassName('sub-header')[0];  // Grabbing the sub header.
                const homeCTA = document.getElementsByClassName('home-cta')[0];  // Grabbing the call to action button in the header.
                const pageCounter = document.getElementsByClassName(`page`);  // Grabbing the collection of icons used to know the current page.

                /* Home Header Initializations */
                    pageCounter[0].classList.add('active-page'); // Initialize the 'currently-active' page.

            // Individual Home Header Pages
                pageOne = document.getElementsByClassName('page')[0];
                pageTwo = document.getElementsByClassName('page')[1];
                pageThree = document.getElementsByClassName('page')[2];
                pageFour = document.getElementsByClassName('page')[3];
                pageFive = document.getElementsByClassName('page')[4];
                pageSix = document.getElementsByClassName('page')[5];
                pageSeven = document.getElementsByClassName('page')[6];

    //////////////////////////////////////////////
    //   Classes

        // Home Heading
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
    //   Objects

        /* Class Object Instances */

            // Home Header Object
                const siteHeader = new Header(headingContainer, mainHeader, subHeader, homeCTA);

            /* Method Usage*/

                // Chage Header Method - Home Header
                const headerHome = siteHeader.changeHeader(`Hi, I'm Nathan Cluff!`, `Creative Front End Developer | Husband | Father | Chiefs & Lakers Fan | Foodie | & More`, `Get In Touch`);

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
                    `If you want to work together, whether on an exciting project, or on the same team, get in touch!`
                ];
            // An array of call to action phrases matched w/ the corresponding main & sub headers for the button.
                const callsToAction = [`Get In Touch`,
                    `Learn More`,
                    `Check Out My Work`,
                    `Learn More`,
                    `Get In Touch`,
                    `Learn More`,
                    `Get In Touch`
                ];
            // An array of the possible animations for the header on the home page.
                const animationArray = [`flipInX`,
                    `fadeInDownBig`,
                    `fadeInUpBig`,
                    `flipInY`,
                    `fadeInLeftBig`,
                    `fadeInRightBig`,
                    `lightSpeedIn`,
                    `rotateInDownLeft`,
                    `zoomInUp` ,
                    `rotateInDownRight`,
                    `zoomInDown`,
                    `rollIn`
                ];
            // An array of the 'pages' for navigating the possible header content.
                const pageArray = [
                    pageOne,
                    pageTwo,
                    pageThree,
                    pageFour,
                    pageFive,
                    pageSix,
                    pageSeven
                ];
    
    //////////////////////////////////////////////
    //  Functions

        /* Home Page */

            // Header
                /* -- Add An Animation To The Header -- */
                function addAnimation(num){
                    headingContainer.classList.add(animationArray[num]);
                    currentNumber = num;
                    console.log(currentNumber);
                    console.log(animationArray);
                    return currentNumber;
                }
                /* -- Remove The Animation From The Header -- */
                function transitionAnimation(){
                    for(let i = 0; i < animationArray.length; i++){
                        headingContainer.classList.remove(animationArray[i]);
                    }    
                }
                /* -- Change The Color Of The Home Page Background. -- */
                function changeScreenColor(){
                    homeScreen.style.transition = `background-color 1s`;
                    homeScreen.style.backgroundColor = colors[backgroundIndex];
                }
                /* -- Make The Next 'Page' Icon The Active & Current Page Icon To Show Current Page -- */
                function changePage(){
                    for(let i = 0; i < introductions.length; i++){
                        pageCounter[i].classList.remove('active-page');
                    }
                    pageCounter[index].classList.add(`active-page`);
                }
                /* -- Home Header Animation & Changes Pertaining To It -- */
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
                            navClose.style.color = colors[backgroundIndex -1];
                        }
                        navButton.onmouseleave = function(){
                            navBars.style.color = bAndW[8];
                            navBars.style.opacity = .75;
                            navClose.style.color = bAndW[8];
                            navClose.style.opacity = .75;
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
                        //Change the active page counter icon.
                        changePage();
                        // Adding the incoming animation for the heading container.
                        addAnimation(randomNumber);
                        // Initializing a variable to change the header's content.
                        homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
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
                                navClose.style.color = colors[previousBackgroundIndex];
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
                            homeCTA.onmouseover = function(){
                                console.log(previousBackgroundIndex);
                                console.log(backgroundIndex);
                                homeCTA.style.color = colors[previousBackgroundIndex];
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

            //  Pages
            /* -- Change To Clicked Page & Continue The Animation Header From There. -- */
                pageOne.onclick = () => {
                    index = pageArray.indexOf(pageOne);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageOne));
                }
                pageTwo.onclick = () => {
                    index = pageArray.indexOf(pageTwo);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageTwo));
                }
                pageThree.onclick = () => {
                    index = pageArray.indexOf(pageThree);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageThree));
                }
                pageFour.onclick = () => {
                    index = pageArray.indexOf(pageFour);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageFour));
                }
                pageFive.onclick = () => {
                    index = pageArray.indexOf(pageFive);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageFive));
                }
                pageSix.onclick = () => {
                    index = pageArray.indexOf(pageSix);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageSix));
                }
                pageSeven.onclick = () => {
                    index = pageArray.indexOf(pageSeven);
                    transitionAnimation();
                    homeHeader = siteHeader.changeHeader(introductions[index], expoundings[index], callsToAction[index]);
                    animateHeader();
                    console.log(pageArray.indexOf(pageSeven));
                }


        /* Function Calls */
            setInterval(animateHeader, 10000);

    //////////////////////////////////////////////
    //  Event Listeners
