// mock data
const investments = [
    { date: '2025/09/01', ticker: '0050', invested: 10000, current: 10800, note: '' },
    { date: '2025/09/01', ticker: '0056', invested: 5000, current: 5300, note: '' },
    { date: '2025/09/01', ticker: '0051', invested: 8000, current: 7500, note: '' },
    { date: '2025/09/01', ticker: '00878', invested: 4000, current: 4500, note: '' },
];

const ctx = document.getElementById('pieChart').getContext('2d');

const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: investments.map(i => i.ticker),
        datasets: [{
            data: investments.map(i => i.current),
            backgroundColor: ['#4cafef', '#33d17a', '#e74c3c', '#ffb74d']
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: { color: '#fff' },
                position: 'left'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});