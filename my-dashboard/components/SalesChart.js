export function SalesChart() {
  const container = document.createElement('div');
  container.className = 'bg-white rounded-xl shadow p-6 mb-6';

  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold mb-4';
  title.textContent = 'Sales Overview';

  const canvas = document.createElement('canvas');
  canvas.id = 'salesChart';

  container.appendChild(title);
  container.appendChild(canvas);

  setTimeout(() => {
    new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales ($)',
          data: [1200, 1900, 3000, 5000, 2300, 3400],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.3
        }]
      }
    });
  }, 0);

  return container;
}
