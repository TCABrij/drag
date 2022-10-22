let card = document.querySelector(".draggable");
let header = card.querySelector(".card-header");
let x;
let y;
let draggable = false;

header.addEventListener("mousedown", grabElement);

function grabElement() {
  header.classList.add("grabbed");
  header.addEventListener("mousemove", onDrag);
}

function onDrag({ movementX, movementY }) {
  let styles = window.getComputedStyle(card);
  let left = parseInt(styles.left);
  let top = parseInt(styles.top);

  card.style.top = `${top + movementY}px`;
  card.style.left = `${left + movementX}px`;
}

document.addEventListener('mouseup', ()=>{
    header.classList.remove('grabbed')
    header.removeEventListener('mousemove', onDrag)
})
