




export function validatestatus(form) {
    const status = form.querySelector("#status").value;
    const error = form.querySelector("#status-err");

    if (status === "") {
        error.innerText = "Choisissez le status de recrutement";
        return;
    }
    else {
        error.innerText = "";
    }
}

export function validaterate(form) {
    const rate = form.querySelector("#rating").value;
    const error = form.querySelector("#rate-err");

    if (rate === "") {
        error.innerText = "Choisissez le notation ";
        return;
    }
    else {
        error.innerText = "";
    }
}

export function validatenote(form) {
    const note = form.querySelector("#note").value;
    const error = form.querySelector("#note-err");

    if (note.length > 100) {
        error.innerText = "Cette note est trop longue (veuillez saisir moins de 100 caractères)";

    }

}


