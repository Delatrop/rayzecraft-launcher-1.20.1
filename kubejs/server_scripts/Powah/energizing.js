// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
            ingredients: [
                {item: 'minecraft:nether_star'},
                {item: 'bloodmagic:weakbloodshard'},
                {item: 'bloodmagic:weakbloodshard'},
                {item: 'powah:crystal_spirited'},
                {item: 'powah:crystal_spirited'},
                {item: 'powah:crystal_spirited'}
            ],
            energy: 100000000,
            result: {item: 'powah:crystal_nitro', count: 8},
            id: 'rayzecraft:nitro_crystal'
        },
        {
            ingredients: [
                {item: 'powah:crystal_niotic'},
                {item: 'powah:crystal_niotic'},
                {item: 'mekanism:yellow_cake_uranium'},
                {item: 'mekanism:yellow_cake_uranium'},
                {item: 'eidolon:shadow_gem'}
            ],
            energy: 10000000,
            result: {item: 'powah:crystal_spirited', count: 6},
            id: 'rayzecraft:spirited_crystal'
        },
        {
            ingredients: [
                {item: 'projecte:mobius_fuel'},
                {item: 'projecte:mobius_fuel'},
                {item: 'naturesaura:sky_ingot'},
                {item: 'powah:crystal_blazing'},
                {item: 'powah:crystal_blazing'}
            ],
            energy: 1000000,
            result: {item: 'powah:crystal_niotic', count: 4},
            id: 'rayzecraft:niotic_crystal'
        },
        {
            ingredients: [
                {item: 'botania:quartz_blaze'},
                {item: 'botania:quartz_blaze'},
                {item: 'minecraft:honeycomb'},
                {item: 'minecraft:honeycomb'},
                {item: 'minecraft:blaze_rod'},
                {item: 'minecraft:blaze_rod'}
            ],
            energy: 250000,
            result: {item: 'powah:crystal_blazing', count: 10},
            id: 'rayzecraft:blazing_crystal'
        },
        {
            ingredients: [
                {item: '#forge:ingots/steel'},
                {item: '#forge:ingots/electrum'}
            ],
            energy: 250000,
            result: {item:'powah:steel_energized', count: 1},
            id: 'rayzecraft:energized_steel'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
