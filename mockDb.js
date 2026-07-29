const foods = [
  { id: 1, name: "Pizza", price: 12.99 },
  { id: 2, name: "Burger", price: 9.99 },
  { id: 3, name: "Pasta", price: 11.49 },
  { id: 4, name: "Salad", price: 7.99 },
  { id: 5, name: "Sushi", price: 14.99 }
];

function getAll() {
  return foods;
}

module.exports = { getAll };
