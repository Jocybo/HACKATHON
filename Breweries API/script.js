fetch("https://api.openbrewerydb.org/breweries")
    .then((v) => v.json())
    .then((response) => {
        let parentDiv = document.getElementById("data");

        response.map((o) => {
            let name = document.createElement("p");
            name.classList.add("col-3");
            name.innerText = o.name;
            parentDiv.appendChild(name);

            let phone = document.createElement("p");
            phone.classList.add("col-3");
            phone.innerText = o.phone;
            parentDiv.appendChild(phone);

            let state = document.createElement("p");
            state.classList.add("col-3");
            state.innerText = o.state;
            parentDiv.appendChild(state);

            let web = document.createElement("p");
            web.classList.add("col-3");
            web.innerText = o.website_url;
            parentDiv.appendChild(web);
        })
    }).catch((er) => console.error(er));
let act = document.getElementById('se-btn');
act.addEventListener('click', () => {
    search();
    let text = document.getElementById("text")
    text.value = "";
    document.body.appendChild(text);
});
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
}