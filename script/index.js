// 1. load categories section..........................................!
const loadCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data));
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    // Adding "All" button manually
    const allBtn = document.createElement("button");
    allBtn.innerText = "All";
    allBtn.style.margin = "10px";
    allBtn.style.padding = "10px 16px";
    allBtn.style.border = "1px solid gray";
    allBtn.style.borderRadius = "8px";
    allBtn.style.cursor = "pointer";
    allBtn.style.backgroundColor = "blue";
    allBtn.style.color = "#fff";
    allBtn.style.transition = "0.3s";
    allBtn.onclick = () => loadAllProducts();
    categoryContainer.append(allBtn);


    categories.forEach(category => {
        const btn = document.createElement("button");



        btn.innerText = category.toUpperCase();
        btn.style.margin = "10px";
        btn.style.padding = "10px 16px";
        btn.style.border = "1px solid gray";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "grey";
        btn.style.color = "#333";
        btn.style.transition = "0.3s";

        btn.onclick = () => loadProductsByCategory(category);

        categoryContainer.append(btn);

    });
}


// 2. New function to load all products
const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayLesson(data));
}



// 3. load by categories in product section..........................................!
const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => displayLesson(data));
}


const displayLesson = (lessons) => {
    // 1. get the container and empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. Get into every lessons 
    for (let lesson of lessons) {

        // 3.Create Element
        const btnDiv = document.createElement("div");

        btnDiv.className = "card bg-gray-100 shadow-sm";
        btnDiv.style.width = "300px";


        btnDiv.innerHTML = `
                    <figure>
                        <img src="${lesson.image}" alt="${lesson.title}" class="h-48 w-full object-contain" />
                    </figure>
                    <div class="card-body">

                        <!-- Category and rating -->
                        <div class="card-actions justify-between items-center mb-2">
                            <div class="badge badge-outline">${lesson.category}</div>
                            <div class="flex items-center gap-1">
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <span>${lesson.rating.rate}</span>
                                <span class="text-gray-500 ml-2">(${lesson.rating.count})</span>
                            </div>
                        </div>

                        <!-- Title -->
                        <h2 class="card-title text-lg font-semibold mb-2">
                            ${lesson.title.slice(0, 20)}...
                        </h2>

                        <!-- Price -->
                        <p class="font-semibold text-xl mb-2">$${lesson.price}</p>

                        <!-- Action buttons -->
                        <div class="card-actions justify-end gap-2">
                            <div class="btn btn-primary">Details</div>
                            <button class="btn btn-primary flex items-center gap-1">
                                <i class="fa-solid fa-cart-arrow-down"></i> Add
                            </button>
                        </div>
                    </div>
                `


        // 4.Append into container 
        levelContainer.appendChild(btnDiv);
    }

}

loadCategory();
