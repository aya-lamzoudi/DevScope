

export async function getUser(username) {
   document.querySelector(".chargement").classList.remove("hidden");
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
  
    if (response.status === 404) {

      return null;
    }

    if (!response.ok) {
      throw new Error("Error " + response.status);
    }

    return await response.json();

  } catch (error) {
    console.error("Failed to fetch data:", error.message);

  }
}

export async function getRepo(username) {

  try {
    const responce = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!responce.ok) throw new Error("erour" + responce.status);
    return responce.json();
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


