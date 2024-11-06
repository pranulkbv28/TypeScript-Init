type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let nextOrderId = 1;
let nextPizzaId = 1;
let cashInRegister = 100;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepporoni", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 9 },
];

const orderQueue: Order[] = [];

// Add a new pizza to the menu
const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`Sorry, we don't sell ${pizzaName}`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

addToArray(menu, {
  id: nextPizzaId++,
  name: "Chicken Bacon & Ranch",
  price: 12,
});
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[4],
  status: "ordered",
});

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the queue`);
    // throw new Error()
    return;
  }
  order.status = "completed";
  return order;
};

const getPizzaDetail = (identifier: number | string): Pizza | undefined => {
  if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    throw new TypeError("Identifier must be a number or a string");
  }
};

// addNewPizza({ name: "Chicken Bacon & Ranch", price: 12 });
// addNewPizza({ name: "BBQ Chicken", price: 12 });
// addNewPizza({ name: "Spicy Sausage Pizza", price: 11 });

placeOrder("Chicken Bacon & Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash In Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
