const RunButton = document.getElementById("Run-Button");
const PauseButton = document.getElementById("Pause-Button");
const StopButton = document.getElementById("Stop-Button");

const Project = {
    Settings: {
        Title: "Kernelium Engine",
        Language: "en"
    }
};

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

                        },
                        modes: {
                            freecam: document.getElementById("inspector_settings_tab-camera-settings-freecam-input")
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
};

let States = {
    Debug: {
        DevMode: false,
        Run: false
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

const Console = CreateWindow("Console", 100, 100, 800, 600, "#555555");

Console.add("cmd_input");