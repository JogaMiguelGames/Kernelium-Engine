var Camera = {
    Position: {
        X:  4,
        Y:  5,
        Z: -4
    },
    Rotation: {
        X: -0.632, // Pitch
        Y: -2.350, // Yaw
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

let CDROTX = -45;
let CDROTY = -135;
let CDROTZ = 0;

let CRROTX = CDROTX * Math.PI / 180
let CRROTY = CDROTY * Math.PI / 180
let CRROTZ = CDROTZ * Math.PI / 180

Camera.Rotation.X = CRROTX;
Camera.Rotation.Y = CRROTY;
Camera.Rotation.Z = CRROTZ;

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
                    CMDLastsCommands.textContent += text + "\n";
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
                        } else {
                            WriteLine(`Unknown Command! "${CMDInput.value}"`);
                            console.error(`Unknown Command! "${CMDInput.value}"`);
                        }
                    }
                });

                Window.appendChild(CMDLastsCommands);
                Window.appendChild(CMDInput);
            }
        }
    }
}