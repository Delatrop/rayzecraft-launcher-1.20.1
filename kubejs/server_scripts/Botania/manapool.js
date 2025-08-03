// Author: Davi_MCST

ServerEvents.recipes(event => { 
    const recipes = [
        {
            input: '#forge:ingots/steel',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 3000,
            catalyst:'',
            id: 'rayzecraft:mana_infusion/manasteel'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        const re = event.custom(constructed_recipe);

        if (recipe.id) {
            re.id(recipe.id);
        } else {
            fallback_id(re, id_prefix);
        }
    });
});
