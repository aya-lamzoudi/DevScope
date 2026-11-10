


// export async function getUser(username) {
//     try {
//         const responce = await fetch(`https://api.github.com/users/${username}`);

//         if (!responce.ok) throw new error("Erour " + responce.status);

//         return responce.json();
//     } catch (error) {
//     //  document.querySelector(".testing") =error.message
//       console.error("Failed to fetch data:", error.message);
//     }

// }

export async function getUser(username) {
    try {
        const responce = await fetch("./data.json");

        if (!responce.ok) throw new error("Erour " + responce.status);

        return responce.json();
    } catch (error) {
    //  document.querySelector(".testing") =error.message
      console.error("Failed to fetch data:", error.message);
    }

}


export async function getRepo(username){

    try{
        const responce= await fetch("./repo.json")

        if(!responce.ok) throw new error("erour" + responce.status);
        return responce.json();
      }catch{
        console.error("Failed to fetch data:", error.message);
      }
}

// export async function getRepo(username){

//     try{
//         const responce= await fetch(`https://api.github.com/users/${username}/repos`)

//         if(!responce.ok) throw new error("erour" + responce.status);
//         return responce.json();
//       }catch{
//         console.error("Failed to fetch data:", error.message);
//       }
// }