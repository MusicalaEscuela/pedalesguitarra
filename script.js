document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("commentForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        let correo = document.getElementById("correo").value;
        let comentario = document.getElementById("comentario").value;
        let pagina = document.getElementById("pagina").value;

        let url = "https://script.google.com/macros/s/AKfycbw8oIT-OPkRt06CNfs4vkOk-dRrT2cd0pOmHWpHpFHR/dev";

        let formData = new FormData();
        formData.append("pagina", pagina);
        formData.append("correo", correo);
        formData.append("comentario", comentario);

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("mensaje").textContent = "¡Comentario enviado con éxito!";
            document.getElementById("commentForm").reset();
        })
        .catch(error => {
            document.getElementById("mensaje").textContent = "Error al enviar el comentario. Inténtalo de nuevo.";
            console.error("Error:", error);
        });
    });
});
