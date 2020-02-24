//////////////////////////////////////////////
/*            About Page              */

    //////////////////////////////////////////
    //   Variables

    /* Index Declarations */
        let index = 0;

    /* Currently Empty Variables */
        let currentArray;
        let currentArray2;
        let currentArray3;

    /*       Page Elements       */
    const imageContainer = document.getElementsByClassName(`about-me-container_photo-container_image-container_image`)[0];
    const contentTitle = document.getElementsByClassName(`about-me-container_content-container_content-slider-container_content-slider_title`)[0];
    const content = document.getElementsByClassName(`about-me-container_content-container_content`)[0];
    const contentLink = document.getElementsByClassName(`about-me-container_photo-container_nav-link`);
    const aboutLogo = document.getElementsByClassName(`about-page-logo`)[0];

    const leftButton = document.getElementsByClassName(`basketball-container-left`)[0];
    const rightButton = document.getElementsByClassName(`basketball-container-right`)[0];

    /*       Image Elements       */
        const myPhoto = document.createElement(`img`);  // For Personal Photo

        const whatIAm = document.createElement(`img`);  // For Core Information
        const affinityForTech = document.createElement(`img`);  // For Core Information
        const myFamily = document.createElement(`img`);  // For Core Information

        const dedication = document.createElement(`img`);  // For Work Values
        const development = document.createElement(`img`);  // For Work Values
        const outsideTheBox = document.createElement(`img`);  // For Work Values
        const cleanStable = document.createElement(`img`);  // For Work Values
        const beautifulConsistent = document.createElement(`img`);  // For Work Values

        const technology = document.createElement(`img`);  // For Interests
        const food = document.createElement(`img`);  // For Interests
        const sports = document.createElement(`img`);  // For Interests
        const videoGames = document.createElement(`img`);  // For Interests
        const graphicDesign = document.createElement(`img`);  // For Interests
        const cooking = document.createElement(`img`);  // For Interests

    /*       Images       */

        myPhoto.src = `Design_Files/About-Page-Images/myPhoto.jpg`;

        whatIAm.src = `Design_Files/About-Page-Images/Core-Info-3/what-i-do.jpg`;
        affinityForTech.src = `Design_Files/About-Page-Images/Core-Info-3/affinity-for-technology.jpg`;
        myFamily.src = `Design_Files/About-Page-Images/Core-Info-3/NDE.jpg`;

        dedication.src = `Design_Files/About-Page-Images/Work-Values-5/dedication.svg`;
        development.src = `Design_Files/About-Page-Images/Work-Values-5/brain.svg`;
        outsideTheBox.src = `Design_Files/About-Page-Images/Work-Values-5/box-open.svg`;
        cleanStable.src = `Design_Files/About-Page-Images/Work-Values-5/site-map.svg`;
        beautifulConsistent.src = `Design_Files/About-Page-Images/Work-Values-5/columns.svg`;

        technology.src = `Design_Files/About-Page-Images/Interests-6/technology.jpg`;
        food.src = `Design_Files/About-Page-Images/Interests-6/food.jpg`;
        sports.src = `Design_Files/About-Page-Images/Interests-6/sports.jpg`;
        videoGames.src = `Design_Files/About-Page-Images/Interests-6/video-games.jpg`;
        graphicDesign.src = `Design_Files/About-Page-Images/Interests-6/graphic-design.jpg`;
        cooking.src = `Design_Files/About-Page-Images/Interests-6/cooking.jpg`;

    /*  Images With Classes Added*/
        
        // My Personal Photo
            myPhoto.classList.add(`picture`);

        //  Core Information Photos    
            whatIAm.classList.add(`picture`);
            affinityForTech.classList.add(`picture`);
            myFamily.classList.add(`picture`);

        //  Work Values Photos
            dedication.classList.add(`picture2`);
            development.classList.add(`picture2`);
            outsideTheBox.classList.add(`picture2`);
            cleanStable.classList.add(`picture2`);
            beautifulConsistent.classList.add(`picture2`);

        //  Interests Photos
            technology.classList.add(`picture`);
            food.classList.add(`picture`);
            sports.classList.add(`picture`);
            videoGames.classList.add(`picture`);
            graphicDesign.classList.add(`picture`);
            cooking.classList.add(`picture`);

        

    //////////////////////////////////////////
    //   Objects

        /*  Arrays  */
        let myPhotoArray = [myPhoto];  // Single photo of myself in an array.  Ready for adding more pictures later on.
        let coreInfoArray = [whatIAm, affinityForTech, myFamily]; // Array of core information pictures.
        let workValuesArray = [dedication, development, outsideTheBox, cleanStable, beautifulConsistent]; // Array of work values pictures.
        let interestsArray = [technology, food, sports, videoGames, graphicDesign, cooking]; // Array of interests pictures.
        
        let myPhotoArrayTitles = [`Nathan Cluff`];
        let coreInfoArrayTitles = [`Who Am I?`, `I Love Technology`, `My Family`];
        let workValuesArrayTitles = [`Dedication`, `Development`, `Outside Of The Box`, `Clean & Stable`, `Beautifully Consistent`];
        let interestsArrayTitles = [`Technology`, `Food`, `Sports`, `Video Games`, `Graphic Design`, `Cooking`];

        let myPhotoArrayContent = [
            `The aim is to increase the growth and profitability of your organization while expanding my skillset and progressing individually.`
        ];

        let coreInfoArrayContent = [
            `I am aspiring Front End Web Developer who is currently attending Lambda School in pursuit of a development career.  Currently, I am located in South Bend, Indiana.`,

            `Technology itself and the history of it fascinates me.  Equally enjoyable and fascinating is using it to create something beautiful. Whether it is a website, logo, photograph or even food, I am there!`,

            `My wife and I had met online and have been happily married for two and a half years.  We currently are a family of three with a fourth in the oven, and are currently located in South Bend, IN.`
        ];

        let workValuesArrayContent = [
            `Kobe Bryant's moniker, "Mamba Mentality", really sums up things well for me here.  As he has stated that it is all about the work.  However, he had not meant just your work ethic, but also your work habits in being dedicated to your craft.  Always ready to get better at what you are doing, with great curiosity.  That is my approach and goal every single day of my life.`,

            `Development starts with the aforementioned curiosity.  There's always ways to improve, and I am determined to make that happen.  I love and thrive on the challenge of creating something and learning something from it.`,

            `To produce the best kind of results, you have to be willing to either challenge yourself, or allow someone else to challenge you.  With that in mind, I'm eager to try and think outside of the box to see the results of what I do, even if it means that I have to see it fail and start from scratch.`,

            `While the product is never truly finished, and the chances to grow are always available, there is an inherent and absolutely essential beauty in having clean and reliable code to view and improve on.`,

            `I strive to be consistent with my processes in order to build and keep the best habits I can.  What I have found is that with the best of those habits, everything looks and behaves beautifully.`
        ];

        interestsArrayContent = [
            `Whether using technology such as a laptop, or to do some good ol' home cooking, technology is something I love!`,

            `Boy do I love eating food!  Indian, Mexican, and Italian are my favorite.  Though, my all-time favorite is an absolute classic.  Steak and mashed potatoes.`,

            `I love to participate in many different kinds of sports, and when I cannot do that, I usually love to watch it.  That goes for American football.  My favorite teams are BYU, Texas Tech, Los Angeles Lakers & the Kansas City Chiefs.`,

            `When I need time to wind down from all of the hustle and bustle, sometimes a good video game helps to calm the mind and relax.`,

            `Graphic design is more than a hobby of mine.  It is fun to take on the challenge to re-create something I have seen, along with creating something that has not been seen before, which includes either character or icon fonts.`,

            `Eating food is not the only thing for me.  I love to create delicious dishes, whether it is a recipe that is found online, or what we have in the pantry.`
        ];

        //////////////////////////////////////////
        //   Content Declarations

        imageContainer.append(myPhotoArray[0]);
        contentTitle.textContent = myPhotoArrayTitles[0];
        content.textContent = myPhotoArrayContent[0];

        //////////////////////////////////////////
        //   Functions
            function removeImageChildren(){  // A function to remove all of the image child nodes of the imageContainer.
                for(let i = imageContainer.childNodes.length - 1; i > 0 ; i--){
                    imageContainer.removeChild(imageContainer.childNodes[i]);
                }
            }

            function changeIndex(array){
                if(index <= array.length && index > 0){
                    index--;
                }
                if(index === 0){
                    return;
                }
                return index;
            }

            function changeIndex2(array){
                if(index >= 0  && index <= array.length - 2){
                    index++;
                }
                if(index === array.length - 1){
                    return;
                }
                return index;
            }



        contentLink[0].onclick = () => {
            contentLink[0].setAttribute(`href`, `javascript: ;`);
            removeImageChildren();
            imageContainer.append(myPhotoArray[0]);
            contentTitle.textContent = myPhotoArrayTitles[0];
            content.textContent = myPhotoArrayContent[0];
            aboutLogo.remove();
            currentArray = myPhotoArray;
            currentArray2 = myPhotoArrayTitles;
            currentArray3 = myPhotoArrayContent;
            index = 0;
        }

        contentLink[1].onclick = () => {
            contentLink[1].setAttribute(`href`, `javascript: ;`);
            removeImageChildren();
            imageContainer.append(coreInfoArray[0]);
            contentTitle.textContent = coreInfoArrayTitles[0];
            content.textContent = coreInfoArrayContent[0];
            aboutLogo.remove();
            currentArray = coreInfoArray;
            currentArray2 = coreInfoArrayTitles;
            currentArray3 = coreInfoArrayContent;
            index = 0;       
        }

        contentLink[2].onclick = () => {
            contentLink[2].setAttribute(`href`, `javascript: ;`);
            removeImageChildren();
            imageContainer.append(workValuesArray[0]);
            contentTitle.textContent = workValuesArrayTitles[0];
            content.textContent = workValuesArrayContent[0];
            aboutLogo.remove();
            currentArray = workValuesArray;
            currentArray2 = workValuesArrayTitles;
            currentArray3 = workValuesArrayContent;
            index = 0;            
        }

        contentLink[3].onclick = () => {
            contentLink[3].setAttribute(`href`, `javascript: ;`);
            removeImageChildren();
            imageContainer.append(interestsArray[0]);
            contentTitle.textContent = interestsArrayTitles[0];
            content.textContent = interestsArrayContent[0];
            aboutLogo.remove();
            currentArray = interestsArray;
            currentArray2 = interestsArrayTitles;
            currentArray3 = interestsArrayContent;
            index = 0;
        }

        leftButton.addEventListener(`click`, () => {
            changeIndex(currentArray);
            removeImageChildren();
            imageContainer.append(currentArray[index]);
            contentTitle.textContent = currentArray2[index];
            content.textContent = currentArray3[index];
        });

        rightButton.addEventListener(`click`, () => {
            changeIndex2(currentArray);
            removeImageChildren();
            imageContainer.append(currentArray[index]);
            contentTitle.textContent = currentArray2[index];
            content.textContent = currentArray3[index];
        });




        // Make the image element
        // Add its source image
        // Add its class
        // Declare & Store the correct element that will hold the image.
        // Append it to the correct element
        // Then, style the image by its class so you can have it show the right way.

        /* -------------------- Media Query Grid Setup -------------------- */

const about = document.getElementById(`about`);

function resize(){
    let heights = window.innerHeight;
    document.getElementsByTagName(`html`)[0].style.height = (heights + 56) + "px";
}

function getCorrectGrid(gridScreen, number){
        gridScreen.classList.remove(`gridDesktop`);
        gridScreen.classList.remove(`gridTabLand`);
        gridScreen.classList.remove(`gridTabPort`);
        gridScreen.classList.remove(`gridMobileLand`);
        gridScreen.classList.remove(`gridMobilePort`);
        gridScreen.classList.remove(`gridTV`);
        gridScreen.classList.add(layouts[number]);
}

//  About Page Media Queries

if(j.matches){
    getCorrectGrid(about, 0);
}
else{
    console.log(`I'm more than 2000px`);
}

if(h.matches){
    getCorrectGrid(about, 0);
}
else{
    console.log(`I'm more than 1750px`);
}

if(g.matches){
    getCorrectGrid(about, 0);
}
else{
    console.log(`I'm more than 1500px`);
}

if(f.matches){
    getCorrectGrid(about, 1);
}
else{
    console.log(`I'm more than 1250px`);
}

if(e.matches){
    getCorrectGrid(about, 2);
}
else{
    console.log(`I'm more than 950px`);
}

if(d.matches){
    getCorrectGrid(about, 2);
}
else{
    console.log(`I'm more than 750px`);
}

if(c.matches){
    getCorrectGrid(about, 4);
}
else{
    console.log(`I'm more than 500px`);
}

if(b.matches){
    getCorrectGrid(about, 4);
}
else{
    console.log(`I'm more than 375px`);
}

if(a.matches){
    getCorrectGrid(about, 4);
}
else{
    console.log(`I'm not less than 320px`);
}

if(about.classList.contains(`gridMobilePort`) || about.classList.contains(`gridMobileLand`) || about.classList.contains(`gridTabPort`) || about.classList.contains(`gridTabLand`)){
    resize();
}
window.onresize = function() {
    resize();
};
            
            