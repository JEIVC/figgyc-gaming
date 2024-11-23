"----------------------------";
"JEIVC AWESOME TECHNICAL REAL";
"----------------------------";
"Since comments break the script (single-line shenanigans), I've resorted to strings.";


"The workaround for creating PERSISTENT variables, since normal ones get reset every input.";
"Allows you to create elements quickly.";

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


"The built-in 'r' variable is a bit limiting, so it's now a function!";
"Pass nothing to get its value, pass in a string to change it to that parameter.";

let response = document.getElementById("resp");
let r = (val = null) => {
    if (val === null) return response.value;
    else response.value = val;
};


"The bulk of your code. Don't mess with anything outside the function.";

function run() {
    "Initialise the counter and main game textstuffs.";
    let counter = retrieveElement("gameCounter", "0");
    let gameHeader = retrieveElement("gameHeader", "JEIVC'S AWESOME TECH.FIGGYC INCREMENTAL!!!!", true, "h1");
    let gameText = retrieveElement("gameText", "", true, "pre");
    
    "Create a game instruction widget.";
    let gameInstructions = retrieveElement("gameInst", "", true, "details");
        let gameInstSummary = retrieveElement("gameInstSummary", "", true, "summary", gameInstructions);
        let gameInstHeader = retrieveElement("gameInstHeader", "How do I play?", true, "strong", gameInstSummary);
        let gameInstText = retrieveElement("gameInstText", `Idk.\nType "c;" to gain a point!\nCertain upgrades may affect the amount of points you get.`, true, "pre", gameInstructions);
    
    "The value doesn't really matter.";
    let notes = document.getElementById("notes");
    notes.value = "Hi! I'm Useless. ;']"; 

    if (r() == "c;") {
        counter.textContent = Number(counter.textContent) + 1;
        r("");
    }
    
    gameText.textContent = `You have ${counter.textContent} points!`; 
}

if (document.getElementById("tech").value.includes("Hi! This line of code is important if you want to test this in real-time. I'm self-referential!")) run();

"Flags the response as 'following' the limit. You can change this if you want, this is just as a preference.";
true;
