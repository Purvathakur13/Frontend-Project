let generatebtn=document.querySelector(".generatebtn");
let colorDiv=document.querySelectorAll(".color");
let palettecontainer=document.querySelector(".palettecontainer");

generatebtn.addEventListener("click",addColor);

palettecontainer.addEventListener("click",function(e){
    console.log(e.target)
    if (e.target.classList.contains("copy-btn")) {
        const hexValue=e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue)
        
        .then(()=>{tickIcon(e.target)})
        .catch((err)=>console.log(err))
    }
})   
function tickIcon(icon){
    icon.classList.remove("fa-regular", "fa-copy");
    icon.classList.add("fa-solid", "fa-check");
    
    setTimeout(() => {
    icon.classList.remove("fa-solid", "fa-check");
    icon.classList.add("fa-regular", "fa-copy");
    icon.style.color = "";
  }, 1500);
}      

function generateColor(){

    let letter="0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        let number=Math.floor(Math.random()*16);
        color+=letter[number];
    }
    return color;
}
        
function addColor(){
    colorDiv.forEach((box)=>{
        let color=generateColor();
        console.log(color)
        // console.log(box);
        box.style.backgroundColor=color;
        let colorInfoDiv=box.nextElementSibling;
        let hexValueSpan=colorInfoDiv.querySelector(".hexvalue");
        hexValueSpan.textContent=color;
    })
}   
  
