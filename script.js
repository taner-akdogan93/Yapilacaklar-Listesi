let inputDom = document.querySelector("#task");
let btnAddDom = document.querySelector("#liveToastBtn");
let listDom = document.querySelector("#list");

btnAddDom.addEventListener("click", addItem);

function addItem() {
    if (inputDom.value) {
        let li = document.createElement("li");
        li.innerHTML = inputDom.value;
        listDom.appendChild(li);
        var removeBtn = document.createElement("span");
        removeBtn.classList.add("close");
        removeBtn.innerHTML = "X";
        li.appendChild(removeBtn);
        inputDom.value = "";
        $(".success").toast("show");
        removeBtn.addEventListener("click", removeItem);

        function removeItem() {
            var answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
            if (answer) {
                li.remove();
                $(".remove").toast("show");
            }
        }

        li.addEventListener("click", selectItem);
        function selectItem(){
            li.classList.toggle("checked");
        }

        const removeAllDom = document.querySelector("#btnRemoveAll");
        removeAllDom.addEventListener("click", removeAll);

        function removeAll() {  
                listDom.remove();
            
        }

    } 
    else {$(".error").toast("show");}}