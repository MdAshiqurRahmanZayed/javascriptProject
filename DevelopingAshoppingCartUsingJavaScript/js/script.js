let productsID = document.querySelector('#products');
let products = [{
          id: 1,
          name: "Shirt",
          price: 100
     },
     {
          id: 2,
          name: "Pant",
          price: 400
     },
     {
          id: 3,
          name: "Clock",
          price: 200
     },
     {
          id: 4,
          name: "Bag",
          price: 100
     },
     {
          id: 5,
          name: "Chair",
          price: 600
     },
     {
          id: 6,
          name: "Table",
          price: 800
     },
];

products.forEach(item => {
     const card = document.createElement('div');
     card.className = 'col-md-4 mb-4';
     card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: $${item.price}</p>
                <button data-id="${item.id}" class="add_to_cart btn btn-primary">Add to Cart</button>
            </div>
        </div>
    `;
     productsID.appendChild(card);
});

let cartsID = document.querySelectorAll('.add_to_cart');
let cartsDIV = document.querySelector('#carts');

cartsID.forEach(button => {
     button.addEventListener('click', newCart);
});

function newCart(e) {
     const parentElement = e.currentTarget.parentElement.parentElement;

     const productId = parentElement.getAttribute('data-id');
     const productName = parentElement.querySelector('.card-title').textContent;
     const productPrice = parentElement.querySelector('.card-text').textContent.split('$')[1];

    const cartItem = document.createElement('div');
    cartItem.className = 'col-md-4 mb-4';
    cartItem.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${productName}</h5>
                <p class="card-text">Price: $${productPrice}</p>
                <button class="remove-from-cart btn btn-danger">Remove</button>
            </div>
        </div>
    `;
     cartsDIV.appendChild(cartItem);

     const removeButton = cartItem.querySelector('.remove-from-cart');
     removeButton.addEventListener('click', function () {
          cartsDIV.removeChild(cartItem);
     });
}

