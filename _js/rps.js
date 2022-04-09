let userChoice;
let win;
let choices = ["rock", "paper", "scissors"]; 

// lets the computer decide through random umbers
function createRandom() {
    let randnum = Math.floor(Math.random() * choices.length);
    return cpu = choices[randnum];
}

// Sets the pictures up
function drawImg(pic, width, height, alt, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.getElementById(id).appendChild(x);
}

// gives userChoice value, creates image for computer input
function choose(choice) {
    userChoice = choice;
    deleteImage("playerID");
    deleteImage("comID");
    deleteText();
    createRandom();
    createImage();
    playRPS();
}

// Creates the images for both cpu and player
function createImage() {
    if (userChoice == "rock") {
        drawImg("http://images.clipartpanda.com/rock-clipart-7Ta7BALTA.png", "90", "120", "rock", "playerID")
    } if (userChoice == "paper") {
        drawImg("http://clipart-library.com/data_images/296148.png", "90", "120", "paper", "playerID")
    } if (userChoice == "scissors"){
        drawImg("https://www.pngkit.com/png/full/28-284006_black-and-white-scissors-free-clip-art-black.png", "90", "120", "scissors", "playerID")
    } if (cpu == "rock") {
        drawImg("http://images.clipartpanda.com/rock-clipart-7Ta7BALTA.png", "90", "120", "rock", "comID")
    } if (cpu == "paper") {
        drawImg("http://clipart-library.com/data_images/296148.png", "90", "120", "paper", "comID")
    } if (cpu == "scissors"){
        drawImg("https://www.pngkit.com/png/full/28-284006_black-and-white-scissors-free-clip-art-black.png", "90", "120", "scissors", "comID")
    } 
}
// I got this from w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while 
function deleteImage(id) {
    var element = document.getElementById(id);
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
// gives the result
function playRPS() {
    if (cpu == "rock" && userChoice == "rock" || cpu == "paper" && userChoice == "paper" || cpu == "scissors" && userChoice == "scissors"){
        let winner = document.createElement('h1');
        winner.innerText = "It's a tie";
        document.getElementById("resultText").appendChild(winner);
    }
    else if (cpu == "paper" && userChoice == "rock" || cpu == "scissors" && userChoice == "paper" || cpu == "rock" && userChoice == "scissors") {
        let winner = document.createElement('h1');
        winner.innerText = "You lose";
        document.getElementById("resultText").appendChild(winner);
    }
    else {
        let winner = document.createElement('h1');
        winner.innerText = "You win";
        document.getElementById("resultText").appendChild(winner);
    }
}

// deletes the previous results
function deleteText() {
    var element = document.getElementById("resultText");
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
