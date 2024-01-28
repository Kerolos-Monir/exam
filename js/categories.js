fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => {
	const container = document.querySelector('.row');
	data.categories.forEach(category => {
		const categ = document.createElement('div');
		categ.classList.add(`col-md-3`);
		categ.innerHTML = `
			<div class="categ">
				<img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="img-fluid">
				<div class="layer">
					<h3>${category.strCategory}</h3>
					<p>${category.strCategoryDescription.substring(0, 100)}...</p>
				</div>
			</div>
		`;
		container.appendChild(categ);
	});
})



function openNav() {
    mySidebar.style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    mySidebar.style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    openBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }


openBtn.onclick = function() {
    if (mySidebar.style.width === "250px") {
      closeNav();
    } else {
      openNav();
      openBtn.innerHTML = `<i class="fa-solid fa-xmark ps-2 bg-white"></i>`;
    }
  };
  