let UUID = require('uuid')

let getJokes = function () {
    let jokes = ["A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "Can a kangaroo jump higher than a house? - Of course, a house doesn’t jump at all.",
"My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
"What is the difference between a snowman and a snowwoman? - Snowballs.",
"I managed to lose my rifle when I was in the army. I had to pay $855 to cover the loss. I’m starting to understand why a Navy captain always goes down with his ship."]
    
        
    return jokes
    
}
module.exports = { getJokes: getJokes }