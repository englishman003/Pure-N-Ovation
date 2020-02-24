//////////////////////////////////////////////
/*              Skills Page             */

    //////////////////////////////////////////////
    //  Variables

        /* Sun */
        const sun = document.getElementsByClassName(`sun`)[0];

        /* Planets */
        const mercury = document.getElementById(`mercury`);
        const venus = document.getElementById(`venus`);
        const earth = document.getElementById(`earth`);
        const mars = document.getElementById(`mars`);
        const jupiter = document.getElementById(`jupiter`);
        const saturn = document.getElementById(`saturn`);
        const uranus = document.getElementById(`uranus`);
        const neptune = document.getElementById(`neptune`);
        const pluto = document.getElementById(`pluto`);

        /* Planet Overlays */
        const mercuryOverlay = document.getElementsByClassName(`mercury-overlay`)[0];
        const venusOverlay = document.getElementsByClassName(`venus-overlay`)[0];
        const earthOverlay = document.getElementsByClassName(`earth-overlay`)[0];
        const marsOverlay = document.getElementsByClassName(`mars-overlay`)[0];
        const jupiterOverlay = document.getElementsByClassName(`jupiter-overlay`)[0];
        const saturnOverlay = document.getElementsByClassName(`saturn-overlay`)[0];
        const uranusOverlay = document.getElementsByClassName(`uranus-overlay`)[0];
        const neptuneOverlay = document.getElementsByClassName(`neptune-overlay`)[0];
        const plutoOverlay = document.getElementsByClassName(`pluto-overlay`)[0];

        // Planet Images

// Mercury
const mercuryImage = `<img src="/Design_Files/Images/real-mercury.png" alt="Planet Mercury">`;

// Venus
const venusImage = `<img src="/Design_Files/Images/real-venus.png" alt="Planet Venus">`;

// Earth
const earthImage = `<img src="/Design_Files/Images/real-earth.png" alt="Planet Earth">`;

// Mars
const marsImage = `<img src="/Design_Files/Images/real-mars.png" alt="Planet Mars">`;

// Jupiter
const jupiterImage = `<img src="/Design_Files/Images/real-jupiter.png" alt="Planet Jupiter">`;

// Saturn
const saturnImage = `<img src="/Design_Files/Images/real-saturn2.png" alt="Planet Saturn">`;

// Uranus
const uranusImage = `<img src="/Design_Files/Images/real-uranus.png" alt="Planet Uranus">`;

// Neptune
const neptuneImage = `<img src="/Design_Files/Images/real-neptune.png" alt="Planet Neptune">`;

// Pluto
const plutoImage = `<img src="/Design_Files/Images/real-pluto.png" alt="Planet Pluto">`;

        /* Skills */
        const html = document.getElementsByClassName(`html`)[0];
        const css = document.getElementsByClassName(`css`)[0];
        const javascript = document.getElementsByClassName(`js`)[0];
        const scss = document.getElementsByClassName(`scss`)[0];
        const less = document.getElementsByClassName(`less`)[0];
        const responsiveDesign = document.getElementsByClassName(`rd`)[0];
        const inkscape = document.getElementsByClassName(`ink`)[0];
        const illustrator = document.getElementsByClassName(`il`)[0];
        const photoshop = document.getElementsByClassName(`ps`)[0];

        /* Popup Window */
        const popup = document.getElementsByClassName(`popup`)[0];
        const popupHeader = document.getElementsByClassName(`popup-content-header`)[0];
        const popupImage = document.getElementsByClassName(`popup-content-image`)[0];
        const popupDescriptionTitle = document.getElementsByClassName(`popup-content-description-title`)[0];
        const popupDescriptionParagraph = document.getElementsByClassName(`popup-content-description-paragraph`)[0];
        const popupClose = document.getElementsByClassName(`close-popup`)[0];

    //////////////////////////////////////////////
    //  Objects

    const planetNames = [`Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`];
    const skillTitles = [`HTML5`, `CSS3`, `JavaScript`, `SCSS`, `Less`, `Responsive Design`, `Inkscape`, `Illustrator`, `Photoshop`];
    const skillStatements = [
        `HTML5 is a markup language and the skeleton of our websites. My goal is to make it strong, stable, easy to read & easy to use.`,

        `CSS3 is what makes our website body look stunning. Striving for clean, and well kept code that is not trying too hard is the ultimate goal.`,

        `JavaScript makes the website fun and enjoyable. Cool effects are nice, but the experience must be the best of a lifetime.`,

        `SCSS helps keep things running efficiently as a preprocessor.  It helps the CSS3 be stronger and not have to work too hard, which also allows us to make more enjoyable websites.`,

        `Although I predominantly use SCSS, Less is also a technology that is well known and capably used.  Whatever the project or team, I aim to be flexible.`,

        `One key to helping the JavaScript make each visit the best of a lifetime is to make a responsive and easy to access website.  I aim to make my websites available to as big of an audience as currently possible.  No matter the device, and hopefully the browser.`,

        `Inkscape has a steep learning curve, but it is equally powerful and intuitive.  I use it primarily for logos and mockups, but I love to use it for anything artistic.`,

        `The first vector image software to be learned was Adobe's Illustrator.  It has less of learning curve than Inkscape, has similar abilities, and I try to keep the knowledge of the software as much as possible to be flexible with whomever the designers are.`,

        `Photoshop is king of the photo manipulation industry, and for good reason.  I understand much of what it has to offer, but usually use vector images to keep things reasonable.  As I'm sure you can tell, staying flexible and well-rounded is essential to me.`
    ];

    html.onclick = () => {
        popupHeader.innerHTML = planetNames[0];
        popupImage.innerHTML = mercuryImage;
        popupDescriptionTitle.innerHTML = skillTitles[0];
        popupDescriptionParagraph.innerHTML = skillStatements[0];
    }

    css.onclick = () => {
        popupHeader.innerHTML = planetNames[1];
        popupImage.innerHTML = venusImage;
        popupDescriptionTitle.innerHTML = skillTitles[1];
        popupDescriptionParagraph.innerHTML = skillStatements[1];
    }

    javascript.onclick = () => {
        popupHeader.innerHTML = planetNames[2];
        popupImage.innerHTML = earthImage;
        popupDescriptionTitle.innerHTML = skillTitles[2];
        popupDescriptionParagraph.innerHTML = skillStatements[2];
    }

    scss.onclick = () => {
        popupHeader.innerHTML = planetNames[3];
        popupImage.innerHTML = marsImage;
        popupDescriptionTitle.innerHTML = skillTitles[3];
        popupDescriptionParagraph.innerHTML = skillStatements[3];
    }

    less.onclick = () => {
        popupHeader.innerHTML = planetNames[4];
        popupImage.innerHTML = jupiterImage;
        popupDescriptionTitle.innerHTML = skillTitles[4];
        popupDescriptionParagraph.innerHTML = skillStatements[4];
    }

    responsiveDesign.onclick = () => {
        popupHeader.innerHTML = planetNames[5];
        popupImage.innerHTML = saturnImage;
        popupDescriptionTitle.innerHTML = skillTitles[5];
        popupDescriptionParagraph.innerHTML = skillStatements[5];
        popupImage.style.height = `70%`;
        popupImage.style.width = `70%`;
        popupImage.style.margin = `1.5rem 1.5rem 0`;
        popupDescriptionTitle.style.transform = `translateY(-6rem)`;
        popupDescriptionParagraph.style.transform = `translateY(-3.5rem)`;
    }

    inkscape.onclick = () => {
        popupHeader.innerHTML = planetNames[6];
        popupImage.innerHTML = uranusImage;
        popupDescriptionTitle.innerHTML = skillTitles[6];
        popupDescriptionParagraph.innerHTML = skillStatements[6];
    }

    illustrator.onclick = () => {
        popupHeader.innerHTML = planetNames[7];
        popupImage.innerHTML = neptuneImage;
        popupDescriptionTitle.innerHTML = skillTitles[7];
        popupDescriptionParagraph.innerHTML = skillStatements[7];
    }

    photoshop.onclick = () => {
        popupHeader.innerHTML = planetNames[8];
        popupImage.innerHTML = plutoImage;
        popupDescriptionTitle.innerHTML = skillTitles[8];
        popupDescriptionParagraph.innerHTML = skillStatements[8];
    }




    //////////////////////////////////////////////
    //  Functions

        // Mouse Hover Functions

            /* Planet Skills */
            html.onmouseover = () => {
                mercuryOverlay.style.display = `block`;
            }
            html.onmouseleave = () => {
                mercuryOverlay.style.display = `none`;
            }
            css.onmouseover = () => {
                venusOverlay.style.display = `block`;
            }
            css.onmouseleave = () => {
                venusOverlay.style.display = `none`;
            }
            javascript.onmouseover = () => {
                earthOverlay.style.display = `block`;
            }
            javascript.onmouseleave = () => {
                earthOverlay.style.display = `none`;
            }
            scss.onmouseover = () => {
                marsOverlay.style.display = `block`;
            }
            scss.onmouseleave = () => {
                marsOverlay.style.display = `none`;
            }
            less.onmouseover = () => {
                jupiterOverlay.style.display = `block`;
            }
            less.onmouseleave = () => {
                jupiterOverlay.style.display = `none`;
            }
            responsiveDesign.onmouseover = () => {
                saturnOverlay.style.display = `block`;
            }
            responsiveDesign.onmouseleave = () => {
                saturnOverlay.style.display = `none`;
            }
            inkscape.onmouseover = () => {
                uranusOverlay.style.display = `block`;
            }
            inkscape.onmouseleave = () => {
                uranusOverlay.style.display = `none`;
            }
            illustrator.onmouseover = () => {
                neptuneOverlay.style.display = `block`;
            }
            illustrator.onmouseleave = () => {
                neptuneOverlay.style.display = `none`;
            }
            photoshop.onmouseover = () => {
                plutoOverlay.style.display = `block`;
            }
            photoshop.onmouseleave = () => {
                plutoOverlay.style.display = `none`;
            }

            /* -------------------- Media Query Grid Setup -------------------- */

const skills = document.getElementById(`skills`);

function getCorrectGrid(gridScreen, number){
        gridScreen.classList.remove(`gridDesktop`);
        gridScreen.classList.remove(`gridTabLand`);
        gridScreen.classList.remove(`gridTabPort`);
        gridScreen.classList.remove(`gridMobileLand`);
        gridScreen.classList.remove(`gridMobilePort`);
        gridScreen.classList.remove(`gridTV`);
        gridScreen.classList.add(layouts[number]);
}

//  Skills Page Media Queries

if(j.matches){
    getCorrectGrid(skills, 0);
}
else{
    console.log(`I'm more than 2000px`);
}
if(h.matches){
    getCorrectGrid(skills, 0);
}
else{
    console.log(`I'm more than 1750px`);
}
if(g.matches){
    getCorrectGrid(skills, 0);
}
else{
    console.log(`I'm more than 1500px`);
}
if(f.matches){
    getCorrectGrid(skills, 1);
}
else{
    console.log(`I'm more than 1250px`);
}
if(e.matches){
    getCorrectGrid(skills, 1);
}
else{
    console.log(`I'm more than 950px`);
}
if(d.matches){
    getCorrectGrid(skills, 2);
}
else{
    console.log(`I'm more than 750px`);
}
if(c.matches){
    getCorrectGrid(skills, 2);
}
else{
    console.log(`I'm more than 500px`);
}
if(b.matches){
    getCorrectGrid(skills, 4);
}
else{
    console.log(`I'm more than 375px`);
}
if(a.matches){
    getCorrectGrid(skills, 4);
}
else{
    console.log(`I'm not less than 320px`);
}

            
           