// Open single-product page
function openProduct(id) {
    window.location.href = "product.html?id=" + id;
}

// Mobile menu toggle
let bar = document.getElementById('bar');
let navbar = document.getElementById('navbar');

if (bar) {
    bar.onclick = () => {
        navbar.classList.toggle('active');
    };
}
