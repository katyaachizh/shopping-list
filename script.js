const sendInput = document.querySelector('#input');
const itemContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = sendInput.value;
        const newItems = document.createElement('div');
        newItems.classList.add('items');
        newItems.textContent = itemText;

        newItems.addEventListener('click', function() {
            newItems.classList.toggle('done');
        })

        sendInput.value = " ";
            if(itemText != " ") {
                itemContainer.append(newItems);
            }
    }
});




/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
