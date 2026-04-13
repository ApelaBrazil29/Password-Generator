let pass_1 = document.getElementById("pass1")
let pass_2 = document.getElementById("pass2")
let greetEl = document.getElementById("message")
let lenEl=document.getElementById("len")

const id = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]",
    "{", "}", ";", ":", "'", "\"", "\\", "|", ",", ".", "<", ">", "/", "?",

    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
function rand() {
    return Math.floor(Math.random() * (id.length))
}

function generate() {
    let leng=parseInt(lenEl.value)
    if(leng<=0  || isNaN(leng)){
        greetEl.innerHTML=`<h3 id="warning">Length cannot less than 0</h3>`
        leng=0
    }
    if(leng>20){
       greetEl.innerHTML=`<h3 id="warning">Length cannot exceed more than 20</h3>`
       leng=0
    }
    let res1 = ""
    let res2 = ""

    for (let i = 0; i < leng; i++) {
        res1 = res1 + id[rand()]
        res2 = res2 + id[rand()]
    }

    pass_1.textContent = res1
    pass_2.textContent = res2

    pass_1.addEventListener("click", copy1)
    pass_2.addEventListener("click", copy2)

    function copy1() {
        navigator.clipboard.writeText(pass_1.textContent)
        greet()
    }

    function copy2() {
        navigator.clipboard.writeText(pass_2.textContent)
        greet()
    }

}

function greet() {
    greetEl.textContent = "Copied to clipboard"

}
