
import { affichage } from "./profile.js";
import { post, get, getdata } from "./api.js";
import { search } from "./page-recherche.js";
import { showsuccess, showerror } from "./interface.js";
// import { userlocal, repolocal, test } from "./localstorage.js";
import { ranger, relire } from "./cache.js";
const name = new URLSearchParams(window.location.search).get('name');

//recherch & filter
let searchinput = document.querySelector("#search-repo")
let filter = document.querySelector("#filter")
export let recherch = "", language = "tous"


let userinfo,repo;
// function of the search
search()

let localdata=relire("test")
let found;
if (localdata.length > 0) {
    found = localdata.find(c => c.user.login === name);
    if (found) {
        console.log("hey from local storage")
        let data = test.filter(c => c.user.login === name)

        userinfo = data[0].user
        repo = data[0].repo

    }
}
if (!found) {

    await getdata(name)
        .then(async (data) => {
            console.log("try", data)

            const storageData = {
                user: data[0],
                repo: data[1],
                createdAt: Date.now()
            };
            localdata.push(storageData)
            ranger("localdata",localdata)
            
            console.log("local", localdata)

            // get user & repo info
            userinfo = data[0];
            repo = data[1]
        })
        .catch(error => {
            console.error(error)
        });

}


const condidats = await get()



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
            createdAt: new Date().toLocaleDateString(),
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


