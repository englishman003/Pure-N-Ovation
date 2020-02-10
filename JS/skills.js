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

        html.onmouseover = () => {
            mercuryOverlay.style.display = `block`;
        }
        html.onmouseleave = () => {
            mercuryOverlay.style.display = `none`;
        }