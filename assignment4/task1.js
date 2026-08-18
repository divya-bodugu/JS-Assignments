//     Pure Functions & Immutability

const cart = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 }
];


function addItem(cart, item) 
{
  return [...cart, item];
}


function removeItem(cart, id)
{
  return cart.filter(item => item.id !== id);
}


function updateQuantity(cart, id, quantity) 
{
  return cart.map(item =>
    item.id === id
      ? { ...item, quantity: quantity }
      : item
  );
}

const newCart1 = addItem(cart, { id: 3, name: "Keyboard", quantity: 1 });
const newCart2 = removeItem(cart, 2);
const newCart3 = updateQuantity(cart, 1, 3);

console.log("Original Cart:", cart);
console.log("After Add:", newCart1);
console.log("After Remove:", newCart2);
console.log("After Update:", newCart3);