//////////////////////////////////////////////
/*            About Page              */

    //////////////////////////////////////////////
    //  Variables

        /* Initialized Only Variables */
            let Rooms;
            let roomNumber;
            let initialCard;
            let initialCardSetup;
            let previousFloor;
            let currentFloor;

            /* Indices */
            let floorIndex = 0;
            let hallIndex = 0;
            let roomIndex = 1;
            let animateIndex = 0;
            let currentRoomIndex = 0;
            let elevatorNavIndex = 2;
            let previousFloorIndex;
            let currentFloorIndex;

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
            const elevatorNavOpen = document.getElementsByClassName('elevator-nav-cover-bars'); // Foundations Nav Open Icon
            const elevatorNavClose = document.getElementsByClassName('elevator-nav-cover-close'); // Foundations Nav Close Icon

            const elevatorNavLink = document.getElementsByClassName(`nav-link`);

            const elevatorFloor = document.getElementsByClassName(`elevator-floor`);
            const floorTitle = document.getElementsByClassName(`elevator-floor-title`);  // Current Elevator Floor
            const titleOfCard = document.getElementsByClassName(`content-card-title`);  // Current Floor Sub-Title
            const subTitleOfCard = document.getElementsByClassName('content-card-subTitle'); // The Card Title
            const cardContent = document.getElementsByClassName(`content-card-tidbit`); // The Content Of The Card
            const roomNumbers = document.getElementsByClassName(`room-numbers`); // The List Of Rooms
            const roomNUMBER = document.getElementsByClassName(`room-number`); // Each Individual Room
            const floorNumber = document.getElementsByClassName('floor-number')[0];
            const floorIcon = document.getElementsByClassName(`floor-icon`);
            const arrowLeft = document.getElementsByClassName(`arrow-left`);
            const arrowRight = document.getElementsByClassName(`arrow-right`); 
            const arrowUp = document.getElementsByClassName(`arrow`)[0];
            const arrowDown = document.getElementsByClassName(`arrow`)[1];
            let roomArray = [];

            let currentRoom = roomNUMBER[0];
            floorIcon[elevatorNavIndex].style.color = `#FFD700`;


    //////////////////////////////////////////////
    //  Classes

    class Card {
        constructor(cardTitle, content){
            this.title = cardTitle;
            this.content = content;
        }
        changeCardContent(Title, Content){
            this.title.textContent = Title;
            this.content.textContent = Content;
        }
    }

    class Floor {
        constructor(mainCat){
            this.mainCategory = mainCat;
            this.subCategory = [];
            this.content = [];
            this.rooms = [];
        }
        addFloorCategory(categoryName){
            this.subCategory.push(categoryName);
        }
        addCardArray(cardArray){
            this.content.push(cardArray);
        }
        addCard(index, card){
            this.content[index].push(card);
        }
        createRooms(cardArray, index){
            for(let i = 1; i <= cardArray.length; i++){
                this.rooms.push(this.rooms.innerHTML = `<p class="room-number">${i}</p>`);
                Rooms = this.rooms.join(" ");
            }
            console.log(cardArray.length);
            console.log(Rooms);
            roomNumbers[index].innerHTML = Rooms;
            return roomNumbers[index];
        }
        changeHall(floor, titleIndex, categoryIndex){
            titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex];
        }

        changeNextRoom(){
            for(let i = 0; i < currentFloor.rooms.length - 1; i++){
                roomNUMBER[i].classList.remove(`active-room`);
            }
            if(currentRoomIndex < currentFloor.rooms.length - 1){
                currentRoomIndex++;
                roomNUMBER[currentRoomIndex].classList.add(`active-room`);
                if(currentFloor === elevatorFloors[2]){
                    subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].title;
                    cardContent[currentFloorIndex].innerHTML = currentFloor.content[hallIndex][currentRoomIndex].content;
                    return;
                }
                subTitleOfCard[floorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].title;
                cardContent[floorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].content;
            }
            else{
                console.log(`I'm in the last room!`);
            }
        }

        changePreviousRoom(){
            for(let i = 0; i < currentFloor.rooms.length; i++){
                roomNUMBER[i].classList.remove(`active-room`);
            }
            if(currentRoomIndex > 0){
                currentRoomIndex--;
                roomNUMBER[currentRoomIndex].classList.add(`active-room`);
                currentFloor
                if(currentFloor === elevatorFloors[2]){
                    subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].title;
                    cardContent[currentFloorIndex].innerHTML = currentFloor.content[hallIndex][currentRoomIndex].content;
                    return;
                }
                subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].title;
                cardContent[currentFloorIndex].textContent = currentFloor.content[hallIndex][currentRoomIndex].content;
                console.log(currentRoomIndex);
            }
            else{
                roomNUMBER[currentRoomIndex].classList.add(`active-room`);
                console.log(`I'm in the first room!`);
            }
        }
    }

    //////////////////////////////////////////////
    //  Objects

        /* Elevator Floors */
            let foundation = new Floor(`Foundation`);
            let ambitions = new Floor(`Ambitions`);
            let interests = new Floor(`Interests`);

            /* Elevator Floor Array */
                let elevatorFloors = [foundation, ambitions, interests];

            /* Elevator Floor Room Arrays */

            foundationRooms = [];
            ambitionsRooms = [];
            interestsRooms = [];

            /* 'Room' Cards */
                // Foundation
                    /* At Home */
                        const personalLife1 = new Card(`Personal Life: Part 1`, `I am a member of the Church of Jesus Christ of Latter Day Saints and was married in Nauvoo Illinois.`);
                        const personalLife2 = new Card(`Personal Life: Part 2`, `My wife, Diana, and I currently share a beautiful 15 month old daughter, and are expecting a second child.`);
                        const characterBuild = new Card(`Character Build`, `I firmly believe in being an honest, trustworthy individual of high integrity.  That includes, but is not limited to being diligent, hard-working and self-starting.`);
                        const havingFun = new Card(`Having Fun`, `Success is knowing when to play.  So, having fun is essential to enjoying a successful life.  As such, having fun is important to me.`);
                    
                    /* In The Workplace */
                        
                        const mambaMentality = new Card(`Mamba Mentality`, `The Moniker of the late Kobe Bryant fits perfectly here. I have the drive to work to be the best that I can be, and therefore be able to produce the best kind of work.`);

                        const bestTools = new Card(`Best Tools`, `I’m always ready and eager to learn new things to add to my tool kit in order to bring the right tool set to each and every job.`);

                        const cleanliness = new Card(`Cleanliness`, `Clean code means everything.  It’s easier to read, debug, and much more.  It helps to clear the thought process, which in turn leads to more creativity and successful ideas.  This is valued and persistently driven for.`);

                        const empathyOptimism = new Card(`Empathy & Optimism`, `While no one likes negativity, it shows up from time to time.  The key is being able to work through that to see the bright side. I love to help others do just that.`);

                    // Ambitions
                        /* At Home */
                            const chef = new Card(`Chef Extraordinaire`, `You could find me usually looking to see what kinds of foods I can create.  Whether it is a new recipe, or from whatever is in the kitchen pantry, I love to create something yummy.`);

                            const graphicArtist = new Card(`Graphic Artist`, `Graphic design is not only a part of my work, it is one of my favorite past-times and I love to incorporate time doing something like working on creating fonts or whatever.  Including doing logos and sports related material.`);

                            const husbandFather = new Card(`Great Husband & Father`, `This one is one in which I am always striving to be greater. I love my wife and daughter greatly, no matter the frustration caused at times. Beyond Heavenly Father & Christ, they are my rock, heart, and soul.`);

                        /* In The Workplace */
                            const communication = new Card(`Clear Communication`, `Whether through comments, great organization, technology, or word of mouth, clear communication creates a supremely successful working environment. That is one of the top objectives of mine every day I am working.`);

                            const swissArmyKnife = new Card(`Swiss Army Knife`, `Being able to meaningfully contribute in many areas of a project is important to me.  I believe it to be essential to the success of any job.`);

                            const details = new Card(`Details, Details, Details`, `Attention to the minute details can make or break a project, product, or anything for that matter.  I take great pride in having the details straight.`);

                            const infinityAndBeyond = new Card(`To Infinity & Beyond!`, `Being willing to go the second mile, or even to another galaxy and back for a client, as Buzz Lightyear would for Woody is essential.  We want to ensure we are free of Zurg and ensure success of any mission or project.`);

                    // Interests

                        /* Web Technology */
                            const html5 = new Card(`HTML5`, `<i class="fab fa-html5 interests-icon"></i>`);
                            const css3 = new Card(`CSS3`, `<i class="fab fa-css3 interests-icon"></i>`);
                            const cssGrid = new Card(`CSS Grids`, `<i class="fas fa-th interests-icon"></i>`);
                            const flexbox = new Card(`Flexbox`, `<i class="fas fa-grip-horizontal interests-icon"></i>`);
                            const javaScript = new Card(`JavaScript`, `<i class="fab fa-js-square interests-icon"></i>`);

                        /* Technology */
                        const android = new Card(`Android`, `<i class="fab fa-android interests-icon"></i>`);
                        const xbox = new Card(`Xbox`, `<i class="fab fa-xbox interests-icon"></i>`);
                        const adobe = new Card(`Adobe`, `<i class="fab fa-adobe interests-icon"></i>`);
                        const inkscape = new Card(`Inkscape`, `<img src="Design_Files/Images/inkscape-white.svg"/>`);
                        const smartPhone = new Card(`Smart Phone`, `<i class="fas fa-mobile-alt interests-icon"></i>`);
                        const tablet = new Card(`Tablet`, `<i class="fas fa-tablet-alt interests-icon"></i>`);
                        const laptop = new Card(`Laptop`, `<i class="fas fa-laptop interests-icon"></i>`);
                        const microsoft = new Card(`Microsoft`, `<i class="fab fa-windows interests-icon"></i>`);

                        /* Colors */
                        const gold = new Card(`Gold`, `<svg class="icon icon-color-scribble"><use xlink:href="Design_Files/Images/icomoon/purenovation-defs.svg#icon-color-scribble" class="interests-icon colorGold"></use></svg>`);
                        const crimson = new Card(`Crimson`, `<svg class="icon icon-color-scribble"><use xlink:href="Design_Files/Images/icomoon/purenovation-defs.svg#icon-color-scribble" class="interests-icon colorChiefsRed"></use></svg>`);
                        const cobalt = new Card(`Cobalt`, `<svg class="icon icon-color-scribble"><use xlink:href="Design_Files/Images/icomoon/purenovation-defs.svg#icon-color-scribble" class="interests-icon colorCobalt"></use></svg>`);
                        const green = new Card(`Green`, `<svg class="icon icon-color-scribble"><use xlink:href="Design_Files/Images/icomoon/purenovation-defs.svg#icon-color-scribble" class="interests-icon colorGreen"></use></svg>`);

                        /* Foods */
                        const mexican = new Card(`Mexican`, `<i class="fas fa-utensils interests-icon"></i>`);
                        const indian = new Card(`Indian`, `<i class="fas fa-utensils interests-icon"></i>`);
                        const italian = new Card(`Italian`, `<i class="fas fa-utensils interests-icon"></i>`);

                        /* Activities */
                        const basketball = new Card(`Basketball`, `<i class="fas fa-basketball-ball interests-icon"></i>`);
                        const football = new Card(`Football`, `<i class="fas fa-football-ball interests-icon"></i>`);
                        const futbol = new Card(`Futbol`, `<i class="fas fa-futbol interests-icon"></i>`);
                        const volleyball = new Card(`Volleyball`, `<i class="fas fa-volleyball-ball interests-icon"></i>`);
                        const videoGames = new Card(`Video Games`, `<i class="fas fa-gamepad interests-icon"></i>`);
                        const boardGames = new Card(`Board Games`, `<i class="fas fa-chess-rook interests-icon"></i>`);
                        const swimming = new Card(`Swimming`, `<i class="fas fa-swimming-pool interests-icon"></i>`);
                        const bbq = new Card(`BBQ`, `<i class="fas fa-hamburger interests-icon"></i>`);

                
                    /* Card Arrays */
                        //Foundation
                            const atHome1 = [];
                            const atWork1  = [];
                            console.log(atHome1);

                        //Ambitions
                            const atHome2 = [];
                            const atWork2 = [];
                        
                        // Interests
                            const webTechnology = [];
                            const technology = [];
                            const colors = [];
                            const foods = [];
                            const activities = [];

            /* Floor Sub-Categories */
                // Foundation
                    foundation.addFloorCategory(`At Home`);
                    foundation.addFloorCategory(`In The Workplace`);
                    console.log(foundation.subCategory);
                
                // Ambitions
                    ambitions.addFloorCategory(`At Home`);
                    ambitions.addFloorCategory(`In The Workplace`);
                    console.log(ambitions.subCategory);

                // Interests
                    interests.addFloorCategory(`Web Technology`);
                    interests.addFloorCategory(`Technology`);
                    interests.addFloorCategory(`Colors`);
                    interests.addFloorCategory(`Foods`);
                    interests.addFloorCategory(`Activities`);
                    console.log(interests.subCategory);

                        /*-- Added Card Arrays --*/
                        // Foundation
                        foundation.addCardArray(atHome1);
                        foundation.addCardArray(atWork1);
                    // Ambitions
                        ambitions.addCardArray(atHome2);
                        ambitions.addCardArray(atWork2);
                            console.log(foundation.content);
                            console.log(ambitions.content);
                    // Interests
                        interests.addCardArray(webTechnology);
                        interests.addCardArray(technology);
                        interests.addCardArray(colors);
                        interests.addCardArray(foods);
                        interests.addCardArray(activities);
                        console.log(interests.content);

                /*-- Added Cards --*/
                    // Foundation
                        /* At Home */
                            foundation.addCard(0, personalLife1);
                            foundation.addCard(0, personalLife2);
                            foundation.addCard(0, characterBuild);
                            foundation.addCard(0, havingFun);

                        /* In The Workplace */
                            foundation.addCard(1, mambaMentality);
                            foundation.addCard(1, bestTools);
                            foundation.addCard(1, cleanliness);
                            foundation.addCard(1, empathyOptimism);
                    // Ambitions
                        /* At Home */
                            ambitions.addCard(0, chef);
                            ambitions.addCard(0, graphicArtist);
                            ambitions.addCard(0, husbandFather);
                        /* In The Workplace */
                        ambitions.addCard(1, communication);
                        ambitions.addCard(1, swissArmyKnife);
                        ambitions.addCard(1, details);
                        ambitions.addCard(1, infinityAndBeyond);
                    // Interests
                        /* Web Technology */
                            interests.addCard(0, html5);
                            interests.addCard(0, css3);
                            interests.addCard(0, cssGrid);
                            interests.addCard(0, flexbox);
                            interests.addCard(0, javaScript);
                        /* Technology */
                            interests.addCard(1, android);
                            interests.addCard(1, xbox);
                            interests.addCard(1, adobe);
                            interests.addCard(1, inkscape);
                            interests.addCard(1, smartPhone);
                            interests.addCard(1, tablet);
                            interests.addCard(1, laptop);
                            interests.addCard(1, microsoft);
                        /* Colors */
                            interests.addCard(2, gold);
                            interests.addCard(2, crimson);
                            interests.addCard(2, cobalt);
                            interests.addCard(2, green);
                        /* Foods */
                            interests.addCard(3, mexican);
                            interests.addCard(3, indian);
                            interests.addCard(3, italian);
                        /* Activities */
                            interests.addCard(4, basketball);
                            interests.addCard(4, football);
                            interests.addCard(4, futbol);
                            interests.addCard(4, volleyball);
                            interests.addCard(4, videoGames);
                            interests.addCard(4, boardGames);
                            interests.addCard(4, swimming);
                            interests.addCard(4, bbq);

                            initialCardSetup = new Card(subTitleOfCard[0], cardContent[0]);
                            initialCard = initialCardSetup.changeCardContent(personalLife1.title, personalLife1.content);

     //////////////////////////////////////////////
    // Functions

    function addRooms(array, arrayStart, arrayLength){
        for(let i = 0; i >= arrayStart && i < arrayLength; i++){
            array.push(roomNUMBER[i]);
        }
    }
    
    function openElevator() {
        elevatorDoorLeft.style.width = 0;
        elevatorDoorRight.style.width = 0;
    }

    //////////////////////////////////////////////
    //  Function Calls
        foundation.createRooms(atHome1, 0);


    //////////////////////////////////////////////
    //  Functions (Cont.)
    
    function changeHALL(floor, index1, index2){
        floor.changeHall(floor, index1, index2);
    }

    function removeActiveRoom(){
        for(let i = 0; i < roomNUMBER.length - 1; i++){
            roomNUMBER[i].classList.remove(`active-room`);
        }
    }

    function elevatorDoorsDisappear(){
        elevatorDoorLeft.style.opacity = 0;
        elevatorDoorRight.style.opacity = 0;
    }

    setTimeout(elevatorDoorsDisappear, 3500);

    function oldFloorDisappear(index){
        elevatorDoorLeft.style.opacity = 1;
        elevatorDoorRight.style.opacity = 1;
        elevatorFloor[index].style.display =`none`;
        elevatorDoorLeft.style.width = `100%`;
        elevatorDoorRight.style.width = `100%`;
    }
    function newFloorAppear(){
        elevatorFloor[floorIndex].style.display = `grid`;
        setTimeout(elevatorDoorsDisappear, 2015);
        elevatorDoorLeft.style.width = 0;
        elevatorDoorRight.style.width = 0;
    }

    function changeFloorUp(){
        if(floorIndex === 2){
            return null;
        }
        currentRoomIndex = 0;
        previousFloor = elevatorFloors[floorIndex];
        previousFloorIndex = elevatorFloors.indexOf(previousFloor);
        roomNumbers[previousFloorIndex].innerHTML = "";
        oldFloorDisappear(floorIndex);
        floorIndex++;
        floorNumber.textContent = floorIndex + 1;
        for(let i = 0; i < floorIcon.length; i++){
            floorIcon[i].style.color = `#777777`;
        }
        elevatorNavIndex--;
        floorIcon[elevatorNavIndex].style.color = `#FFD700`;
        currentFloor = elevatorFloors[floorIndex];
        currentFloorIndex = elevatorFloors.indexOf(currentFloor);
        setTimeout(newFloorAppear, 2500);
        removeRooms(elevatorFloors[floorIndex]);
        elevatorFloors[floorIndex].createRooms(elevatorFloors[floorIndex].content[0], floorIndex);
        removeActiveRoom();
        roomNumbers[currentFloorIndex].firstChild.classList.add(`active-room`);
        roomArray = [];
        for(let i = 0; i < roomNUMBER.length; i++){
            roomArray.push(roomNUMBER[i]);
        }
        if(currentFloor === elevatorFloors[2]){
            titleOfCard[currentFloorIndex].textContent = currentFloor.subCategory[0];
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[0][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[0][0].content;
            return;
        }
        subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[0][0].title;
        cardContent[currentFloorIndex].textContent = currentFloor.content[0][0].content;
        
        

    }
    function changeFloorDown(){
        if(floorIndex === 0){
            return null;
        }
        currentRoomIndex = 0;
        previousFloor = elevatorFloors[floorIndex];
        previousFloorIndex = elevatorFloors.indexOf(previousFloor);
        roomNumbers[previousFloorIndex].innerHTML = "";
        oldFloorDisappear(floorIndex);
        floorIndex--;
        floorNumber.textContent = floorIndex + 1;
        for(let i = 0; i < floorIcon.length; i++){
            floorIcon[i].style.color = `#777777`;
        }
        elevatorNavIndex++;
        floorIcon[elevatorNavIndex].style.color = `#FFD700`;
        currentFloor = elevatorFloors[floorIndex];
        currentFloorIndex = elevatorFloors.indexOf(currentFloor);
        setTimeout(newFloorAppear, 2500);
        removeRooms(elevatorFloors[floorIndex]);
        elevatorFloors[floorIndex].createRooms(elevatorFloors[floorIndex].content[0], floorIndex);
        removeActiveRoom();
        roomNumbers[currentFloorIndex].firstChild.classList.add(`active-room`);
        roomArray = [];
        for(let i = 0; i < roomNUMBER.length; i++){
            roomArray.push(roomNUMBER[i]);
        }
        

    }

    const removeRooms = (floor) => {
        for(let i = 0; i < floor.rooms.length; i++){
            console.log(floor.rooms.length);
            floor.rooms = [];
            console.log(floor.rooms);
        }
    }


    //////////////////////////////////////////////
    //  Click Events
        elevatorNavButton0.onclick = () => {
            if(elevatorNavOpened0 === false){
                elevatorNav0.style.height = `100%`;
                elevatorNav0.style.width = `100%`;
                elevatorNav0.style.borderBottomLeftRadius = 0;
                elevatorNav0.style.backgroundColor = `#0047AB`;
                elevatorNav0.style.opacity = `.95`;
                elevatorNavOpen[0].style.display="none";
                elevatorNavClose[0].style.display="inline-block";
                elevatorNavOpened0 = true;
            }
            else{
                elevatorNav0.style.height = 0;
                elevatorNav0.style.width = 0;
                elevatorNav0.style.borderBottomLeftRadius = `5rem`;
                elevatorNav0.style.backgroundColor = `transparent`;
                elevatorNav0.style.opacity = 0;
                elevatorNavOpen[0].style.display="inline-block";
                elevatorNavClose[0].style.display="none";
                elevatorNavOpened0 = false;
            }    
        }
        elevatorNavButton1.onclick = () => {
            if(elevatorNavOpened1 === false){
                elevatorNav1.style.height = `100%`;
                elevatorNav1.style.width = `100%`;
                elevatorNav1.style.borderBottomLeftRadius = 0;
                elevatorNav1.style.backgroundColor = `#0047AB`;
                elevatorNav1.style.opacity = `.95`;
                elevatorNavOpen[1].style.display="none";
                elevatorNavClose[1].style.display="inline-block";
                elevatorNavOpened1 = true;
            }
            else{
                elevatorNav1.style.height = 0;
                elevatorNav1.style.width = 0;
                elevatorNav1.style.borderBottomLeftRadius = `5rem`;
                elevatorNav1.style.backgroundColor = `transparent`;
                elevatorNav1.style.opacity = 0;
                elevatorNavOpen[1].style.display="inline-block";
                elevatorNavClose[1].style.display="none";
                elevatorNavOpened1 = false;
            }    
        }
        elevatorNavButton2.onclick = () => {
            if(elevatorNavOpened2 === false){
                elevatorNav2.style.height = `100%`;
                elevatorNav2.style.width = `100%`;
                elevatorNav2.style.borderBottomLeftRadius = 0;
                elevatorNav2.style.backgroundColor = `#0047AB`;
                elevatorNav2.style.opacity = `.95`;
                elevatorNavOpen[2].style.display="none";
                elevatorNavClose[2].style.display="inline-block";
                elevatorNavOpened2 = true;
            }
            else{
                elevatorNav2.style.height = 0;
                elevatorNav2.style.width = 0;
                elevatorNav2.style.borderBottomLeftRadius = `5rem`;
                elevatorNav2.style.backgroundColor = `transparent`;
                elevatorNav2.style.opacity = 0;
                elevatorNavOpen[2].style.display="inline-block";
                elevatorNavClose[2].style.display="none";
                elevatorNavOpened2 = false;
            }    
        }

        arrowRight[0].onclick = () => {
            currentFloorIndex = 0;
            currentFloor = elevatorFloors[0];
            foundation.changeNextRoom();
        }
        arrowLeft[0].onclick = () => {
            currentFloorIndex = 0;
            currentFloor = elevatorFloors[0];
            foundation.changePreviousRoom();
        }
        arrowRight[1].onclick = () => {
            foundation.changeNextRoom();
        }
        arrowLeft[1].onclick = () => {
            foundation.changePreviousRoom();
        }
        arrowRight[2].onclick = () => {
            foundation.changeNextRoom();
        }
        arrowLeft[2].onclick = () => {
            foundation.changePreviousRoom();
        }

        arrowUp.onclick = () => {
            changeFloorUp();
        }
        arrowDown.onclick = () => {
            changeFloorDown();
        }

        elevatorNavLink[0].onclick = () => {
            alert(`I'm Home!`);
            changeHALL(foundation, 0, 0);  // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            removeRooms(foundation);  // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            foundation.createRooms(atHome1, 0);  // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 0;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[floorIndex].textContent = foundation.content[hallIndex][currentRoomIndex].title;
            cardContent[floorIndex].textContent = foundation.content[hallIndex][currentRoomIndex].content;
        }
        elevatorNavLink[1].onclick = () => {
            alert(`I'm At Work!`);
            changeHALL(foundation, 0, 1);  // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            removeRooms(foundation);  // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            foundation.createRooms(atWork1, 0);  // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 1;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[floorIndex].textContent = foundation.content[hallIndex][currentRoomIndex].title;
            cardContent[floorIndex].textContent = foundation.content[hallIndex][currentRoomIndex].content;
        }

        elevatorNavLink[2].onclick = () => {
            alert(`I'm Home!`);
            changeHALL(ambitions, 1, 0);  // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            removeRooms(ambitions);  // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            ambitions.createRooms(atHome2, 1);  // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.

            // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 0; 

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[0][0].title;
            cardContent[currentFloorIndex].textContent = currentFloor.content[0][0].content;
        }
        elevatorNavLink[3].onclick = () => {
            alert(`I'm At Work!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(ambitions, 1, 1);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(ambitions);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            ambitions.createRooms(atWork2, 1);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 1;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[1][0].title;
            cardContent[currentFloorIndex].textContent = currentFloor.content[1][0].content;
        }
        elevatorNavLink[4].onclick = () => {
            alert(`Ooh The Web!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(interests, 2, 0);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(interests);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            interests.createRooms(webTechnology, 2);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 0;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[0][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[0][0].content;
        }
        elevatorNavLink[5].onclick = () => {
            alert(`Ooh Technology!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(interests, 2, 1);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(interests);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            interests.createRooms(technology, 2);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 1;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[1][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[1][0].content;
        }
        elevatorNavLink[6].onclick = () => {
            alert(`The Colors Dude!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(interests, 2, 2);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(interests);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            interests.createRooms(colors, 2);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 2;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[2][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[2][0].content;
        }
        elevatorNavLink[7].onclick = () => {
            alert(`Yummy!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(interests, 2, 3);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(interests);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            interests.createRooms(foods, 2);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 3;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[3][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[3][0].content;
        }
        elevatorNavLink[8].onclick = () => {
            alert(`Go Chiefs!`);
            // Original Function Arguments are floor | titleIndex | categoryIndex -> titleOfCard[titleIndex].textContent = floor.subCategory[categoryIndex]; 
            changeHALL(interests, 2, 4);

            // Removes the rooms at the bottom of the elevator container for the floor listed as an argument.
            removeRooms(interests);

            // Arguments are | cardArray | index -> card Array for creating the array of innerHTML elements needed, and index is used to be able to place those elements into the correct room number container.
            interests.createRooms(activities, 2);
            
             // Sets the first active room on the Floor.
            roomNUMBER[0].classList.add(`active-room`);

            // Index of the current 'Hall' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct hall name.
            hallIndex = 4;

            // Index of the current 'Room' | Used in the changeNextRoom & changePreviousRoom Methods of the Floor Objects.  Helps get the correct room name.
            currentRoomIndex = 0;

            // Changing to the first room title and conent of the current floor.  [ current floor first hall's index ][ first room's index ]
            subTitleOfCard[currentFloorIndex].textContent = currentFloor.content[4][0].title;
            cardContent[currentFloorIndex].innerHTML = currentFloor.content[4][0].content;
        }

    //////////////////////////////////////////////
    //  Event Listeners


    //////////////////////////////////////////////
    //  Timeouts
        setTimeout(openElevator, 1500);

    //////////////////////////////////////////////
    //  Intervals
        /* Interval Initializations */
       

        /* Interval Declarations */
            

    // Tests
    roomNUMBER[0].classList.add(`active-room`);