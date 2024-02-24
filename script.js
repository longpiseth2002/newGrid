// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName("item");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var img = this.getElementsByTagName("img")[0]; // Get the first image inside the clicked item
    modalImg.src = img.src; // Set modal image src to the clicked image src
    captionText.innerHTML = img.alt; // Set modal caption to the clicked image alt text
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
