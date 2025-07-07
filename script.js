let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

// Garante que só o primeiro começa ativo
list.forEach((el, i) => el.classList.toggle('active', i === active));

next.onclick = () => {
    list[active].classList.remove('active');
    active = (active + 1) % count;
    list[active].classList.add('active');
}

prev.onclick = () => {
    list[active].classList.remove('active');
    active = (active - 1 + count) % count;
    list[active].classList.add('active');
}