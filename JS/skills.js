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
        const popupHeader = document.getElementsByClassName(`popup-content-header`)[0];
        const popupImage = document.getElementsByClassName(`popup-content-image`)[0];
        const popupDescriptionTitle = document.getElementsByClassName(`popup-content-description-title`)[0];
        const popupDescriptionParagraph = document.getElementsByClassName(`popup-content-description-paragraph`)[0];

    //////////////////////////////////////////////
    //  Objects

    const planetNames = [`Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`];
    const skillTitles = [`HTML5`, `CSS3`, `JavaScript`, `SCSS`, `Less`, `Responsive Design`, `Inkscape`, `Illustrator`, `Photoshop`];
    const skillStatements = [
        `HTML5 is a markup languange which, simply put, provides the structure of our websites.  Something I strive to do is to provide a stable and clean structure, free of any kind of unwanted clutter.`,

        `CSS3 is literally the aesthetics, and simple functionality of the website.  Without it, it gets really bland.  Something I strive for is to be as clean and dry as possible with it, while not sacrificing on the beauty and creativity of the design.`,

        `JavaScript brings the fun and interactivity into the website.  Without it, a user's experience becomes less vibrant. I'm always learning how to become more effective in my use of JavaScript and how to become more efficient as well.`,

        `SCSS was the pre-processor that I learned before attending Lambda School through Udemy courses taken online from Jonas Schmettman.  Awesome instructor who taught me much about the 7 folder structure that is currently seen in my personal portfolio.`,

        `Less has been learned from Lambda School.  It is also a great pre-processor and I only have a bias with SCSS because it was the first and I am still much more effective with it, including how to implement build scripts and such with it.`,

        `Responsive Design is absolutely critical for any website.  Mobile device usage has already passed desktop web usage and likely will stay that way forever.  We need to be able to accomodate for any device, screen, or even browser.`,

        `Inkscape has been something of a design hero for me.  I do love the intuitve design, as well as it being free.  It has a steeper learning curve, but I guarantee that the effort to learn it is absolutely worth it!`,

        `Illustrator was the first vector program I had learned.  It is still an absolute mainstay in my knowledge bank and is also very easy to learn and use.`,

        `Photoshop is always going to have a foothold on the digital manipulation community alond with the design community.  I had loved the ability to integrate things into the Brackets code editor, but now I use VSCode.  Either way, it is great to work with the layers and powerful capabilities of Photoshop.`
    ];

    html.onclick = () => {
        popupHeader.innerHTML = planetNames[0];
        popupImage.innerHTML = mercuryImage;
        popupDescriptionTitle = skillTitles[0];
        popupDescriptionParagraph = skillStatements[0];
    }

    css.onclick = () => {
        popupHeader.innerHTML = planetNames[1];
        popupImage.innerHTML = venusImage;
        popupDescriptionTitle = skillTitles[1];
        popupDescriptionParagraph = skillStatements[1];
    }

    javascript.onclick = () => {
        popupHeader.innerHTML = planetNames[2];
        popupImage.innerHTML = earthImage;
        popupDescriptionTitle = skillTitles[2];
        popupDescriptionParagraph = skillStatements[2];
    }

    scss.onclick = () => {
        popupHeader.innerHTML = planetNames[3];
        popupImage.innerHTML = marsImage;
        popupDescriptionTitle = skillTitles[3];
        popupDescriptionParagraph = skillStatements[3];
    }

    less.onclick = () => {
        popupHeader.innerHTML = planetNames[4];
        popupImage.innerHTML = jupiterImage;
        popupDescriptionTitle = skillTitles[4];
        popupDescriptionParagraph = skillStatements[4];
    }

    responsiveDesign.onclick = () => {
        popupHeader.innerHTML = planetNames[5];
        popupImage.innerHTML = saturnImage;
        popupDescriptionTitle = skillTitles[5];
        popupDescriptionParagraph = skillStatements[5];
        popupImage.style.height = `70%`;
        popupImage.style.width = `70%`;
        popupImage.style.margin = `1.5rem 1.5rem 0`;
        popupDescriptionTitle.style.transform = `translateY(-6rem)`;
        popupDescriptionParagraph.style.transform = `translateY(-3.5rem)`;
    }

    inkscape.onclick = () => {
        popupHeader.innerHTML = planetNames[6];
        popupImage.innerHTML = uranusImage;
        popupDescriptionTitle = skillTitles[6];
        popupDescriptionParagraph = skillStatements[6];
    }

    illustrator.onclick = () => {
        popupHeader.innerHTML = planetNames[7];
        popupImage.innerHTML = neptuneImage;
        popupDescriptionTitle = skillTitles[7];
        popupDescriptionParagraph = skillStatements[7];
    }

    photoshop.onclick = () => {
        popupHeader.innerHTML = planetNames[8];
        popupImage.innerHTML = plutoImage;
        popupDescriptionTitle = skillTitles[8];
        popupDescriptionParagraph = skillStatements[8];
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

            // <div class="popup" id="popup">
            //         <section class="popup-content">
            //             <header class="popup-content-header">Mercury</header>
            //             <div class="popup-content-image"></div>
            //             <section class="popup-content-description">
            //                 <header class="popup-content-description-title">HTML5</header>
            //                 <p class="popup-content-description-paragraph">HTML5 is a markup languange which, simply put, provides the structure of our websites.  Sonething I strive to do is to provide a stable and clean structure, free of any kind of unwanted clutter.</p>
            //             </section>
            //         </section>
            //     </div>