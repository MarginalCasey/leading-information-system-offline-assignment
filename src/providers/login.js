function login(username, password) {
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Login failed");
  });
}

export default login;
