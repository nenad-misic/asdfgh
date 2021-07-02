shop.products.forEach(product => {
    document.getElementById('row').innerHTML += `
    <div class="p-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card p-0 col-12 cursor-pointer"  onclick="location.href='/product?id=1'">
            <h5 id="name" class="card-header">${product.name}</h5>
            
            <div class="card-body">
                <img class="image" alt="Product image" class="col-12 d-block user-select-none" style="font-size:1.125rem;text-anchor:middle" src="${product.image_url}">
                </img>
            </div>
            
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <h6 class="card-title" id="price">${product.price}$</h6>
                <h6 class="card-subtitle text-muted" id="available">${product.available} remaining</h6>
                </div>
            </div>
        </div>
    </div>
    `
});

fill_cart_content()