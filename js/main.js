const list = document.querySelector('ul');

let itemNum = Math.floor(window.innerHeight / 20);

for (let i = 0; i < itemNum; i++) {
  const li = document.createElement('li');

  li.innerHTML = `Item #${i}`;

  li.addEventListener('mouseenter', function (e) {
    e.target.classList.toggle('class-1');
    console.log(e.target.className);

    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.toggle('class-2');

      if (e.target.previousElementSibling.previousElementSibling) {
        e.target.previousElementSibling.previousElementSibling.classList.toggle(
          'class-3',
        );
      }
    }

    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.toggle('class-2');

      if (e.target.nextElementSibling.nextElementSibling) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle(
          'class-3',
        );
      }
    }
  });

  li.addEventListener('mouseleave', function (e) {
    e.target.className = 'class-1';
    e.target.classList.toggle('class-1');

    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.toggle('class-2');

      if (e.target.previousElementSibling.previousElementSibling) {
        e.target.previousElementSibling.previousElementSibling.classList.toggle(
          'class-3',
        );
      }
    }

    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.toggle('class-2');

      if (e.target.nextElementSibling.nextElementSibling) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle(
          'class-3',
        );
      }
    }

    console.log(e.target.className);
  });

  list.appendChild(li);
}
