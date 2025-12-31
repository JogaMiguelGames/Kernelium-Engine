function Save() {
    var ProjectName = "teste";

    var encoder = new TextEncoder();
    var projectNameBytes = encoder.encode(ProjectName);

    var saveFile = new Uint8Array(2 + projectNameBytes.length + 1);

    saveFile[0] = 0x50;
    saveFile[1] = 0x01;
    saveFile.set(projectNameBytes, 2);
    saveFile[saveFile.length - 1] = 0x2E;

    console.log(saveFile);

    var blob = new Blob([saveFile], { type: 'application/octet-stream' });

    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'project.kes';
    link.click();

    URL.revokeObjectURL(link.href);
}