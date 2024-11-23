document.addEventListener("DOMContentLoaded", () => {
  const imageUpload = document.getElementById("imageUpload");
  const gallery = document.getElementById("gallery");

  // Load images from localStorage on page load
  const savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
  savedImages.forEach((src) => displayImage(src));

  // Handle new image uploads
  imageUpload.addEventListener("change", (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageSrc = e.target.result;
        displayImage(imageSrc);

        // Save the image to localStorage
        savedImages.push(imageSrc);
        localStorage.setItem("galleryImages", JSON.stringify(savedImages));
      };

      reader.readAsDataURL(file);
    }
  });

  // Function to display an image in the gallery
  function displayImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Uploaded Image";
    gallery.appendChild(img);
  }
  document.getElementById("clearGallery").addEventListener("click", () => {
  localStorage.removeItem("galleryImages");
  gallery.innerHTML = ""; // Clear the displayed gallery
});

});
