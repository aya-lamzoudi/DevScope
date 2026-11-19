

export async function getdata(username) {

  try {

    const urluser = `https://api.github.com/users/${username}`;
    const urlrepo = `https://api.github.com/users/${username}/repos`;
    //users
    const user = fetch(urluser)
      .then(res => {
      if (!res.ok) {
        throw new Error("User not found", res.status);
      }
      if (res.status == 404) {
        document.querySelector(".chargement").classList.add("hidden");
        console.log("not found")
        document.querySelector(".not-found").classList.remove("hidden");
      }
      return res.json();
    })
    //repo
    const repo = fetch(urlrepo).then(res => {
      if (!res.ok) throw new Error("repo not found", res.status);
      console.log(res.json)
      return res.json();
    })
    const data = await Promise.all([user, repo])
    return data
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }

}

export async function get() {

  try {
    const resp = await fetch("https://6af35283d2377d6c3704e90e.mockapi.io/condidats")
    if (!resp.ok) throw new erreur("error: ", resp.status);
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

export async function update(condidats, id) {
  const resp = await fetch(`https://6af35283d2377d6c3704e90e.mockapi.io/condidats/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(condidats)
  })
}


export async function deletecondida(id) {
  const resp = await fetch(`https://6af35283d2377d6c3704e90e.mockapi.io/condidats/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },

  })
}








// export async function getUser(username) {
//   document.querySelector(".chargement").classList.remove("hidden");
//   try {
//     const response = await fetch(`https://api.github.com/users/${username}`);

//     if (response.status === 404) {

//       return null;
//     }

//     if (!response.ok) {
//       throw new Error("Error " + response.status);
//     }

//     return await response.json();

//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);

//   }
// }

// export async function getRepo(username) {

//   try {
//     const responce = await fetch(`https://api.github.com/users/${username}/repos`);

//     if (!responce.ok) throw new Error("erour" + responce.status);
//     return responce.json();
//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);
//   }
// }