


export async function getUser(username) {
  try {
    const responce = await fetch(`https://api.github.com/users/${username}`);

    if (!responce.ok) throw new Error("Erour " + responce.status);

    return responce.json();
  } catch (error) {
    //  document.querySelector(".testing") =error.message
    console.error("Failed to fetch data:", error.message);
  }

}

// export async function getUser(username) {
//     try {
//         const responce = await fetch("./data.json");

//         if (!responce.ok) throw new error("Erour " + responce.status);

//         return responce.json();
//     } catch (error) {
//     //  document.querySelector(".testing") =error.message
//       console.error("Failed to fetch data:", error.message);
//     }

// }


// export async function getRepo(username){

//     try{
//         const responce= await fetch("./repo.json")

//         if(!responce.ok) throw new error("erour" + responce.status);
//         return responce.json();
//       }catch{
//         console.error("Failed to fetch data:", error.message);
//       }
// }

export async function getRepo(username) {

  try {
    const responce = await fetch(`https://api.github.com/users/${username}/repos`)

    if (!responce.ok) throw new Error("erour" + responce.status);
    return responce.json();
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}



export async function get() {
  try {
    const resp = await fetch("https://6af35283d2377d6c3704e90e.mockapi.io/condidats")
    if (!resp) throw new erreur("error: ", resp.status);
    const candidatCree = await resp.json();
    return candidatCree;
  } catch (erreur) {
    console.log("errour fitch data")
  }
}

export async function post(user) {
  const resp = await fetch("https://6af35283d2377d6c3704e90e.mockapi.io/condidats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
}