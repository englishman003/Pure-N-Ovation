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