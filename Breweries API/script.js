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
btn.classList.add('btn', 'btn-outline-success');
btn.innerHTML = 'Search';
document.getElementById('forms').appendChild(btn);

/*------------------ FETCH DATA DISPLAYED----------------------- */

let div1 = document.createElement('div');
div1.setAttribute('id', 'second-div');
div1.classList.add('container', 'mt-4');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('id', 'data');
div2.classList.add('row', 'mt-4', 'bg-white');
document.getElementById('second-div').appendChild(div2);

let p1 = document.createElement('ul');
p1.classList.add('col-3', 'h4', 'fs-4', 'bg-dark');
p1.innerHTML = 'NAME'
document.getElementById('data').appendChild(p1);

let p2 = document.createElement('ul');
p2.classList.add('col-3', 'h4', 'fs-4', 'bg-dark');
p2.innerHTML = 'PHONE'
document.getElementById('data').appendChild(p2);

let p3 = document.createElement('ul');
p3.classList.add('col-3', 'h4', 'fs-4', 'bg-dark');
p3.innerHTML = 'ADDRESS'
document.getElementById('data').appendChild(p3);

let p4 = document.createElement('ul');
p4.classList.add('col-3', 'h4', 'fs-4', 'bg-dark');
p4.innerHTML = 'WEBSITE'
document.getElementById('data').appendChild(p4);

/*-------------------------- FETCHING DATA FROM API---------------------------- */

let globalResponse;
fetch("https://api.openbrewerydb.org/breweries")
    .then((v) => v.json())
    .then((response) => {
        globalResponse = response;
        let parentDiv = document.getElementById("data");
        response.map((o) => {

            let name = document.createElement("li");
            name.setAttribute('id', 'data1');
            name.classList.add("col-3");
            name.innerText = o.name;
            parentDiv.appendChild(name);

            let phone = document.createElement("li");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-3");
            phone.innerText = o.phone;
            parentDiv.appendChild(phone);

            let state = document.createElement("li");
            state.setAttribute('id', 'data1');
            state.classList.add("col-3");
            state.innerText = o.state;
            parentDiv.appendChild(state);

            let web = document.createElement("li");
            web.setAttribute('id', 'data1');
            web.classList.add("col-3");
            web.innerText = o.website_url;
            parentDiv.appendChild(web);

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
                    let name = document.createElement("li");
                    name.setAttribute('id', 'data1');
                    name.classList.add("col-3");
                    name.innerText = o.name;
                    parentDiv.appendChild(name);

                    let phone = document.createElement("li");
                    phone.setAttribute('id', 'data1');
                    phone.classList.add("col-3");
                    phone.innerText = o.phone;
                    parentDiv.appendChild(phone);

                    let state = document.createElement("li");
                    state.setAttribute('id', 'data1');
                    state.classList.add("col-3");
                    state.innerText = o.state;
                    parentDiv.appendChild(state);

                    let web = document.createElement("li");
                    web.setAttribute('id', 'data1');
                    web.classList.add("col-3");
                    web.innerText = o.website_url;
                    parentDiv.appendChild(web);
                }
            })
        }).catch((er) => console.error(er));
}