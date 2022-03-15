/* ---------------NAVIGATION BAR--------------------------- */

let nav = document.createElement('nav');
nav.setAttribute('id', 'nav-bar');
nav.classList.add('navbar', 'navbar-light', 'bg-dark');
document.body.appendChild(nav);

let div = document.createElement('div');
div.setAttribute('id', 'first-div');
div.classList.add('container');
document.getElementById('nav-bar').appendChild(div)

let anchor = document.createElement('a');
anchor.classList.add('navbar-brand', 'fs-1', 'text-warning');
anchor.innerHTML = 'BREWERIES'
document.getElementById('first-div').appendChild(anchor);

let forms = document.createElement('form');
forms.setAttribute('id', 'forms')
forms.setAttribute('onsubmit', false)
forms.classList.add('d-flex');
document.getElementById('first-div').appendChild(forms);

/* ------------SEARCH BOX & INPUT FIELD--------------------- */

let searchBox = document.createElement('input');
searchBox.setAttribute('id', 'search-Box');
searchBox.setAttribute('type', 'text');
searchBox.setAttribute('placeholder', 'search');
searchBox.setAttribute('aria-label', 'search');
searchBox.classList.add('form-control', 'me-2');
document.getElementById('forms').appendChild(searchBox);


let btn = document.createElement('button');
btn.setAttribute('id', 'se-btn');
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'search()');
btn.classList.add('btn', 'btn-outline-warning');
btn.innerHTML = 'Search';
document.getElementById('forms').appendChild(btn);

/*------------------ FETCH DATA DISPLAYED----------------------- */

let div1 = document.createElement('div');
div1.setAttribute('id', 'second-div');
div1.classList.add('container', 'mt-4');
document.body.appendChild(div1);

let tableResponsive = document.createElement('div');
tableResponsive.setAttribute('id', 'data')
tableResponsive.classList.add('table-responsive');
div1.appendChild(tableResponsive);

let table = document.createElement('table');
table.classList.add('table', 'table-dark', 'table-striped');
tableResponsive.appendChild(table);

let thead = document.createElement('thead');
thead.classList.add('thead');
table.appendChild(thead);

let trow = document.createElement('tr');
thead.appendChild(trow);

let thname = document.createElement('th');
thname.setAttribute('id', 'thname')
thname.innerHTML = 'NAME';
trow.appendChild(thname);

let thphone = document.createElement('th');
thphone.setAttribute('id', 'thphone')
thphone.innerHTML = 'PHONE';
trow.appendChild(thphone);

let thweb = document.createElement('th');
thweb.setAttribute('id', 'thweb')
thweb.innerHTML = 'WEBSITE';
trow.appendChild(thweb);

let thaddress = document.createElement('th');
thaddress.setAttribute('id', 'thaddress')
thaddress.innerHTML = 'ADDRESS';
trow.appendChild(thaddress);

/*-------------------------- FETCHING DATA FROM API---------------------------- */

let globalResponse;
fetch("https://api.openbrewerydb.org/breweries")
    .then((v) => v.json())
    .then((response) => {
        globalResponse = response;
        // let parentDiv = document.getElementById("data");
        response.map((o) => {

            let rowone = document.createElement('tr');
            table.appendChild(rowone);
            let name = document.createElement("td");
            name.innerText = o.name;
            rowone.appendChild(name)


            let phone = document.createElement("td");
            phone.innerText = o.phone;
            rowone.appendChild(phone);

            let web = document.createElement("td");
            web.innerText = o.website_url;
            rowone.appendChild(web)

            let state = document.createElement("td");
            state.innerText = o.state;
            rowone.appendChild(state)


        })
    }).catch((er) => console.error(er));

/* ========================================SEARCH FILTER============================= */

async function search() {

    let parentDiv = document.getElementById("data");
    while (parentDiv.childNodes.length > 4) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    fetch("https://api.openbrewerydb.org/breweries")
        .then((v) => v.json())
        .then((response) => {
            let a = document.getElementById('search-Box').value;
            response.map((o) => {
                if (((o.name != null) && (o.name.includes(a))) || ((o.phone != null) && (o.phone.includes(a))) || ((o.state != null) && (o.state.includes(a))) || ((o.website_url != null) && (o.website_url.includes(a)))) {

                    let rowone = document.createElement('tr');
                    table.appendChild(rowone);
                    let name = document.createElement("td");
                    name.innerText = o.name;
                    rowone.appendChild(name)


                    let phone = document.createElement("td");
                    phone.innerText = o.phone;
                    rowone.appendChild(phone);

                    let web = document.createElement("td");
                    web.innerText = o.website_url;
                    rowone.appendChild(web)

                    let state = document.createElement("td");
                    state.innerText = o.state;
                    rowone.appendChild(state)
                }
            })
        }).catch((er) => console.error(er));
}