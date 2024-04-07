document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
// Assume we start with the original color (none), and then cycle through the colors
var currentColorIndex = 0; // This will track our position in the color cycle

// Array of colors to cycle through
var colors = ['#FFB6C1', '#90EE90', '#4A90E2',]; // Blue, light green, pastel pink

document.getElementById('headerStyleButton').addEventListener('click', function() {
    // Get the header element
    var header = document.getElementById('myHeader');
    if (header) {
        // Set the header's background color to the current color
        header.style.backgroundColor = colors[currentColorIndex];
        
        // Update the currentColorIndex, cycling back to 0 if we've hit the end of the array
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
});
