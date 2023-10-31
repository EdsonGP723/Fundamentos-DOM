export function GetApiStuff() {
    const d = document,
        $cardsHTML = d.querySelector("#skins");


    let Api = "https://valorant-api.com/v1/weapons/skins";

    async function loadCards(url) {
        try {
            $cardsHTML.innerHTML = `<span class="loader"></span>`;

            let res = await fetch(url);

            if (!res.ok) throw "Error al acceder a la API";

            let json = await res.json(),
                $template = "",
                $prevLink,
                $nextLink;

            for (let i = 0; i < json.data.length; i++) {
                try {
                    let res = await fetch(json.data[i].displayIcon);
                    
                    if (!res.ok)
                    throw `Error al cargar la información de la Skin ${json.data[i].name}`;

                $template += 
                `<figure>
                <h2 class="py-3">${json.data[i].displayName }</h2>
                <img src="${json.data[i].displayIcon }" class="py-3">
                
                </figure>
                `

                }
                catch (error) {
                    console.log(error);
                }
            }
            $cardsHTML.innerHTML = $template;
        }
        catch (error) {
            $cardsHTML.innerHTML = `<p><b>${error}</b></p>`;
        }
    }

    d.addEventListener("DOMContentLoaded", (e) => loadCards(Api));
    d.addEventListener("click", (e) => {
        if (!e.target.matches(".links a")) return false;
        e.preventDefault();
        loadCards(e.target.getAttribute("href"));
    })
}