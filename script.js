// Create a canvas stage using CreateJS
const stage = new createjs.Stage("blockCanvas");

// Define dimensions
const blockWidth = 150;
const blockHeight = 50;

// Draw the purple block
const block = new createjs.Shape();
block.graphics.beginFill("#cc99ff")
    .setStrokeStyle(1)
    .beginStroke("black")
    .drawRoundRect(0, 0, blockWidth, blockHeight, 10); // corner radius = 10

// Add centered text
const text = new createjs.Text("¬(P ∨ Q)", "16px Arial", "#000");
text.textAlign = "center";
text.textBaseline = "middle";
text.x = blockWidth / 2;
text.y = blockHeight / 2;

// Group the block and text
const container = new createjs.Container();
container.addChild(block, text);
container.x = 100;
container.y = 100;

// Make it draggable
container.on("mousedown", function (evt) {
    this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
});
container.on("pressmove", function (evt) {
    this.x = evt.stageX + this.offset.x;
    this.y = evt.stageY + this.offset.y;
    stage.update();
});

// Add to canvas
stage.addChild(container);
stage.update();
