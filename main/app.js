const quotes = [
    "Those who cannot remember the past are condemned to repeat it. – George Santayana",
    "History is written by the victors. – Winston Churchill",
    "History will be kind to me for I intend to write it. – Winston Churchill",
    "The more you know about the past, the better prepared you are for the future. – Theodore Roosevelt",
    "Study the past if you would define the future. – Confucius",
    "History is a set of lies agreed upon. – Napoleon Bonaparte",
    "The only thing new in the world is the history you don't know. – Harry S. Truman",
    "We are not makers of history. We are made by history. – Martin Luther King Jr.",
    "History repeats itself, first as tragedy, second as farce. – Karl Marx",
    "The history of the world is but the biography of great men. – Thomas Carlyle",
    "History is the version of past events that people have decided to agree upon. – Napoleon Bonaparte",
    "History is a vast early warning system. – Norman Cousins",
    "What is history? An echo of the past in the future; a reflex from the future on the past. – Victor Hugo",
    "History is not a burden on the memory but an illumination of the soul. – Lord Acton",
    "History is the witness that testifies to the passing of time. – Cicero",
    "People are trapped in history, and history is trapped in them. – James Baldwin",
    "History is merely gossip. – Oscar Wilde",
    "History is the long and tragic story of the fact that privileged groups seldom give up their privileges voluntarily. – Martin Luther King Jr.",
    "The past is never dead. It's not even past. – William Faulkner",
    "The great thing about history is that it is adaptable. – Malcolm X",

]

const usedIndex = new Set()
const quoteField = document.getElementById("Quote")


function GenQuote(){
    
    if (usedIndex.size === quotes.length) {
        usedIndex.clear()
    }

    while(true) {

        const randomIndx = Math.floor(Math.random() * quotes.length)
        

        if (usedIndex.has(randomIndx)) continue

        const quote = quotes[randomIndx]
        quoteField.innerHTML = quote;
        usedIndex.add(randomIndx)
        break
 
    }
        
        

}