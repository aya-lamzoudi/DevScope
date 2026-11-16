
import { affichage } from "./profile.js";
import { post, get, getdata } from "./api.js";
import { search } from "./page-recherche.js";
import { showsuccess, showerror } from "./interface.js";

const name = new URLSearchParams(window.location.search).get('name');

//recherch & filter
let searchinput = document.querySelector("#search-repo")
let filter = document.querySelector("#filter")
export let recherch="", language = "tous"


// function of the search
search()

getdata(name)
    .then(async (data) => {

        // get user & repo info
        const userinfo = data[0];
        const repo = data[1]

        // get condidat from mock api
        const condidats = await get()

        document.querySelector(".chargement").classList.add("hidden");

        let user = {
            login: userinfo.login,
            name: userinfo.name ?? "aucun nom mentionné",
            avatar_url: userinfo.avatar_url,
            html_url: userinfo.html_url,
            bio: userinfo.bio ?? "aucun bio",
            location: userinfo.location ?? "aucun location",
            created_at: new Date(userinfo.created_at).toLocaleDateString(),
            following: userinfo.following,
            followers: userinfo.followers,
            public_repos: userinfo.public_repos,

        }
        affichage(user, repo)

        document.querySelector("#add-shortlist").addEventListener("click", () => {
            // see if the condida is already exit
            let found = condidats.some(condidat => condidat.login == userinfo.login);

            if (!found) {
                console.log("user not found")
                let userobject = {
                    login: userinfo.login,
                    name: userinfo.name,
                    avatar_url: userinfo.avatar_url,
                    html_url: userinfo.html_url,
                    language: repo.length > 0 ? repo[0].language : null,
                    rating: 0,
                    status: "A contacter",
                    note: "",
                    createdAt: new Date(userinfo.created_at).toLocaleDateString(),
                }
                post(userobject)
                showsuccess("Candidate is added successfully!");
            } else {
                showerror("Candidate is already in the shortliste")
            }

        })


        // add event lister for tri & seatch

        //recherche

        searchinput.addEventListener("input", () => {
            recherch = searchinput.value.trim()
            affichage(user, repo)
        })

        //filter

        filter.addEventListener("click", (e) => {

            language = e.target.dataset.filter
            console.log(language)
            affichage(user, repo)
        })



    })
    .catch(error => {
        console.error(error)
    });











// const userinfo = await getUser(name);
// const repo = await getRepo(name)
// const condidats = await get()

// if (userinfo === null) {
//     document.querySelector(".chargement").classList.add("hidden");
//     console.log("not found")
//     document.querySelector(".not-found").classList.remove("hidden");
// } else {
//     document.querySelector(".chargement").classList.add("hidden");
//     let user = {
//         login: userinfo.login,
//         name: userinfo.name ?? "aucun nom mentionné",
//         avatar_url: userinfo.avatar_url,
//         html_url: userinfo.html_url,
//         bio: userinfo.bio ?? "aucun bio",
//         location: userinfo.location ?? "aucun location",
//         created_at: new Date(userinfo.created_at).toLocaleDateString(),
//         following: userinfo.following,
//         followers: userinfo.followers,
//         public_repos: userinfo.public_repos,

//     }
//     affichage(user, repo)
// }


// document.querySelector("#add-shortlist").addEventListener("click", () => {

//     let found = condidats.some(condidat => condidat.login == userinfo.login);
//     console.log(found)
//     if (!found) {
//         console.log("user not found")
//         let userobject = {
//             login: userinfo.login,
//             name: userinfo.name,
//             avatar_url: userinfo.avatar_url,
//             html_url: userinfo.html_url,
//             language: repo.length > 0 ? repo[0].language : null,
//             rating: 0,
//             status: "A contacter",
//             note: "",
//             createdAt: new Date(userinfo.created_at).toLocaleDateString(),
//         }
//         post(userobject)
//         showsuccess("Candidate is added successfully!");
//     } else {
//         showerror("Candidate is already in the shortliste")
//     }

// })

