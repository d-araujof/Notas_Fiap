function calcularMedia() {
    const Cp01 = parseFloat(document.getElementById('Cp01').value) || 0;
    const Cp02 = parseFloat(document.getElementById('Cp02').value) || 0;
    const Sprint01 = parseFloat(document.getElementById('Sprint01').value) || 0;
    const Sprint02 = parseFloat(document.getElementById('Sprint02').value) || 0;
    const mediaCp = ((Cp01 + Cp02 + Sprint01 + Sprint02) / 4) * 10;

    const incluirMediaSemestral = document.getElementById('calcMediaSemestral').checked;
    let resultadoTexto = `Sua média de CP é: ${mediaCp.toFixed(2)}`;

    if (incluirMediaSemestral) {
        const Gs = parseFloat(document.getElementById('Gs').value) || 0;
        const mediaSemestral = (0.4 * mediaCp) + (0.6 * Gs);
        resultadoTexto += `<br>Sua média semestral é: ${mediaSemestral.toFixed(2)}`;
    }

    document.getElementById('result').innerHTML = resultadoTexto;
}

function calcularMediaAnual() {
    const media1Semestre = parseFloat(document.getElementById('media1Semestre').value) || 0;
    const media2Semestre = parseFloat(document.getElementById('media2Semestre').value) || 0;

    const mediaAnual = (0.4 * media1Semestre) + (0.6 * media2Semestre);

    document.getElementById('resultAnual').innerHTML = `Sua média anual é: ${mediaAnual.toFixed(2)}`;
}