// let cart = JSON.parse(localStorage.getItem("wishlist")) || [];
let users = JSON.parse(localStorage.getItem("users"));
let userLogin = JSON.parse(localStorage.getItem("user-login"));
let total = document.getElementById("total-amount");
let buyBtn = document.getElementById("buy");
let isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
let ctaBtn = document.querySelector(".cta>a");
let rootPath = window.location.pathname.split("/").slice(0, -1).join("/");
let sidebar = document.querySelector("#sidebar");

console.log(userLogin);
window.addEventListener("load", function () {
  if (!isLoggedIn) {
    this.localStorage.setItem("loggedIn", false);
  }
});

function toggleSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

if (isLoggedIn) {
  ctaBtn.innerHTML = `${userLogin.name}  <i class="fa-solid fa-right-from-bracket" style="color: #ffffff;"></i>`;
  ctaBtn.addEventListener("click", () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("user-login");
    ctaBtn.innerText = "Log In";
    window.location.href = "/";
  });
} else {
  ctaBtn.innerText = "Log In";
  ctaBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./signup.html";
  });
}

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
let wishlistContainer = document.getElementById("wishlist-container");

wishlistBtn.addEventListener("click", function () {
  if (isLoggedIn) {
    populateWishlistContent(userLogin.cart);
  } else {
    populateWishlistContent([]);
  }
  wishlistContainer.classList.toggle("show");
});

function populateWishlistContent(cart) {
  // console.log(cart);
  wishlistContent.innerText = "";
  if (isLoggedIn) {
    // document.querySelector("#estimated").style.display = "block";
    if (cart.length > 0) {
      let content = document.createElement("div");
      cart.forEach((item, i) => {
        let subText = document.createElement("span");
        subText.classList.add("subtitle");
        if (i == 0) {
          subText.innerText = "From :";
        } else {
          subText.innerText = "To :";
        }
        let row = document.createElement("div");
        row.style.display = "flex";
        let name = document.createElement("h3");
        name.innerText = item.name;
        let price = document.createElement("h4");
        if (item.updatedPrice) {
          price.innerText = `$${item.updatedPrice}`;
        } else {
          price.innerText = `$${item.price}`;
        }
        let remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.addEventListener("click", () => {
          cart.splice(i, 1);
          userLogin.cart = cart;
          localStorage.setItem("user-login", JSON.stringify(userLogin));
          updateUsers();
          populateWishlistContent(cart);
          displayTotal();
        });
        let selectElement = document.createElement("select");
        let options = ["Basic", "Premium", "Elite"];
        for (let i = 0; i < options.length; i++) {
          let optionElement = document.createElement("option");
          optionElement.text = options[i];
          optionElement.value = options[i];
          selectElement.appendChild(optionElement);
        }
        if (item.updatedPrice) {
          if (item.updatedPrice / 3 == item.price)
            selectElement.value = "Elite";
          else if (item.updatedPrice / 2 == item.price)
            selectElement.value = "Premium";
          else selectElement.value = "Basic";
        }
        selectElement.addEventListener("change", () => {
          let v = selectElement.value;
          let updatedPrice;
          if (v == "Basic") {
            updatedPrice = item.price;
          } else if (v == "Elite") {
            updatedPrice = 3 * item.price;
          } else if (v == "Premium") {
            updatedPrice = 2 * item.price;
          }
          cart[i].updatedPrice = updatedPrice;
          price.innerText = `$${updatedPrice}`;
          userLogin.cart = cart;
          localStorage.setItem("user-login", JSON.stringify(userLogin));
          updateUsers();
          displayTotal();
        });
        row.append(name, price, selectElement, remove);
        let hr = document.createElement("hr");
        content.append(subText, row, document.createElement("br"), hr);
      });
      displayTotal();
      wishlistContent.append(content);
      buyBtn.classList.add("show-btn");
      buyBtn.classList.remove("hide-btn");
    } else {
      let emptyMsg = document.createElement("h3");
      emptyMsg.innerText = "Your Cart is empty";
      buyBtn.classList.add("hide-btn");
      buyBtn.classList.remove("show-btn");
      wishlistContent.appendChild(emptyMsg);
    }
  } else {
    wishlistContent.innerHTML = `<p style="margin-bottom:0.5rem">You are not logged in, please login first</p> <a href='./signup.html' class='primary-btn small'>click here to login</a>`;
    wishlistContent.classList.add("show");
    buyBtn.classList.add("hide-btn");
    buyBtn.classList.remove("show-btn");
    document.querySelector("#estimated").style.display = "none";
  }
}

function getTotal() {
  let sum = 0;
  let items = JSON.parse(localStorage.getItem("user-login")).cart || [];
  items.map((el) => {
    if (el.updatedPrice) {
      sum += el.updatedPrice;
    } else {
      sum += el.price;
    }
  });
  return sum;
}
function displayTotal() {
  let t = getTotal();
  total.innerHTML = `$${t}<i class="fa-solid fa-money-bill-wave" style="color: #85bb65"></i>`;
}

// Checkout eventlistener
buyBtn.addEventListener("click", () => {
  // localStorage.setItem("checkout", JSON.stringify(userLogin));
  updateUsers();
  window.location.href = "/checkout.html";
});
function updateUsers() {
  console.log(users);
  users.map((user) => {
    if (user.email === userLogin.email) {
      user.cart = userLogin.cart;
    }
  });
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
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
