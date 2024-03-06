function showButtons() {
    var buttons = document.querySelectorAll('.btn_month');
    buttons.forEach(function(boton) {
        if (boton.style.display === 'none') {
            boton.style.display = 'block';
        } else {
            boton.style.display = 'none';
        }
    });
}