// index.js — Main Controller

// Parse URL to get mode
const params = new URLSearchParams(window.location.search);
const mode = params.get("mode") || "worked"; // default to worked

const stage = new createjs.Stage("blockCanvas");

// Show or hide goal text based on mode
if (mode === "interactive") {
    document.getElementById("goal").style.display = "block";
} else {
    document.getElementById("goal").style.display = "none";
}

// Interactive Mode
if (mode === "interactive") {
    premises.forEach(p => {
        const block = createBlock(p.text, p.x, p.y, "#CCFFCC"); // light green
        stage.addChild(block);
    });

    const ruleButton = createRuleButton(() => {
        const conclusionBlock = createBlock("Q", 100, 400, "#CCCCFF"); // light blue
        stage.addChild(conclusionBlock);

        selectedBlocks.forEach(b => b.shape.graphics._fill.style = "#CCFFCC");
        selectedBlocks = [];

        if ("Q" === goal) {
            setTimeout(() => alert("🎉 Goal Achieved!"), 200);
        }

        stage.update();
    });
    stage.addChild(ruleButton);

    const goalBlock = createBlock("Q", 500, 50, "#D1C4E9", "goal");
    stage.addChild(goalBlock);

    stage.update();
}

// Worked Example Mode
if (mode === "worked") {
    fetch("2_4.json")
        .then(res => res.json())
        .then(data => {
            playWorkedExample(data, stage);
        });
}

