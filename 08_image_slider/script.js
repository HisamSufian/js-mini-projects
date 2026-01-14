/**
 * Image Slider Logic
 * -------------------
 * - Uses an array of image URLs
 * - Tracks current index
 * - Updates image on button click
 */

// Image list (you can replace with your own images)
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
];


let currentIndex = 0;

// DOM elements
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Show first image initially
sliderImage.src = images[currentIndex];

// Next image
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; // loop back
    }

    sliderImage.src = images[currentIndex];
});

// Previous image
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // go to last image
    }

    sliderImage.src = images[currentIndex];
});
