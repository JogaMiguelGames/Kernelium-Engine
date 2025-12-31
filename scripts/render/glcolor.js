function HexToGLColor(hex) {
    hex = hex.replace("#", "")
    
    let Red    =  parseInt(hex.substring(0, 2), 16) / 255
    let Green  =  parseInt(hex.substring(2, 4), 16) / 255
    let Blue   =  parseInt(hex.substring(4, 6), 16) / 255
    let Alpha  =  parseInt(hex.substring(6, 8), 16) / 255

    return [Red, Green, Blue, Alpha]
}