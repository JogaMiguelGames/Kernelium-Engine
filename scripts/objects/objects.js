const Inputs = {
    SX: document.getElementById("inspector_obj-scale-x"),
    SY: document.getElementById("inspector_obj-scale-y"),
    SZ: document.getElementById("inspector_obj-scale-z"),

    PX: document.getElementById("inspector_obj-position-x"),
    PY: document.getElementById("inspector_obj-position-y"),
    PZ: document.getElementById("inspector_obj-position-z")
}

let Objects = {
    Cube: {
        Faces: {
            Back: {
                A: {
                    X: -1,
                    Y: -1,
                    Z: -1
                },
                B: {
                    X: 1,
                    Y: -1,
                    Z: -1
                },
                C: {
                    X: 1,
                    Y: 1,
                    Z: -1
                },
                D: {
                    X: -1,
                    Y: 1,
                    Z: -1
                }                   
            },
            Front: {
                A: {
                    X: -1,
                    Y: -1,
                    Z: 1
                },
                B: {
                    X: 1,
                    Y: -1,
                    Z: 1
                },
                C: {
                    X: 1,
                    Y: 1,
                    Z: 1
                },
                D: {
                    X: -1,
                    Y: 1,
                    Z: 1
                }
            },
            Left: {
                A: {
                    X: -1,
                    Y: -1,
                    Z: -1
                },
                B: {
                    X: -1,
                    Y: 1,
                    Z: -1
                },
                C: {
                    X: -1,
                    Y: 1,
                    Z: 1
                },
                D: {
                    X: -1,
                    Y: -1,
                    Z: 1
                }
            },
            Right: {
                A: {
                    X: 1,
                    Y: -1,
                    Z: -1
                },
                B: {
                    X: 1,
                    Y: -1,
                    Z: 1
                },
                C: {
                    X: 1,
                    Y: 1,
                    Z: 1
                },
                D: {
                    X: 1,
                    Y: 1,
                    Z: -1
                },
            },
            Down: {
                A: {
                    X: -1,
                    Y: -1,
                    Z: -1
                },
                B: {
                    X: -1,
                    Y: -1,
                    Z: 1
                },
                C: {
                    X: 1,
                    Y: -1,
                    Z: 1
                },
                D: {
                    X: 1,
                    Y: -1,
                    Z: -1
                }
            },
            Top: {
                A: {
                    X: -1,
                    Y: 1,
                    Z: -1
                },
                B: {
                    X: -1,
                    Y: 1,
                    Z: 1
                },
                C: {
                    X: 1,
                    Y: 1,
                    Z: 1
                },
                D: {
                    X: 1,
                    Y: 1,
                    Z: -1             
                },
            },
        },

        UV: [
            0,0, 1,0, 1,1, 0,1,
            0,0, 1,0, 1,1, 0,1,
            0,0, 1,0, 1,1, 0,1,
            0,0, 1,0, 1,1, 0,1,
            0,0, 1,0, 1,1, 0,1,
            0,0, 1,0, 1,1, 0,1
        ],

        Vertices: [
            -1, -1, -1,
             1, -1, -1,
             1,  1, -1,
            -1,  1, -1,

            -1, -1,  1,
             1, -1,  1,
             1,  1,  1,
            -1,  1,  1,

            -1, -1, -1,
            -1,  1, -1,
            -1,  1,  1,
            -1, -1,  1,

             1, -1, -1,
             1,  1, -1,
             1,  1,  1,
             1, -1,  1,

            -1, -1, -1,
            -1, -1,  1,
             1, -1,  1,
             1, -1, -1,

            -1,  1, -1,
            -1,  1,  1,
             1,  1,  1,
             1,  1, -1
        ]
    }
};

function OBJScale(X, Y, Z) {
    OBJScaleX(X);
    OBJScaleY(Y);
    OBJScaleZ(Z);
}

function OBJScaleZ(Z) {
    Objects.Cube.Faces.Back.A.Z  = -Z;
    Objects.Cube.Faces.Back.B.Z  = -Z;
    Objects.Cube.Faces.Back.C.Z  = -Z;
    Objects.Cube.Faces.Back.D.Z  = -Z;

    Objects.Cube.Faces.Front.A.Z  =  Z;
    Objects.Cube.Faces.Front.B.Z  =  Z;
    Objects.Cube.Faces.Front.C.Z  =  Z;
    Objects.Cube.Faces.Front.D.Z  =  Z;

    Objects.Cube.Faces.Left.A.Z = -Z;
    Objects.Cube.Faces.Left.B.Z = -Z;
    Objects.Cube.Faces.Left.C.Z =  Z;
    Objects.Cube.Faces.Left.D.Z =  Z;

    Objects.Cube.Faces.Right.A.Z = -Z;
    Objects.Cube.Faces.Right.B.Z =  Z;
    Objects.Cube.Faces.Right.C.Z =  Z;
    Objects.Cube.Faces.Right.D.Z = -Z;

    Objects.Cube.Faces.Down.A.Z = -Z;
    Objects.Cube.Faces.Down.B.Z =  Z;
    Objects.Cube.Faces.Down.C.Z =  Z;
    Objects.Cube.Faces.Down.D.Z = -Z;

    Objects.Cube.Faces.Top.A.Z = -Z;
    Objects.Cube.Faces.Top.B.Z =  Z;
    Objects.Cube.Faces.Top.C.Z =  Z;
    Objects.Cube.Faces.Top.D.Z = -Z;
}

function OBJScaleY(Y) {
    Objects.Cube.Faces.Back.A.Y  = -Y;
    Objects.Cube.Faces.Back.B.Y  = -Y;
    Objects.Cube.Faces.Back.C.Y  =  Y;
    Objects.Cube.Faces.Back.D.Y  =  Y;

    Objects.Cube.Faces.Front.A.Y  = -Y;
    Objects.Cube.Faces.Front.B.Y  = -Y;
    Objects.Cube.Faces.Front.C.Y  =  Y;
    Objects.Cube.Faces.Front.D.Y  =  Y;

    Objects.Cube.Faces.Left.A.Y = -Y;
    Objects.Cube.Faces.Left.B.Y =  Y;
    Objects.Cube.Faces.Left.C.Y =  Y;
    Objects.Cube.Faces.Left.D.Y = -Y;

    Objects.Cube.Faces.Right.A.Y = -Y;
    Objects.Cube.Faces.Right.B.Y = -Y;
    Objects.Cube.Faces.Right.C.Y =  Y;
    Objects.Cube.Faces.Right.D.Y =  Y;

    Objects.Cube.Faces.Down.A.Y = -Y;
    Objects.Cube.Faces.Down.B.Y = -Y;
    Objects.Cube.Faces.Down.C.Y = -Y;
    Objects.Cube.Faces.Down.D.Y = -Y;

    Objects.Cube.Faces.Top.A.Y =  Y;
    Objects.Cube.Faces.Top.B.Y =  Y;
    Objects.Cube.Faces.Top.C.Y =  Y;
    Objects.Cube.Faces.Top.D.Y =  Y;
}

function OBJScaleX(X) {
    Objects.Cube.Faces.Back.A.X = -X;
    Objects.Cube.Faces.Back.B.X = X;
    Objects.Cube.Faces.Back.C.X = X;
    Objects.Cube.Faces.Back.D.X = -X;

    Objects.Cube.Faces.Front.A.X = -X;
    Objects.Cube.Faces.Front.B.X = X;
    Objects.Cube.Faces.Front.C.X = X;
    Objects.Cube.Faces.Front.D.X = -X;

    Objects.Cube.Faces.Left.A.X = -X;
    Objects.Cube.Faces.Left.B.X = -X;
    Objects.Cube.Faces.Left.C.X = -X;
    Objects.Cube.Faces.Left.D.X = -X;

    Objects.Cube.Faces.Right.A.X = X;
    Objects.Cube.Faces.Right.B.X = X;
    Objects.Cube.Faces.Right.C.X = X;
    Objects.Cube.Faces.Right.D.X = X;

    Objects.Cube.Faces.Down.A.X = -X;
    Objects.Cube.Faces.Down.B.X = -X;
    Objects.Cube.Faces.Down.C.X = X;
    Objects.Cube.Faces.Down.D.X = X;

    Objects.Cube.Faces.Top.A.X = -X;
    Objects.Cube.Faces.Top.B.X = -X;
    Objects.Cube.Faces.Top.C.X = X;
    Objects.Cube.Faces.Top.D.X = X;
}

function OBJPositionX(X) {
    Objects.Cube.Faces.Back.A.X   -=  X;
    Objects.Cube.Faces.Back.B.X   -=  X;
    Objects.Cube.Faces.Back.C.X   -=  X;
    Objects.Cube.Faces.Back.D.X   -=  X;

    Objects.Cube.Faces.Front.A.X  -=  X;
    Objects.Cube.Faces.Front.B.X  -=  X;
    Objects.Cube.Faces.Front.C.X  -=  X;
    Objects.Cube.Faces.Front.D.X  -=  X;

    Objects.Cube.Faces.Left.A.X   -=  X;
    Objects.Cube.Faces.Left.B.X   -=  X;
    Objects.Cube.Faces.Left.C.X   -=  X;
    Objects.Cube.Faces.Left.D.X   -=  X;

    Objects.Cube.Faces.Right.A.X   -=  X;
    Objects.Cube.Faces.Right.B.X   -=  X;
    Objects.Cube.Faces.Right.C.X   -=  X;
    Objects.Cube.Faces.Right.D.X   -=  X;

    Objects.Cube.Faces.Down.A.X   -=  X;
    Objects.Cube.Faces.Down.B.X   -=  X;
    Objects.Cube.Faces.Down.C.X   -=  X;
    Objects.Cube.Faces.Down.D.X   -=  X;

    Objects.Cube.Faces.Top.A.X   -=  X;
    Objects.Cube.Faces.Top.B.X   -=  X;
    Objects.Cube.Faces.Top.C.X   -=  X;
    Objects.Cube.Faces.Top.D.X   -=  X;
}

function OBJPositionY(Y) {
    Objects.Cube.Faces.Back.A.Y   -=  -Y;
    Objects.Cube.Faces.Back.B.Y   -=  -Y;
    Objects.Cube.Faces.Back.C.Y   -=  -Y;
    Objects.Cube.Faces.Back.D.Y   -=  -Y;

    Objects.Cube.Faces.Front.A.Y  -=  -Y;
    Objects.Cube.Faces.Front.B.Y  -=  -Y;
    Objects.Cube.Faces.Front.C.Y  -=  -Y;
    Objects.Cube.Faces.Front.D.Y  -=  -Y;

    Objects.Cube.Faces.Left.A.Y   -=  -Y;
    Objects.Cube.Faces.Left.B.Y   -=  -Y;
    Objects.Cube.Faces.Left.C.Y   -=  -Y;
    Objects.Cube.Faces.Left.D.Y   -=  -Y;

    Objects.Cube.Faces.Right.A.Y   -=  -Y;
    Objects.Cube.Faces.Right.B.Y   -=  -Y;
    Objects.Cube.Faces.Right.C.Y   -=  -Y;
    Objects.Cube.Faces.Right.D.Y   -=  -Y;

    Objects.Cube.Faces.Down.A.Y   -=  -Y;
    Objects.Cube.Faces.Down.B.Y   -=  -Y;
    Objects.Cube.Faces.Down.C.Y   -=  -Y;
    Objects.Cube.Faces.Down.D.Y   -=  -Y;

    Objects.Cube.Faces.Top.A.Y   -=  -Y;
    Objects.Cube.Faces.Top.B.Y   -=  -Y;
    Objects.Cube.Faces.Top.C.Y   -=  -Y;
    Objects.Cube.Faces.Top.D.Y   -=  -Y;
}

function OBJPositionZ(Z) {
    Objects.Cube.Faces.Back.A.Z   -=  -Z;
    Objects.Cube.Faces.Back.B.Z   -=  -Z;
    Objects.Cube.Faces.Back.C.Z   -=  -Z;
    Objects.Cube.Faces.Back.D.Z   -=  -Z;

    Objects.Cube.Faces.Front.A.Z  -=  -Z;
    Objects.Cube.Faces.Front.B.Z  -=  -Z;
    Objects.Cube.Faces.Front.C.Z  -=  -Z;
    Objects.Cube.Faces.Front.D.Z  -=  -Z;

    Objects.Cube.Faces.Left.A.Z   -=  -Z;
    Objects.Cube.Faces.Left.B.Z   -=  -Z;
    Objects.Cube.Faces.Left.C.Z   -=  -Z;
    Objects.Cube.Faces.Left.D.Z   -=  -Z;

    Objects.Cube.Faces.Right.A.Z   -=  -Z;
    Objects.Cube.Faces.Right.B.Z   -=  -Z;
    Objects.Cube.Faces.Right.C.Z   -=  -Z;
    Objects.Cube.Faces.Right.D.Z   -=  -Z;

    Objects.Cube.Faces.Down.A.Z   -=  -Z;
    Objects.Cube.Faces.Down.B.Z   -=  -Z;
    Objects.Cube.Faces.Down.C.Z   -=  -Z;
    Objects.Cube.Faces.Down.D.Z   -=  -Z;

    Objects.Cube.Faces.Top.A.Z   -=  -Z;
    Objects.Cube.Faces.Top.B.Z   -=  -Z;
    Objects.Cube.Faces.Top.C.Z   -=  -Z;
    Objects.Cube.Faces.Top.D.Z   -=  -Z;
}

function OBJPosition(X, Y, Z) {
    OBJPositionX(X);
    OBJPositionY(Y);
    OBJPositionZ(Z);
}

Object.keys(Inputs).forEach(scale => {
    Inputs[scale].addEventListener('keydown', function(event) {
        OBJScale(Inputs.SX.value, Inputs.SY.value, Inputs.SZ.value);
        OBJPosition(Inputs.PX.value, Inputs.PY.value, Inputs.PZ.value);

        Objects.Cube.Vertices = [
            // Back Faces (Z = -1)
             Objects.Cube.Faces.Back.A.X,  Objects.Cube.Faces.Back.A.Y,  Objects.Cube.Faces.Back.A.Z,
             Objects.Cube.Faces.Back.B.X,  Objects.Cube.Faces.Back.B.Y,  Objects.Cube.Faces.Back.B.Z,
             Objects.Cube.Faces.Back.C.X,  Objects.Cube.Faces.Back.C.Y,  Objects.Cube.Faces.Back.C.Z,
             Objects.Cube.Faces.Back.D.X,  Objects.Cube.Faces.Back.D.Y,  Objects.Cube.Faces.Back.D.Z,

            // Front Faces (Z = 1)
             Objects.Cube.Faces.Front.A.X,  Objects.Cube.Faces.Front.A.Y,  Objects.Cube.Faces.Front.A.Z,
             Objects.Cube.Faces.Front.B.X,  Objects.Cube.Faces.Front.B.Y,  Objects.Cube.Faces.Front.B.Z,
             Objects.Cube.Faces.Front.C.X,  Objects.Cube.Faces.Front.C.Y,  Objects.Cube.Faces.Front.C.Z,
             Objects.Cube.Faces.Front.D.X,  Objects.Cube.Faces.Front.D.Y,  Objects.Cube.Faces.Front.D.Z,

            // Left Faces (X = -1)
             Objects.Cube.Faces.Left.A.X,  Objects.Cube.Faces.Left.A.Y,  Objects.Cube.Faces.Left.A.Z,
             Objects.Cube.Faces.Left.B.X,  Objects.Cube.Faces.Left.B.Y,  Objects.Cube.Faces.Left.B.Z,
             Objects.Cube.Faces.Left.C.X,  Objects.Cube.Faces.Left.C.Y,  Objects.Cube.Faces.Left.C.Z,
             Objects.Cube.Faces.Left.D.X,  Objects.Cube.Faces.Left.D.Y,  Objects.Cube.Faces.Left.D.Z,

            // Right Faces (X = 1)
             Objects.Cube.Faces.Right.A.X,  Objects.Cube.Faces.Right.A.Y,  Objects.Cube.Faces.Right.A.Z,
             Objects.Cube.Faces.Right.B.X,  Objects.Cube.Faces.Right.B.Y,  Objects.Cube.Faces.Right.C.Z,
             Objects.Cube.Faces.Right.C.X,  Objects.Cube.Faces.Right.C.Y,  Objects.Cube.Faces.Right.C.Z,
             Objects.Cube.Faces.Right.D.X,  Objects.Cube.Faces.Right.D.Y,  Objects.Cube.Faces.Right.D.Z,

            // Down Faces (Y = -1)
             Objects.Cube.Faces.Down.A.X,  Objects.Cube.Faces.Down.A.Y,  Objects.Cube.Faces.Down.A.Z,
             Objects.Cube.Faces.Down.B.X,  Objects.Cube.Faces.Down.B.Y,  Objects.Cube.Faces.Down.B.Z,
             Objects.Cube.Faces.Down.C.X,  Objects.Cube.Faces.Down.C.Y,  Objects.Cube.Faces.Down.C.Z,
             Objects.Cube.Faces.Down.D.X,  Objects.Cube.Faces.Down.D.Y,  Objects.Cube.Faces.Down.D.Z,

            // Top Faces (Y = 1)
             Objects.Cube.Faces.Top.A.X,  Objects.Cube.Faces.Top.A.Y,  Objects.Cube.Faces.Top.A.Z,
             Objects.Cube.Faces.Top.B.X,  Objects.Cube.Faces.Top.B.Y,  Objects.Cube.Faces.Top.B.Z,
             Objects.Cube.Faces.Top.C.X,  Objects.Cube.Faces.Top.C.Y,  Objects.Cube.Faces.Top.C.Z,
             Objects.Cube.Faces.Top.D.X,  Objects.Cube.Faces.Top.D.Y,  Objects.Cube.Faces.Top.D.Z
        ];
    });
});

Objects.Cube.Vertices = [
            // Back Faces (Z = -1)
             Objects.Cube.Faces.Back.A.X,  Objects.Cube.Faces.Back.A.Y,  Objects.Cube.Faces.Back.A.Z,
             Objects.Cube.Faces.Back.B.X,  Objects.Cube.Faces.Back.B.Y,  Objects.Cube.Faces.Back.B.Z,
             Objects.Cube.Faces.Back.C.X,  Objects.Cube.Faces.Back.C.Y,  Objects.Cube.Faces.Back.C.Z,
             Objects.Cube.Faces.Back.D.X,  Objects.Cube.Faces.Back.D.Y,  Objects.Cube.Faces.Back.D.Z,

            // Front Faces (Z = 1)
             Objects.Cube.Faces.Front.A.X,  Objects.Cube.Faces.Front.A.Y,  Objects.Cube.Faces.Front.A.Z,
             Objects.Cube.Faces.Front.B.X,  Objects.Cube.Faces.Front.B.Y,  Objects.Cube.Faces.Front.B.Z,
             Objects.Cube.Faces.Front.C.X,  Objects.Cube.Faces.Front.C.Y,  Objects.Cube.Faces.Front.C.Z,
             Objects.Cube.Faces.Front.D.X,  Objects.Cube.Faces.Front.D.Y,  Objects.Cube.Faces.Front.D.Z,

            // Left Faces (X = -1)
             Objects.Cube.Faces.Left.A.X,  Objects.Cube.Faces.Left.A.Y,  Objects.Cube.Faces.Left.A.Z,
             Objects.Cube.Faces.Left.B.X,  Objects.Cube.Faces.Left.B.Y,  Objects.Cube.Faces.Left.B.Z,
             Objects.Cube.Faces.Left.C.X,  Objects.Cube.Faces.Left.C.Y,  Objects.Cube.Faces.Left.C.Z,
             Objects.Cube.Faces.Left.D.X,  Objects.Cube.Faces.Left.D.Y,  Objects.Cube.Faces.Left.D.Z,

            // Right Faces (X = 1)
             Objects.Cube.Faces.Right.A.X,  Objects.Cube.Faces.Right.A.Y,  Objects.Cube.Faces.Right.A.Z,
             Objects.Cube.Faces.Right.B.X,  Objects.Cube.Faces.Right.B.Y,  Objects.Cube.Faces.Right.C.Z,
             Objects.Cube.Faces.Right.C.X,  Objects.Cube.Faces.Right.C.Y,  Objects.Cube.Faces.Right.C.Z,
             Objects.Cube.Faces.Right.D.X,  Objects.Cube.Faces.Right.D.Y,  Objects.Cube.Faces.Right.D.Z,

            // Down Faces (Y = -1)
             Objects.Cube.Faces.Down.A.X,  Objects.Cube.Faces.Down.A.Y,  Objects.Cube.Faces.Down.A.Z,
             Objects.Cube.Faces.Down.B.X,  Objects.Cube.Faces.Down.B.Y,  Objects.Cube.Faces.Down.B.Z,
             Objects.Cube.Faces.Down.C.X,  Objects.Cube.Faces.Down.C.Y,  Objects.Cube.Faces.Down.C.Z,
             Objects.Cube.Faces.Down.D.X,  Objects.Cube.Faces.Down.D.Y,  Objects.Cube.Faces.Down.D.Z,

            // Top Faces (Y = 1)
             Objects.Cube.Faces.Top.A.X,  Objects.Cube.Faces.Top.A.Y,  Objects.Cube.Faces.Top.A.Z,
             Objects.Cube.Faces.Top.B.X,  Objects.Cube.Faces.Top.B.Y,  Objects.Cube.Faces.Top.B.Z,
             Objects.Cube.Faces.Top.C.X,  Objects.Cube.Faces.Top.C.Y,  Objects.Cube.Faces.Top.C.Z,
             Objects.Cube.Faces.Top.D.X,  Objects.Cube.Faces.Top.D.Y,  Objects.Cube.Faces.Top.D.Z
        ];