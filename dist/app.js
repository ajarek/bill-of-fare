import { bulidCard } from "./bulid-card.js";
import { menu } from "./data.js";
const main = document.querySelector("main");
const buttons = document.querySelectorAll("button");
function createCarts(category) {
    main.innerHTML = "";
    menu.forEach((item) => {
        if (item.category === category) {
            bulidCard(item);
        }
        if (category === 'all') {
            bulidCard(item);
        }
    });
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const category = e.target.innerText.toLowerCase();
        createCarts(category);
    });
});
createCarts('all');
