export function InventoryTable() {
  const div = document.createElement('div');
  div.className = 'bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8'

  div.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Inventory</h2>
    <table class="min-w-full text-sm">
      <thead>
        <tr class="bg-gray-200">
          <th class="text-left p-2">Product</th>
          <th class="text-left p-2">Stock</th>
          <th class="text-left p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t"><td class="p-2">Laptop</td><td class="p-2">25</td><td class="p-2">$999</td></tr>
        <tr class="border-t"><td class="p-2">Mouse</td><td class="p-2">80</td><td class="p-2">$25</td></tr>
        <tr class="border-t"><td class="p-2">Monitor</td><td class="p-2">14</td><td class="p-2">$150</td></tr>
      </tbody>
    </table>
  `;
  return div;
}
