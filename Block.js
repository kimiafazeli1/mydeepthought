// Block.js — responsible for drawing a logic block
function createBlock(text, x, y, color) {
    const container = new createjs.Container();

    const shape = new createjs.Shape();
    shape.graphics.beginFill(color).setStrokeStyle(1).beginStroke("black")
        .drawRoundRect(0, 0, 150, 50, 10);

    const label = new createjs.Text(text, "16px Arial", "#000");
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 75;
    label.y = 25;

    container.addChild(shape, label);
    container.x = x;
    container.y = y;

    // Make draggable
    container.on("mousedown", function (evt) {
        this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY };
    });
    container.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        stage.update();
    });

    return container;
}
