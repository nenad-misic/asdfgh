const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (!id) window.location = '/notfound'

// axios.get

document.getElementById('name').innerHTML = `<a href="/shop"><h6 class="d-inline">Agent's webshop</h6></a> <h6 class="d-inline"> > </h6> ${product.name}`;
document.getElementById('price').innerHTML = `${product.price}$`;
document.getElementById('available').innerHTML = `${product.available}/${product.quantity}`;
document.getElementById('image').setAttribute('src', product.image_url);
document.getElementById('add').addEventListener('click', (ev) => {
    ev.preventDefault();
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    open_cart_content();
})