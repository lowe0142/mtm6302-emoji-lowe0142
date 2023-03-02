const searchBar = document.getElementById("search-bar");
const emojiGallery = document.getElementById("emojigallery").children;

searchBar.addEventListener("keyup", function(event) {
  const searchText = event.target.value.toLowerCase();
  
  Array.from(emojiGallery).forEach(function(emoji) {
    const emojiCode = emoji.lastElementChild.textContent.toLowerCase();
    
    if (emojiCode.includes(searchText)) {
      emoji.style.display = "block";
    } else {
      emoji.style.display = "none";
    }
  });
});