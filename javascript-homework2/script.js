const input = document.querySelector("#task");
const ul = document.querySelector("#list");
const toast = document.querySelector("#liveToast");
const toastBody = document.querySelector(".toast-body");
const controlButton = document.querySelector("#liveToastBtn");

function addTask() {
    let message = "";

    if (input.value.trim().length) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        const buttonX = document.createElement('button');
        buttonX.innerHTML = "x";
        buttonX.classList.add("delete-button");
        li.appendChild(buttonX);
        ul.appendChild(li);
        message = "Listeye eklendi.";

        buttonX.addEventListener("click", function (event) {
            deleteTask(li);
        })
        li.addEventListener("click", function (event) {
            isComplited(li);
        })

    } else {
        message = "Listeye boş ekleme yapamazsınız!";
    }
    input.value = null;
    showToast(message);
}

function showToast(message) {
    toast.classList.remove("hide");
    toast.classList.add("show");
    toastBody.innerHTML = message;
}

function hideToast() {
    toast.classList.remove("show");
    toast.classList.add("hide");
    toastBody.innerHTML = "";
}

function deleteTask(task) {
    task.remove();
}

function isComplited(task) {
    task.classList.toggle("checked");
}