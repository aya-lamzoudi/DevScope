

async function get() {
    try {
        const resp = await fetch("https://6af35283d2377d6c3704e90e.mockapi.io/condidats")
        if (!resp) throw new erreur("error: ", resp.status);
        const candidatCree = await resp.json();
        return candidatCree;
    } catch (erreur) {
        console.log("errour fitch data")
    }
}

let condidats = await get()

let section = document.querySelector("#devlopper-list");
condidats.forEach(condidat => {

    let article = document.createElement("article")
    article.className = `devlopper-card flex gap-5 rounded-2xl border border-slate-700/60 bg-[#082F49]/60 p-5 px-6 md:px-8
                    md:flex-row md:items-center md:justify-between hover:border-[#22D3EE]/50`;

    article.innerHTML = `
    
     <!-- developper details -->
                    <div class="devlopper-details flex min-w-0 items-center gap-5 md:gap-6">

                        <div class="logo shrink-0">
                            <img src=" ${condidat.avatar_url}" alt="candidate avatar"
                                class="w-[65px] h-[65px] rounded-full border-2 border-[#22D3EE]">
                        </div>

                        <div class="match-info min-w-0">

                            <h2 class="devlopper-name text-lg font-bold text-white">
                               ${condidat.name}
                            </h2>

                            <p class="devlopper-username mt-1 text-sm text-slate-400">
                                ${condidat.login}

                                <span
                                    class="lang rounded-lg bg-[#0E7490]/30 px-3 py-1 text-xs font-semibold text-[#22D3EE]">
                                     ${condidat.language}
                                </span>
                            </p>

                            <p class="devlopper-note mt-2 text-sm italic text-[#A5F3FC]">
                                 ${condidat.note}
                            </p>

                            <p class="devlopper-date mt-2 text-xs text-slate-500">
                                Ajouté le  ${condidat.createdAt}
                            </p>

                        </div>
                    </div>


                    <!-- ACTIONS -->
                    <div class="user-actions flex flex-wrap items-center justify-end gap-3">

                        <div class="user-rate flex items-center">
                            <div class="rating flex gap-0.5
                                text-[#A3E635] text-lg">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>

                        <button type="button"
                            class="status-btn rounded-xl border border-[#22D3EE]/50 bg-[#0891B2]/10 px-4 py-2 text-xs font-bold text-[#22D3EE] hover:bg-[#0891B2]/20">
                            <i class="fa-solid fa-circle text-[8px] mr-1"></i>
                            À contacter
                        </button>

                        <button type="button" class="edit-match-btn p-2 text-slate-400 hover:text-green-400"><i
                                class="fa-solid fa-pen" aria-hidden="true"></i></button>
                        <button type="button" class="delete-match-btn p-2 text-slate-400 hover:text-red-400"><i
                                class="fa-solid fa-trash-can" aria-hidden="true"></i></button>

                    </div>
    `
    section.appendChild(article)
});

document.querySelector("#shortlist-count").innerText = condidats.length
