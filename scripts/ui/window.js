function CreateWindow(WindowTitle, PositionX, PositionY, SizeX, SizeY, BackgroundColor) {
    const Window = document.createElement("div");

    // TopBar

    const TopBar        =   document.createElement("div");

    const Title         =   document.createElement("h1");

    const CloseButton   =   document.createElement("button");

    // Window Style

    Window.style.backgroundColor = BackgroundColor;

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
        Window.remove();
    });

    // Append Childs

    document.body.appendChild(Window);
    Window.appendChild(TopBar);

    // TopBar Append Child

    TopBar.appendChild(Title);
    TopBar.appendChild(CloseButton);
}