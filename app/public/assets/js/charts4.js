const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
    type: 'line',
    data: {
      labels: ['9:00 am', '10:00 am', '11:00 am'],
      datasets: [
        {
            label: '9:00 am',
          data: [78, 85, 30],
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: 'rgb(231, 150, 0)',
          pointBackgroundColor: 'rgb(231, 150, 0)',
        },
        {
            label: '10:00 am',
          data: [40, 22, 92],
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: 'rgb(196, 0, 59)',
          pointBackgroundColor: 'rgb(196, 0, 59)',
        },
        {
            label: '11:00 am',
          data: [100, 45, 76],
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: 'rgb(255, 0, 255)',
          pointBackgroundColor: 'rgb(255, 0, 255)',
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