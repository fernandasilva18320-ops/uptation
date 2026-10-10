/* =========================================================
   FUELUP STATION
   SCRIPT.JS
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("open");

    });


    const navLinks = nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });

}


/* =========================================================
   MAPA INTERATIVO
========================================================= */

const locationCards =
    document.querySelectorAll(".location-card");

const mapFrame =
    document.getElementById("mapFrame");


locationCards.forEach(function (card) {


    card.addEventListener("click", function (event) {


        /*
         Não muda o mapa quando o usuário
         clicar diretamente no botão "VER ROTA".
        */

        if (
            event.target.tagName.toLowerCase() === "a"
        ) {

            return;

        }


        /* Remove ativo de todos */

        locationCards.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Ativa o selecionado */

        card.classList.add("active");


        /* Pega localização */

        const location =
            card.getAttribute("data-map");


        if (!location || !mapFrame) {

            return;

        }


        /*
         Atualiza o Google Maps
        */

        const encodedLocation =
            encodeURIComponent(location);


        mapFrame.src =
            "https://www.google.com/maps?q=" +
            encodedLocation +
            "&output=embed";


    });

});


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   ANIMAÇÃO DE ENTRADA
========================================================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


const animatedElements =
    document.querySelectorAll(
        ".feature-card, .location-card, .contact-form"
    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   FORMULÁRIO
========================================================= */

const form =
    document.querySelector(".contact-form");


if (form) {

    form.addEventListener("submit", function () {


        const button =
            form.querySelector("button");


        if (button) {

            button.innerHTML =
                "ENVIANDO...";

            button.style.opacity =
                "0.7";

        }

    });

}