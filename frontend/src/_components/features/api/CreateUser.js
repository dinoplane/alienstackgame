

async function CreateUser(username, password){
    const data = await fetch("/create-user", {
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
        .then((data) => console.log(data.message))
        .catch((err) => console.error(err));
    return data;
}

export default CreateUser;