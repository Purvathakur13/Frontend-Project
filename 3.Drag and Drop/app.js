const cards=document.querySelectorAll(".card");
const lists=document.querySelectorAll(".list");

for(let card of cards){
    card.addEventListener("dragstart",dragStart);
    card.addEventListener("dragend",dragEnd);
}
for(let list of lists){
    list.addEventListener("dragover",dragOver);
    list.addEventListener("dragenter",dragEnter);
    list.addEventListener("dragleave",dragLeave);
    list.addEventListener("drop",drop);
}
function dragStart(e){
    // console.log("dragStart triggered");
    e.dataTransfer.setData('text/plain',e.target.id);
}
function dragEnd(e){
    // console.log("dragEnd triggered");
}
function dragOver(e){
    e.preventDefault();
    // console.log("dragOver triggered");
}
function dragEnter(e){
    // console.log("dragEnter triggered");
    e.target.classList.add("over");
}
function dragLeave(e){
    // console.log("dragLeave triggered");
    e.target.classList.remove("over");
}   
function drop(e){
    e.preventDefault();
    const draggedId=e.dataTransfer.getData('text/plain',e.target.id);
    const draggedElement=document.getElementById(draggedId);
    e.target.appendChild(draggedElement);
}