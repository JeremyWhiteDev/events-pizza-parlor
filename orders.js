// orders.js
const orders = [
  {
    id: 1,
    crust: "Hand",
    toppings: ["pepperoni", "green pepper"],
    instructions: "extra cheese",
  },
  {
    id: 2,
    crust: "Thin",
    toppings: ["Black Olives", "green pepper"],
    instructions: "half green peppers",
  },
];

export const getOrders = () => {
  const orderCopy = orders.map((x) => ({ ...x }));
  return orderCopy;
};
console.log();

const getNewOrderId = () => {
  let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id;
  return highestOrderId + 1;
};

export const addNewOrder = (order) => {
  const newId = getNewOrderId();
  // Add logic to give the order the property id, which is equal to newId
  //   order.id = newId;
  // Add logic to add the order object to the orders array
  orders.push(order);
  // The below line creates and dispatches a new custom event titled "stateChanged".
  // We will still need to add a listener for this event.
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
