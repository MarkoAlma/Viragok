let urlfo = `https://viragbolt-backend.onrender.com/api/flowers`
let url = `https://viragbolt-backend.onrender.com/api/categories`
let fodata = ""
getData(url, renderData)
getData(urlfo, renderData2)
function renderData(data) {
    data.forEach(obj => {
        document.querySelector('.cimek').innerHTML+=`
        <button onclick="fut(this)">${obj.nev}</button>
        `
    })
}
function renderData2(data) {
    fodata = data
}
function fut(kap) {
    document.querySelector('.adatok').innerHTML=''
    fodata.forEach(obj => {
        if (obj.kategoria_nev == kap.innerHTML) {
            document.querySelector('.adatok').innerHTML+=`
            <button popovertarget=${obj.id} class="szep"> <img src="${obj.kepUrl}"> </button>
            <div id=${obj.id} class="kicsi" popover>
            <h1>${obj.nev}</h1>
            <img src=${obj.kepUrl} class="img-fluid kiskepek">
            <p>${obj.leiras}</p>
            <p>Készleten: ${obj.keszlet} db</p>
            <p>Ár: ${obj.ar} Ft</p>
            </div>
            `
        }
    })
}

function szuro () {
    document.querySelector('.adatok').innerHTML=''
    fodata.forEach(obj => {
        if (obj.kategoria_nev.includes(document.getElementById("field").value) || obj.leiras.includes(document.getElementById("field").value)) {
            document.querySelector('.adatok').innerHTML+=`
            <button popovertarget=${obj.id} class="szep"> <img src="${obj.kepUrl}"></button>
            <div id=${obj.id} class="kicsi" popover>
            <h1>${obj.nev}</h1>
            <img src=${obj.kepUrl} class="img-fluid kiskepek">
            <p>${obj.leiras}</p>
            <p>Készleten: ${obj.keszlet} db</p>
            <p>Ár: ${obj.ar} Ft</p>
            </div>
            `
        }
    })
}