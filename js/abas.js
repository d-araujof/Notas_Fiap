// Função para troca das abas
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover a classe active de todas as abas e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Adicionar a classe active na aba clicada
        tab.classList.add('active');

        // Mostrar o conteúdo correspondente
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});
