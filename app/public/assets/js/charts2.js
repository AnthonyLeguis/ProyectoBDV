var ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '',
            data: [78, 22],
            backgroundColor: [
                '#3300ff',
                '#d3314f',
            ],
        }],
    },
    options: {
        cutoutPercentage: 100,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});