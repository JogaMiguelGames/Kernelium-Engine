const AnimationTabAdd = document.getElementById("animation-tab-add");

const RotationNode = document.createElement("div");
const RotationNodeTop = document.createElement("div");

const RotationNodeXLabel = document.createElement("label");
const RotationNodeXInput = document.createElement("input");

const RotationNodeYLabel = document.createElement("label");
const RotationNodeYInput = document.createElement("input");

const RotationNodeZLabel = document.createElement("label");
const RotationNodeZInput = document.createElement("input");

const RotationNodeTopTitle = document.createElement("h1");

const BreakLine = document.createElement("br");
const BreakLine2 = document.createElement("br");

const RotationNode_DeleteButton = document.createElement("button");

RotationNode_DeleteButton.textContent = "X";

let HaveAnimation = false;

RotationNodeTopTitle.textContent = "Rotation";

RotationNodeXLabel.textContent = "X: "

RotationNodeXInput.type  =  "number";

RotationNodeXInput.id = "animation_obj-rot-x";

RotationNodeXInput.value =  0;

RotationNodeXInput.step = 0.1;
RotationNodeXInput.min = 0.1;

RotationNodeYLabel.textContent = "Y: "

RotationNodeYInput.type  =  "number";

RotationNodeYInput.id = "animation_obj-rot-y";

RotationNodeYInput.value =  0;

RotationNodeYInput.step = 0.1;
RotationNodeYInput.min = 0.1;

RotationNodeZLabel.textContent = "Z: "

RotationNodeZInput.type  =  "number";

RotationNodeZInput.id = "animation_obj-rot-z";

RotationNodeZInput.value =  0;

RotationNodeZInput.step = 0.1;
RotationNodeZInput.min = 0.1;

RotationNode.className = "animation-rotation-node";
RotationNodeTop.className = "animation-rotation-node-top";

AnimationTabAdd.addEventListener('click', (e) => {
    RotationNodeTop.appendChild(RotationNodeTopTitle);
    RotationNode.appendChild(RotationNodeTop);

    RotationNode.appendChild(BreakLine);
    RotationNode.appendChild(BreakLine2);

    RotationNode.appendChild(RotationNodeXLabel);

    RotationNodeXLabel.appendChild(RotationNodeXInput);

    RotationNode.appendChild(RotationNodeYLabel);

    RotationNodeYLabel.appendChild(RotationNodeYInput);

    RotationNode.appendChild(RotationNodeZLabel);

    RotationNodeZLabel.appendChild(RotationNodeZInput);

    RotationNode.appendChild(RotationNode_DeleteButton);
    
    AnimationWindow.appendChild(RotationNode);

    HaveAnimation = true;
});

RotationNode_DeleteButton.addEventListener('click', (e) => {
    RotationNode.remove();
    
    HaveAnimation = false;
});

let dragging = false;

RotationNodeTop.addEventListener("mousedown", () => {
    dragging = true;
});

document.addEventListener("mouseup", () => {
    dragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const rect = RotationNode.getBoundingClientRect();

    RotationNode.style.left = (e.clientX - rect.width / 2) + "px";
    RotationNode.style.top  = (e.clientY - rect.height / 2) + "px";
});