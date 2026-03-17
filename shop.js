const checkboxes = document.querySelectorAll('.filter-bar input');
const products = document.querySelectorAll('.product');

checkboxes.forEach(box => {
    box.addEventListener('change', filterProducts);
});

function filterProducts() {
    const selected = Array.from(checkboxes)
        .filter(box => box.checked)
        .map(box => box.value);

    products.forEach(product => {
        const rarity = product.dataset.rarity;

        if (selected.length === 0 || selected.includes(rarity)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}