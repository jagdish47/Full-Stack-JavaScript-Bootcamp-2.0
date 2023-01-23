// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("sugar");
console.log(shoppingCart);

for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Honey") {
    shoppingCart.pop();
  }
  if (shoppingCart[i] == "Tea") {
    shoppingCart[i] = "Green Tea";
  }
}

console.log(shoppingCart);
