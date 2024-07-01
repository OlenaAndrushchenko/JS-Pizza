import { pizzas } from "./pizzas.js";

let customerPizza = {};

export async function makePizza(pizzaSelected) {
    const exist = checkIfExists(pizzaSelected);

    if (exist) {
        console.log(`Pizza ${pizzaSelected} in preparation`);
        prepareDough();
        addIngredients();
        bakePizza();

        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(waitingForBake());
            }, 2000)
        });

        return promise;
    }

    return false;
}

function prepareDough() {
    console.log('Preparing the dough');
    console.log('Stretching the dough');
}

function addIngredients() {
    customerPizza.ingredients.forEach((ingredient) => {
        console.log(`Adding ${ingredient}`);
    })
}

function bakePizza() {
    console.log(`Baking the pizza`);
}

function waitingForBake() {
    console.log(`Pizza is ready`);        
}

function checkIfExists(pizzaSelected) {
    let exist = false;
    pizzas.forEach((pizza) => {
        if (pizza.name === pizzaSelected) {
            exist = true;
            customerPizza = pizza;
            return;
        }
    });

    if (!exist) console.log('The pizza does not exist');

    return exist;
}
