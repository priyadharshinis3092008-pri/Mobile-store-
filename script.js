
// Add to Cart
let count = 0;

function addCart() {
    count++;
    document.getElementById("count").innerHTML = count;
    alert("Product Added to Cart!");
}

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Search Mobile
function searchMobile() {
    let input = document.getElementById("search").value.toLowerCase();
    let mobiles = document.getElementsByClassName("mobile");

    for (let i = 0; i < mobiles.length; i++) {
        let name = mobiles[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (name.includes(input)) {
            mobiles[i].style.display = "block";
        } else {
            mobiles[i].style.display = "none";
        }
    }
}

// Price Filter
function filterPrice() {
    let value = document.getElementById("priceFilter").value;
    let mobiles = document.getElementsByClassName("mobile");

    for (let i = 0; i < mobiles.length; i++) {
        let price = Number(mobiles[i].getAttribute("data-price"));

        if (value === "all" || price <= Number(value)) {
            mobiles[i].style.display = "block";
        } else {
            mobiles[i].style.display = "none";
        }
    }
}

// Image Slider
let images = [
    "images/mobile1.jpg",
    "images/mobile2.jpg",
    "images/mobile3.jpg"
];

let index = 0;

setInterval(function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slider").src = images[index];
}, 3000);
