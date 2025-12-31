const MapTab = document.getElementById("TB-Map");
const ScriptTab = document.getElementById("TB-Script");
const AnimationTab = document.getElementById("TB-Animation");

const ScriptWindow = document.getElementById("script-tab");
const MapWindow = document.getElementById("map-tab");
const AnimationWindow = document.getElementById("animation-tab");

MapTab.style.borderTop = '2px solid #0080FF';

ScriptWindow.style.display = 'none';

AnimationWindow.style.display = 'none';

let MapTabEnabled = true;

MapTab.addEventListener('click', (e) => {
    MapTab.style.borderTop = '2px solid #0080FF';
    ScriptTab.style.borderTop = '0px solid #0080FF';
    AnimationTab.style.borderTop = '0px solid #0080FF';

    ScriptWindow.style.display = 'none';
    MapWindow.style.display = 'flex';
    AnimationWindow.style.display = 'none';

    MapTabEnabled = true;
});

ScriptTab.addEventListener('click', (e) => {
    MapTab.style.borderTop = '0px solid #0080FF';
    ScriptTab.style.borderTop = '2px solid #0080FF';
    AnimationTab.style.borderTop = '0px solid #0080FF';

    ScriptWindow.style.display = 'flex';
    MapWindow.style.display = 'none';
    AnimationWindow.style.display = 'none';

    MapTabEnabled = false;
});

AnimationTab.addEventListener('click', (e) => {
    MapTab.style.borderTop = '0px solid #0080FF';
    ScriptTab.style.borderTop = '0px solid #0080FF';
    AnimationTab.style.borderTop = '2px solid #0080FF';

    ScriptWindow.style.display = 'none';
    MapWindow.style.display = 'none';
    AnimationWindow.style.display = 'flex';

    MapTabEnabled = false;
});