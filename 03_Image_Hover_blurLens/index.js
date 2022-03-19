



const layer = document.getElementById("layer");
const circle = document.getElementById("circle");


layer.addEventListener("mousemove", (event) => {
    circle.style.setProperty("--x", `${100 - event.offsetX}px`);
    circle.style.setProperty("--y", `${100 - event.offsetY}px`);

    var x = event.offsetX;
    var y = event.offsetY;

    circle.style.left = x + "px";
    circle.style.top = y + "px";

});