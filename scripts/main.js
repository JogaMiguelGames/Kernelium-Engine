const RunButton = document.getElementById("Run-Button");
const PauseButton = document.getElementById("Pause-Button");
const StopButton = document.getElementById("Stop-Button");

const Project = {
    Settings: {
        Title: "Kernelium Engine",
        Language: "en"
    }
}

let elements = {
    inspector: {
        tabs: {
            obj: {

            },
            settings: {
                camera: {
                    inputs: {
                        position: {
                            x: document.getElementById("inspector_settings_camera-position-x"),
                            y: document.getElementById("inspector_settings_camera-position-y"),
                            z: document.getElementById("inspector_settings_camera-position-z")
                        },
                        rotation: {

                        }
                    }
                },
                health: {
                    inputs: {
                        max: document.getElementById("inspector_settings-max_health")
                    }
                }
            }
        }
    }
}

let States = {
    Debug: {
        DevMode: false,
        Run: false
    }
}

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
        Sensitivity: 0.002
    }
};

var LastCamera = {
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
        Sensitivity: 0.002
    }
};

StopButton.style.border = "2px solid #FF0000";

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
}

function PauseProject() {
    RunButton.style.border = "0px solid #00FF00";
    PauseButton.style.border = "2px solid #FFFF00";
    StopButton.style.border = "0px solid #FF0000";
}

function StopProject() {
    States.Debug.Run = false;

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