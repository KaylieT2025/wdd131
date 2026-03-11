const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    
    const li = document.createElement("li");
    const deletebutton = document.createElement("button");
    li.textContent = input.value;
    deletebutton.textContent = "❌";
    deletebutton.addEventListener("click", function () {
        list.removeChild(li);
    });
    li.append(deletebutton);
    list.append(li);

});

