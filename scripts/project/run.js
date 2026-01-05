function RunProject() {
    States.Debug.Run = true;

    RunButton.style.border = "2px solid #00FF00";
    PauseButton.style.border = "0px solid #FFFF00";
    StopButton.style.border = "0px solid #FF0000";

    LastCamera.Position.X = Camera.Position.X;
    LastCamera.Position.Y = Camera.Position.Y;
    LastCamera.Position.Z = Camera.Position.Z;

    LastCamera.Rotation.X = Camera.Rotation.X;
    LastCamera.Rotation.Y = Camera.Rotation.Y;
    LastCamera.Rotation.Z = Camera.Rotation.Z;

    LastCamera.Settings.Speed = Camera.Settings.Speed;
    LastCamera.Settings.Sensitivity = Camera.Settings.Sensitivity;

    RunScript();
    Camera.Position.X = Number(elements.inspector.tabs.settings.camera.inputs.position.x.value) || 0;
    Camera.Position.Y = Number(elements.inspector.tabs.settings.camera.inputs.position.y.value) || 0;
    Camera.Position.Z = Number(elements.inspector.tabs.settings.camera.inputs.position.z.value) || 0;

    Camera.Rotation.X = 0.0;
    Camera.Rotation.Y = 0.0;
    Camera.Rotation.Z = 0.0;

    Camera.Settings.Speed = 0.15;
    Camera.Settings.Sensitivity = 0.002;

    if (elements.inspector.tabs.settings.camera.inputs.modes.freecam.checked) {
        Camera.Settings.FreeCam = true;
    } else {
        Camera.Settings.FreeCam = false;
    }

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
}

function PauseProject() {
    RunButton.style.border = "0px solid #00FF00";
    PauseButton.style.border = "2px solid #FFFF00";
    StopButton.style.border = "0px solid #FF0000";
}

function StopProject() {
    States.Debug.Run = false;

    Camera.Settings.FreeCam = true;

    RunButton.style.border = "0px solid #00FF00";
    PauseButton.style.border = "0px solid #FFFF00";
    StopButton.style.border = "2px solid #FF0000";

    Camera.Position.X            =            LastCamera.Position.X;
    Camera.Position.Y            =            LastCamera.Position.Y;
    Camera.Position.Z            =            LastCamera.Position.Z;

    Camera.Rotation.X            =            LastCamera.Rotation.X;
    Camera.Rotation.Y            =            LastCamera.Rotation.Y;
    Camera.Rotation.Z            =            LastCamera.Rotation.Z;

    Camera.Settings.Speed        =            LastCamera.Settings.Speed;
    Camera.Settings.Sensitivity  =            LastCamera.Settings.Sensitivity;

    document.title = Project.Settings.Title;
    document.body.lang = Project.Settings.Language;
}