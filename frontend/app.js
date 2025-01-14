fetch('/api/items')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Inventory</h2>';
        data.forEach(item => {
            output += `<p>${item.name} - ${item.quantity}</p>`;
        });
        document.getElementById('dashboard').innerHTML = output;
    });