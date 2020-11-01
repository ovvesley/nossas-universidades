let form = document.getElementById("addUniversidadeForm")
let baseUrl = "https://nossas-universidades.herokuapp.com/"
form.addEventListener("submit", async (formVal) => {
    formVal.preventDefault()
    console.log(formVal)

    var elements = form.elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    try {
        let response = await fetch(baseUrl + "addUniversidade",
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
        if (response.status === 200) {
            let resJson = await response.json();
            console.log(resJson)
            // clearForm(form)
            successSubmit()
        } else {
            throw new Error("Não retornou 200");
        }




    } catch (error) {
        // clearForm(form)
        console.error(error)
        errorSubmit()
    }

})

function clearForm(form) {
    var elements = form.elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = "";
    }
    form.reset()
}

function successSubmit() {
    document.getElementById("alertDanger").style.display = "none"
    document.getElementById("alertSuccess").style.display = "block"
    setTimeout(() => {
        document.getElementById("alertDanger").style.display = "none"
        document.getElementById("alertSuccess").style.display = "none"
    }, 5000)
}


function errorSubmit() {
    document.getElementById("alertSuccess").style.display = "none"
    document.getElementById("alertDanger").style.display = "block"
    setTimeout(() => {
        document.getElementById("alertDanger").style.display = "none"
        document.getElementById("alertSuccess").style.display = "none"
    }, 5000)
}

