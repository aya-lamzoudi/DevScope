
import { affichage } from "./shortliste.js";
import { popup, showsuccess } from "./interface.js";
import { get, update, deletecondida } from "./api.js";
import { validatenote } from "./validation.js";

let condidats = await get()
let id;
let btndisable;
let section = document.querySelector("#devlopper-list");
const form = document.querySelector("#form-condidat");

//recherch & filter
let search = document.querySelector("#search-candidate")
let filter = document.querySelector("#filter")
export let recherch = "", status = "tous"

// afficher les condidats
affichage(condidats);



//add event lisner on all the condidat cards
section.addEventListener("click", (event) => {

    let condidatcard = event.target.closest("article")

    id = condidatcard.dataset.id


    if (event.target.closest("button").id == "edit-btn") {
        btndisable = event.target.closest("button")
        btndisable.disabled = true;

        popup()
        condidats.forEach(condidat => {

            if (condidat.id == id) {
                console.log(condidat)
                form.querySelector("#note").value = condidat.note;
                form.querySelector("#rating").value = condidat.rating
                form.querySelector("#status").value = condidat.status
            }
        });


        // console.log(username)

    }
    if (event.target.closest("button").id == "delete-btn") {

        event.target.closest("button").disabled = true;
        const confirm = document.querySelector("#deleteModal");
        confirm.querySelector("#candidateName").innerText = condidatcard.querySelector("#user-name").innerText
        confirm.classList.remove("hidden");

        confirm.querySelector("#cancelDelete").addEventListener("click", () => {
            confirm.classList.add("hidden");  //cencel the delete   
            event.target.closest("button").disabled = false

        })
        confirm.querySelector("#confirmDelete").addEventListener("click", async () => {


            await deletecondida(id)

            condidats = await get()

            affichage(condidats)
            showsuccess("Candidate deleted successfully!");
            confirm.classList.add("hidden");

            event.target.closest("button").disabled = false

        })
    }

})

// add event lisner to the popup so we can close & annuler:
document.querySelector("#popup").addEventListener("click", function (event) {

    if (event.target.id == "close-btn" || event.target.id == "popup-cancel") {
        popup();
        btndisable.disabled = false;
    }
})

//edit condidat form:
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    validatenote(form)
    // check errors

    let errors = form.querySelectorAll(".message");
    let haserror = false;
    errors.forEach(error => {
        if (error.innerText !== "") {
            haserror = true;
        }
    });


    if (!haserror) {

        condidats.forEach(async (cond) => {
            if (cond.id === id) {
                cond.note = form.querySelector("#note").value
                cond.rating = form.querySelector("#rating").value
                cond.status = form.querySelector("#status").value
                await update(cond, cond.id);
                condidats = await get()
            }
        })

        affichage(condidats);

        btndisable.disabled = false;
        popup()
        showsuccess("Candidate updated successfully!")

    }
})


// add event lister for tri & seatch

//recherche

search.addEventListener("input", () => {
    recherch = search.value.trim()
    affichage(condidats);
})

//filter

filter.addEventListener("click", (e) => {

    status = e.target.dataset.filter
    affichage(condidats);
})



