
const form = document.querySelector(".serch-bar")
const regex = /^[A-Za-z]{3,}$/; // exactement 5 chiffres


form.addEventListener("submit", (event) => {
    console.log("test")
    event.preventDefault();
    // la page ne se recharge pas
    const input = document.querySelector("#search-profile")
    const code = input.value.trim();
    const erreur = document.querySelector("#profile-err")
    if (!regex.test(code)) { erreur.textContent = "Code invalide"; return; }
    else erreur.textContent = "";
    window.location.href = `profile.html?code=${encodeURIComponent(code)}`;
});

