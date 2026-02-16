const loadLesson = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => displayLesson(json));
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
loadLesson();