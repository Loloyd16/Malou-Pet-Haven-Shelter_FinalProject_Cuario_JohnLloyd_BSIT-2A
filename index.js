// The js for every html file will all be found here (except for the adoption page for it is too complicated) 
// because some features are reused over and over, 
// read comments kung para saan sila

// Show the login popup 
window.onload = function () {
  document.getElementById("loginPopup").style.display = "block";
};


//user login
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById('loginButton');
  
 
  loginButton.addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

   
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    window.location.href = "home.html";
  });
});


// hamburger menu
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); 
});


//fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1, 
  });

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => observer.observe(element));
});


// open/close of registration form 
function openForm() {
  document.getElementById("registrationForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("registrationForm").style.display = "none";
}

function submitForm() {
  
  closeForm();
  
  document.getElementById("successMessage").classList.remove("hidden");
}

function closeSuccessMessage() {
  document.getElementById("successMessage").classList.add("hidden");
}


// Ensure initial fade-in visibility
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(function (element) {
    element.classList.add('visible');
  });
});
 
//for donation pop up 
// this is a bit mahaba
const donationForm = document.getElementById('donationForm');
const donationTitle = document.getElementById('donationTitle');
const successMessage = document.getElementById('successMessage');

function openDonationForm(projectName) {
    donationTitle.innerText = `Donate to ${projectName}`;
    donationForm.classList.remove('hidden');
}

function closeDonationForm() {
    donationForm.classList.add('hidden');
}

function submitDonation(event) {
    event.preventDefault(); 

    const donationAmount = document.getElementById('donationAmount').value;

    if (donationAmount <= 0) {
        alert("Donation amount must be greater than 0.");
        return;
    }

    closeDonationForm();
    successMessage.classList.remove('hidden');
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
}

function selectOption(optionText, imagePath = null) {
    const selectedOption = document.getElementById('selectedOption');
    if (imagePath) {
        selectedOption.innerHTML = `<img src="${imagePath}" alt="${optionText}" class="h-6 w-6 inline-block mr-2">${optionText}`;
    } else {
        selectedOption.innerText = optionText;
    }

    toggleDropdown(); 
}

function closeSuccessMessage() {
    successMessage.classList.add('hidden');
}
