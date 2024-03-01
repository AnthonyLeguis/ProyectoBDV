const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo'],
      datasets: [
        {
          label: '',
          data: [78, 85, 30],
          backgroundColor: [
            'rgb(231, 150, 0)',
            'rgb(196, 0, 59)',
            'rgb(255, 0, 255)',
          ],
        },
        {
          label: '',
          data: [40, 22, 92],
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(0, 255, 0)',
            'rgb(0, 0, 255)',
          ],
        },
        {
          label: '',
          data: [100, 45, 76],
          backgroundColor: [
            'rgb(255, 255, 0)',
            'rgb(255, 0, 255)',
            'rgb(231, 150, 0)',
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
});


