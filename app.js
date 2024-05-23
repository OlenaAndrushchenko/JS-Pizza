// ingridient - variiables
// accions - functions 

let flour = '2 cups of flour';
let water = '1 cup of water';
let salt = '¾ teaspoon salt';
let oil = '2 tablespoons of olive oil';
let tomatoes = '1 cup canned crushed tomatoes';

function app() {
    makePizza();
}

function makePizza() {
    makeDough();
}

function makeDough() {
    mixIngridients();
}

function mixIngridients() {
    console.log('Mix' + flour + water);
}