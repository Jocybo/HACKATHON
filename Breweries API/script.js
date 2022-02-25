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
forms.classList.add('d-flex');
document.getElementById('first-div').appendChild(forms);

/* ------------SEARCH BOX & INPUT FIELD--------------------- */

let searchBox = document.createElement('input');
searchBox.setAttribute('id', 'search-Box');
searchBox.setAttribute('type', 'search');
searchBox.setAttribute('placeholder', 'search');
searchBox.setAttribute('aria-label', 'search');
searchBox.classList.add('form-control', 'me-2');
document.getElementById('forms').appendChild(searchBox);


let btn = document.createElement('button');
btn.setAttribute('id', 'se-btn');
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

let p1 = document.createElement('h1');
p1.classList.add('col-3', 'h4', 'fs-4');
p1.innerHTML = 'NAME'
document.getElementById('data').appendChild(p1);

let p2 = document.createElement('h1');
p2.classList.add('col-3', 'h4', 'fs-4');
p2.innerHTML = 'PHONE'
document.getElementById('data').appendChild(p2);

let p3 = document.createElement('h1');
p3.classList.add('col-3', 'h4', 'fs-4');
p3.innerHTML = 'ADDRESS'
document.getElementById('data').appendChild(p3);

let p4 = document.createElement('h1');
p4.classList.add('col-3', 'h4', 'fs-4');
p4.innerHTML = 'WEBSITE'
document.getElementById('data').appendChild(p4);

/*-------------------------- FETCHING DATA FROM API---------------------------- */

fetch("https://api.openbrewerydb.org/breweries")
    .then((v) => v.json())
    .then((response) => {
        let parentDiv = document.getElementById("data");

        response.map((o) => {
            let name = document.createElement("p");
            name.setAttribute('id', 'data1');
            name.classList.add("col-3");
            name.innerText = o.name;
            parentDiv.appendChild(name);

            let phone = document.createElement("p");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-3");
            phone.innerText = o.phone;
            parentDiv.appendChild(phone);

            let state = document.createElement("p");
            state.setAttribute('id', 'data1');
            state.classList.add("col-3");
            state.innerText = o.state;
            parentDiv.appendChild(state);

            let web = document.createElement("p");
            web.setAttribute('id', 'data1');
            web.classList.add("col-3");
            web.innerText = o.website_url;
            parentDiv.appendChild(web);
        })
    }).catch((er) => console.error(er));


/*-------------------------- TRYING TO FILTER---------------------- */

/* function findBrew() {
    let data = document.getElementById('search-Box');
    let filter = input.value.toUpperCase();
    let data1 = document.getElementById('data1');
    let a;
    let text;

    for (let i = 0; i < data1.length; i++) {
        a = data1[i].getElementById('data1')[0];
        text = a.textContent || a.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            data1[i].style.display = "";
        } else {
            data1[i].style.display = "none"
        }
    }

} */

async function search() {
    try {
        const result = await get("https://api.openbrewerydb.org/breweries")
            .then((res) => {
                res.filter((n) => n.name)
                console.log(n)
            }).then((res) => {
                res.filter((p) => p.phone)
                console.log(p)
            })
            .then((res) => {
                res.filter((s) => s.state)
                console.log(s)
            })
            .then((res) => {
                res.filter((w) => w.website_url)
                console.log(w)
            })
    } catch (error) {
        console.error(error);
    }
};