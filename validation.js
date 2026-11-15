


export function validatenote(form) {
    const note = form.querySelector("#note").value;
    const error = form.querySelector("#note-err");

    if (note.length > 100) {
        error.innerText = "Cette note est trop longue (veuillez saisir moins de 100 caractères)";

    }

}


