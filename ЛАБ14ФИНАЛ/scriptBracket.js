function displayCart() {
     var cart = localStorage.getItem('cart');

    // Если корзина уже существует
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        // Иначе создаем новую корзину
        cart = [];
    }

    // Получаем элемент корзины
    var cartElement = document.getElementById('cart');

    // Очищаем корзину
    cartElement.innerHTML = '';

    // Добавляем каждый товар в корзину
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        cartElement.innerHTML += '<p>' + product.name + ': ' + product.price + 
                                 ' <button onclick="removeFromCart(' + product.id + ')">Удалить</button></p>';
    }
}


// Вызываем функцию отображения корзины
displayCart();

function ClearBasket(){
    localStorage.clear();
    location.reload();
}

function removeFromCart(id) {
    // Получаем корзину из localStorage
    var cart = localStorage.getItem('cart');

    // Если корзина уже существует
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        // Иначе создаем новую корзину
        cart = [];
    }

    // Находим индекс товара в корзине
    var index = cart.findIndex(function(product) {
        return product.id === id;
    });

    // Если товар найден
    if (index !== -1) {
        // Удаляем товар из корзины
        cart.splice(index, 1);

        // Сохраняем корзину обратно в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    location.reload();
}