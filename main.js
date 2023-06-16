
function showPopup() {
  var popup = document.getElementById("popup");
  popup.innerHTML = "Submission Successful";
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 4000);
}
