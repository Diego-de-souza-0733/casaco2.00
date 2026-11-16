
// SELECIONANDO OS ELEMENTOS
const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar-menu');
const menuLateral = document.getElementById('menu-lateral');
const menuOverlay = document.getElementById('menu-overlay');

// ABRIR MENU
function abrirMenu() {
    menuLateral.classList.add('ativo');
    menuOverlay.classList.add('ativo');

    document.body.style.overflow = 'hidden';
}

// FECHAR MENU
function fecharMenu() {
    menuLateral.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');

    document.body.style.overflow = '';
}

// EVENTOS DE CLIQUE
btnAbrirMenu.addEventListener('click', abrirMenu);

btnFecharMenu.addEventListener('click', fecharMenu);

menuOverlay.addEventListener('click', fecharMenu);

// FECHAR AO CLICAR EM UM LINK
const linksMenu = document.querySelectorAll('.menu-lateral a');

linksMenu.forEach(function(link) {

    link.addEventListener('click', function() {
        fecharMenu();
    });

});

// FECHAR COM A TECLA ESC
document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        fecharMenu();
    }

});
