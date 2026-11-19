const DUREE = 10 * 60 * 1000;

export function ranger(cle, valeur) {
    localStorage.setItem(cle, JSON.stringify(valeur));
}


export function relire(cle) {
    const data = localStorage.getItem(cle);
    if (data === null) return [];
    const entree = JSON.parse(data);
    entree.forEach(cach => {
        if (Date.now() - cach.createdAt > DUREE) return null; // trop vieux
    });
    return entree;
}
