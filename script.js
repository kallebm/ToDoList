const addTaskBtn = document.querySelector(".addTaskBtn")
const addTaskInput = document.querySelector(".addTaskInput")

const removeCardBtn = document.querySelector(".removeCardBtn")

const taskList = document.querySelector(".taskList")

const createCard = function () {
    const liCardTask = document.createElement("li")
    liCardTask.classList.add("card")
    
    const spanCardTask = document.createElement("span")
    spanCardTask.classList.add("cardText")
    spanCardTask.textContent = addTaskInput.value

    spanCardTask.addEventListener("click", () => {
        
        if(spanCardTask.classList.contains("scratched")){
            spanCardTask.classList.remove("scratched")
        } else {
            spanCardTask.classList.add("scratched")
        }
    })
    
    const removeBtnCardTask = document.createElement("button")
    removeBtnCardTask.classList.add("removeCardBtn")
    removeBtnCardTask.textContent = "X"

    removeBtnCardTask.addEventListener("click", () => {
        liCardTask.remove()
    })
    
    liCardTask.append(spanCardTask, removeBtnCardTask)

    taskList.appendChild(liCardTask)
}

addTaskInput.addEventListener("keydown", (ev) => {
    const pressedKey = ev.key
    if(pressedKey === "Enter") {
        if(addTaskInput.value !== "") {
            createCard()
            addTaskInput.value = ""
        }
    }
})

addTaskBtn.addEventListener("click", () => {
    const task = addTaskInput.value

    if(task !== "") {
        createCard()
        addTaskInput.value = ""
    }

})


