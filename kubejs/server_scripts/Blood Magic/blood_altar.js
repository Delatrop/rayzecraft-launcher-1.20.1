// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
            input: 'occultism:otherstone',
            output: 'bloodmagic:weakbloodorb',
            syphon: 7000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'rayzecraft:altar/blank_slate'
        },
        {
            input: 'eidolon:unholy_symbol',
            output: 'bloodmagic:blankslate',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'rayzecraft:altar/weak_blood_orb'
        },
        {
            input: 'botania:mana_tablet',
            output: 'bloodmagic:magicianbloodorb',
            syphon: 50000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'rayzecraft:altar/magicianbloodorb'
        },
        {
            input: 'botania:rune_air',
            output: 'bloodmagic:airscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'rayzecraft:altar/air_tool'
        },
        {
            input: 'botania:rune_fire',
            output: 'bloodmagic:firescribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'rayzecraft:altar/fire_tool'
        },
        {
            input: 'botania:rune_water',
            output: 'bloodmagic:waterscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'rayzecraft:altar/water_tool'
        },
        {
            input: 'botania:rune_earth',
            output: 'bloodmagic:earthscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'rayzecraft:altar/earth_tool'
        },
        {
            input: 'mythicbotany:nidavellir_rune',
            output: 'bloodmagic:duskscribetool',
            syphon: 2000,
            altarLevel: 3,
            consumptionRate: 20,
            drainRate: 10,
            id: 'rayzecraft:altar/dusk_tool'
        },
        {
            input: 'industrialforegoing:pink_slime',
            output: 'kubejs:blood_slime_ball',
            syphon: 1000,
            altarLevel: 1,
            consumptionRate: 20,
            drainRate: 10,
            id: 'rayzecraft:altar/coagulated_blood'
        },
        {
            input: 'minecraft:bone',
            output: 'kubejs:bloodbone',
            syphon: 1000,
            altarLevel: 1,
            consumptionRate: 20,
            drainRate: 10,
            id: 'rayzecraft:altar/blood_bone'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            .id(recipe.id);
    });
});
