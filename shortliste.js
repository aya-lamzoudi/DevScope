
import { color } from "./interface.js";

import { recherch, status } from "./page-shortliste.js"
function filter(condidat) {
    document.querySelectorAll(`.filter-btn`).forEach(btn => {
        btn.classList.remove("text-[#082F49]", "bg-[#22D3EE]")
    });

    document.querySelector(`[data-filter="${status}"]`).classList.add("text-[#082F49]", "bg-[#22D3EE]")
    return condidat.filter(
        c => c.login.includes(recherch) && status == "tous" || status == c.status

    )
}


export function affichage(condidats) {
    const section = document.querySelector("#devlopper-list");
    section.innerHTML = "";
    condidats = filter(condidats)
    condidats.forEach(condidat => {
        const rate = document.createElement("div")
        rate.className = "rating flex gap-0.5 text-[#A3E635] text-lg"

        for (let i = 1; i <= condidat.rating; i++) {
            let ratestar = document.createElement("i")
            ratestar.className = "fa-solid fa-star";
            rate.appendChild(ratestar)

        }

        let article = document.createElement("article")
        article.dataset.id = condidat.id
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

                                <span id="user-name">
                                ${condidat.login}
                                </span>

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
                           <!-- rating-->
                        </div>

                        <button type="button" id="status"
                            class="status-btn  border-[#22D3EE]/50 bg-[#0891B2]/10 px-4 py-2 text-xs text-[#22D3EE] hover:bg-[#0891B2]/20">
                            <i class="fa-solid fa-circle text-[8px] mr-1"></i>
                            ${condidat.status}
                        </button>

                        <button type="button" id="edit-btn" class="edit-btn p-2 text-slate-400 hover:text-green-400"><i
                                class="fa-solid fa-pen" aria-hidden="true"></i></button>
                        <button type="button"  id="delete-btn" class="delete-btn p-2 text-slate-400 hover:text-red-400"><i
                                class="fa-solid fa-trash-can" aria-hidden="true"></i></button>

                    </div>
    `
        color(article, condidat, status)
        section.appendChild(article)
        console.log(rate)
        article.querySelector(".user-rate").appendChild(rate)
        console.log(condidat.status)

    });
}