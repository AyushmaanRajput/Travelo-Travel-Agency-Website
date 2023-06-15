let grid = document.getElementById("grid__destinations");

let searchQuery = "Netherlands";
let destination = JSON.parse(localStorage.getItem(searchQuery)) || [];
async function getPhotos() {
  // const searchQuery = document.getElementById('search-query').value;

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=3tYuCQraI7s0B2DooME9qes1DqQKGkrF8Fm64SWdKf8`
    );
    const data = await response.json();
    console.log("Photos Fetched");
    localStorage.setItem(searchQuery, JSON.stringify(data.results));
    displayDestinations(data.results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

function displayDestinations(data) {
  grid.innerHTML = "";

  data.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.urls.regular;
    grid.appendChild(imgElement);
  });
}

if (destination.length > 0) {
  displayDestinations(destination);
} else {
  getPhotos();
}
