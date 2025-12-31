const Explorer = document.getElementById("inspector_explorer-tree-view");

const ProjectFolderDiv = document.createElement("div");
const ProjectFolderIcon = document.createElement("img");

const ProjectFolderName = document.createElement("span");

const ProjectFolderBreakLine = document.createElement("br");

ProjectFolderIcon.src = "resources/sprites/icons/treeview/folders/document.svg";
ProjectFolderIcon.title = "A project folder.";

ProjectFolderName.textContent = "Project";

Explorer.appendChild(ProjectFolderDiv);

ProjectFolderDiv.appendChild(ProjectFolderIcon);

ProjectFolderDiv.appendChild(ProjectFolderBreakLine);

ProjectFolderDiv.appendChild(ProjectFolderName);

ProjectFolderIcon.className = "inspector_explorer-tree-view-project-folder";
ProjectFolderName.className = "inspector_explorer-tree-view-project-folder-name";

let Files = 0;

let L_DS_ID = 0;
let DS_ID = 0;

let LastDirectoryCorner = null;

function CreateDirectoryStuff(ID) {
    if (LastDirectoryCorner) {
        LastDirectoryCorner.textContent = "├";
    }

    const Diretory_LeftCorner = document.createElement("span");

    Diretory_LeftCorner.textContent = "└";
    Diretory_LeftCorner.className = "tree-view_left-corner";

    Explorer.appendChild(Diretory_LeftCorner);

    LastDirectoryCorner = Diretory_LeftCorner;

    console.log(ID);
}

function CreateFile(Name, Type) {
    CreateDirectoryStuff(DS_ID += 1);

    L_DS_ID = DS_ID - 1;

    Files += 1;

    console.log(Files);

    if (Type == "text") {
        const DocumentDiv = document.createElement("div");
        const DocumentIcon = document.createElement("img");

        const DocumentBreakLine = document.createElement("br");

        DocumentDiv.className = "inspector_explorer-tree-view-file";

        DocumentIcon.src = "resources/sprites/icons/treeview/files/document.svg";
        DocumentIcon.title = "A text file.";

        DocumentIcon.className = "inspector_explorer-tree-view-file-type-text";

        let FileName = document.createElement("span");

        FileName.textContent = Name;

        Explorer.appendChild(DocumentDiv);
        DocumentDiv.appendChild(DocumentIcon);
        DocumentDiv.appendChild(DocumentBreakLine);
        DocumentDiv.appendChild(FileName);
    } else if (Type == "audio") {
        const AudioDiv = document.createElement("div");
        const AudioIcon = document.createElement("img");

        AudioIcon.src = "resources/sprites/icons/treeview/files/audio.svg";
        AudioIcon.title = "A audio file.";

        AudioIcon.className = "inspector_explorer-tree-view-file-type-audio";

        let FileName = document.createElement("span");

        FileName.textContent = Name;

        Explorer.appendChild(AudioDiv);
        AudioDiv.appendChild(AudioIcon);
        AudioDiv.appendChild(FileName);
    } else {
        const UnknownDiv = document.createElement("div");
        const UnknownIcon = document.createElement("img");

        UnknownIcon.src = "resources/sprites/icons/treeview/files/unknown.svg";
        UnknownIcon.title = "A unknown file type!";

        UnknownIcon.className = "inspector_explorer-tree-view-file-type-unknown";

        let FileName = document.createElement("span");

        FileName.textContent = Name;

        Explorer.appendChild(UnknownDiv);
        UnknownDiv.appendChild(UnknownIcon);
        UnknownDiv.appendChild(FileName);
    }
}

function CreateFolder(Name) {
    const FolderDiv = document.createElement("div");
    const FolderIcon = document.createElement("img");

    FolderIcon.src = "resources/sprites/icons/treeview/folders/open.svg";
    FolderIcon.title = "A folder.";

    FolderIcon.className = "inspector_explorer-tree-view-folder";

    let FolderName = document.createElement("span");

    FolderName.textContent = Name;

    Explorer.appendChild(FolderDiv);
    FolderDiv.appendChild(FolderIcon);
    FolderDiv.appendChild(FolderName);
}