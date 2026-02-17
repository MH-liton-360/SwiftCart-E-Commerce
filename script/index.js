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
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-secondary rounded-2xl">lesson -${lesson.id} </button>
    

        `

        // 4.Append into container 
        levelContainer.append(btnDiv);
    }

}
loadCategory();
