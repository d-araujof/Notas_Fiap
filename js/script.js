



function calcularMedia() {
    const Cp01 = parseFloat(document.getElementById('Cp01').value) || 0;
    const Cp02 = parseFloat(document.getElementById('Cp02').value) || 0;
    const Cp03 = parseFloat(document.getElementById('Cp03').value) || 0;
    const Sprint01 = parseFloat(document.getElementById('Sprint01').value);
    const Sprint02 = parseFloat(document.getElementById('Sprint02').value);

    // Verificar CPs preenchidos
    const cpsPreenchidos = [Cp01, Cp02, Cp03].filter(cp => cp > 0).length;
    if (cpsPreenchidos < 2) {
        document.getElementById('result').innerHTML = "⚠️ Preencha ao menos dois CPs";
        return;
    }

    // Verificar Sprints preenchidos (não podem ser nulos ou vazios)
    if (isNaN(Sprint01) || isNaN(Sprint02)) {
        document.getElementById('result').innerHTML = " ⚠️ Preencha as duas spints";
        return;
    }

    const cps = [Cp01, Cp02, Cp03];
    cps.sort((a, b) => b - a);
    const maioresCps = cps.slice(0, 2);

    const mediaCp = ((maioresCps[0] + maioresCps[1] + Sprint01 + Sprint02) / 4) * 10;

    const incluirMediaSemestral = document.getElementById('calcMediaSemestral').checked;
    let resultadoTexto = `Sua média de CP é: ${mediaCp.toFixed(2)}`;

    if (mediaCp < 6) {
        resultadoTexto += " 🚫 ";
    } else {
        resultadoTexto += " ✅ ";
    }

    if (incluirMediaSemestral) {
        const Gs = parseFloat(document.getElementById('Gs').value);
        if (isNaN(Gs)) {
            document.getElementById('result').innerHTML = " ⚠️ Preencha a nota de GS";
            return;
        }

        const mediaSemestral = (0.4 * mediaCp) + (0.6 * Gs);

        resultadoTexto += `<br>Sua média semestral é: ${mediaSemestral.toFixed(2)}`;

        if (mediaSemestral <= 60.00) {
            resultadoTexto += " 🚫 ";
        } else {
            resultadoTexto += " ✅ ";
        }
    }

    document.getElementById('result').innerHTML = resultadoTexto;
}




function calcularMediaAnual() {
    const media1Semestre = parseFloat(document.getElementById('media1Semestre').value) || 0;
    const media2Semestre = parseFloat(document.getElementById('media2Semestre').value) || 0;

    const inputMedia1 = document.getElementById('media1Semestre').value;
    if (inputMedia1 === "") {
        document.getElementById('resultAnual').innerHTML = "⚠️ Preencha a média do 1º semestre";
        return;
    }

    const inputMedia2 = document.getElementById('media2Semestre').value;
    if (inputMedia2 === "") {
        document.getElementById('resultAnual').innerHTML = "⚠️ Preencha a média do 2º semestre";
        return;
    }

    const mediaAnual = (0.4 * media1Semestre) + (0.6 * media2Semestre);

    let resultado = `Sua média anual é: ${mediaAnual.toFixed(2)}`;

    if (mediaAnual < 60) {
        resultado += " 🚫 ";
    } else {
        resultado += " ✅ ";
    }

    document.getElementById('resultAnual').innerHTML = resultado;
}


function calcularFaltas() {
    const quantAulas = parseFloat(document.getElementById('quantAulas').value) || 0;
    const numeroFaltas = parseFloat(document.getElementById('numeroFaltas').value) || 0;

    if (quantAulas === 0) {
        document.getElementById('resultFaltas').innerHTML = "⚠️  Preencha a quantidade aulas";
        return;
    }

    const presencas = quantAulas - numeroFaltas;
    const frequencia = (presencas / quantAulas) * 100;

    let resultado = `Sua frequência é: ${frequencia.toFixed(2)}%`;

    if (frequencia < 75) {
        resultado += " 🚫 ";
    } else {
        resultado += " ✅ ";
    }

    document.getElementById('resultFaltas').innerHTML = resultado;
}

