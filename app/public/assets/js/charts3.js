const ctx3 = document.getElementById('myChart3');

const valorMedido = 50;

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Resources'],
        datasets: [{
            label: 'Weekly sales',
            data: [18, 12],
            backgroundColor: [
                '#3300ff',
                '#d3314f',
            ],
            borderWidth: 1,
            cutout: '90%',
            circumference: 180,
            rotation: 270,
        },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        Plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        },
    },
});