//////////////////////////////////////////////
/*            About Page              */

    //////////////////////////////////////////////
    //  Variables

        /* States */
            let elevatorNavOpened0 = false; // - Foundations - Elevator Navigation Starts Closed.
            let elevatorNavOpened1 = false; // - Ambitions - Elevator Navigation Starts Closed.
            let elevatorNavOpened2 = false; // - Interests - Elevator Navigation Starts Closed.

        /* Page Elements */
            const elevator = document.getElementsByClassName('elevator')[0]; // Elevator
            const elevatorDoorLeft = document.getElementsByClassName('elevator-door-L')[0]; // Left Elevator Door
            const elevatorDoorRight = document.getElementsByClassName('elevator-door-R')[0]; // Right Elevator Door
            const elevatorNavLogo = document.getElementsByClassName('floor-icon2')[0];
            const elevatorNavButton0 = document.getElementsByClassName('elevator-nav-cover')[0]; // Foundations Nav Button
            const elevatorNav0 = document.getElementsByClassName('elevator-nav')[0]; // Foundations Nav
            const elevatorNavButton1 = document.getElementsByClassName('elevator-nav-cover')[1]; // Ambitions Nav Button
            const elevatorNav1 = document.getElementsByClassName('elevator-nav')[1];  // Ambitions Nav
            const elevatorNavButton2 = document.getElementsByClassName('elevator-nav-cover')[2]; // Interests Nav Button
            const elevatorNav2 = document.getElementsByClassName('elevator-nav')[2]; // Interests Nav

     //////////////////////////////////////////////
    // Functions

    function openElevator() {
        elevatorDoorLeft.style.width = 0;
        elevatorDoorRight.style.width = 0;
    }

    //////////////////////////////////////////////
    //  Click Events
        elevatorNavButton0.onclick = () => {
            if(elevatorNavOpened0 === false){
                elevatorNav0.style.height = `100%`;
                elevatorNav0.style.width = `100%`;
                elevatorNav0.style.borderBottomLeftRadius = 0;
                elevatorNav0.style.backgroundColor = `#0047AB`;
                elevatorNav0.style.opacity = `.85`;
                elevatorNavOpened0 = true;
            }
            else{
                elevatorNav0.style.height = 0;
                elevatorNav0.style.width = 0;
                elevatorNav0.style.borderBottomLeftRadius = `5rem`;
                elevatorNav0.style.backgroundColor = `transparent`;
                elevatorNav0.style.opacity = 0;
                elevatorNavOpened0 = false;
            }    
        }
        elevatorNavButton1.onclick = () => {
            if(elevatorNavOpened1 === false){
                elevatorNav1.style.height = `100%`;
                elevatorNav1.style.width = `100%`;
                elevatorNav1.style.borderBottomLeftRadius = 0;
                elevatorNav1.style.backgroundColor = `#0047AB`;
                elevatorNav1.style.opacity = `.85`;
                elevatorNavOpened1 = true;
            }
            else{
                elevatorNav1.style.height = 0;
                elevatorNav1.style.width = 0;
                elevatorNav1.style.borderBottomLeftRadius = `5rem`;
                elevatorNav1.style.backgroundColor = `transparent`;
                elevatorNav1.style.opacity = 0;
                elevatorNavOpened1 = false;
            }    
        }
        elevatorNavButton2.onclick = () => {
            if(elevatorNavOpened2 === false){
                elevatorNav2.style.height = `100%`;
                elevatorNav2.style.width = `100%`;
                elevatorNav2.style.borderBottomLeftRadius = 0;
                elevatorNav2.style.backgroundColor = `#0047AB`;
                elevatorNav2.style.opacity = `.85`;
                elevatorNavOpened2 = true;
            }
            else{
                elevatorNav2.style.height = 0;
                elevatorNav2.style.width = 0;
                elevatorNav2.style.borderBottomLeftRadius = `5rem`;
                elevatorNav2.style.backgroundColor = `transparent`;
                elevatorNav2.style.opacity = 0;
                elevatorNavOpened2 = false;
            }    
        }

    //////////////////////////////////////////////
    //  Event Listeners

    //////////////////////////////////////////////
    //  Timeouts
        setTimeout(openElevator, 1500);

    //////////////////////////////////////////////
    //  Intervals