

async function CreateUser(){
    const data = await fetch("/api")
        .then((res) => res.json())
        .then((data) => console.log(data.message));
    return data;
}

export default CreateUser;