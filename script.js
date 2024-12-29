// Function to load the header and footer dynamically
function loadHeaderAndFooter() {
    // Load header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      });
  
    // Load footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('beforeend', data);
      });
  }
  
  // Call the function when the page loads
  window.onload = loadHeaderAndFooter;
  