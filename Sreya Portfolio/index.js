
  // Function to show/hide arrow based on scroll
  function toggleArrow() {
    if (window.scrollY > 100) {
      arrowIcon.classList.add('show');  // Show the arrow when scrolled down
    } else {
      arrowIcon.classList.remove('show');  // Hide the arrow when at the top
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', toggleArrow);

  /**
 * skills toggle
 */

  // Selectors
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

// Functions to toggle visibility
function toggleSkillsVisibility(showSkills) {
  const skillsList = document.querySelector(".skills-list");
  const toolsList = document.querySelector(".tools-list");

  if (showSkills) {
    skillsList.style.display = "grid"; // Show skills
    toolsList.style.display = "none";   // Hide tools
  } else {
    skillsList.style.display = "none";   // Hide skills
    toolsList.style.display = "grid";    // Show tools
  }
}

// Event listeners for toggle buttons
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    toggleBtns.forEach((button) => button.classList.remove("active"));
    this.classList.add("active");
    const showSkills = this.textContent === "Skills";
    toggleSkillsVisibility(showSkills);
  });
});

// Initialize display
toggleSkillsVisibility(true); // Show skills by default



// nav
document.querySelector('[data-nav-toggler]').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open');
  document.querySelector('.overlay').style.display = navbar.classList.contains('open') ? 'block' : 'none';
  document.querySelector('.nav-close-btn').style.display = navbar.classList.contains('open') ? 'block' : 'none';
});
