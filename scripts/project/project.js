const HealthDiv = document.getElementById("map-tab_health");

const HealthTitle = document.getElementById("map-tab_health-title");
const HealthText = document.getElementById("map-tab_health-text");

const MaxHealthInput = document.getElementById("inspector_settings-max_health");

let MaxHealth = MaxHealthInput.value;
let MinHealth = 0;

let Health = 100;

if (Health > MaxHealth) {
    Health = MaxHealth;
    HealthText.textContent = Health;

    console.log("Health limit reached.");
} else {
    Health = Health;
    HealthText.textContent = Health;
}

if (Health < 20) {
    HealthDiv.style.background = "linear-gradient(to bottom, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 1))";

    HealthDiv.style.borderTop = "2px solid rgba(64, 0, 0, 1)";
    HealthDiv.style.borderRight = "2px solid rgba(64, 0, 0, 1)";

    HealthTitle.textContent = "Health!";
} else {
    HealthDiv.style.background = "linear-gradient(to bottom, rgba(0, 128, 255, 0.5), rgba(0, 128, 255, 1))";

    HealthDiv.style.borderTop = "2px solid rgba(0, 64, 128, 1)";
    HealthDiv.style.borderRight = "2px solid rgba(0, 64, 128, 1)";

    HealthTitle.textContent = "Health";
}