function calcularMedia() {
    const nome = document.getElementById("nome").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);

    const media = (nota1 + nota2) / 2;

    document.getElementById("media").value = media.toFixed(2);
}