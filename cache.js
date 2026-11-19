const DUREE = 10 * 60 * 1000;

export function ranger(cle, valeur) {
    localStorage.setItem(cle, JSON.stringify({ date: Date.now(), valeur }));

    // localStorage.setItem(cle, JSON.stringify(valeur));
}


// export function relire(cle) {
//     const data = localStorage.getItem(cle);
//     if (data === null) return [];
//     const entree = JSON.parse(data);
//     entree.forEach(cach => {
//         if (Date.now() - cach.createdAt > DUREE) return null; // trop vieux
//     });
//     return entree;
// }

export function relire(cle) {
const texte = localStorage.getItem(cle);
if (texte === null) return null; // jamais rangé
const entree = JSON.parse(texte);
if (Date.now() - entree.date > DUREE) return null; // trop vieux
return entree.valeur;
}

