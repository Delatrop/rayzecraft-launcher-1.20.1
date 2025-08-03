// Author: Davi_MCST

ServerEvents.recipes(event => { 
    const recipes = [
        {
            inputs: [{item: 'botania:dreamwood_twig'},
                     {item: 'botania:dreamwood_twig'},
                     {item: 'botania:dreamwood_twig'},
                     {item: 'botania:dreamwood_twig'}],
                     output: {item: 'kubejs:world_ash_branch'},
            id: 'rayzecraft:elven_trade/world_ash_branch'
        },
        {
            inputs: [{item: 'botania:manasteel_ingot'},
                     {item: 'naturesaura:tainted_gold'}],
                     output: {item: 'botania:elementium_ingot'},
            id: 'rayzecraft:elven_trade/elementium_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
