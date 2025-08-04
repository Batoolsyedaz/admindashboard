import { Header } from './components/Header.js';
import { SalesChart } from './components/SalesChart.js';
import { InventoryTable } from './components/InventoryTable.js';
import { OrdersTable } from './components/OrdersTable.js';

const app = document.getElementById('app');

app.appendChild(Header());
app.appendChild(SalesChart());
app.appendChild(InventoryTable());
app.appendChild(OrdersTable());
