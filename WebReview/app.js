let msg = `Hi I am a ${1 + 1 + 1 + 2} string I hope.`;

function printRecepit(product, qtv, price) {
  return `${product}($${price}) * ${qtv} = $${qtv * price}`;
}

printRecepit('butter', 4, 350);

let colors = ['red', 'teal', 'cyan', 'yellow'];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// for (let char of 'Millonarios') {
//   console.log(char);
// }

const chicken = {
  name: 'Lady Gray',
  age: 4,
  color: 'Black',
};

for (let prop in chicken) {
  console.log(`${prop} -> ${chicken[prop]}`);
}
