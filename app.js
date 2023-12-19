const keys = document.querySelectorAll(".key")

function random(){
    const r=Math.floor(Math.random()*52)
    keys[r].classList.add("jiggle")
}
random()
console.log(keys)
document.addEventListener("keydown", (event) => {
    const name = event.key;
    console.log(name)
    keys.forEach(k => {
        if(k.dataset.key===name.toUpperCase()){
            if(k.classList.value.includes('jiggle')){
                k.classList.remove("jiggle")
                random()    
            }    
            else{
                k.classList.add("red")
                setInterval(() => {
                    k.classList.remove("red")
                }, 1000);
            }        
        }
    })
})

keys.forEach(k => {
    k.addEventListener("click", () => {
        if(k.classList.value.includes("jiggle")){
            k.classList.remove("jiggle")
            random()
        } else{
            k.classList.add("red")
            setInterval(() => {
                k.classList.remove("red")
            }, 1000);
        }
    })
})
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