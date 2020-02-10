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

    html.onclick = () => {
        popupHeader.innerHTML = planetNames[0];
        popupImage.innerHTML = mercuryImage;
    }

    css.onclick = () => {
        popupHeader.innerHTML = planetNames[1];
        popupImage.innerHTML = venusImage;
    }

    javascript.onclick = () => {
        popupHeader.innerHTML = planetNames[2];
        popupImage.innerHTML = earthImage;
    }

    scss.onclick = () => {
        popupHeader.innerHTML = planetNames[3];
        popupImage.innerHTML = marsImage;
    }

    less.onclick = () => {
        popupHeader.innerHTML = planetNames[4];
        popupImage.innerHTML = jupiterImage;
    }

    responsiveDesign.onclick = () => {
        popupHeader.innerHTML = planetNames[5];
        popupImage.innerHTML = saturnImage;
        popupImage.style.height = `70%`;
        popupImage.style.width = `70%`;
        popupImage.style.margin = `1.5rem 1.5rem 0`;
        popupDescriptionTitle.style.transform = `translateY(-6rem)`;
        popupDescriptionParagraph.style.transform = `translateY(-3.5rem)`;
    }

    inkscape.onclick = () => {
        popupHeader.innerHTML = planetNames[6];
        popupImage.innerHTML = uranusImage;
    }

    illustrator.onclick = () => {
        popupHeader.innerHTML = planetNames[7];
        popupImage.innerHTML = neptuneImage;
    }

    photoshop.onclick = () => {
        popupHeader.innerHTML = planetNames[8];
        popupImage.innerHTML = plutoImage;
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