function retrieveElement(varId, defaultValue = "", shouldDisplay = false, elementType = "p") {
    if (document.querySelector(`#${varId}`)) { 
        val = document.getElementById(varId);
    } else { 
        val = document.createElement(elementType); 
        val.id = varId;
        val.textContent = defaultValue; 
        if (!shouldDisplay) val.style = "display: none;";
        document.body.appendChild(val); 
    } 
    return val;
}

const wordBank = ["ewower", "oil", "technical", "supervoter", "chimera", "minitwow", "response"];
let counter = retrieveElement("gameCounter", "0");
let curWord = retrieveElement("currentWord", "starter");
let gameHeader = retrieveElement("gameHeader", "JEIVC'S AWESOME TECH.FIGGYC GAME!!!!", true, "h1");
let gameText = retrieveElement("gameText", "", true, "pre");
let response = document.getElementById("resp");
let notes = document.getElementById("notes");

if (r == curWord.textContent) {
    counter.textContent = Number(counter.textContent) + 1;
    curWord.textContent = wordBank[Math.floor(Math.random() * wordBank.length)];
    response.value = "";
}

notes.value = "Hi! I'm Useless. ;']"; 
gameText.textContent = `You have ${counter.textContent} points!\n\nGet one point by typing the word: ${curWord.textContent}`; 

true;