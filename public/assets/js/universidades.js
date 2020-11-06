async function getUniversidade(regiao) {
    let baseUrl = "https://nossas-universidades.herokuapp.com/"
    let response = await fetch(baseUrl + `universidade?regiao=${regiao}`, {
        method: "GET",
    })
    if (response.ok) {
        return response.json();
    } else {
        return []
    }
}


function createCardUniversidade(UF, nome, regiao) {
    return createElementFromHTML('<div class="col-lg-4 col-sm-6 branding-4 planning-4">' +
        '                            <div class="single-portfolio m-2 m-sm-t-2 m-sm-b-2 m-b-5 m-t-5">' +
        '                                <div class="card item-card card-block w-100">' +
        `                                    <span class="card-title text-right"><strong class ="state-${regiao}">${UF}</strong></span>` +
        '                                    <img src="/assets/logo.png"' +
        '                                        alt="Photo of sunset">' +
        `                                    <h5 class="item-card-title mt-3 mb-3">${nome} </h5>` +
        '                                </div>' +
        '                            </div>' +
        '                        </div>')

}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

async function renderUniversidades() {
    let norteRow = document.getElementById("universidadeRowNorte");
    let nordesteRow = document.getElementById("universidadeRowNordeste");
    let centroOesteRow = document.getElementById("universidadeRowCentroOeste");
    let sudesteRow = document.getElementById("universidadeRowSudeste");
    let sulRow = document.getElementById("universidadeRowSul");


    let universidadesNO = await getUniversidade(0)
    let universidadesND = await getUniversidade(1)
    let universidadesCO = await getUniversidade(2)
    let universidadesSD = await getUniversidade(3)
    let universidadesSU = await getUniversidade(4)


    universidadesNO.forEach(uni => {
        var card = createCardUniversidade(uni.UF, uni.nome, "norte")
        norteRow.appendChild(card)
    })
    universidadesND.forEach(uni => {
        var card = createCardUniversidade(uni.UF, uni.nome, "nordeste")
        nordesteRow.appendChild(card)
    })
    universidadesCO.forEach(uni => {
        var card = createCardUniversidade(uni.UF, uni.nome, "centro-oeste")
        centroOesteRow.appendChild(card)
    })
    universidadesSD.forEach(uni => {
        var card = createCardUniversidade(uni.UF, uni.nome, "sudeste")
        sudesteRow.appendChild(card)
    })
    universidadesSU.forEach(uni => {
        var card = createCardUniversidade(uni.UF, uni.nome, "sul")
        sulRow.appendChild(card)
    })


}

renderUniversidades();






