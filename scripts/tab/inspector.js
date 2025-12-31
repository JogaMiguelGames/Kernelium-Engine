const Inspector_Explorer = document.getElementById("inspector_explorer-tab");
const Inspector_Map = document.getElementById("inspector_map-tab");
const Inspector_OBJ = document.getElementById("inspector_object-tab");
const Inspector_Settings = document.getElementById("inspector_settings-tab");

const Inspector_Explorer_Button = document.getElementById("inspector_explorer-button");
const Inspector_Map_Button = document.getElementById("inspector_map-button");
const Inspector_OBJ_Button = document.getElementById("inspector_object-button");
const Inspector_Settings_Button = document.getElementById("inspector_settings-button");

Inspector_OBJ_Button.style.borderTop = "2px solid #0080FF";

function InspectorTabSelected(Name) {
    if (Name == "map") {
        Inspector_Explorer.className = "inspector-tab-hidden";
        Inspector_Explorer_Button.style.borderTop = "0px solid #0080FF";

        Inspector_Map.className = "inspector-tab";
        Inspector_Map_Button.style.borderTop = "2px solid #0080FF";

        Inspector_OBJ.className = "inspector-tab-hidden";
        Inspector_OBJ_Button.style.borderTop = "0px solid #0080FF";

        Inspector_Settings.className = "inspector-tab-hidden";
        Inspector_Settings_Button.style.borderTop = "0px solid #0080FF";
    } else if (Name == "obj") {
        Inspector_Explorer.className = "inspector-tab-hidden";
        Inspector_Explorer_Button.style.borderTop = "0px solid #0080FF";

        Inspector_Map.className = "inspector-tab-hidden";
        Inspector_Map_Button.style.borderTop = "0px solid #0080FF";

        Inspector_OBJ.className = "inspector-tab";
        Inspector_OBJ_Button.style.borderTop = "2px solid #0080FF";

        Inspector_Settings.className = "inspector-tab-hidden";
        Inspector_Settings_Button.style.borderTop = "0px solid #0080FF";
    } else if (Name == "explorer") {
        Inspector_Explorer.className = "inspector-tab";
        Inspector_Explorer_Button.style.borderTop = "2px solid #0080FF";

        Inspector_Map.className = "inspector-tab-hidden";
        Inspector_Map_Button.style.borderTop = "0px solid #0080FF";

        Inspector_OBJ.className = "inspector-tab-hidden";
        Inspector_OBJ_Button.style.borderTop = "0px solid #0080FF";

        Inspector_Settings.className = "inspector-tab-hidden";
        Inspector_Settings_Button.style.borderTop = "0px solid #0080FF";
    } else if (Name == "settings") {
        Inspector_Explorer.className = "inspector-tab-hidden";
        Inspector_Explorer_Button.style.borderTop = "0px solid #0080FF";

        Inspector_Map.className = "inspector-tab-hidden";
        Inspector_Map_Button.style.borderTop = "0px solid #0080FF";

        Inspector_OBJ.className = "inspector-tab-hidden";
        Inspector_OBJ_Button.style.borderTop = "0px solid #0080FF";
        
        Inspector_Settings.className = "inspector-tab";
        Inspector_Settings_Button.style.borderTop = "2px solid #0080FF";
    }
}