document.getElementById("file-input").addEventListener("change", function (event) {
    var file = event.target.files[0]
    if (!file) return

    var reader = new FileReader()

    reader.onload = function () {
        var bytes = new Uint8Array(reader.result)

        var startIndex = -1

        for (var i = 0; i < bytes.length - 1; i++) {
            if (bytes[i] === 0x50 && bytes[i + 1] === 0x01) {
                startIndex = i + 2
                break
            }
        }

        var endIndex = bytes.indexOf(0x2E, startIndex)

        if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
            alert("Invalid save file!")
            console.error("Invalid save file!")
            return
        }

        var textBytes = bytes.slice(startIndex, endIndex)
        var extractedText = new TextDecoder("utf-8").decode(textBytes)

        console.log("Project Loaded.\n")
        console.log(`Project Name: ${extractedText}`)
    }

    reader.readAsArrayBuffer(file)
})