let johnsWeight = 125
let johnsHeight = 5
let marksWeight = 165
let marksHeight = 6

let johnsBmi = johnsWeight / (johnsHeight * 2)
johnsBmi = 12.5

let marksBmi = marksWeight / (marksHeight * 2)
marksBmi = 13.75

let combineBmi = johnsBmi + marksBmi
combineBmi = 26.25

let highestBmi = marksBmi >= johnsBmi
console.log("Is Mark's BMI higher than John's?" + highestBmi)
