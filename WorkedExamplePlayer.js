// WorkedExamplePlayer.js — plays a .worked file step by step
function playWorkedExample(data, stage) {
    let delay = 0;
    const blockMap = {};

    data.forEach((entry, index) => {
        setTimeout(() => {
            const color = entry.source === "given" ? "#E0F2F1" : "#E3F2FD";

            const block = createBlock(entry.expr, 300, 100 + index * 70, color);
            stage.addChild(block);

            // Optional rule label
            if (entry.source !== "given") {
                const label = new createjs.Text("← " + entry.source, "12px Arial", "#666");
                label.x = 470;
                label.y = 100 + index * 70 + 15;
                stage.addChild(label);
            }

            stage.update();
        }, delay);

        delay += 1000; // ⬅️ Add 1s more for each step
    });
}
