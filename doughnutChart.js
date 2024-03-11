const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
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