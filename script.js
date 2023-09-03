const inputArea = document.getElementById("input");
const list_items = document.getElementById("list-items");

function addItem(){
    if(inputArea.value === ''){
        alert("please add the task first");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        list_items.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
    }
    inputArea.value = "";
    saveData();
}

list_items.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("ListData",list_items.innerHTML);
}
function showData(){
    list_items.innerHTML = localStorage.getItem("ListData");
}
showData();
