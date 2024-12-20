           
const input=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const btn=document.getElementsByClassName("button")[0];

btn.addEventListener("click",()=>{
    if(input.value===''){
      alert("You must write something!!");  
    }
    else{
        let li=document.createElement("LI");
        li.innerText=input.value;
        listContainer.appendChild(li);
        let span=document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
});
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
        
    } else if (e.target.tagName === "SPAN") { 
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();