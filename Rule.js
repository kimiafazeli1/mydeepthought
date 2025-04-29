function createRuleButton(onClick) {
    const container = new createjs.Container();

    const shape = new createjs.Shape();
    shape.graphics.beginFill("#FFD699").setStrokeStyle(1).beginStroke("black")
        .drawRoundRect(0, 0, 180, 50, 10);

    const label = new createjs.Text("Apply Modus Ponens", "16px Arial", "#000");
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 90;
    label.y = 25;

    container.addChild(shape, label);
    container.x = 300;
    container.y = 270;

    container.on("click", () => {
        if (
            selectedBlocks.length === 2 &&
            selectedBlocks.some(b => b.blockText.includes("→")) &&
            selectedBlocks.some(b => !b.blockText.includes("→"))
        ) {
            onClick(); // allow rule
        } else {
            alert("❌ Select exactly 2 blocks: one with → and one without.");
        }
        selectedBlocks = [];  // clear selection
    });

    return container;
}
