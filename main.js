const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('.sidebar');
const show_btn = document.querySelector(".btnclick");
const close_btn = document.querySelector(".close");

show_btn.onclick = function TS() {
    sidebar.classList.toggle("show");
    overlay.style.display = "block";
}

close_btn.onclick = function cl() {
    sidebar.classList.remove("show");
    overlay.style.display = "none";
};

