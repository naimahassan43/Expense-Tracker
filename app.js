const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//Dummy transaction
const dummyTrans = [
  { id: 1, text: "Salary", amount: 1200 },
  { id: 2, text: "T-Shirt", amount: -20 },
  { id: 3, text: "Sunglass", amount: -50 },
  { id: 4, text: "Camera", amount: -350 },
  { id: 5, text: "Freelancing", amount: 250 },
];

const transactions = dummyTrans;

//Add transaction to DOM  

function addToDom(transaction) {
  //get sign value
  const sign = transaction.amount < 0 ? '-' : '+';
  //create a list item 
  const item = document.createElement('li');
  //add a class to the list 
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  //generate html
  item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>`;
  list.appendChild(item);
}

//Initialize app 
function init() {
  list.innerHTML = '';
  transactions.forEach(addToDom);
}
init();