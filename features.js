
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_amount');
    const montoList = document.getElementById('amount_list');
    let arrayValues = []
    let arrayColors = [];
    let indexColor = 0;


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const montoInput = document.getElementById('amount');
        const montoValue = parseFloat(montoInput.value);

        if (isNaN(montoValue)) {
            alert('Por favor, ingrese un monto válido.');
            return;
        } else arrayValues.push(montoValue);
        
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
        listItem.style.fontSize  = "20px"
        listItem.style.fontFamily = "arial"
        
        listItem.insertBefore(circleDiv, listItem.firstChild);
        montoList.appendChild(listItem);
        
        // Limpiar el campo de entrada
        montoInput.value = '';

        // Agregar elementos al circulo
        let average = averageAmount(arrayValues);
        console.log(average);
    });
});

function changeColor(className) {
    element.style.backgroundColor = randomColor;
}

function averageAmount(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    const promedio = suma / array.length;
    
    return promedio;
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
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
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