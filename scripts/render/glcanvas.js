var canvas =  document.getElementById('gl_map-canvas');

var WebGL  =  canvas.getContext('webgl');

if (!WebGL) {
    console.error("WebGL is not supported on this browser or device!");

    alert("WebGL is not supported on this browser or device!");
}

var HaveTexture = true;

var ColorNames = {
    Red: [
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        1,0,0, 1,0,0, 1,0,0, 1,0,0
    ],
    Yellow: [
        1,1,0, 1,1,0, 1,1,0, 1,1,0,
        1,1,0, 1,1,0, 1,1,0, 1,1,0,
        1,1,0, 1,1,0, 1,1,0, 1,1,0,
        1,1,0, 1,1,0, 1,1,0, 1,1,0,
        1,1,0, 1,1,0, 1,1,0, 1,1,0,
        1,1,0, 1,1,0, 1,1,0, 1,1,0
    ],
    Green: [
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        0,1,0, 0,1,0, 0,1,0, 0,1,0
    ],
    Blue: [
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1
    ],
    Purple: [
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1,
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1,
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1,
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1,
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1,
        0.5,0,1, 0.5,0,1, 0.5,0,1, 0.5,0,1
    ],
    Pink: [
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7,
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7,
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7,
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7,
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7,
        1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7, 1, 0.4, 0.7
    ],
    White: [
        1,1,1, 1,1,1, 1,1,1, 1,1,1,
        1,1,1, 1,1,1, 1,1,1, 1,1,1,
        1,1,1, 1,1,1, 1,1,1, 1,1,1,
        1,1,1, 1,1,1, 1,1,1, 1,1,1,
        1,1,1, 1,1,1, 1,1,1, 1,1,1,
        1,1,1, 1,1,1, 1,1,1, 1,1,1
    ],
    Black: [
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0
    ]
};

const ColorHEX = {
    Red:    "#FF0000FF",
    Yellow: "#FFFF00FF",
    Green:  "#00FF00FF",
    Blue:   "#0000FFFF",
    Purple: "#8000FFFF",
    Pink:   "#FF00FFFF",
    White:  "#FFFFFFFF",
    Black:  "#000000FF"
};

var OBJColor = ColorNames.White;

const BackgroundColorInput = document.getElementById("Background-Color-Input");
const OBJColorInput        = document.getElementById("OBJ-Color-Input");

const ObjRotInputX         = document.getElementById("inspector_obj-rot-x");
const ObjRotInputY         = document.getElementById("inspector_obj-rot-y");
const ObjRotInputZ         = document.getElementById("inspector_obj-rot-z");



let BackgroundColor = HexToGLColor(BackgroundColorInput.value);
let OBJ_Color       = HexToGLColor(OBJColorInput.value);

var HEXOBJColor = [
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
    OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2]
];

var color_buffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
WebGL.bufferData(
    WebGL.ARRAY_BUFFER,
    new Float32Array(OBJColor),
    WebGL.STATIC_DRAW
);

var index_buffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, index_buffer);
WebGL.bufferData(WebGL.ELEMENT_ARRAY_BUFFER, new Uint16Array(Props.Door.Faces), WebGL.STATIC_DRAW);

var vertCode =
    'attribute vec3 position;' +
    'attribute vec3 color;' +
    'attribute vec2 uv;' +
    'varying vec3 vColor;' +
    'varying vec2 vUV;' +
    'uniform mat4 Pmatrix;' +
    'uniform mat4 Vmatrix;' +
    'uniform mat4 Mmatrix;' +
    'void main() {' +
    'vColor = color;' +
    'vUV = uv;' +
    'gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position, 1.0);' +
    '}';

var fragCode =
    'precision mediump float;' +
    'varying vec3 vColor;' +
    'varying vec2 vUV;' +
    'uniform bool HaveTexture;' +
    'uniform sampler2D uTexture;' +
    'void main() {' +
    'if (HaveTexture) {' +
    'gl_FragColor = texture2D(uTexture, vUV);' +
    '} else {' +
    'gl_FragColor = vec4(vColor, 1.0);' +
    '}' +
    '}';

var vertShader = WebGL.createShader(WebGL.VERTEX_SHADER);
WebGL.shaderSource(vertShader, vertCode);
WebGL.compileShader(vertShader);

var fragShader = WebGL.createShader(WebGL.FRAGMENT_SHADER);
WebGL.shaderSource(fragShader, fragCode);
WebGL.compileShader(fragShader);

var shaderProgram = WebGL.createProgram();
WebGL.attachShader(shaderProgram, vertShader);
WebGL.attachShader(shaderProgram, fragShader);
WebGL.linkProgram(shaderProgram);
WebGL.useProgram(shaderProgram);

const haveTextureLoc = WebGL.getUniformLocation(shaderProgram, "HaveTexture");
const textureLoc = WebGL.getUniformLocation(shaderProgram, "uTexture");

var Pmatrix = WebGL.getUniformLocation(shaderProgram, "Pmatrix");
var Vmatrix = WebGL.getUniformLocation(shaderProgram, "Vmatrix");
var Mmatrix = WebGL.getUniformLocation(shaderProgram, "Mmatrix");

function get_projection(angle, a, zMin, zMax) {
    var ang = Math.tan(angle * 0.5 * Math.PI / 180);
    return [
        0.5/ang,0,0,0,
        0,0.5*a/ang,0,0,
        0,0,-(zMax+zMin)/(zMax-zMin),-1,
        0,0,-2*zMax*zMin/(zMax-zMin),0
    ];
}

var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);
var view_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-6,1];

function degreesToRadians(d){return d*Math.PI/180;}

function rotateX(m,a){
    var c=Math.cos(a),s=Math.sin(a);
    var m1=m[1],m5=m[5],m9=m[9];
    m[1]=m1*c-m[2]*s; m[5]=m5*c-m[6]*s; m[9]=m9*c-m[10]*s;
    m[2]=m[2]*c+m1*s; m[6]=m[6]*c+m5*s; m[10]=m[10]*c+m9*s;
}

function rotateY(m,a){
    var c=Math.cos(a),s=Math.sin(a);
    var m0=m[0],m4=m[4],m8=m[8];
    m[0]=m0*c+m[2]*s; m[4]=m4*c+m[6]*s; m[8]=m8*c+m[10]*s;
    m[2]=m[2]*c-m0*s; m[6]=m[6]*c-m4*s; m[10]=m[10]*c-m8*s;
}

function rotateZ(m,a){
    var c=Math.cos(a),s=Math.sin(a);
    var m0=m[0],m4=m[4],m8=m[8];
    m[0]=c*m0-s*m[1]; m[4]=c*m4-s*m[5]; m[8]=c*m8-s*m[9];
    m[1]=c*m[1]+s*m0; m[5]=c*m[5]+s*m4; m[9]=c*m[9]+s*m8;
}

Object.keys(ColorButton).forEach(color => {
    ColorButton[color].addEventListener("click", () => {
        SelectedColor = color;
        OBJColor = ColorNames[SelectedColor];

        HEXColor = false;

        WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
        WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(OBJColor), WebGL.STATIC_DRAW);
    });
});

Object.keys(ColorButton).forEach(color => {
    ColorButton[color].addEventListener("click", () => {
        OBJColorInput.value = ColorHEX[SelectedColor];
    });
});

OBJColorInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        OBJ_Color = HexToGLColor(OBJColorInput.value);

        HEXColor = true;

        OBJColor = [
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2],
            OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2], OBJ_Color[0], OBJ_Color[1], OBJ_Color[2]
        ];

        WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
        WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(OBJColor), WebGL.STATIC_DRAW);
    }
});

BackgroundColorInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        BackgroundColor = HexToGLColor(BackgroundColorInput.value);

        WebGL.clearColor(BackgroundColor[0], BackgroundColor[1], BackgroundColor[2], BackgroundColor[3]);
    }
});

var vertex_buffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, vertex_buffer);

WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(Props.Door.Vertices), WebGL.STATIC_DRAW);

var color = WebGL.getAttribLocation(shaderProgram, "color");
var uv    = WebGL.getAttribLocation(shaderProgram, "uv");

var uv_buffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, uv_buffer);
WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(Props.Door.UV), WebGL.STATIC_DRAW);

var position = WebGL.getAttribLocation(shaderProgram,"position");

var color = WebGL.getAttribLocation(shaderProgram,"color");

function drawCube() {
    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, vertex_buffer);
    WebGL.vertexAttribPointer(position, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(position);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
    WebGL.vertexAttribPointer(color, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(color);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, uv_buffer);
    WebGL.vertexAttribPointer(uv, 2, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(uv);

    WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, index_buffer);

    WebGL.drawElements(WebGL.TRIANGLES, Props.Door.Faces.length, WebGL.UNSIGNED_SHORT, 0);
}

const DrawAxisLineXVertexBuffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineXVertexBuffer);
WebGL.bufferData(WebGL.ARRAY_BUFFER, Axis.Lines.X.Vertices, WebGL.STATIC_DRAW);

const DrawAxisLineZVertexBuffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineZVertexBuffer);
WebGL.bufferData(WebGL.ARRAY_BUFFER, Axis.Lines.Z.Vertices, WebGL.STATIC_DRAW);

let DrawAxisLineXColors = new Float32Array([
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0
]);

let DrawAxisLineZColors = new Float32Array([
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0
]);

const DrawAxisLineXColorBuffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineXColorBuffer);
WebGL.bufferData(WebGL.ARRAY_BUFFER, DrawAxisLineXColors, WebGL.STATIC_DRAW);

const DrawAxisLineZColorBuffer = WebGL.createBuffer();
WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineZColorBuffer);
WebGL.bufferData(WebGL.ARRAY_BUFFER, DrawAxisLineZColors, WebGL.STATIC_DRAW);

function DrawAxisLineX(Color) {
    let LineColor = HexToGLColor(Color);
    DrawAxisLineXColors = new Float32Array ([
        LineColor[0], LineColor[1], LineColor[2],
        LineColor[0], LineColor[1], LineColor[2]
    ]);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineXColorBuffer);
    WebGL.bufferData(WebGL.ARRAY_BUFFER, DrawAxisLineXColors, WebGL.STATIC_DRAW);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineXVertexBuffer);
    WebGL.vertexAttribPointer(position, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(position);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineXColorBuffer);
    WebGL.vertexAttribPointer(color, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(color);

    WebGL.disableVertexAttribArray(uv);

    WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, null);

    WebGL.drawArrays(WebGL.LINES, 0, 2);
}

function DrawAxisLineZ(Color) {
    let LineColor = HexToGLColor(Color);
    DrawAxisLineZColors = new Float32Array ([
        LineColor[0], LineColor[1], LineColor[2],
        LineColor[0], LineColor[1], LineColor[2]
    ]);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineZColorBuffer);
    WebGL.bufferData(WebGL.ARRAY_BUFFER, DrawAxisLineZColors, WebGL.STATIC_DRAW);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineZVertexBuffer);
    WebGL.vertexAttribPointer(position, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(position);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, DrawAxisLineZColorBuffer);
    WebGL.vertexAttribPointer(color, 3, WebGL.FLOAT, false, 0, 0);
    WebGL.enableVertexAttribArray(color);

    WebGL.disableVertexAttribArray(uv);

    WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, null);

    WebGL.drawArrays(WebGL.LINES, 0, 2);
}

WebGL.clearColor(0.0, 0.0, 0.0, 1.0);

function translate(m, x, y, z){
    m[12] += x;
    m[13] += y;
    m[14] += z;
}

var keys = {};

function normalize(v){
    var l = Math.hypot(v[0], v[1], v[2]);
    if (l === 0) return [0,0,0];
    return [v[0]/l, v[1]/l, v[2]/l];
}

function cross(a,b){
    return [
        a[1]*b[2] - a[2]*b[1],
        a[2]*b[0] - a[0]*b[2],
        a[0]*b[1] - a[1]*b[0]
    ];
}

function dot(a,b){
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}

function getCameraForward(){
    return normalize([
        Math.cos(Camera.Rotation.X) * Math.sin(Camera.Rotation.Y),
        Math.sin(Camera.Rotation.X),
       -Math.cos(Camera.Rotation.X) * Math.cos(Camera.Rotation.Y)
    ]);
}

window.addEventListener("keydown", e=>keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e=>keys[e.key.toLowerCase()] = false);

function updateCameraMovement(){
    var f = getCameraForward();
    var r = cross(f, [0,1,0]);
    if (r[0] === 0 && r[1] === 0 && r[2] === 0) {
        r = [1,0,0];
    }
    r = normalize(r);

    if (MapTabEnabled == true) {
        if (Camera.Settings.FreeCam) {
            if(keys["w"]){
                Camera.Position.X += f[0] * Camera.Settings.Speed;
                Camera.Position.Y += f[1] * Camera.Settings.Speed;
                Camera.Position.Z += f[2] * Camera.Settings.Speed;
            }
            if(keys["s"]){
                Camera.Position.X -= f[0] * Camera.Settings.Speed;
                Camera.Position.Y -= f[1] * Camera.Settings.Speed;
                Camera.Position.Z -= f[2] * Camera.Settings.Speed;
            }
            if(keys["a"]){
                Camera.Position.X -= r[0] * Camera.Settings.Speed;
                Camera.Position.Z -= r[2] * Camera.Settings.Speed;
            }
            if(keys["d"]){
                Camera.Position.X += r[0] * Camera.Settings.Speed;
                Camera.Position.Z += r[2] * Camera.Settings.Speed;
            }
        } else {
            if(keys["w"]){
                Camera.Position.X += f[0] * Camera.Settings.Speed;
                Camera.Position.Z += f[2] * Camera.Settings.Speed;
            }
            if(keys["s"]){
                Camera.Position.X -= f[0] * Camera.Settings.Speed;
                Camera.Position.Z -= f[2] * Camera.Settings.Speed;
            }
            if(keys["a"]){
                Camera.Position.X -= r[0] * Camera.Settings.Speed;
                Camera.Position.Z -= r[2] * Camera.Settings.Speed;
            }
            if(keys["d"]){
                Camera.Position.X += r[0] * Camera.Settings.Speed;
                Camera.Position.Z += r[2] * Camera.Settings.Speed;
            }
        }
    }
}

function getViewMatrix(){
    var forward = getCameraForward();
    var up = [0,1,0];

    var right = normalize(cross(forward, up));
    up = cross(right, forward);

    return [
        right[0],  up[0],  -forward[0],  0,
        right[1],  up[1],  -forward[1],  0,
        right[2],  up[2],  -forward[2],  0,
        -dot(right, [Camera.Position.X, Camera.Position.Y, Camera.Position.Z]),
        -dot(up,    [Camera.Position.X, Camera.Position.Y, Camera.Position.Z]),
         dot(forward,[Camera.Position.X, Camera.Position.Y, Camera.Position.Z]),
        1
    ];
}

canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;

canvas.addEventListener("click", ()=>{
    canvas.requestPointerLock();
});

document.addEventListener("mousemove", e=>{
    if(document.pointerLockElement !== canvas) return;

    Camera.Rotation.Y   += e.movementX * Camera.Settings.Sensitivity;
    Camera.Rotation.X -= e.movementY * Camera.Settings.Sensitivity;

    var limit = Math.PI/2 - 0.01;
    if(Camera.Rotation.X > limit) Camera.Rotation.X = limit;
    if(Camera.Rotation.X < -limit) Camera.Rotation.X = -limit;
});



let AnimationRotateNodeX = RotationNodeXInput.value;
let AnimationRotateNodeY = RotationNodeYInput.value;
let AnimationRotateNodeZ = RotationNodeZInput.value;

let AnimationRotateNodeX_Degrees = RotationNodeXInput.value;
let AnimationRotateNodeY_Degrees = RotationNodeYInput.value;
let AnimationRotateNodeZ_Degrees = RotationNodeZInput.value;

var mov_matrix = [
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
];

const container = document.getElementById("map-tab");

let isFullscreen = false;
let StatsEnable = true;

function updateFullscreen() {
    if (isFullscreen) {
        if (!document.fullscreenElement) {
            container.requestFullscreen();
        }
    } else {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
}

function resizeAll() {
    let width, height;

    if (document.fullscreenElement) {
        width = window.innerWidth;
        height = window.innerHeight;
    } else {
        width = container.clientWidth;
        height = container.clientHeight;
    }

    canvas.width = width;
    canvas.height = height;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    WebGL.viewport(0, 0, canvas.width, canvas.height);
}

document.addEventListener("fullscreenchange", resizeAll);
window.addEventListener("resize", resizeAll);

resizeAll();

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.code === "KeyH") {
        StatsEnable = !StatsEnable;
        if (StatsEnable == true) {
            document.getElementById("map-tab_stats").className = "map-tab_stats";
        } else {
            document.getElementById("map-tab_stats").className = "map-tab_stats-hidden";
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.code === "KeyF") {
        isFullscreen = !isFullscreen;
        updateFullscreen();
    }
});

WebGL.viewport(0, 0, canvas.width, canvas.height);

var X_RotAngleDegrees = ObjRotInputX.value;
var X_RotAngleRadians = degreesToRadians(X_RotAngleDegrees);

window.XRAD = X_RotAngleDegrees;
window.XRAR = X_RotAngleRadians;

var Y_RotAngleDegrees = ObjRotInputY.value;
var Y_RotAngleRadians = degreesToRadians(Y_RotAngleDegrees);

window.YRAD = Y_RotAngleDegrees;
window.YRAR = Y_RotAngleRadians;

var Z_RotAngleDegrees = ObjRotInputZ.value;
var Z_RotAngleRadians = degreesToRadians(Z_RotAngleDegrees);

let ObjectRotationX;
let ObjectRotationY;
let ObjectRotationZ;

const texture = WebGL.createTexture();
const image = new Image();
image.src = "LeftDoorTexture.png";

image.onload = () => {
    WebGL.bindTexture(WebGL.TEXTURE_2D, texture);
    WebGL.texImage2D(
        WebGL.TEXTURE_2D,
        0,
        WebGL.RGBA,
        WebGL.RGBA,
        WebGL.UNSIGNED_BYTE,
        image
    );

    WebGL.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_S, WebGL.CLAMP_TO_EDGE);
    WebGL.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_T, WebGL.CLAMP_TO_EDGE);
    
    WebGL.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MIN_FILTER, WebGL.LINEAR);
    WebGL.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MAG_FILTER, WebGL.LINEAR);

    WebGL.bindTexture(WebGL.TEXTURE_2D, null);
};

WebGL.enable(WebGL.CULL_FACE);
WebGL.cullFace(WebGL.BACK);
WebGL.frontFace(WebGL.CCW);

function animate(){
    updateCameraMovement();

    mov_matrix = [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
    ];

    AnimationRotateNodeX_Degrees = RotationNodeXInput.value;
    AnimationRotateNodeY_Degrees = RotationNodeYInput.value;
    AnimationRotateNodeZ_Degrees = RotationNodeZInput.value;

    AnimationRotateNodeX = degreesToRadians(AnimationRotateNodeX_Degrees);
    AnimationRotateNodeY = degreesToRadians(AnimationRotateNodeY_Degrees);
    AnimationRotateNodeZ = degreesToRadians(AnimationRotateNodeZ_Degrees);

    X_RotAngleDegrees = ObjRotInputX.value;
    X_RotAngleRadians = degreesToRadians(X_RotAngleDegrees);

    window.XRAD = X_RotAngleDegrees;
    window.XRAR = X_RotAngleRadians;

    Y_RotAngleDegrees = ObjRotInputY.value;
    Y_RotAngleRadians = degreesToRadians(Y_RotAngleDegrees);

    window.YRAD = Y_RotAngleDegrees;
    window.YRAR = Y_RotAngleRadians;

    Z_RotAngleDegrees = ObjRotInputZ.value;
    Z_RotAngleRadians = degreesToRadians(Z_RotAngleDegrees);

    window.ZRAD = Z_RotAngleDegrees;
    window.ZRAR = Z_RotAngleRadians;

    if (States.Debug.Run == false) {
        rotateX(mov_matrix, X_RotAngleRadians);
        rotateY(mov_matrix, Y_RotAngleRadians);
        rotateZ(mov_matrix, Z_RotAngleRadians);
    } else {
        rotateX(mov_matrix, AnimationRotateNodeX);
        rotateY(mov_matrix, AnimationRotateNodeY);
        rotateZ(mov_matrix, AnimationRotateNodeZ);
    }

    if (HaveAnimation == false) {
        ObjectRotationX = X_RotAngleRadians;
        ObjectRotationY = Y_RotAngleRadians;
        ObjectRotationZ = Z_RotAngleRadians;
    } else {
        ObjectRotationX = AnimationRotateNodeX;
        ObjectRotationY = AnimationRotateNodeY;
        ObjectRotationZ = AnimationRotateNodeZ;
    }

    view_matrix = getViewMatrix();

    document.getElementById("map-tab_stats_camera-position-x").textContent = Number(Camera.Position.X).toFixed(3);
    document.getElementById("map-tab_stats_camera-position-y").textContent = Number(Camera.Position.Y).toFixed(3);
    document.getElementById("map-tab_stats_camera-position-z").textContent = Number(Camera.Position.Z).toFixed(3);

    document.getElementById("map-tab_stats_camera-rotation-x").textContent = Number(Camera.Rotation.X).toFixed(3);
    document.getElementById("map-tab_stats_camera-rotation-y").textContent = Number(Camera.Rotation.Y).toFixed(3);
    document.getElementById("map-tab_stats_camera-rotation-z").textContent = Number(Camera.Rotation.Z).toFixed(3);

    document.getElementById("map-tab_stats_camera-speed").textContent        =  Camera.Settings.Speed;
    document.getElementById("map-tab_stats_camera-sensitivity").textContent  =  Camera.Settings.Sensitivity;

    window.ObjectRotationX = ObjectRotationX;
    window.ObjectRotationY = ObjectRotationY;
    window.ObjectRotationZ = ObjectRotationZ;

    WebGL.enable(WebGL.DEPTH_TEST);

    WebGL.bindBuffer(WebGL.ARRAY_BUFFER, vertex_buffer);

    WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(Props.Door.Vertices), WebGL.STATIC_DRAW);
    
    WebGL.clear(WebGL.COLOR_BUFFER_BIT | WebGL.DEPTH_BUFFER_BIT);

    WebGL.uniformMatrix4fv(Pmatrix, false, proj_matrix);
    WebGL.uniformMatrix4fv(Vmatrix, false, view_matrix);
    WebGL.uniformMatrix4fv(Mmatrix, false, mov_matrix);

    if (HaveTexture) {
        WebGL.activeTexture(WebGL.TEXTURE0);
        WebGL.bindTexture(WebGL.TEXTURE_2D, texture);
        WebGL.uniform1i(textureLoc, 0);
        WebGL.uniform1i(haveTextureLoc, 1);
    } else {
        WebGL.uniform1i(haveTextureLoc, 0);
    }

    WebGL.activeTexture(WebGL.TEXTURE0);
    WebGL.bindTexture(WebGL.TEXTURE_2D, texture);

    if (States.Debug.Run == true) {
        drawCube();
    } else {
        drawCube();

        WebGL.uniform1i(haveTextureLoc, 0);

        DrawAxisLineX("#FF0000FF");
        DrawAxisLineZ("#0000FFFF");

        WebGL.uniform1i(haveTextureLoc, HaveTexture ? 1 : 0);
    }

    requestAnimationFrame(animate);
}

animate(0);