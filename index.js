const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    const selectedEl = products.filter((i) => i.id === productId)

    if (order.length && order.some(i => i.id === selectedEl[0].id)) {
        alert('Товар уже в корзине!')
    } else {
        order.push(...selectedEl)
    }

    renderCart();
    rerenderTotalPrice();
}

console.log(addToBasket());

function removeFromBasket(productId) {
    order = [...order.filter((i) => i.id !== productId)]

    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    const totalPrice = order.reduce((sum, i) => {
        return sum + i.price
    }, 0)

    document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}