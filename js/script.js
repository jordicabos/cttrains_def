document.addEventListener("DOMContentLoaded", function() {
    console.log("CTTrain Web carregada correctament.");

    // Validació bàsica del formulari de contacte
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const nom = document.getElementById("nom").value.trim();
            const email = document.getElementById("email").value.trim();
            const missatge = document.getElementById("missatge").value.trim();

            if (nom === "" || email === "" || missatge === "") {
                alert("Si us plau, omple tots els camps abans d'enviar.");
            } else {
                alert("Missatge enviat correctament! Ens posarem en contacte aviat.");
                form.reset();
            }
        });
    }

    // Missatge a la consola quan es fa clic en una imatge de la galeria
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            console.log("Has clicat sobre la imatge: " + img.alt);
        });
    });
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
