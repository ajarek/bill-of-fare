export function bulidCard(item: any) {
    const main = document.querySelector("main") as HTMLElement
    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("data-id", `${item.id}`)
    card.setAttribute("data-category", `${item.category}`)
    card.innerHTML = `<div class="img">
    <img src="${item.img}" alt="" >
</div>
<div class="content">
    <h5>${item.title}<span>$ ${item.price}</span></h5>
    <p>${item.desc}</p>

</div>`
    main.appendChild(card)
}