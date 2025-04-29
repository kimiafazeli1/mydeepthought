// Block.js — defines draggable, selectable blocks

let selectedBlocks = [];

function createBlock(text, x, y, color, type = "normal") {
    const container = new createjs.Container();
    container.blockText = text;        // e.g., "P → Q"
    container.blockType = type;        // "normal" or "goal"

    // Shape
    const shape = new createjs.Shape();
    shape.graphics.beginFill(color)
        .setStrokeStyle(1)
        .beginStroke("black")
        .drawRoundRect(0, 0, 150, 50, 10);
    container.shape = shape;

    // Text
    const label = new createjs.Text(text, "16px Arial", "#000");
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 75;
    label.y = 25;

    container.addChild(shape, label);
    container.x = x;
    container.y = y;

    // ✅ Make draggable
    container.on("mousedown", function (evt) {
        this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
    });

    container.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        stage.update();
    });

    // ✅ Add selection logic (skip goal blocks in rule use)
    container.on("click", function (evt) {
        if (this.blockType === "goal") {
            // Visually toggle highlight but don't use it for rule logic
            this.shape.graphics._fill.style =
                this.shape.graphics._fill.style === "#D1C4E9"
                    ? "#B39DDB"
                    : "#D1C4E9";
        } else {
            toggleSelection(this);
        }
        stage.update();
    });

    return container;
}

// Helper function: toggle selection state
function toggleSelection(block) {
    const index = selectedBlocks.indexOf(block);
    if (index > -1) {
        selectedBlocks.splice(index, 1);
        block.shape.graphics._fill.style = "#CCFFCC"; // unselected = light green
    } else {
        if (selectedBlocks.length < 2) {
            selectedBlocks.push(block);
            block.shape.graphics._fill.style = "#A5D6A7"; // selected = green highlight
        }
    }
}
