const switch123 = document.getElementById("checked");
switch123.addEventListener('change', function() {
    if (this.checked) {
        // Код для выполнения, когда флажок установлен
        console.log('Флажок установлен');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');

    } else {
        // Код для выполнения, когда флажок снят
        console.log('Флажок снят');
         document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') { 
  // Если установлена темная тема, применяем ее к body документа
  document.body.classList.add('dark-theme');
    switch123.checked = true;
}else{
    document.body.classList.remove('dark-theme');
    switch123.checked = false;
}


function addToCart(sender) {
    // Получаем текущий id из localStorage
    var id = localStorage.getItem('id');

    // Если id уже существует, увеличиваем его на 1
    // Иначе устанавливаем его равным 1
    if (id) {
        id = Number(id) + 1;
    } else {
        id = 1;
    }

    // Сохраняем новый id обратно в localStorage
    localStorage.setItem('id', id.toString());

    // Получаем данные о товаре
    var product = {
        id: id,
        name: sender.dataset.name,
        price: sender.dataset.price
    };

    // Получаем корзину из localStorage
    var cart = localStorage.getItem('cart');

    // Если корзина уже существует
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        // Иначе создаем новую корзину
        cart = [];
    }

    // Добавляем товар в корзину
    cart.push(product);

    // Сохраняем корзину обратно в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}