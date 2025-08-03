// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
                inputs: [
                {item: 'botania:terrasteel_ingot'},
                {item: 'botania:terrasteel_ingot'},
                {item: 'kubejs:world_ash_branch'},
                {item: 'kubejs:world_ash_branch'},
                {item: 'kubejs:world_ash_branch'},
                {item: 'kubejs:world_ash_branch'},
                {item: 'minecraft:amethyst_shard'},
                {item: 'minecraft:amethyst_shard'}
            ],
            output: {item: 'kubejs:yggdralium_shard'},
            mana: 100000,
            id: 'rayzecraft:terra_plate/yggdralium_shard'
        },
        {
            inputs: [
            {item: 'naturesaura:sky_ingot'},
            {item: 'botania:mana_pearl'},
            {item: 'botania:manasteel_ingot'},
            {item: 'botania:mana_diamond'},
            {item: 'forbidden_arcanus:deorum_ingot'},
            {item: 'occultism:iesnium_ingot'},
            {item: 'eidolon:arcane_gold_ingot'}
        ],
        output: {item: 'botania:terrasteel_ingot'},
        mana: 20000,
        id: 'rayzecraft:terra_plate/terrasteel_ingot'
    }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
