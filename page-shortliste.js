
import { affichage } from "./shortliste.js";
import { popup, showsuccess } from "./interface.js";
import { get, update, deletecondida } from "./api.js";
import { validatenote } from "./validation.js";

const condidats = await get()
let id;
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


        const confirm = document.querySelector("#deleteModal");
        confirm.classList.remove("hidden");

        confirm.querySelector("#cancelDelete").addEventListener("click", () => {
            confirm.classList.add("hidden");  //cencel the delete             

        })
        confirm.querySelector("#confirmDelete").addEventListener("click", () => {

            deletecondida(id)
            const index = condidats.findIndex(c => c.id === id);
            console.log(index)
            condidats.splice(index, 1)
            confirm.classList.add("hidden");
            showsuccess("Candidate deleted successfully!");
            affichage(condidats)
        })







    }

})

// add event lisner to the popup so we can close & annuler:
document.querySelector("#popup").addEventListener("click", function (event) {

    if (event.target.id == "close-btn" || event.target.id == "popup-cancel") {
        popup();
    }
})

//edit condidat form:
form.addEventListener("submit", function (event) {
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

        condidats.forEach(cond => {
            if (cond.id === id) {
                console.log(cond);
                cond.note = form.querySelector("#note").value
                cond.rating = form.querySelector("#rating").value
                cond.status = form.querySelector("#status").value
                console.log(cond);
                update(cond, cond.id);
            }
        }
        )

        affichage(condidats);
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



