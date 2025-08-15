document.addEventListener("DOMContentLoaded", () => {
    let user = document.getElementById("usuario");
    let pass = document.getElementById("clave");

    let go = () => {
        if (user.value && pass.value) {
            localStorage.setItem("usuario", user.value);
            location.href = "rastreo.html";
        } else {
            alert("Escribe usuario y contraseña");
        }
    };

    document.getElementById("btnLogin").addEventListener("click", go);
    document.getElementById("btnRegister").addEventListener("click", go);
});


//rastreo

document.addEventListener("DOMContentLoaded", () => {
    const saludo = document.getElementById("saludo");
    const guiaInput = document.getElementById("guia");
    const btnBuscar = document.getElementById("btnBuscar");
    const resultado = document.getElementById("resultado");

    const usuario = localStorage.getItem("usuario") || "Usuario";
    saludo.textContent = `Hola ${usuario} tu pedido esta en manos de:`;

    const buscarPedido = () => {
        const guia = guiaInput.value.trim();

        if (!guia) {
            alert("Por favor ingrese un número de guía.");
            return;
        }

        const transportadoras = ["Servientrega", "Coordinadora", "Mercado Libre", "TCC"];
        const aleatorio = Math.floor(Math.random() * transportadoras.length);

        resultado.innerHTML = `
            <strong>Guía:</strong> ${guia} <br>
            <strong>Transportadora:</strong> ${transportadoras[aleatorio]}
        `;
        resultado.style.display = "block";
    };

    btnBuscar.addEventListener("click", buscarPedido);
});
