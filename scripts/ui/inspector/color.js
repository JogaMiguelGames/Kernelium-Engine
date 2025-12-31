let SelectedColor = "White";
let HEXColor = true;

const ColorButton = {
    Red:    document.getElementById("IOC-Red"),
    Yellow: document.getElementById("IOC-Yellow"),
    Green:  document.getElementById("IOC-Green"),
    Blue:   document.getElementById("IOC-Blue"),
    Purple: document.getElementById("IOC-Purple"),
    Pink:   document.getElementById("IOC-Pink"),
    White:  document.getElementById("IOC-White"),
    Black:  document.getElementById("IOC-Black")
};

Object.keys(ColorButton).forEach(color => {
    ColorButton[color].addEventListener("click", () => {
        SelectedColor = color;
        OBJColor = ColorNames[SelectedColor];

        HEXColor = false;
    });
});