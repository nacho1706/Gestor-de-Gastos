
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_amount');
    const montoList = document.getElementById('amount_list');
    let arrayColors = [];
    let indexColor = 0;


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const montoInput = document.getElementById('amount');
        const montoValue = parseFloat(montoInput.value);

        if (isNaN(montoValue)) {
            alert('Por favor, ingrese un monto válido.');
            return;
        }
        
        // Agrega un color random a la pila 
        arrayColors.push('#' + Math.floor(Math.random()*16777215).toString(16));

        // Agregar el monto a la lista
        const listItem = document.createElement('li');
        const circleDiv = document.createElement('div');
        circleDiv.classList.add('icono');
        
        //Cambia el color del div
        if(event){
            circleDiv.style.backgroundColor = arrayColors[indexColor];
            indexColor++;
            }   

        listItem.innerHTML = `<strong>$${montoValue.toFixed(2)}</strong>`;
        
        listItem.insertBefore(circleDiv, listItem.firstChild);
        montoList.appendChild(listItem);
        
        // Limpiar el campo de entrada
        montoInput.value = '';
    });
});


function changeColor(className) {
    element.style.backgroundColor = randomColor;
}
