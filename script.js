
document.addEventListener('DOMContentLoaded', function() {
    activateButtons();
  });
  
  function activateButtons() {
    const buttons = document.querySelectorAll('#experience button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        updateBioText(this.textContent.trim());
        updateButtonSelection(buttons, this);
      });
    });
  }
  
  function updateBioText(buttonText) {
    const bioText = document.getElementById('bio');
    bioText.classList.remove('slide-in-first');
    bioText.classList.remove('slide-in');
    // Trigger a reflow/repaint to allow the animation to be restarted
    void bioText.offsetWidth;
    switch (buttonText) {
      case 'Anyone':
        bioText.textContent = 'I am a data analyst turned software developer living in Denver.  I love building solutions to solve complex issues and to enhance efficiency.';
        break;
      case 'Recruiter':
        bioText.textContent = 'I am passionate about building scalable software and efficient solutions.  I am currently looking for hybrid software engineering positions in Denver.';
        break;
      case 'Software Engineer':
        bioText.textContent = 'I have been self teaching coding skills and am currently undergoing The Flatiron\'s School software engineering bootcamp.  Building side projects is one of my favorite things to do!';
        break;
      case 'Data Analyst':
        bioText.textContent = 'Data is at the core of what I do. I have experience as a data analyst in adtech, ecommerce, and risk spaces.';
        break;
      case 'My Parents':
        bioText.textContent = 'Hi guys!!!  Look, I have my own website!';
        break;
    }
    // Add the animation class back to the element
    bioText.classList.add('slide-in');
  }
  
  function updateButtonSelection(buttons, selectedButton) {
    buttons.forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');
  }