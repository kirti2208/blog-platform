async function register(){

    const username =
    document.getElementById("username").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/register",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                email,
                password
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}

async function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/login",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}

async function createBlog(){

    const title =
    document.getElementById("title").value;

    const content =
    document.getElementById("content").value;

    const response = await fetch(
        "http://localhost:5000/blogs",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                content
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}