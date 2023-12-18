const keys = document.querySelectorAll(".key")

function random(){
    const r=Math.floor(Math.random()*54)
    keys[r].classList.add("jiggle")
}
random()

document.addEventListener("keydown", (event) => {
    const name = event.key;
    console.log(name)
    keys.forEach(k => {
        if(k.dataset.key===name.toUpperCase()){
            console.log("shidgfdfgdft")
            console.log(name.toUpperCase(),k.dataset.key )
            if(k.classList.value=='key jiggle'){
                console.log(name.toUpperCase(),k.dataset.key )
                    k.classList.remove("jiggle")
                    console.log("shift")
                    random()
            }    
            else{
                // if(name.toUpperCase() == k.dataset.key){
                    console.log("shfhghfhifdekyguyut")
                    k.classList.add("red")
                    // random()
                // }
            }        
        }
    })
    
})
const red=document.querySelector(".red")
setInterval(() => {
    red.classList.remove("red")
}, 1000);
// const body = document.querySelector('body');
// const keyButtons = [...document.querySelectorAll('.key')];
// const keys = keyButtons.map(keyButton => keyButton.dataset.key);
// const keyToButtonMap = keyButtons.reduce((acc, cur) => {
//     const curKey = cur.dataset.key;
//     acc[curKey] = cur;
//     return acc;
// }, {})

// let currentKey;

// console.log(currentKey);

// body.addEventListener('keyup', (e) => {
//     const typedKey = e.key;
//     checkKey(typedKey);
// })

// keyButtons.forEach(keyButton => {
//     keyButton.addEventListener('click', (e) => {
//         const clickedKey = e.target.dataset.key;
//         checkKey(clickedKey);
//     })
// })

// const checkKey = (inputKey) => {
//     if (inputKey.toUpperCase() === currentKey) {
//         setRandomKey();
//     }
// }

// const setRandomKey = () => {
//     //remove previous jiggle
//     if (currentKey) {
//         keyToButtonMap[currentKey].classList.remove('jiggle');
//     }

//     const randomIndex = Math.floor(Math.random() * keys.length)
//     currentKey = keys[randomIndex];
//     keyToButtonMap[currentKey].classList.add('jiggle');
// }

// setRandomKey();