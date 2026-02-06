const list = document.querySelector('ul');

let itemNum = Math.floor(window.innerHeight / 20);

for (let i = 0; i < itemNum; i++) {
  const li = document.createElement('li');

  li.innerHTML = `Item #${i}`;

  li.addEventListener('mouseenter', function (e) {
    e.target.classList.toggle('class-1');
    console.log(e.target.className);
  });

  li.addEventListener('mouseleave', function (e) {
    e.target.className = 'class-1';
    e.target.classList.toggle('class-1');
    console.log(e.target.className);
  });

  list.appendChild(li);
}
