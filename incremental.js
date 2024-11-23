function retrieveElement(varId, defaultValue = "", shouldDisplay = false, elementType = "p", parent = document.body) {
    if (document.querySelector(`#${varId}`)) { 
        val = document.getElementById(varId);
    } else { 
        val = document.createElement(elementType); 
        val.id = varId;
        val.textContent = defaultValue; 
        if (!shouldDisplay) val.style = "display: none;";
        parent.appendChild(val); 
    } 
    return val;
}

function run(r) {
    // Initialise elements and variables
    const wordBank = ["ewower", "oil", "technical", "supervoter", "chimera", "minitwow", "response"];
    let counter = retrieveElement("gameCounter", "0");
    let curWord = retrieveElement("currentWord", "starter");
    let gameHeader = retrieveElement("gameHeader", "JEIVC'S AWESOME TECH.FIGGYC GAME!!!!", true, "h1");
    let gameText = retrieveElement("gameText", "", true, "pre");
    let gameInstructions = retrieveElement("gameInst", "", true, "details");
    let gameInstHeader = retrieveElement("gameInstHeader", "How do I play??", true, "summary", gameInstructions);
    let gameInstText = retrieveElement("gameInstText", "Idk", true, "p", gameInstructions);
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
}