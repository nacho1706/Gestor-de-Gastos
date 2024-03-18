
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

    let doughnutChartInstance;
    // Create the doughnut chart
    export function createDoughnutChart() {
        const ctx = document.getElementById('doughnutChart').getContext('2d');
        doughnutChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
            
        });
        return doughnutChartInstance;
    }

    export function updateDoughnutChart(newData, newBackgroundColor) {
        data.datasets[0].data = newData;
        data.datasets[0].backgroundColor = newBackgroundColor;
        doughnutChartInstance.update(); // Actualiza el gráfico con los nuevos datos
    }
