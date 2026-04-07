const buttons = document.querySelectorAll('.product-button');

buttons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;

    const name = product.querySelector('h3').innerText;
    const priceText = product.querySelectorAll('.product-price')[1].innerText;

    const price = parseInt(priceText.replace(/,/g, ''));

    const item = {
        name: name,
        price: price
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(item);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(name + " added to cart!");
}