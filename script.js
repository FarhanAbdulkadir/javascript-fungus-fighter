// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

let ap = 100;
let hp = 100;
let fungusHP = 100;

let attacks = {
    arcaneScepter: { apCost: 12, hpDamage: 14 },
    entangle: { apCost: 23, hpDamage: 9 },
    dragonBlade: { apCost: 38, hpDamage: 47 },
    starFire: { apCost: 33, hpDamage: 25 }
};
function onReady() {
    console.log("Ready to go!")

    //select DOM elements 

    let apText = document.querySelector('.ap-text');
    let hpText = document.querySelector('.hp-text');
    let apMeter = document.getElementById('ap-meter');
    let hpMeter = document.getElementById('hp-meter');
    let fungusElement = document.querySelector('.freaky-fungus');
    let attackButtons = document.querySelectorAll('.attack-btn');
    

    

   

    function handleAttack(event) {
        event.preventDefault();
        let attackType = event.target.classList[1]; 
    
        ap = Math.max(ap- attacks[attackType].apCost, 0);
        fungusHP = Math.max(fungusHP - attacks[attackType].hpDamage, 0);
    
        
    
       updateDisplays();
    }

  

   

    function updateDisplays() {
        apText.textContent = ap + ' AP'; 
        hpText.textContent = fungusHP + ' HP'; 
        apMeter.value = ap; 
        hpMeter.value = fungusHP; 

        if (fungusHP === 0) {
            fungusElement.classList.remove('walk');
            fungusElement.classList.add('dead');
            disableButtons();
            console.log('You win!');
        } else if (ap === 0) {
            fungusElement.classList.remove('walk');
            fungusElement.classList.add('jump');
            disableButtons();
            console.log('you lose')
            
        }
    }


    
    

    function disableButtons() {
        console.log("Disabling all attack buttons.");
        for (let button of attackButtons) { 
            button.disabled = true; 
            console.log(`Button ${button.dataset.attack} disabled.`);
        }
    }
    
    for (let button of attackButtons) {
        button.addEventListener('click', handleAttack);
    }

    
    updateDisplays();

    
    
}

onReady();


