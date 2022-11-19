const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

// If u want to select the style of any tag then use : 
// window.getComputedStyle(red).backgroundColor    here red is the variable

const rgbColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

console.log(rgbColor(violet));
