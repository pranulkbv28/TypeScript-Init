var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepporoni", price: 10 },
    { id: 3, name: "Veggie", price: 10 },
    { id: 4, name: "Hawaiian", price: 9 },
];
var nextOrderId = 1;
var cashInRegister = 100;
var orderQueue = [];
// Add a new pizza to the menu
var addNewPizza = function (pizzaObj) {
    menu.push(pizzaObj);
};
// find pizza
// const findPizza = (pizzaName) => {
//   for (pizza of menu) {
//     if (pizza.name === pizzaName) {
//       return pizza;
//     }
//   }
//   return false;
// };
// Place order: takes pizza name as parameter
/*
 * finds pizza in the menu
 * adds income to cashInRegister
 * adds pizza to orderQueue, {pizza: selectedPizzaobjectFromStep1, status: "ordered"}
 * returns the new ordered object
 */
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (!selectedPizza) {
        console.error("Sorry, we don't sell ".concat(pizzaName));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
};
// Complete order: takes order id as parameter
/*
 * finds the correct order in the orderQueue and marks it status as "completed". Return the order object
 */
var completeOrder = function (orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the queue"));
        // throw new Error()
        return;
    }
    order.status = "completed";
    return order;
};
addNewPizza({ id: 5, name: "Chicken Bacon & Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage Pizza", price: 11 });
placeOrder("Chicken Bacon & Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash In Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
