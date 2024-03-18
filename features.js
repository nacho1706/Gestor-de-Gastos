import {createDoughnutChart, updateDoughnutChart} from './scripts/doughnut-Chart.js'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_amount');
    const montoList = document.getElementById('amount_list');
    let InputData = {
        arrayValues : [],
        dataColors : {
            colors : [],
            indexColor : 0
        }};
    createDoughnutChart();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const montoInput = document.getElementById('amount');
        const montoValue = parseFloat(montoInput.value);
        const montoInputDescription = document.getElementById('description');   // Esto y la linea de abajo no pueden hacerse en una sola linea porque sino no se limpiaria el campo
        const montoDescription = montoInputDescription.value                    // importante el .value para que el testo se pase a String

        if (isNaN(montoValue)) {
            alert('Por favor, ingrese un monto válido.');
            return;
        } else InputData.arrayValues.push(montoValue);
        
        // Agrega un color random a la pila 
        InputData.dataColors.colors.push('#' + Math.floor(Math.random()*16777215).toString(16));

        // Agregar el monto a la lista
        const listItem = document.createElement('li');
        const circleDiv = document.createElement('div');
        circleDiv.classList.add('icono');
        
        //Cambia el color del div
        if(event){
            circleDiv.style.backgroundColor = InputData.dataColors.colors[InputData.dataColors.indexColor];
            InputData.dataColors.indexColor++;
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
        const percentage = graphPorcentage(InputData.arrayValues);
        const color = InputData.dataColors.colors;
        updateDoughnutChart(percentage, color);
        
                
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