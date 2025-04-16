async function LoginUser(username, password){
    const data = await fetch("/login-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.accessToken)
            localStorage.setItem("accessToken", data.accessToken);
        })
        .catch((err) => console.error(err));
    return data;
}

export default LoginUser;