// Create a repo for your tamagotchi pet
// Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
// Instantiate your Tamagotchi
// Display a character of your choice on the screen to represent your pet
// Age
// Add the ability to name your pet.
// Style the page.

// hunger
let hungerMeter = document.getElementById('hunger-meter')
let feedEl = document.getElementById('btn-feed')

// sleepiness
let sleepinessMeter = document.getElementById('sleepiness-meter')
let sleepEl = document.getElementById('btn-sleep')

// boredom
let boredomMeter = document.getElementById('boredom-meter')
let playEl = document.getElementById('btn-play')

// notifications
let notifications = document.getElementById('notifications')

let count = 0

class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.intervalHunger = null
        this.intervalSleepiness = null
        this.intervalBoredom = null
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }

    addHunger = () => {
        this.intervalHunger = setInterval(() => {
            this.hunger++
            console.log("Hunger: " + this.hunger)
            if (this.hunger >= 80) {
                notifications.textContent = "I'm hungry. Feed me!"
            }
            if (this.hunger == 100) {
                notifications.textContent = "Game over - Hangry!"
                clearInterval(this.intervalHunger)
                clearInterval(this.intervalSleepiness)
                clearInterval(this.intervalBoredom)
            }
            updateDisplay()
        }, 3000)
    }

    addSleepiness() {
        this.intervalSleepiness = setInterval(() => {
            this.sleepiness++
            console.log("Sleepiness " + this.sleepiness)
            if (this.sleepiness >= 80) {
                notifications.textContent = "I'm tired. Time for a nap!"
            }
            if (this.sleepiness == 100) {
                notifications.textContent = "Game over - Fainted!"
                clearInterval(this.interval)
            }
            updateDisplay()
        }, 1000)
    }

    addBoredom() {
        this.intervalBoredom = setInterval(() => {
            this.boredom++
            console.log("Boredom: " + this.boredom)
            if (this.boredom >= 80) {
                notifications.textContent = "I'm bored. Let's play a game!"
            }
            if (this.boredom == 100) {
                notifications.textContent = "Game over - Bored!"
                clearInterval(this.interval)
            }
            updateDisplay()
        }, 2000)
    }

    addAge() {
        let newAge = this.age
        setInterval(function () {
            newAge++
            console.log("Age: " + myPet.age)
        }, 300000)
        // 5 minutes is 300000 ms
    }
}

function handleFeedClick() {
    interval = setInterval()
    myPet.hunger-- 
    hungerMeter.value = myPet.hunger
    console.log(hungerMeter.value)
    feedEl.textContent = 'Hunger: ' + myPet.hunger
}

function handleSleepClick() {
    interval = setInterval()
    myPet.sleepiness--
    sleepinessMeter.value = myPet.sleepiness
    console.log(sleepinessMeter.value)
    sleepEl.textContent = 'Sleepiness: ' + myPet.sleepiness
}

function handlePlayClick() {
    interval.setInterval()
    myPet.boredom--
    boredomMeter.value = myPet.boredom
    playEl.textContent = 'Boredom: ' + myPet.boredom
}

const myPet = new Tamagotchi("Gato", 0, 0, 0, 0)
console.log(myPet)
myPet.addAge()
myPet.addHunger()
myPet.addSleepiness()
myPet.addBoredom()

// When the button is clicked, call the provided function.
feedEl.addEventListener('click', handleFeedClick => {
    myPet.hunger--
    updateDisplay()
})

sleepEl.addEventListener('click', handleSleepClick => {
    myPet.sleepiness--
    updateDisplay()
})

playEl.addEventListener('click', handlePlayClick => {
    myPet.boredom--
    updateDisplay()
})

function updateDisplay() {
    hungerMeter.setAttribute("value", myPet.hunger)
    sleepinessMeter.setAttribute("value", myPet.sleepiness)
    boredomMeter.setAttribute("value", myPet.boredom)
}
