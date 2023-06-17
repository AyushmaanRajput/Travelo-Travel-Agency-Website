let cart = JSON.parse(localStorage.getItem("wishlist")) || [];
let total = document.getElementById("total-amount");

function showPopup() {
  var popup = document.getElementById("popup");
  popup.innerHTML = "Submission Successful";
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 4000);
}

let wishlistBtn = document.getElementById("wishlist");
let wishlistContent = document.getElementById("wishlist-content");
let wishlistContainer= document.getElementById("wishlist-container");

wishlistBtn.addEventListener("click", function () {
  populateWishlistContent(cart);
  wishlistContainer.classList.toggle("show");
});

function populateWishlistContent(cart) {
  // console.log(cart);
  wishlistContent.innerText = "";
  if (cart.length > 0) {
    let content = document.createElement("div");
    cart.forEach((item, i) => {
      let row = document.createElement("div");
      row.style.display = "flex";
      let name = document.createElement("h4");
      name.innerText = item.name;
      let price = document.createElement("h4");
      price.innerText = `$${item.price}`;
      let remove = document.createElement("button");
      remove.innerText = "Remove";
      remove.addEventListener("click", () => {
        cart.splice(i, 1);
        localStorage.setItem("wishlist", JSON.stringify(cart));
        populateWishlistContent(cart);
        displayTotal();
      });
      row.append(name, price, remove);
      content.append(row);
    });
    displayTotal();
    wishlistContent.append(content);
  } else {
    let emptyMsg = document.createElement("h3");
    emptyMsg.innerText = "Your Cart is empty";
    wishlistContent.appendChild(emptyMsg);
  }
}

function getTotal() {
  let sum = 0;
  let items= JSON.parse(localStorage.getItem("wishlist")) ||[];
  items.map((el) => (sum += el.price));
  return sum;
}
function displayTotal() {
  total.innerHTML = `$${getTotal()}<i class="fa-solid fa-money-bill-wave" style="color: #85bb65"></i>`;
}


// FOR ANIMATION
    // Select the sections with the fade-in class
    // Select the sections with the fade-in class
    const sections = document.querySelectorAll(".fade-in");

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    ); // Adjust the threshold value as needed

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
