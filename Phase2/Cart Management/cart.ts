const carts = document.querySelectorAll('.add-cart');

const products = [
    {
        name: 'Doublju Mens Shirt',
        tag: 'mensshirt',
        price: 15,
        inCart: 0,
    },
    {
        name: 'Casual Denim Button-Up Shirt',
        tag: 'denimshirt',
        price: 25,
        inCart: 0,
    },
    {
        name: 'Curren Mens Watch',
        tag: 'menswatch',
        price: 125,
        inCart: 0,
    },
    {
        name: 'Mens Jeans',
        tag: 'mensjeans',
        price: 45,
        inCart: 0,
    },
    {
        name: 'Revolution 5 Wide Running Shoes',
        tag: 'runningshoes',
        price: 245,
        inCart: 0,
    },
    {
        name: 'Nautica Mens Cologn',
        tag: 'perfume',
        price: 150,
        inCart: 0,
    },
    {
        name: '3 Piece Mens Formal Suit',
        tag: 'suit',
        price: 445,
        inCart: 0,
    },
    {
        name: 'Polarized Sunglasses',
        tag: 'sunglass',
        price: 35,
        inCart: 0,
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        this.cartNumbers(products);
        this.totalCost(products);
    })
}

onLoadCartNumbers(); {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

cartNumbers(products); {
    let productNumbers = localStorage.getItem('cartNumbers');

    //productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
       // localStorage.setItem('cartNumbers', 1);
        //document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);
}

setItems(products); {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        // if (cartItems[products.] == undefined) {
        //     // cartItems = {
        //     //     ...cartItems,
        //     //     [product.tag]: product
        //     // }
        // }
    // 
        // cartItems = {
        //     [product.tag]: product
        // }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

totalCost(products); {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        //cartCost = parseInt(cartCost);
       // localStorage.setItem("totalCost", cartCost + product.price);
    } else {
       // localStorage.setItem("totalCost", product.price);
    }
}

displayCart(); {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
                <img src = "./images/${item}.jpeg">
                <span>${item}</span>
            </div>
            <div class = "price">${item}.00</div>
            <div class = "quantity">
                <span>${item}</span>
            </div>
            <div class = "total">
                $${item}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class = "cartTotalContainer">
                <h4 class = "cartTotalTitle">
                    Cart Total
                </h4>
                <h4 class = "cartTotal">
                    $${cartCost}.00
                </h4>
            </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();


function onLoadCartNumbers() {
    throw new Error("Function not implemented.");
}

function cartNumbers(products: { name: string; tag: string; price: number; inCart: number; }[]) {
    throw new Error("Function not implemented.");
}

function setItems(products: { name: string; tag: string; price: number; inCart: number; }[]) {
    throw new Error("Function not implemented.");
}

function totalCost(products: { name: string; tag: string; price: number; inCart: number; }[]) {
    throw new Error("Function not implemented.");
}

function displayCart() {
    throw new Error("Function not implemented.");
}

