const slider = document.getElementById("slider");
const price = document.getElementById("price");
const package = document.getElementById("package");

slider.oninput = () => {
    switch(slider.value) {
        case "1":
            price.innerText = "$8.00";
            package.innerText = "10K";
            break;
        case "2":
            price.innerText = "$12.00"
            package.innerText = "50K";
            break;
        case "3":
            price.innerText = "$16.00";
            package.innerText = "100K";
            break;
        case "4":
            price.innerText = "$24.00";
            package.innerText = "500K";
            break;
        case "5":
            price.innerText = "$36.00";
            package.innerText = "1M$";
            break;
    }  
}