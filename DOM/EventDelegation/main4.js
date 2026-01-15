// Implement a click on todo item as fast as possible

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//     item.addEventListener("click", () => {
//         console.log("you clicked on item:" + item.innerText);
//     })
// })

//faster
const app = document.querySelector(".todo-app");
app.addEventListener("click", (e) => {
    if(e.target && e.target.classList.contains("item")){
        console.log("you clicked on itehm:" + e.target.innerText);
    }
})