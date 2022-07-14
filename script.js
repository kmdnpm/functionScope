let items = [];

function addItem(name, price) {
    let item = { name: name, price: price };
    items.push(item);
}
function getTotal() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}
//output
addItem('pants', 40);
addItem('shirt', 20);
let total = getTotal();
console.log(total);