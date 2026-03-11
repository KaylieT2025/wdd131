const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {

/*function addChapter() {
    button.addEventListener("click", addChapter);
    if (event.key === "Enter") {
        addChapter();
    }*/
        if (list.children.length >= 10) {
            alert("You can only add 10 chapters.");
            input.focus();
            return;
        }

        if (input.value.trim() !== "") {
            input.value = input.value.trim();
            const li = document.createElement("li");
            const deletebutton = document.createElement("button");
            li.textContent = input.value;
            deletebutton.textContent = "❌";
            deletebutton.setAttribute("aria-label", "Delete chapter");
            deletebutton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
            });
            li.append(deletebutton);
            list.append(li);

            input.value = "";
            input.focus();
        } else {
            input.focus();
            return;
        };
    //};
    /*button.addEventListener("click", addChapter);
        if (event.key === "Enter") {
            addChapter();
            }*/

});

