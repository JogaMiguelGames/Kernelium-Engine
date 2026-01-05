//  === Web Kernelium Engine ===
//  == Kernelium Script Code == 
//                              
//     /tab/script/script.js    

const Map_Tab = document.getElementById("map-tab");
const Script_Cell = document.getElementById("script-tab");

const Script_L1 = document.getElementById("Line-1-Content");

function RunScript() {
    let i = 0;

    const code = Script_Cell.innerText.trim();
    const lines = code.split('\n');

    if (!lines[i]) return;

    const line = lines[i].trim();

    let PageTitle;

    window.Project_PageTitle = PageTitle;

    // Define

    if (line.startsWith(`set.page.title.to("`) && line.endsWith(`")`)) {
        PageTitle = line.slice(19, -2).trim();

        document.title = PageTitle;

        console.log(`Page title changed to "${PageTitle}" using script`);
    }

    if (line.startsWith(`set.page.lang.to("`) && line.endsWith(`")`)) {
        const PageLang = line.slice(18, -2).trim();

        document.body.lang = PageLang;

        window.Project_PageLang = PageLang;

        console.log(`Page lang changed to "${PageLang}" using script`);
    }

    // Debug

    if (line.startsWith(`console.write("`) && line.endsWith(`")`)) {
        const Console = document.createElement("span");
        const Write = document.createElement("span");
        const Parentheses = document.createElement("span");

        const WriteText = line.slice(15, -2).trim();

        Console.textContent = "console.";
        Console.className = "Script_Type-Console";

        Write.textContent = "write";
        Write.className = "Script_Type-Console-Write";

        Parentheses.textContent = `("${WriteText}")`;
        Parentheses.className = "Script_Type-Parentheses";

        Script_L1.textContent = null;

        Script_L1.appendChild(Console);
        Script_L1.appendChild(Write);
        Script_L1.appendChild(Parentheses);

        console.log(WriteText);
    }

    if (line.startsWith(`console.warning("`) && line.endsWith(`")`)) {
        const Console = document.createElement("span");
        const Warning = document.createElement("span");
        const Parentheses = document.createElement("span");

        const WriteText = line.slice(17, -2).trim();

        Console.textContent = "console.";
        Console.className = "Script_Type-Console";

        Warning.textContent = "warning";
        Warning.className = "Script_Type-Console-Warning";

        Parentheses.textContent = `("${WriteText}")`;
        Parentheses.className = "Script_Type-Parentheses";

        Script_L1.textContent = null;

        Script_L1.appendChild(Console);
        Script_L1.appendChild(Warning);
        Script_L1.appendChild(Parentheses);
        
        console.warn(WriteText);
    }

    if (line.startsWith(`console.error("`) && line.endsWith(`")`)) {
        const Console = document.createElement("span");
        const Error = document.createElement("span");
        const Parentheses = document.createElement("span");

        const WriteText = line.slice(15, -2).trim();

        Console.textContent = "console.";
        Console.className = "Script_Type-Console";

        Error.textContent = "error";
        Error.className = "Script_Type-Console-Error";

        Parentheses.textContent = `("${WriteText}")`;
        Parentheses.className = "Script_Type-Parentheses";

        Script_L1.textContent = null;

        Script_L1.appendChild(Console);
        Script_L1.appendChild(Error);
        Script_L1.appendChild(Parentheses);

        console.error(WriteText);
    }

    // Creating

    if (line.startsWith(`create.ui.button("`) && line.endsWith(`")`)) {
        const Button = document.createElement("button");

        const Text = line.slice(18, -2).trim();

        Button.textContent = Text;

        Map_Tab.appendChild(Button);
    }
}