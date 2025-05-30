function limpar() {

    document.getElementById('result').innerHTML = '';
    document.getElementById('resultAnual').innerHTML = '';
    document.getElementById('resultFaltas').innerHTML = '';

    const campos = document.querySelectorAll('input, select, textarea');
    campos.forEach(campo => {
        if (campo.type === 'checkbox' || campo.type === 'radio') {
            campo.checked = false;
        } else {
            campo.value = '';
        }
    });
}
