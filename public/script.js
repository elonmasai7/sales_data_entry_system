const form = document.getElementById('salesForm');
const salesList = document.getElementById('salesList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/sales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        form.reset();
        loadSales();
    }
});

async function loadSales() {
    const response = await fetch('/api/sales');
    const sales = await response.json();
    salesList.innerHTML = sales.map(sale => `
        <div>
            <strong>${sale.product}</strong> - ${sale.quantity} at $${sale.price} on ${new Date(sale.date).toLocaleDateString()}
            <button onclick="deleteSale('${sale._id}')">Delete</button>
        </div>
    `).join('');
}

async function deleteSale(id) {
    await fetch(`/api/sales/${id}`, {
        method: 'DELETE'
    });
    loadSales();
}

loadSales();
