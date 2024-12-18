// Hamburger menu
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Fade-in effect
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

  // Ensure initial fade-in visibility
  fadeElements.forEach(function (element) {
    element.classList.add('visible');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // MGA PETSSSSSS data 
    const pets = [
        //1//
        { name: "Sol", type: "Cat", age: 1, sex: "M", breed: "Puspin", image: "assets/cats/cat2.jpg" },
        //2
        { name: "Barley", type: "Dog", age: 2, sex: "M", breed: "Askal", image: "assets/dogs/pet1.jpg" },
        //3//
        { name: "Ciela", type: "Cat", age: 1, sex: "F", breed: "Khao Manee", image: "assets/cats/cat3.jpg" },
        //4
        { name: "Jasmin", type: "Cat", age: 1, sex: "F", breed: "American Wirehair", image: "assets/cats/pet3.jpg" },
        //5        
        { name: "Bert", type: "Dog", age: 2, sex: "M", breed: "Askal", image: "assets/dogs/pet2.jpg" },
        //6//
        { name: "Chico", type: "Cat", age: 2, sex: "M", breed: "American Wirehair", image: "assets/cats/cat4.jpg" },
        //7
        { name: "Willow", type: "Cat", age: 1, sex: "M", breed: "Puspin", image: "assets/cats/cat10.jpg" },
        //8//
        { name: "Mankanor", type: "Dog", age: 3, sex: "M", breed: "Pitbull", image: "assets/dogs/dog3.jpg" },
        //9//
        { name: "Orenz", type: "Cat", age: 2, sex: "M", breed: "American Wirehair", image: "assets/cats/cat5.jpg" },
        //10//
        { name: "Matet", type: "Dog", age: 1, sex: "F", breed: "Askal", image: "assets/dogs/dog4.jpg" },
        //11
        { name: "Buddy", type: "Cat", age: 3, sex: "M", breed: "Pinoy", image: "assets/cats/cat6.jpg" },
        //12//
        { name: "Wally", type: "Dog", age: 2, sex: "M", breed: "Labrador Retriever", image: "assets/dogs/dog5.jpg" },
        //13
        { name: "Max", type: "Cat", age: 2, sex: "M", breed: "Pinoy", image: "assets/cats/cat7.jpg" },
        //14//
        { name: "Roberto", type: "Dog", age: 1, sex: "M", breed: "Bernese Mountain", image: "assets/dogs/dog6.jpg" },
        //15
        { name: "Simba", type: "Cat", age: 1, sex: "M", breed: "Lion", image: "assets/cats/cat8.jpg" },
        //16
        { name: "Vader", type: "Dog", age: 1, sex: "M", breed: "Pinoy", image: "assets/dogs/dog7.jpg" },
        //17
        { name: "Oreo", type: "Cat", age: 1, sex: "F", breed: "Puspin", image: "assets/cats/cat9.jpg" },
        //18
        { name: "Chonk", type: "Dog", age: 3, sex: "M", breed: "Askal", image: "assets/dogs/dog10.jpg" },
        //19
        { name: "TuAy", type: "Dog", age: 3, sex: "F", breed: "Germany", image: "assets/dogs/dog9.jpg" },
        //20
        { name: "Melisenda", type: "Dog", age: 1, sex: "F", breed: "Spanish", image: "assets/dogs/dog8.jpg" }
    ];

    // Display pets initially
    displayPets(pets);

    // Filter pets based on dropdown selections
    document.getElementById('type').addEventListener('change', filterPets);
    document.getElementById('sex').addEventListener('change', filterPets);
    document.getElementById('age').addEventListener('change', filterPets);

    function filterPets() {
        const petType = document.getElementById('type').value;
        const petSex = document.getElementById('sex').value;
        const petAge = document.getElementById('age').value;
        
        const filteredPets = pets.filter(pet => {
            return (
                (!petType || pet.type === petType) &&
                (!petSex || pet.sex === petSex) &&
                (!petAge || pet.age === parseInt(petAge))
            );
        });

        displayPets(filteredPets);
    }

    // Function to display pets in the petList section
    function displayPets(filteredPets) {
        const petList = document.getElementById("petList");
        petList.innerHTML = "";
    
        filteredPets.forEach(pet => {
            const petCard = document.createElement("div");
            petCard.classList.add("bg-white", "rounded-lg", "shadow-md", "p-4", "text-center", "w-64");
    
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}" class="h-60 w-60 object-cover mx-auto mb-4">
                <h3 class="text-lg text-cyan-900 font-semibold">${pet.name}</h3>
                <p class="text-cyan-900 text-left">Type: ${pet.type}</p>
                <p class="text-cyan-900 text-left">Age: ${pet.age} year(s)</p>
                <p class="text-cyan-900 text-left">Sex: ${pet.sex}</p>
                <p class="text-cyan-900 text-left">Breed: ${pet.breed}</p>
                <button class="adoptButton mt-4 bg-cyan-600 text-white px-4 py-2 rounded">Adopt Me</button>
            `;
    
            petList.appendChild(petCard);
    
            
            const adoptButton = petCard.querySelector('.adoptButton');
            adoptButton.addEventListener('click', () => openPaymentPopup(pet.name));
        });
    }
    
});

function openPaymentPopup(petName) {
  document.getElementById('donationTitle').textContent = `Only a few more steps, so you can Take ${petName} Home!`;
  document.getElementById('paymentPopup').classList.remove('hidden');
}

function submitAdoption(event) {
  event.preventDefault(); 

  const donorName = document.getElementById('donorName').value;

  if (donorName) {
      document.getElementById('paymentPopup').classList.add('hidden');
      document.getElementById('successMessage').classList.remove('hidden');
  }
}

function closeAdoptionForm() {
  document.getElementById('paymentPopup').classList.add('hidden');
  document.getElementById('donationDetails').reset(); 
}

function closeSuccessMessage() {
  document.getElementById('successMessage').classList.add('hidden');
}

function selectOption(optionName, imgSrc) {
  const dropdownButton = document.getElementById('dropdownButton');

  dropdownButton.innerHTML = `
      <span class="flex items-center gap-3">
          <img src="${imgSrc}" alt="${optionName}" class="h-6 w-6"> ${optionName}
      </span>
      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
  `;

  document.getElementById('dropdownMenu').classList.add('hidden');
}

function toggleDropdown() {
  document.getElementById('dropdownMenu').classList.toggle('hidden');
}