let $h1 = document.querySelector("h1");
$h1.innerHTML = "<h1>Edson Gutierrez Prado</h1>"
$h1.style.fontFamily = "Courier New";
//$h1.style.backgroundColor = "#000000";
//$h1.style.color = "#F0FFF0";

let $img = document.querySelector("img");
$img.src = "Edson.jpeg"
$img.style.borderRadius = "50%";
$img.style.maxWidth = "15%";
$img.style.height = "auto";

let $p = document.querySelector("p");
$p.innerText = "Experiencia con Unity 2D y 3D, así como experiencia haciendo rigs en blender y animación 3d con blender"
$p.style.fontFamily = "Courier New";
//$p.style.backgroundColor = "#000000";
//$p.style.color = "#F0FFF0";

let $ol = document.querySelector("ol");
$ol.innerHTML = "<li>Ver Películas</li><li>Jugar Videojuegos</li><li>Salir con mis amigos</li><li>Jugar D&D con mi familia y amigos</li>";
$ol.style.fontFamily = "Courier New";
//$ol.style.backgroundColor = "#000000";
//$ol.style.color = "#F0FFF0";

let $ul = document.querySelector("ul");
$ul.innerHTML = '<li>edsongp107@outlook.com</li><li>55 47796350</li>';
$ul.style.fontFamily = "Courier New";
//$ul.style.backgroundColor = "#000000";
//$ul.style.color = "#F0FFF0";


document.addEventListener("click", (e) => {
    if (e.target.matches("button[id = lighttheme]")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("ocean-mode");
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = darktheme]")) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("ocean-mode");
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = galaxytheme]")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("ocean-mode");
        document.body.classList.add("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = oceantheme]")) {
        document.body.classList.add("ocean-mode");
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
})

import { Theme } from "./DarkTheme.js";
import { obtenerReloj } from "./Reloj.js";


Theme();


let $btnActive = document.querySelector("#btn-01");
let myInterval;
$btnActive.addEventListener("click", (e) => {
    myInterval = setInterval(function () {
        obtenerReloj();
    }, 1000)
    e.target.disabled = true;
})

let $btnDesactive = document.querySelector("#btn-02");

$btnDesactive.addEventListener("click", (e) => {
    clearInterval(myInterval);
    $btnActive.disabled = false;
})



let $form = document.querySelector("#contact-form"),
    $inputs = document.querySelectorAll("#contact-form [required]");


$inputs.forEach((el) => {
    let $small = document.createElement("small");
    $small.id = `${el.name}-error`;
    $small.innerText = `Inserta un ${el.name} valido`;
    $small.classList.add(
        "textRed",
        "my-1",
        "d-block",
        "d-none"
    );
    el.insertAdjacentElement("afterend", $small);
});

document.addEventListener("input", (e) => {
    console.log(e.target.name)
    if (!e.target.matches("#contact-form [required]")) {
        return false;
    }

    let $smallError = document.querySelector(`#${e.target.name}-error`);
    let condition;

    if (e.target.pattern) {
        let regex = new RegExp(e.target.pattern);
        condition = !regex.exec(e.target.value);
        if (condition === true) {
            e.target.classList.add(
                "error"
            );
            e.target.classList.remove(
                "form-control"
            );
        }
        else {
            e.target.classList.remove(
                "error"
            );
            e.target.classList.add(
                "form-control"
            );
        }
    } else {
        condition = e.target.value === "";
    }

    console.log($smallError);
    console.log(condition);
    return condition
        ? $smallError.classList.remove("d-none")
        : $smallError.classList.add("d-none");
});

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    let $loader = document.querySelector("#loader"),
        $message = document.querySelector("#form-message");

    $loader.classList.remove("d-none");
    setTimeout(() => {
        $loader.classList.add("d-none");
        $message.classList.remove("d-none");
        setTimeout(() => $message.classList.add("d-none"), 3000);
    }, 3000);
});
