let flour = '2 cups of flour';
let water = '1 cup of water';
let salt = '¾ teaspoon salt';
let oil = '2 tablespoons of olive oil';
let yeast = '2 grams active dry yeast (¾ teaspoon)';

const ingredients = ['1 cup canned crushed tomatoes', '1 cup Mozzarella cheese', '14 slices of pepperoni', 'Fresh basil leaves']
let basilLeaves = 6;
let cookingTime = 25;

let pizza = '';

function app() {
    makePizza();
    deliverOrder();
}

app()

function makePizza() {
    const base = makeDough();
    console.log(base)
    console.log('Let the ' + base + ' rest for 45 minutes');
    const shapedBase = giveCircularShape();
    console.log(shapedBase);
    addIngredients(ingredients);
    bake();
}

function makeDough() {
    console.log(mixFlourAndSalt());
    console.log(addWaterOilAndYeast());
    const result = knead();
    return result;
}

function mixFlourAndSalt() {
    return 'Mix ' + flour + ' and ' + salt;
}

function addWaterOilAndYeast() {
    return 'Add ' + water + ', ' + oil + ', ' + yeast + ' (previously mixed together)';
}

function knead() {
    let dough = 'dough for 4 pizzas';
    console.log('Knead well until it is no longer sticky');
    dough = shapeDough(dough);
    dough = cutDough(dough);
    return dough;
}

function shapeDough(dough) {
    console.log('Shape the ' + dough);
    return dough;
}

function cutDough(dough) {
    console.log('4 portions obtained');
    dough = 'base for 1 pizza';
    return dough;
}

function giveCircularShape() {
    const base = 'Base with circular shape obtained';
    return base;
}

function addIngredients(ingredients) {
    ingredients.forEach(ingredient => {
        if (ingredient === 'Fresh basil leaves' && basilLeaves > 0) {
            console.log('Added ' + basilLeaves + ' ' + ingredient);
        } else if (ingredient === 'Fresh basil leaves' && basilLeaves === 0) {
            console.log('Pizza without ' + ingredient);
        } else {
            console.log('Added ' + ingredient);
        }
    });
}

function bake() {
    console.log('Backing the pizza for ' + cookingTime + ' minutes');
    pizza = 'Pizza';
    console.log(pizza + ' ready!');
}

function deliverOrder() {
    console.log(pizza + ' delivered');
}