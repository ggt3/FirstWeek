import Stack from './stack.js'; // default exports


const stack = new Stack();


stack.push(11);
stack.push(35);

console.log(stack.size());

const lastItem = stack.peek();
console.log(lastItem);




function convertTemp(temp,scale) {
    if (scale ==="F") {
        return (temp -32)/1.8
    }
   else if  (scale ==="C") {
        return (9/5 *temp) + 32;
    }
    else {
        return console.log("incorrect scale")
    }
}

console.log(convertTemp(32,"C") )


const computeArea = (width, height) => `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} inches.`;


console.log(computeArea(4,6))


function planetHasWater(planet) {
    planet= planet.toLowerCase();
    if (planet === "earth" || planet === "mars") {
        return true;
    } return false;
}

console.log(planetHasWater("eArTH"))