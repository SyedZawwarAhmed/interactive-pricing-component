const slider = document.getElementById("slider");
const price = document.getElementById("price");
const package = document.getElementById("package");
const fill = document.getElementById("fill");
const toggle = document.getElementById("toggle");
const plan = document.getElementById("plan");

let num = 16;
let yearly = 144;

slider.oninput = () => {
    switch(slider.value) {
        case "1":
            num = 8;
            package.innerText = "10K";
            fill.style.width = "0";
            break;
        case "2":
            num = 12;
            package.innerText = "50K";
            fill.style.width = "25%";
            break;
        case "3":
            num = 16;
            package.innerText = "100K";
            fill.style.width = "50%";
            break;
        case "4":
            num = 24;
            package.innerText = "500K";
            fill.style.width = "75%";
            break;
        case "5":
            num = 36;
            package.innerText = "1M";
            fill.style.width = "100%";
            break;
    }  

    yearly = ((num * 12) - (((num * 12)* 25) / 100)).toFixed(0);
    
    
    price.innerText = toggle.checked ? "$" + yearly + ".00" : "$" + num + ".00";
}

toggle.oninput = () => {
    if (toggle.checked) {
        plan.innerText = "/ year";
        price.innerText = "$" + yearly + ".00";
    }
    else {
        plan.innerText = "/ month";
        price.innerText = "$" + num + ".00";
    }
}