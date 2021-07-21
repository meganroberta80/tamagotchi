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

const feedEl = document.getElementById('btn-feed')
// lowers hunger
const sleepEl = document.getElementById('btn-sleep')
// lowers sleepiness
const playEl = document.getElementById('btn-play')
// lowers boredom

class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
    addHunger() {
        let newHunger = this.hunger
        setInterval(function () {
            newHunger++
            console.log(newHunger)
        }, 60000)
    }
    addSleepiness() {
        let newSleepiness = this.sleepiness
        setInterval(function () {
            newSleepiness++
            console.log(newSleepiness)
        }, 60000)
    }
    addBoredom() {
        let newBoredom = this.boredom
        setInterval(function () {
            newBoredom++
            console.log(newBoredom)
        }, 60000)
    }
    // three life stages? 
    addAge() {
        let newAge = this.age
        setInterval(function () {
            newAge++
            console.log(newAge)
        }, 300000)
        // 5 minutes is 300000 ms
    }
}

function handleFeedClick() {
//     hunger--
}

function handleSleepClick() {
//     sleepiness--
}

function handlePlayClick() {
//     boredom--
}

const myPet = new Tamagotchi("Gato", "", "", "", 0)
console.log(myPet)
myPet.addAge()
myPet.addHunger()
myPet.addSleepiness()
myPet.addBoredom()

// When the button is clicked, call the provided function.
feedEl.addEventListener('click', handleFeedClick)
sleepEl.addEventListener('click', handleSleepClick)
playEl.addEventListener('click', handlePlayClick)