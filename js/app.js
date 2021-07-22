// Create a repo for your tamagotchi pet
// Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
// Instantiate your Tamagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

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
        this.interval = null
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }

    addHunger = () => {
        this.interval = setInterval(() => {
            this.hunger++
            console.log("Hunger: " + this.hunger)
            if (this.hunger >= 8) {
                notifications.textContent = "I'm hungry. Feed me!"
            }
            if (this.hunger == 10) {
                notifications.textContent = "Game over - Hangry!"
                clearInterval(this.interval)
            }
            updateDisplay()
        }, 10000)
    }

    addSleepiness() {
        this.interval = setInterval(() => {
            this.sleepiness++
            console.log("Sleepiness " + this.sleepiness)
            if (this.sleepiness >= 8) {
                notifications.textContent = "I'm tired. Time for a nap!"
            }
            if (this.sleepiness == 10) {
                notifications.textContent = "Game over - Fainted!"
                clearInterval(this.interval)
            }
            updateDisplay()
        }, 10000)
    }

    addBoredom() {
        this.interval = setInterval(() => {
            this.boredom++
            console.log("Boredom: " + this.boredom)
            if (this.boredom >= 8) {
                notifications.textContent = "I'm bored. Let's play a game!"
            }
            if (this.boredom == 10) {
                notifications.textContent = "Game over - Bored!"
                clearInterval(this.interval)
            }
            updateDisplay()
        }, 1000)
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
    // Display the updated meter?
    // let hungerMeterLive = hungerMeter.value 
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
