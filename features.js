document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_amount');
    const montoList = document.getElementById('amount_list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const montoInput = document.getElementById('amount');
        const montoValue = parseFloat(montoInput.value);

        if (isNaN(montoValue)) {
            alert('Por favor, ingrese un monto válido.');
            return;
        }

        // Agregar el monto a la lista
        const listItem = document.createElement('li');
        listItem.textContent = `$${montoValue.toFixed(2)}`;
        montoList.appendChild(listItem);
        

        // Limpiar el campo de entrada
        montoInput.value = '';
    });
});