function Export() {
    let ProjectTitle;

    if (window.Project_PageTitle == null) {
        ProjectTitle = "Project";
    } else {
        ProjectTitle = window.Project_PageTitle;
    }

    let ProjectFile = `
<!DOCTYPE html>
<html lang="${window.Project_PageLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        .gl_main-canvas {
            position: fixed;

            background-color: #FFFFFF;
            color: #000000;

            top: 0;
            left: 0;

            width: 100vw;
            height: 100vh;

            text-align: center;
        }

        .main-view_health {
            position: fixed;
            
            color: rgba(255, 255, 255, 1);

            bottom: 0px;
            left: 0px;

            width: 400px;
            height: 200px;

            z-index: 10;

            border-top: 2px solid rgba(0, 64, 128, 1);
            border-right: 2px solid rgba(0, 64, 128, 1);

            border-top-right-radius: 15px;
        }

        .main-view_health-title {
            margin: 20px;

            text-align: center;

            font-size: 50px;
        }

        .main-view_health-text {
            margin: 0;

            text-align: center;

            font-size: 80px;
        }
    </style>

    <title>Project</title>
</head>
<body>
    <canvas width="1000vw" height="500vh" id="gl_main-canvas" class="gl_main-canvas">
        Error: Can't Load This WebGL Canvas!
    </canvas>

    <div id="main-view_health" class="main-view_health">
        <h1 id="main-view_health-title" class="main-view_health-title">Health</h1>
        <h1 id="main-view_health-text" class="main-view_health-text">100</h1>
    </div>

    <script>
        var Camera = {
            Position: {
                X: 0,
                Y: 0,
                Z: 6
            },
            Rotation: {
                X: 0, // Pitch
                Y: 0, // Yaw
                Z: 0 // Roll
            },
            Settings: {
                Speed: 0.15,
                Sensitivity: 0.002,

                FreeCam: true
            }
        };

        let MapTabEnabled = true;
        let ConsoleEnabled = false;

        function CreateWindow(WindowTitle, PositionX, PositionY, SizeX, SizeY, BackgroundColor) {
            const Window = document.createElement("div");

            // TopBar

            const TopBar        =   document.createElement("div");

            const Title         =   document.createElement("h1");

            const CloseButton   =   document.createElement("button");

            // Window Style

            Window.style.backgroundColor = BackgroundColor;

            Window.style.display = "none";

            Window.style.border = "2px solid #000000";
            Window.style.borderRadius = "10px";

            Window.style.position  =    "relative";

            Window.style.zIndex    =    1500;

            Window.style.top       =    PositionY + "px";
            Window.style.left      =    PositionX + "px";

            Window.style.width     =    SizeX     + "px";
            Window.style.height    =    SizeY     + "px";

            // Top Bar

            TopBar.style.position                =  "relative";

            TopBar.style.backgroundColor         =  "#444444";

            TopBar.style.width                   =  "100%";
            TopBar.style.height                   =  "6.5%";

            TopBar.style.borderBottom            = "2px solid #000000";

            TopBar.style.borderTopLeftRadius     = "6px";
            TopBar.style.borderTopRightRadius    = "6px";

            // TopBar Title

            Title.textContent                    = WindowTitle;

            Title.style.position                 = "absolute";
            Title.style.margin                   =  0;

            // TopBar Close Button

            CloseButton.textContent              =  "X";

            CloseButton.style.position           = "absolute";

            CloseButton.style.background         = "linear-gradient(to bottom, #FF0000, #800000)";
            CloseButton.style.color              = "#FFFFFF";

            CloseButton.style.right              =  0;

            CloseButton.style.width              =  "40px";
            CloseButton.style.height             =  "40px";

            CloseButton.style.border             =  "2px solid #000000";
            CloseButton.style.borderRadius       =  "6px";
            
            CloseButton.style.fontSize           =  "30px";

            CloseButton.style.textAlign          =  "center";

            CloseButton.addEventListener('click', (event) => {
                Window.style.display = "none";

                ConsoleEnabled = false;
            });

            // Append Childs

            document.body.appendChild(Window);
            Window.appendChild(TopBar);

            // TopBar Append Child

            TopBar.appendChild(Title);
            TopBar.appendChild(CloseButton);

            return {
                element: Window,
                close() {
                    Window.remove();
                    
                    ConsoleEnabled = false;
                    MapTabEnabled = true;
                },
                show() {
                    Window.style.display = "flex";
                    
                    ConsoleEnabled = true;
                    MapTabEnabled = false;
                },
                hide() {
                    Window.style.display = "none";

                    ConsoleEnabled = false;
                    MapTabEnabled = true;
                },
                add(Element) {
                    if (Element == "cmd_input") {
                        let CMDInput = document.createElement("input");
                        let CMDLastsCommands = document.createElement("pre");

                        function WriteLine(text) {
                            CMDLastsCommands.textContent += text + "\\n";
                        }

                        CMDLastsCommands.style.position = "absolute";

                        CMDLastsCommands.style.backgroundColor = "#777777";

                        CMDLastsCommands.style.top = "100px";
                        CMDLastsCommands.style.left = "10px";

                        CMDLastsCommands.style.width = "770px";
                        CMDLastsCommands.style.height = "400px";

                        CMDInput.type = "text";

                        CMDInput.style.position = "absolute";

                        CMDInput.style.backgroundColor = "#444444";

                        CMDInput.style.outline = "none";

                        CMDInput.style.left = "10px";
                        CMDInput.style.bottom = "10px";

                        CMDInput.style.width = "770px";

                        CMDInput.style.border = "1px solid #000000";
                        CMDInput.style.borderRadius = "5px";   

                        CMDInput.addEventListener("blur", function () {
                            CMDInput.style.backgroundColor = "#444444";

                            CMDInput.style.left = "10px";
                            CMDInput.style.bottom = "10px";

                            CMDInput.style.width = "770px";

                            CMDInput.style.border = "1px solid #000000";
                            CMDInput.style.borderRadius = "5px";
                        });

                        CMDInput.addEventListener("focus", function () {
                            CMDInput.style.backgroundColor = "#555555";

                            CMDInput.style.left = "10px";
                            CMDInput.style.bottom = "10px";

                            CMDInput.style.width = "770px";

                            CMDInput.style.border = "2px solid #FFFFFF";
                            CMDInput.style.borderRadius = "5px";
                        });
                        
                        CMDInput.addEventListener('keydown', function(event) {
                            if (event.key === 'Enter') {
                                if (CMDInput.value == "freecam_enable true") {
                                    Camera.Settings.FreeCam = true;

                                    WriteLine("FreeCam Enabled");
                                    console.log(Camera.Settings.FreeCam)
                                } else if (CMDInput.value == "freecam_enable false") {
                                    Camera.Settings.FreeCam = false;

                                    WriteLine("FreeCam Disabled");
                                    console.log(Camera.Settings.FreeCam)
                                }
                            }
                        });

                        Window.appendChild(CMDLastsCommands);
                        Window.appendChild(CMDInput);
                    }
                }
            }
        }
    </script>

    <script>
        var Camera = {
            Position: {
                X: 0,
                Y: 0,
                Z: 6
            },
            Rotation: {
                X: 0, // Pitch
                Y: 0, // Yaw
                Z: 0 // Roll
            },
            Settings: {
                Speed: 0.15,
                Sensitivity: 0.002,

                FreeCam: true
            }
        };

        const Console = CreateWindow("Console", 100, 100, 800, 600, "#555555");
        Console.add("cmd_input");

        document.addEventListener("keydown", (event) => {
            if (event.key === "'") {
                ConsoleEnabled = !ConsoleEnabled; 
            }
            if (ConsoleEnabled == true) {
                Console.show();
            } else {
                Console.hide();
            }
        });
    </script>

    <script>
        const HealthDiv = document.getElementById("main-view_health");

        const HealthTitle = document.getElementById("main-view_health-title");
        const HealthText = document.getElementById("main-view_health-text");

        const MaxHealthInput = document.getElementById("inspector_settings-max_health");

        let MaxHealth = ${MaxHealth};
        let MinHealth = ${MinHealth};

        let Health = ${Health};

        if (Health > MaxHealth) {
            Health = MaxHealth;
            HealthText.textContent = Health;

            console.log("Health limit reached.");
        } else {
            Health = Health;
            HealthText.textContent = Health;
        }

        if (Health < 20) {
            HealthDiv.style.background = "linear-gradient(to bottom, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 1))";

            HealthDiv.style.borderTop = "2px solid rgba(64, 0, 0, 1)";
            HealthDiv.style.borderRight = "2px solid rgba(64, 0, 0, 1)";

            HealthTitle.textContent = "Health!";
        } else {
            HealthDiv.style.background = "linear-gradient(to bottom, rgba(0, 128, 255, 0.5), rgba(0, 128, 255, 1))";

            HealthDiv.style.borderTop = "2px solid rgba(0, 64, 128, 1)";
            HealthDiv.style.borderRight = "2px solid rgba(0, 64, 128, 1)";

            HealthTitle.textContent = "Health";
        }
    </script>

    <script>
        var canvas =  document.getElementById('gl_main-canvas');

        var WebGL  =  canvas.getContext('webgl') || canvas.getContext("webgl-experimental");

        var vertices = [
            -1, -1, -1,   1, -1, -1,   1,  1, -1,  -1,  1, -1,
            -1, -1,  1,   1, -1,  1,   1,  1,  1,  -1,  1,  1,
            -1, -1, -1,  -1,  1, -1,  -1,  1,  1,  -1, -1,  1,
             1, -1, -1,   1,  1, -1,   1,  1,  1,   1, -1,  1,
            -1, -1, -1,  -1, -1,  1,   1, -1,  1,   1, -1, -1,
            -1,  1, -1,  -1,  1,  1,   1,  1,  1,   1,  1, -1
        ];

        var OBJColor = [${OBJColor}];

        var indices = [
            0,1,2, 0,2,3,
            4,5,6, 4,6,7,
            8,9,10, 8,10,11,
            12,13,14, 12,14,15,
            16,17,18, 16,18,19,
            20,21,22, 20,22,23
        ];

        var color_buffer = WebGL.createBuffer();
        WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
        WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(OBJColor), WebGL.STATIC_DRAW);

        var index_buffer = WebGL.createBuffer();
        WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, index_buffer);
        WebGL.bufferData(WebGL.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), WebGL.STATIC_DRAW);

        var vertCode =
            'attribute vec3 position;' +
            'attribute vec3 color;' +
            'uniform mat4 Pmatrix;' +
            'uniform mat4 Vmatrix;' +
            'uniform mat4 Mmatrix;' +
            'varying vec3 vColor;' +
            'void main(void){' +
            'gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position,1.);' +
            'vColor = color;' +
            '}';

        var fragCode =
            'precision mediump float;' +
            'varying vec3 vColor;' +
            'void main(void){' +
            'gl_FragColor = vec4(vColor,1.);' +
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

        var vertex_buffer = WebGL.createBuffer();
        WebGL.bindBuffer(WebGL.ARRAY_BUFFER, vertex_buffer);
        WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array(vertices), WebGL.STATIC_DRAW);

        var position = WebGL.getAttribLocation(shaderProgram,"position");
        WebGL.vertexAttribPointer(position,3,WebGL.FLOAT,false,0,0);
        WebGL.enableVertexAttribArray(position);

        WebGL.bindBuffer(WebGL.ARRAY_BUFFER, color_buffer);
        var color = WebGL.getAttribLocation(shaderProgram,"color");
        WebGL.vertexAttribPointer(color,3,WebGL.FLOAT,false,0,0);
        WebGL.enableVertexAttribArray(color);

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
            var r = normalize(cross(f, [0,1,0]));

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

        let AnimationRotateNodeX = ${RotationNodeXInput.value};
        let AnimationRotateNodeY = ${RotationNodeYInput.value};
        let AnimationRotateNodeZ = ${RotationNodeZInput.value};

        var mov_matrix = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ];

        function animate(){
            updateCameraMovement();

            AnimationRotateNodeX_Degrees = ${RotationNodeXInput.value};
            AnimationRotateNodeY_Degrees = ${RotationNodeYInput.value};
            AnimationRotateNodeZ_Degrees = ${RotationNodeZInput.value};

            AnimationRotateNodeX = degreesToRadians(AnimationRotateNodeX_Degrees);
            AnimationRotateNodeY = degreesToRadians(AnimationRotateNodeY_Degrees);
            AnimationRotateNodeZ = degreesToRadians(AnimationRotateNodeZ_Degrees);

            BackgroundColor = [${BackgroundColor}];
            OBJ_Color = [${OBJ_Color}];

            var X_RotAngleDegrees = ${ObjRotInputX.value};
            var X_RotAngleRadians = degreesToRadians(X_RotAngleDegrees);

            window.XRAD = X_RotAngleDegrees;
            window.XRAR = X_RotAngleRadians;

            var Y_RotAngleDegrees = ${ObjRotInputY.value};
            var Y_RotAngleRadians = degreesToRadians(Y_RotAngleDegrees);

            window.YRAD = Y_RotAngleDegrees;
            window.YRAR = Y_RotAngleRadians;

            var Z_RotAngleDegrees = ${ObjRotInputZ.value};
            var Z_RotAngleRadians = degreesToRadians(Z_RotAngleDegrees);

            mov_matrix = [
                1,0,0,0,
                0,1,0,0,
                0,0,1,0,
                0,0,0,1
            ];

            let ObjectRotationX;
            let ObjectRotationY;
            let ObjectRotationZ;

            window.ZRAD = Z_RotAngleDegrees;
            window.ZRAR = Z_RotAngleRadians;

            if (${States.Debug.Run} == false) {
                rotateX(mov_matrix, X_RotAngleRadians);
                rotateY(mov_matrix, Y_RotAngleRadians);
                rotateZ(mov_matrix, Z_RotAngleRadians);
            } else {
                rotateX(mov_matrix, AnimationRotateNodeX);
                rotateY(mov_matrix, AnimationRotateNodeY);
                rotateZ(mov_matrix, AnimationRotateNodeZ);
            }

            if (${HaveAnimation} == false) {
                ObjectRotationX = X_RotAngleRadians;
                ObjectRotationY = Y_RotAngleRadians;
                ObjectRotationZ = Z_RotAngleRadians;
            } else {
                ObjectRotationX = AnimationRotateNodeX;
                ObjectRotationY = AnimationRotateNodeY;
                ObjectRotationZ = AnimationRotateNodeZ;
            }

            window.ObjectRotationX = ObjectRotationX;
            window.ObjectRotationY = ObjectRotationY;
            window.ObjectRotationZ = ObjectRotationZ;

            var view_matrix = getViewMatrix();

            WebGL.enable(WebGL.DEPTH_TEST);
            WebGL.clearColor(BackgroundColor[0], BackgroundColor[1], BackgroundColor[2], BackgroundColor[3]);
            WebGL.clear(WebGL.COLOR_BUFFER_BIT | WebGL.DEPTH_BUFFER_BIT);

            WebGL.uniformMatrix4fv(Pmatrix,false,proj_matrix);
            WebGL.uniformMatrix4fv(Vmatrix,false,view_matrix);
            WebGL.uniformMatrix4fv(Mmatrix,false,mov_matrix);

            WebGL.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER,index_buffer);
            WebGL.drawElements(WebGL.TRIANGLES,indices.length,WebGL.UNSIGNED_SHORT,0);

            WebGL.bindBuffer(WebGL.ARRAY_BUFFER, vertex_buffer);
            WebGL.bufferData(WebGL.ARRAY_BUFFER, new Float32Array([${Objects.Cube.Vertices}]), WebGL.STATIC_DRAW);

            requestAnimationFrame(animate);
        }

        animate();
    </script>
</body>
</html>
    `;

    const blob = new Blob([ProjectFile], { type: 'text/html' });
    const Export = document.createElement('a');
    Export.href = URL.createObjectURL(blob);
    Export.download = `project.html`;
    Export.click();
    URL.revokeObjectURL(Export.href);
}