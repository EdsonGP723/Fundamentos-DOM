async function obtenerDatosLocales() {
    let response = await fetch("./data.json");
    let data = await response.json();

    let $materias = document.querySelector("#materias");
    let materiasHTML = "";

    data.materias.forEach(function (el) {
        materiasHTML += `
        <div class="col-12 col-sm-6 col-lg-4 text-center py-4">
            <div class="card myCard">
                <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <h6 class="card-subtitle mb-2">${el.docente}</h6>
                <p class="card-text">${el.descripcion}</p>
                </div>
            </div>
        </div>
    `;
    });
    $materias.innerHTML = materiasHTML;
}

obtenerDatosLocales();