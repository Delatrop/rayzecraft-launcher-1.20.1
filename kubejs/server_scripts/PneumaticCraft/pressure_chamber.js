// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs: [
                {item: 'pneumaticcraft:turbine_rotor', count: 1},
                {item: 'mekanism:alloy_reinforced', count: 3}
            ],
            pressure: 4.5,
            results: [{item: 'mekanismgenerators:turbine_blade', count: 1}],
            id: 'rayzecraft:pressure_chamber/turbine_blade'
        },
        {
            inputs: [
                {item: 'thermal:coal_coke', count: 4}
            ],
            pressure: 4.5,
            results: [{item: 'projecte:alchemical_coal', count: 1}],
            id: 'rayzecraft:pressure_chamber/alchemical_coal'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
