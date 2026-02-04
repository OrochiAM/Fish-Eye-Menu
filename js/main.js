const list = document.querySelector('ul');

let itemNum = Math.floor(window.innerHeight / 20);

let s = '';

for (let i = 0; i < itemNum; i++) {
  s += `
    <li>Item ${i}</li>
  `;
}

list.innerHTML = s;
