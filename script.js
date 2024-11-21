function calcularMedia() {
    // Obtendo as notas inseridas pelos usuários
    let nota1 = parseFloat(document.getElementById("nota1").value.replace(",", "."));
    let nota2 = parseFloat(document.getElementById("nota2").value.replace(",", "."));
    let nota3 = parseFloat(document.getElementById("nota3").value.replace(",", "."));
    
    // Verificando se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira todas as notas corretamente!";
        document.getElementById("resultado").classList.remove("aprovado", "reprovado");
        return;
    }

    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;
    
    // Exibindo o resultado
    let resultado = document.getElementById("resultado");
    if (media >= 6) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - <span class="aprovado">Aprovado!</span>`;
    } else {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - <span class="reprovado">Reprovado!</span>`;
    }
}
