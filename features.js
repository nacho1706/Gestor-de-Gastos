
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_amount');
    const montoList = document.getElementById('amount_list');
    let arrayValues = [];
    let arrayColors = [];
    let indexColor = 0;


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const montoInput = document.getElementById('amount');
        const montoValue = parseFloat(montoInput.value);
        const montoInputDescription = document.getElementById('description');   // Esto y la linea de abajo no pueden hacerse en una sola linea porque sino no se limpiaria el campo
        const montoDescription = montoInputDescription.value                    // importante el .value para que el testo se pase a String

        if (isNaN(montoValue)) {
            alert('Por favor, ingrese un monto válido.');
            return;
        } else arrayValues.push(montoValue);
        
        // Agrega un color random a la pila 
        arrayColors.push('#' + Math.floor(Math.random()*16777215).toString(16));
        console.log(arrayColors);
        // Agregar el monto a la lista
        const listItem = document.createElement('li');
        const circleDiv = document.createElement('div');
        circleDiv.classList.add('icono');
        
        //Cambia el color del div
        if(event){
            circleDiv.style.backgroundColor = arrayColors[indexColor];
            indexColor++;
            }   

        listItem.innerHTML = `<strong>$${montoValue.toFixed(2)} &nbsp--->&nbsp ${montoDescription}</strong>`;            //&nbsp es un espacio en HTML
        listItem.style.fontSize  = "20px"
        listItem.style.fontFamily = "arial"
        
        listItem.insertBefore(circleDiv, listItem.firstChild);
        montoList.appendChild(listItem);
        
        // Limpiar el campo de entrada
        montoInput.value = '';
        montoInputDescription.value = '';

        // Agregar elementos al circulo
        console.log(graphPorcentage(arrayValues));
        data.datasets[0].data = graphPorcentage(arrayValues);   //llamado a la funcion que calcula los porcentajes de cada input en base al 100%
        data.datasets[0].backgroundColor = arrayColors;         //introduce los colores correspondientes a cada uno de estos
        doughnutChart.update();
        
    });
});



function graphPorcentage(array){
    let suma = 0;
    let arrayPorcentage = [];

    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }

    for(let i = 0; i < array.length; i++){
        arrayPorcentage.push((array[i] * 100) / suma);
    }

    return arrayPorcentage;
}

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

// COMO NO ESTAMOS USANDO UN FRAMEWORK COMO NODE.JS NO SE PUEDE EXPORTAR NI IMPORTAR ELEMENTOS A OTRO ARCHIVO,
// POR TANTO EL SIGUIENTE CODIGO ESTARÁ MEJOR OPTIMIZADO AL IMPLENTAR LA MISMA

//DOUGHNUT.JS (Nombre que tendria el archivo) (Utilizacion de libreria Chart.js)

const data = {
    labels: [],
    datasets: [{
        label: '%',
        data: [],     //porcentaje del total
        backgroundColor: [],  //color 
        hoverOffset: 4
    }]
};

// Options for the doughnut chart
const options = {
    responsive: true,
    maintainAspectRatio: false,
};

// Get the context of the canvas element
const ctx = document.getElementById('doughnutChart').getContext('2d');

// Create the doughnut chart
const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});