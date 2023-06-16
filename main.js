let wishlistCart = JSON.parse(localStorage.getItem("wishlist")) || [];

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

wishlistBtn.addEventListener("click", function () {
  populateWishlistContent(wishlistCart);
  wishlistContent.classList.toggle("show");
});

function populateWishlistContent(cart) {
  wishlistContent.innerHTML = "";
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
        wishlistCart.splice(i, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlistCart));
        populateWishlistContent(wishlistCart);
      });
      row.append(name, price, remove);
      content.append(row);
    });
    wishlistContent.append(content);
  } else {
    let emptyMsg = document.createElement("h3");
    emptyMsg.innerText = "Your Cart is empty";
    wishlistContent.appendChild(emptyMsg);
  }
}
