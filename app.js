import promptSync from "prompt-sync";
import { makePizza } from "./modules/makePizza.js";
import { deliverPizza } from "./modules/deliverPizza.js";


function app() {
    const prompt = promptSync();
    const pizzaName = prompt('And your pizza is ... (pepperoni, margherita, hawaiian): ');

    let result = makePizza(pizzaName);

    result.then((resolve) => {
        if (resolve === undefined) deliverPizza();
    });
}

app();