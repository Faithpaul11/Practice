function getRandomColor() {
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

const dynamiccolor = document.querySelectorAll(".container");
setInterval(() => {
    dynamiccolor.forEach(container=> {
        container.style.backgroundColor = getRandomColor();
    });
},1000);
