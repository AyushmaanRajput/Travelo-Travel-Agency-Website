let joinUsBtn = document.getElementById("join");

joinUsBtn.addEventListener("click", function () {
  window.location.href = "Popups/signup.html";
});

function showPopup() {
  var popup = document.getElementById("popup");
  popup.innerHTML = "Submission Successful";
  popup.style.display = "block";
  setTimeout(function () {
      popup.style.display = "none";
  }, 4000);
}