

let modal = document.querySelector(".modal");
let openBtn = document.querySelector("#modalBtn");
let closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModalOutsite);


function openModal(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(modal)
    modal.style.display = "block";
}

function closeModal(e) {
    e.stopPropagation();
    e.preventDefault();
    modal.style.display = "none";
}

function closeModalOutsite(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        console.log(e.target);
    }
}