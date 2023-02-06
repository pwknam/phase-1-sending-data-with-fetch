function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: useremail,
        })
    })

    .then(function (response) {
        return response.json()
    })

    .then(function (object) {
        document.body.append(object.id)
        console.log(object.id)
    })

    .catch(function(message){
        document.body.append(message)
    })

}

submitData("Kyushik", "pwkn95@gmail")