const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) =>{
    const posX = event.offsetX;
    const posY = event.offsetY;
    const newSpanElement = document.createElement("span");
    newSpanElement.style.left = posX + "px";
    newSpanElement.style.top = posY + "px";
    bodyElement.appendChild(newSpanElement);
});