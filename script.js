
document.addEventListener('DOMContentLoaded', function() {
    activateButtons();
  });
  
  function activateButtons() {
    // Select all buttons within the #experience div
    const buttons = document.querySelectorAll('#experience button');
    // Add a click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove the 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
        // Add the 'selected' class to the clicked button
        this.classList.add('selected');
      });
    });
  }