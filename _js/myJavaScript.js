let myName = "Addison";
console.log(myName);

// this function logs a line of text in the browser
// console is an object, has functions and properties
console.log("hello world!");

// these makes all the functions run
function init() {
    changeHeading();
    greeting();
    changeImg();
}

// this creates a function
function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2');
    myHeading.textContent = 'Hello world!';
}

let greetingPre = "Hello there, "

function greeting() {
    // let myGreeting = document.createElement('p');
    // myGreeting.innerText = myName;
    // document.body.appendChild(myGreeting)
    let myGreeting = document.querySelector('p');
    myGreeting.innerText = greetingPre + myName;
}
    