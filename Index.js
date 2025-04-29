// index.js — main logic
const stage = new createjs.Stage("blockCanvas");

// Draw all premise blocks
premises.forEach(p => {
    const block = createBlock(p.text, p.x, p.y, "#CCFFCC"); // light green
    stage.addChild(block);
});

// Draw rule button
const ruleButton = createRuleButton(() => {
    const conclusionBlock = createBlock("Q", 100, 280, "#CCCCFF"); // light blue
    stage.addChild(conclusionBlock);

    if ("Q" === goal) {
        setTimeout(() => alert("🎉 Goal Achieved!"), 200);
    }

    stage.update();
});

stage.addChild(ruleButton);

// Initial render
stage.update();
