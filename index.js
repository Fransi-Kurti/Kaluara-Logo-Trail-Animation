const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) =>{
    const posX = event.offsetX;
    const posY = event.offsetY;
    const newSpanElement = document.createElement("span");
    newSpanElement.style.left = posX + "px";
    newSpanElement.style.top = posY + "px";
    const spanSize = Math.random() * 200;
    newSpanElement.style.width = spanSize + "px";
    newSpanElement.style.height = spanSize + "px";
    bodyElement.appendChild(newSpanElement);
    setTimeout(()=>{
        newSpanElement.remove();
    }, 4000)
});