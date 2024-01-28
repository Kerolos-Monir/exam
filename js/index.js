// ^===========> HTML Elements
let openBtn = document.getElementById("openBtn");
let mySidebar = document.getElementById("mySidebar");
let container = document.querySelector("#mealContainer");
let searchInput = document.querySelector(".searchInput");

// &===========> App Variables


// ?===========> Functions

function openNav() {
  mySidebar.style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  mySidebar.style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  openBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}

function searchMeals() {
  let searchTerm = document.getElementById("search-input").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
      if (data.meals) {
        data.meals.forEach(meal => {
          let mealDiv = document.createElement("div");
          mealDiv.classList.add("col-md-3", "col");
          mealDiv.innerHTML = `
                <div class="item">
                  <picture>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-100">
                    <div class="layer">
                      <h2>${meal.strMeal}</h2>
                    </div>
                  </picture>
                </div>
              `;
          resultsDiv.appendChild(mealDiv);
          let letterInput = document.querySelector(".letter-input");

          letterInput.addEventListener("input", function() {
            const regex = /^[a-zA-Z]$/;
            if (!regex.test(letterInput.value)) {
              letterInput.value = letterInput.value.slice(0, -1);
            }
          });
        });
      }
    });
}


fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then((response) => response.json())
  .then((data) => {
    const categoriesDiv = document.getElementById('categories');
    data.meals.forEach((category) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');
      categoryDiv.innerHTML = `
        <h2>${category.strCategory}</h2>
      `;
      categoriesDiv.appendChild(categoryDiv);
    });
  })


  





// *===========>  Events
openBtn.onclick = function() {
  if (mySidebar.style.width === "250px") {
    closeNav();
  } else {
    openNav();
    openBtn.innerHTML = `<i class="fa-solid fa-xmark ps-2 bg-white"></i>`;
  }
};







fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(response => response.json())
.then(data => {
    const meals = data.meals;
    const row = document.querySelector('.row');

    meals.forEach(meal => {
        const col = document.createElement('div');
        col.classList.add('col-md-3');

        const card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const mealTitle = document.createElement('h5');
        mealTitle.classList.add('card-title');
        mealTitle.textContent = meal.strMeal;

        const mealImage = document.createElement('img');
        mealImage.classList.add('card-img-top');
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;

        cardBody.appendChild(mealTitle);
        card.appendChild(mealImage);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });
})
