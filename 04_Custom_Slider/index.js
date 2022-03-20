

const slider = document.querySelector("input");
const progressBar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slide-icon");

// js에서 input 이벤트 주고 싶을 때, oninput="function()"
slider.oninput = () => {
    let value = slider.value;
    thumb.style.left = value + "%";
    progressBar.style.width = value + "%";


    if (value < 20) {
        console.log("20미만");
        slideIcon.style.marginTop = "0px";
    }
    if (value >= 20) {
        console.log("20이상");
        slideIcon.style.marginTop = "-150px";
    }
    if (value >= 40) {
        console.log("40이상");
        slideIcon.style.marginTop = "-350px";
    }
    if (value >= 60) {
        console.log("60이상");
        slideIcon.style.marginTop = "-450px";
    }
    if (value >= 80) {
        console.log("80이상");
        slideIcon.style.marginTop = "-600px";
    }
}

