let list = document.getElementById("todo-list")
let addInput = document.querySelector("#add-form input")
let searchInput = document.querySelector(".search-container input")
let addBtn = document.querySelector("#add-form button")

list.addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove()
        if (list.children.length == 0) {
            let listEmptyMsg = document.createElement("div")
            listEmptyMsg.style.textAlign = "center"
            listEmptyMsg.style.color = "#3338"
            listEmptyMsg.innerText = "list is empty!"
            listEmptyMsg.id = "emptyMsg"
            list.appendChild(listEmptyMsg)
        }
    }
})

searchInput.addEventListener("input",e=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#emptyMsg")){
            return
        }
        if (element.querySelector("p").innerText.toLowerCase().includes(e.target.value)) {
            element.style.display="grid"
            element.style.gridTemplateColumns="4fr 1fr"
        } else {
            element.style.display="none"
        }
    })
})

document.querySelector(".btn-add").addEventListener("click", e => {
    e.preventDefault()
    if (!addInput.value) {
        return
    } else {
        if (document.getElementById("emptyMsg"))
            document.getElementById("emptyMsg").remove()
        list.append(createListItem(addInput.value))
        document.querySelector("#add-form input").value=""

    }
})
function createListItem(itemValue) {
    let listItem = document.createElement("li")
    let paragraph = document.createElement("p")
    let deletBtn = document.createElement("button")
    listItem.className = "todo-item"
    paragraph.className = "todo-text"
    deletBtn.className = "btn btn-delete"
    paragraph.innerText = itemValue
    deletBtn.innerText = "Delete"
    listItem.appendChild(paragraph)
    listItem.appendChild(deletBtn)
    return listItem

}