const cartContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total-price');
const clearButton = document.getElementById('clear-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;

if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalContainer.innerText = "Total: 0 Drachma";
} else {
    cart.forEach(item => {
        const article = document.createElement('article');
        article.classList.add('product');

        article.innerHTML = `
            <h3 class="product-price">${item.name}</h3>
            <div class="product-price">${item.price.toLocaleString()} Drachma</div>
        `;

        cartContainer.appendChild(article);

        total += item.price;
    });

    totalContainer.innerText = "Total: " + total.toLocaleString() + " Drachma";
}

clearButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    location.reload();

    
}


);