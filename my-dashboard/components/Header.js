export function Header() {
  const div = document.createElement('div');
  div.className = 'mb-6';
  div.innerHTML = `<h1 class="text-3xl font-bold">Admin Dashboard</h1>`;
  return div;
}
