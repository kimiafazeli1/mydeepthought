// Setup Stage
const stage = new createjs.Stage("blockCanvas");

// Set Goal
const goal = "Q";

// Create Premise Block: "P → Q"
const premise = new createjs.Container();
const premiseBox = new createjs.Shape();
premiseBox.graphics.beginFill("#ccffcc").setStrokeStyle(1).beginStroke("black").drawRoundRect(0, 0, 150, 50, 10);
const premiseText = new createjs.Text("P → Q", "16px Arial", "#000");
premiseText.textAlign = "center";
premiseText.textBaseline = "middle";
premiseText.x = 75;
premiseText.y = 25;
premise.addChild(premiseBox, premiseText);
premise.x = 100;
premise.y = 200;
stage.addChild(premise);

// Create Premise Block: "P"
const premise2 = new createjs.Container();
const premiseBox2 = new createjs.Shape();
premiseBox2.graphics.beginFill("#ccffcc").setStrokeStyle(1).beginStroke("black").drawRoundRect(0, 0, 150, 50, 10);
const premiseText2 = new createjs.Text("P", "16px Arial", "#000");
premiseText2.textAlign = "center";
premiseText2.textBaseline = "middle";
premiseText2.x = 75;
premiseText2.y = 25;
premise2.addChild(premiseBox2, premiseText2);
premise2.x = 100;
premise2.y = 300;
stage.addChild(premise2);

// Create Rule Button: "Modus Ponens"
const ruleBtn = new createjs.Container();
const ruleBox = new createjs.Shape();
ruleBox.graphics.beginFill("#ffd699").setStrokeStyle(1).beginStroke("black").drawRoundRect(0, 0, 180, 50, 10);
const ruleText = new createjs.Text("Apply Modus Ponens", "16px Arial", "#000");
ruleText.textAlign = "center";
ruleText.textBaseline = "middle";
ruleText.x = 90;
ruleText.y = 25;
ruleBtn.addChild(ruleBox, ruleText);
ruleBtn.x = 400;
ruleBtn.y = 250;
stage.addChild(ruleBtn);

// Make Blocks draggable (optional)
[premise, premise2].forEach(block => {
    block.on("mousedown", function (evt) {
        this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
    });
    block.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        stage.update();
    });
});

// Handle Rule Button Click
ruleBtn.on("click", function (evt) {
    // Check if both premises are there — in real Deep Thought we would check more carefully
    applyRule();
});

function applyRule() {
    // For tiny demo, we assume correct premises are present
    const conclusion = "Q";

    // Draw new derived Block
    const conclusionBlock = new createjs.Container();
    const blockShape = new createjs.Shape();
    blockShape.graphics.beginFill("#ccccff").setStrokeStyle(1).beginStroke("black").drawRoundRect(0, 0, 150, 50, 10);
    const blockText = new createjs.Text(conclusion, "16px Arial", "#000");
    blockText.textAlign = "center";
    blockText.textBaseline = "middle";
    blockText.x = 75;
    blockText.y = 25;
    conclusionBlock.addChild(blockShape, blockText);
    conclusionBlock.x = 300;
    conclusionBlock.y = 400;

    stage.addChild(conclusionBlock);

    // Check if it matches goal
    if (conclusion === goal) {
        setTimeout(() => {
            alert("🎉 Goal Achieved!");
        }, 300);
    }

    stage.update();
}

stage.update();
