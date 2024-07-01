let flour = '2 cups of flour';
let water = '1 cup of water';
let salt = '¾ teaspoon salt';
let oil = '2 tablespoons of olive oil';
let tomatoes = '1 cup canned crushed tomatoes';
let oven = 'cooking for 25 minutes';


function makeDough() {

    if (flour && water) {
        console.log('mixing Dough')
        return true
    }

    console.log('one ingredient is missing')
    return false

}


function app() {

    makeDough()
}

app()