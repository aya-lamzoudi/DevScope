export function popup() {
    console.log("edit test");
    document.querySelector("#popup").classList.toggle("hidden");
}

export function showsuccess(message) {
    const success = document.querySelector("#success-msg");
    const text = document.querySelector("#success-text");

    text.innerText = message;
    success.classList.remove("hidden");

    setTimeout(() => {
        success.classList.add("hidden");
    }, 4000);
}



export function showerror(message) {
    const error = document.querySelector("#error-msg");
    const text = document.querySelector("#error-text");

    text.innerText = message;
    error.classList.remove("hidden");

    setTimeout(() => {
        error.classList.add("hidden");
    }, 4000);
}

export function color(article, condidat, status) {
    const statusColors = {
        "A contacter": " border-[#22D3EE]/50 bg-[#0891B2]/10 text-[#22D3EE] hover:bg-[#0891B2]/20",
        "entretien": "border-purple-500/50 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
        "Retenu": "border-green-500/50 bg-green-500/10 text-green-400 hover:bg-green-500/20",
        "Refuse": "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20"
    };

    const statusBtn = article.querySelector("#status");

    statusBtn.className = `status-btn rounded-xl border px-4 py-2 text-xs font-bold ${statusColors[condidat.status]}`


}