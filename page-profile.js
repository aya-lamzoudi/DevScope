

import { getUser, getRepo } from "./api.js";



const name = new URLSearchParams(window.location.search).get('name');
console.log(`https://api.github.com/users/${name}`)
console.log(name)
const user = await getUser(name);
const repo = await getRepo(name)
console.log(repo)

// console.log(user)
// document.querySelector("#profile-username").innerText =user.login
// document.querySelector(".profile-bio").innerText =user.bio

// if(user.name==null){
//     console.log("this user doesn't exit")
// }else{
//  console.log("there is not")
// }


affichage(user, repo)
function affichage(user, repo) {

    document.querySelector(".profile-page").innerHTML = `
   
          <form class="serch-bar w-[50%] flex flex-col self-center">
                <div class=" flex flex-1 items-center rounded-full border-slate-600 bg-[#082F49] min-h-12 px-4">
                    <i class="fa-solid fa-magnifying-glass mx-2"></i>
                    <input type="search" id="search-profile" name="search-profile"
                        class="h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                        placeholder="   entrer un nom de utilisateur...">
                    <button type="submit"
                        class="bg-linear-to-t from-sky-500 to-indigo-500 w-[100px] h-[30px] rounded-xl hover:scale-105">analyser</button>


                </div>
                <p id="profile-err" class="message mt-1 text-sm text-red-400 self-center"></p>

            </form>


            <!-- PROFILE AND REPOSITORIES -->
            <section id="container-section" class="grid grid-cols-1 lg:grid-cols-[345px_1fr] gap-6 items-start">

                <!-- PROFILE CARD -->
                <div class="profile-card bg-[#082F49]/70 border border-slate-600/40
                    rounded-3xl p-6 shadow-xl flex flex-col items-center">


                    <!-- profile img -->
                    <div
                        class="w-[125px] h-[125px] rounded-full p-1 bg-gradient-to-br from-[#22D3EE] to-[#0E7490] shadow-lg shadow-cyan-500/20 mb-5">
                        <img id="profile-avatar" src="${user.avatar_url}" alt="profile photo" class="w-full h-full rounded-full
                         border-4 border-[#082F49]">

                    </div>


                    <!-- full NAME -->
                    <h1 id="profile-name" class="text-2xl font-bold text-center text-white mb-1">
                        ${user.name}
                    </h1>

                    <!-- USERNAME -->
                    <a id="profile-username" href="#" class="text-[#22D3EE] font-semibold
                        text-sm mb-3">
                        ${user.login}
                    </a>

                    <!-- BIO -->
                    <p id="profile-bio" class="text-slate-300 text-sm text-center mb-5">
                        ${user.bio}
                    </p>

                    <!-- localisation & date -->
                    <div class="w-full bg-[#0F172A]/70 rounded-2xl p-4 space-y-3 mb-5">

                        <!-- location -->
                        <div class="flex items-center gap-3 text-slate-300 text-sm">

                            <i class="fa-solid fa-location-dot text-[#22D3EE]"></i>
                            <span id="profile-location"> ${user.location} </span>

                        </div>

                        <!-- daate -->
                        <div class="flex items-center gap-3 text-slate-300 text-sm">
                            <i class="fa-regular fa-calendar text-[#22D3EE]"></i>
                            Membre depuis ...
                            <span id="profile-date"> ${user.created_at} </span>

                        </div>

                    </div>


                    <!-- statistiques -->
                    <div class="grid grid-cols-3 gap-2 w-full mb-5">
                        <!-- depo nbr -->
                        <div class="bg-[#0F172A]/70 rounded-xl p-3 text-center">

                            <h3 id="profile-repos" class="text-2xl font-bold text-[#22D3EE]">
                                ${user.public_repos}
                            </h3>

                            <p class="text-[10px] uppercase
                                text-slate-400 font-semibold">
                                Dépôts
                            </p>

                        </div>

                        <!-- abboner nbr -->
                        <div class="bg-[#0F172A]/70 rounded-xl p-3 text-center">

                            <h3 id="profile-followers" class="text-2xl font-bold text-[#38BDF8]">
                               ${user.followers}
                            </h3>

                            <p class="text-[10px] uppercase
                                text-slate-400 font-semibold">
                                Abonnés
                            </p>

                        </div>

                        <!-- abbonment nbr -->
                        <div class="bg-[#0F172A]/70 rounded-xl p-3 text-center">

                            <h3 id="profile-following" class="text-2xl font-bold text-[#38BDF8]">
                               ${user.following}
                            </h3>

                            <p class="text-[10px] uppercase
                                text-slate-400 font-semibold">
                                Abonnements
                            </p>

                        </div>

                    </div>


                    <!-- shortlist btn  -->
                    <button id="add-shortlist" class="w-full py-3 rounded-xl bg-gradient-to-r from-[#0891B2] to-[#22D3EE] text-[#082F49]
                        font-bold text-sm hover:scale-[1.02] shadow-lg mb-3">

                        <i class="fa-solid fa-star mr-2"></i>
                        Ajouter à la shortlist

                    </button>


                    <!-- ORIGINAL PROFILE -->
                    <a id="profile-link" href="${user.html_url}" target="_blank"
                        class="w-full text-center py-3
                        rounded-xl border border-slate-600/60 text-[#22D3EE] text-sm font-semibold hover:bg-[#0F172A] transition">

                        Voir le profil original
                        <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>

                    </a>

                </div>
                
   
   `
    const repocaitainer = document.createElement("div")
    repocaitainer.className = "grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[100vh]";
    repocaitainer.id = "repos-container";
    repo.forEach(repo => {
        const reposection = document.createElement("article");
        reposection.className = "bg-[#0F172A]/80 border border-slate-700 rounded-2xl p-5 hover:border-[#22D3EE]/60"
        reposection.innerHTML = `  
       

                        <div class="flex items-center gap-2 mb-4">
                            <i class="fa-regular fa-square text-[#22D3EE]"></i>

                            <h3 class="repo-name font-bold text-white">${repo.name} </h3>

                        </div>

                        <p class="repo-description text-sm mb-4">
                           ${repo.description} 
                        </p>

                        <div class="repo-about flex flex-wrap items-center gap-4 text-xs text-slate-300">

                            <span class="repo-lang">
                                <i class="fa-solid fa-circle text-[7px]"></i>
                               ${repo.language} 
                            </span>

                            <span class="repo-stars text-yellow-400">
                                <i class="fa-solid fa-star"></i>
                               ${repo.stargazers_count} 
                            </span>

                            <span class="repo-forks text-[#22D3EE]">
                                <i class="fa-solid fa-code-fork"></i>
                               ${repo.forks_count} 
                            </span>

                        </div>

                        <p class="last-update text-slate-500 text-xs mt-4">
                            ${repo.updated_at} 
                        </p>

        `
        repocaitainer.appendChild(reposection);


    });

    document.querySelector("#container-section").appendChild(repocaitainer);


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
    console.log("hey")
    
    
}
document.querySelector("#add-shortlist").addEventListener("click",()=>{
   post()
})

let userobject = {
    login: user.login,
    name:user.name,
    avatar_url: user.avatar_url,
    html_url: user.html_url,
    language: repo.length > 0 ? repo[0].language : null,
    rating: 3,
    status: "A contacter",
    note: "",
    createdAt: user.created_at
}


async function post(){
   const resp = await fetch("https://6af35283d2377d6c3704e90e.mockapi.io/condidats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userobject)
    })

    const candidatCree = await resp.json();
      console.log(candidatCree)
}

