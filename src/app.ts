import { bulidCard } from "/bulid-card.js"
import { menu } from "/data.js"
const main = document.querySelector("main") as HTMLElement
const buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>

function createCarts(category: string) {
    main.innerHTML = ""
    menu.forEach((item) => {
       if(item.category=== category){bulidCard(item)}
       if(category=== 'all'){bulidCard(item)}
})    
}

buttons.forEach((button) => {
    button.addEventListener("click", (e:Event) => {
        const category = (e.target as HTMLButtonElement).innerText.toLowerCase()
       createCarts(category)
        
        
    })
})
createCarts('all')
