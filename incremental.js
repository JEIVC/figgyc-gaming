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
    let counter = retrieveElement("gameCounter", "0");
    let gameHeader = retrieveElement("gameHeader", "JEIVC'S AWESOME TECH.FIGGYC INCREMENTAL!!!!", true, "h1");
    let gameText = retrieveElement("gameText", "", true, "pre");
    let gameInstructions = retrieveElement("gameInst", "", true, "details");
        let gameInstSummary = retrieveElement("gameInstHeader", "", true, "summary", gameInstructions);
        let gameInstHeader = retrieveElement("gameInstHeader", "How do I play?", true, "strong", gameInstructions);
        let gameInstText = retrieveElement("gameInstText", `Idk.\nType "c;" to gain a point!\nCertain upgrades may affect the amount of points you get.`, true, "pre", gameInstructions);
    let response = document.getElementById("resp");
    let notes = document.getElementById("notes");
    
    if (r == "c;") {
        counter.textContent = Number(counter.textContent) + 1;
        response.value = "";
    }
    
    notes.value = "Hi! I'm Useless. ;']"; 
    gameText.textContent = `You have ${counter.textContent} points!`; 
    
    true;
}

// if(document.querySelector("#techScript"))"Type a letter to run the game! (And don't mess with this note, will ya?)"==document.getElementById("notes").value&&(document.getElementById("resp").value=""),run(r);else{let e=document.createElement("script");fetch("https://raw.githubusercontent.com/JEIVC/figgyc-gaming/refs/heads/main/incremental.js").then(e=>e.text()).then(t=>{e.innerHTML=t,e.id="techScript",document.body.appendChild(e),document.getElementById("notes").value="Type a letter to run the game! (And don't mess with this note, will ya?)"})};true;
