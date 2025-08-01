const products = [
    { id: 'product1', name: 'Widget A' },
    { id: 'product2', name: 'Gadget B' },
    { id: 'product3', name: 'Tool C' },
];

window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
const placeholder = document.createElement('option');
placeholder.textContent = '-- Select a Product --';
placeholder.disabled = true;
placeholder.selected = true;
select.appendChild(placeholder);
products.sort((a, b) => a.name.localeCompare(b.name));
option.setAttribute('data-product-id', id);
