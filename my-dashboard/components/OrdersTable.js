export function OrdersTable() {
  const div = document.createElement('div');
  div.className = 'bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8',

  div.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Customer Orders</h2>
    <table class="min-w-full text-sm">
      <thead>
        <tr class="bg-gray-200">
          <th class="text-left p-2">Order ID</th>
          <th class="text-left p-2">Customer</th>
          <th class="text-left p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t"><td class="p-2">#00123</td><td class="p-2">Ali Khan</td><td class="p-2 text-green-600">Shipped</td></tr>
        <tr class="border-t"><td class="p-2">#00124</td><td class="p-2">Sara Ahmad</td><td class="p-2 text-yellow-600">Processing</td></tr>
        <tr class="border-t"><td class="p-2">#00125</td><td class="p-2">John Doe</td><td class="p-2 text-red-600">Pending</td></tr>
      </tbody>
    </table>
  `;
  return div;
}
