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
        var canvas = document.getElementById('gl_main-canvas');
        var WebGL = canvas.getContext('experimental-webgl');

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

        var Camera = {
            x: ${elements.inspector.tabs.settings.camera.inputs.position.x.value},
            y: ${elements.inspector.tabs.settings.camera.inputs.position.y.value},
            z: ${elements.inspector.tabs.settings.camera.inputs.position.z.value},
            yaw: 0,
            pitch: 0,
            speed: 0.15,
            sensitivity: 0.002
        };

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
                Math.cos(Camera.pitch) * Math.sin(Camera.yaw),
                Math.sin(Camera.pitch),
            -Math.cos(Camera.pitch) * Math.cos(Camera.yaw)
            ]);
        }

        window.addEventListener("keydown", e=>keys[e.key.toLowerCase()] = true);
        window.addEventListener("keyup", e=>keys[e.key.toLowerCase()] = false);

        function updateCameraMovement(){
            var f = getCameraForward();
            var r = normalize(cross(f, [0,1,0]));

            if(keys["w"]){
                Camera.x += f[0] * Camera.speed;
                Camera.y += f[1] * Camera.speed;
                Camera.z += f[2] * Camera.speed;
            }
            if(keys["s"]){
                Camera.x -= f[0] * Camera.speed;
                Camera.y -= f[1] * Camera.speed;
                Camera.z -= f[2] * Camera.speed;
            }
            if(keys["a"]){
                Camera.x -= r[0] * Camera.speed;
                Camera.z -= r[2] * Camera.speed;
            }
            if(keys["d"]){
                Camera.x += r[0] * Camera.speed;
                Camera.z += r[2] * Camera.speed;
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
                -dot(right, [Camera.x, Camera.y, Camera.z]),
                -dot(up,    [Camera.x, Camera.y, Camera.z]),
                dot(forward,[Camera.x, Camera.y, Camera.z]),
                1
            ];
        }

        canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;

        canvas.addEventListener("click", ()=>{
            canvas.requestPointerLock();
        });

        document.addEventListener("mousemove", e=>{
            if(document.pointerLockElement !== canvas) return;

            Camera.yaw   += e.movementX * Camera.sensitivity;
            Camera.pitch -= e.movementY * Camera.sensitivity;

            var limit = Math.PI/2 - 0.01;
            if(Camera.pitch > limit) Camera.pitch = limit;
            if(Camera.pitch < -limit) Camera.pitch = -limit;
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