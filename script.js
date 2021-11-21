let btn = document.getElementById("btn-bg")
let sayingP = document.getElementById("Saying")

let sayingsList = [
    `"it's yummy"`,
    `"fun!"`,
    `"INTERESTING"`,
    `"hmm"`,
    `"mmhmm"`,
    `"mmmm"`,
    `"eeek"`,
    `"ridonculous"`,
    `"kewl"`,
    `"noice"`,
    `"cute"`,
    `"silly"`,
    `"VapoRub"`,
    `"did you drink your cough syrup?"`,
    `"I took a nap"`,
    `"¿¿¿ ¿¿¿¿?"`

]

const removeSaying = () => {
    let elem = document.getElementById("placeholderID");
    elem.remove();
}

const generateSaying = () => {
    let p = document.createElement("p");
    p.id = "placeholderID"
    let nmbrSayings = sayingsList.length;
    let saying = sayingsList[Math.floor(Math.random() * nmbrSayings)]
    p.appendChild(document.createTextNode(saying));
    console.log(p)
    sayingP.appendChild(p);
}

btn.addEventListener("click", removeSaying);
btn.addEventListener("click", generateSaying);
