


export function search() {
    const form = document.querySelector(".serch-bar")
    const regex = /^(?![0-9-])[a-zA-Z][a-zA-Z0-9-]{2,37}(?<!-)$/; // exactement 5 chiffres


    form.addEventListener("submit", (event) => {
        console.log("test")
        event.preventDefault();
        // la page ne se recharge pas
        const input = document.querySelector("#search-profile")
        const code = input.value.trim();
        const erreur = document.querySelector("#profile-err")
        if (!regex.test(code)) { erreur.textContent = "Code invalide"; return; }
        else erreur.textContent = "";
        window.location.href = `profile.html?name=${encodeURIComponent(code)}`;

    });
}

search()
