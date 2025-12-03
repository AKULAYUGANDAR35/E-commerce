// -------------------- Navbar Active Link --------------------
const navbarLinks = document.querySelectorAll("#navbar li a");

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// -------------------- Add to Cart --------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartIcon = document.querySelector("#navbar li a i.fa-store");
    if (!cartIcon) return;
    let countBadge = document.querySelector(".cart-count");

    if (!countBadge) {
        countBadge = document.createElement("span");
        countBadge.classList.add("cart-count");
        countBadge.style.cssText = `
            position: absolute;
            top: -5px;
            right: -5px;
            background: red;
            color: white;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 50%;
        `;
        cartIcon.parentElement.style.position = "relative";
        cartIcon.parentElement.appendChild(countBadge);
    }
    countBadge.textContent = cart.length;
}

// Add product to cart when clicking cart button
document.querySelectorAll(".fa-cart-shopping").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const productCard = btn.closest(".pro");
        const title = productCard.querySelector("h5").innerText;
        const price = productCard.querySelector("h4").innerText;
        const img = productCard.querySelector("img").src;

        const product = { title, price, img };
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${title} added to cart!`);
    });
});

// Initialize cart count
updateCartCount();

// -------------------- Newsletter Subscription --------------------
const newsletterBtn = document.querySelector("#newsletter button");
const newsletterInput = document.querySelector("#newsletter input");

if (newsletterBtn) {
    newsletterBtn.addEventListener("click", () => {
        const email = newsletterInput.value.trim();
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address!");
            return;
        }
        alert("Thanks for subscribing! 🎉");
        newsletterInput.value = "";
    });
}

// -------------------- Smooth Scroll for Nav Links --------------------
navbarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});

// -------------------- Scroll Animation for Features --------------------
const features = document.querySelectorAll("#feature .fe-box");
window.addEventListener("scroll", () => {
    features.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < window.innerHeight - 50) {
            box.style.transition = "0.6s ease-in-out";
            box.style.transform = "translateY(0)";
            box.style.opacity = "1";
        }
    });
});
