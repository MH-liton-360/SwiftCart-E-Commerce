// load categories section..........................................!
const loadCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data));
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

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




// load by categories in product section..........................................!
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
                <h2 class="card-title">
                    ${lesson.title.slice(0, 20)}...
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>Price: $${lesson.price}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">${lesson.category}</div>
                </div>
            </div>

        `

        // 4.Append into container 
        levelContainer.appendChild(btnDiv);
    }

}
loadCategory();
