const form = document.querySelector("form")
const listItems = document.querySelector("ul")
const btnAdd = document.querySelector("#btn")
const btnClose = document.querySelector(".btn-close")
const footer = document.querySelector("footer")
// const input = document.querySelector("input")
// const label = document.querySelector("label")
// const li = document.querySelector("li")





form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newItem = form.inItem.value.trim() //remove espaços

    if (newItem === "") {
        return        // alert('Digite um item válido')
    }

    createNewItem(newItem) // para criar os elementos

    form.inItem.value = "" //limpar o input

    console.log(form)
})

let itemCounter = 5

function createNewItem(name) {
    const listLi = document.createElement("li")
    const divWrapper = document.createElement("div")
    const divCheckbox = document.createElement("div")
    const createInput = document.createElement("input")
    const createLabel = document.createElement("label")
    const btn = document.createElement("button")
    const img = document.createElement("img")

    const uniqueId = `Item-${itemCounter++}` 

    divWrapper.classList.add("checkbox-wrapper")
    divCheckbox.classList.add("checkbox-image")
    btn.classList.add("btn-delete")

    img.src = "./assets/lixeira.png"
    createLabel.textContent = name
    divWrapper.append(divCheckbox, createInput, createLabel)
    btn.append(img)
    listLi.append(divWrapper, btn)
    listItems.append(listLi)

    createAttribute(createInput, createLabel, btn, name, uniqueId, uniqueId)

}

function createAttribute(input, label, button, name, id, forId) {

    input.setAttribute("type", "checkbox")
    input.setAttribute("name", name)
    input.setAttribute("id", id)
    label.setAttribute("for", forId)
    button.setAttribute("type", "button")
}


listItems.addEventListener("click", (event) => {
    const btnDelete = event.target.closest(".btn-delete")
    
    if (btnDelete) {
        event.preventDefault()
        
        const li = btnDelete.closest("li")
        li.remove() //remove o item da lista
        
        footer.classList.add("alert") // adiciona class="alert"
        
        setTimeout(() => {
            footer.classList.remove("alert")}, 2000) // remove class="alert"
        }


})
        

btnClose.addEventListener("click", (event) => {
    footer.classList.remove("alert")
})


