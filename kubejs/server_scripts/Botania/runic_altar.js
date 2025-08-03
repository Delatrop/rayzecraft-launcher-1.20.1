// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs: [
                'botania:mana_powder',
                'botania:manasteel_ingot',
                'minecraft:water_bucket',
                'minecraft:kelp',
                'minecraft:blue_dye'
            ],
            mana: 16000,
            output: 'botania:rune_water',
            count: 2,
            id: 'rayzecraft:runic_altar/water'
        },
        {
            inputs: [
                'botania:mana_powder',
                'botania:manasteel_ingot',
                'minecraft:lava_bucket',
                'occultism:candle_white',
                'minecraft:magma_block'
            ],
            mana: 16000,
            output: 'botania:rune_fire',
            count: 2,
            id: 'rayzecraft:runic_altar/fire'
        },
        {
            inputs: [
                'botania:mana_powder',
                'botania:manasteel_ingot',
                'minecraft:grass_block',
                'minecraft:grass_block',
                '#minecraft:leaves',
                'botania:grass_seeds'
            ],
            mana: 16000,
            output: 'botania:rune_earth',
            count: 2,
            id: 'rayzecraft:runic_altar/earth'
        },
        {
            inputs: [
                'botania:mana_powder',
                'botania:manasteel_ingot',
                'occultism:awakened_feather',
                'minecraft:white_dye',
                'forbidden_arcanus:ferrognetic_mixture'
            ],
            mana: 16000,
            output: 'botania:rune_air',
            count: 2,
            id: 'rayzecraft:runic_altar/air'
        },
        {
            inputs: [
                'botania:rune_water',
                'botania:rune_fire',
                'thermal:syrup_bottle',
                'eidolon:lesser_soul_gem',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                'minecraft:moss_block',
                'minecraft:moss_block',
                'minecraft:green_dye'
            ],
            mana: 40000,
            output: 'botania:rune_spring',
            count: 1,
            id: 'rayzecraft:runic_altar/spring'
        },
        {
            inputs: [
                'botania:rune_earth',
                'botania:rune_air',
                '#minecraft:sand',
                '#minecraft:sand',
                'farmersdelight:melon_popsicle',
                'farmersdelight:melon_popsicle',
                'ars_nouveau:source_berry_pie',
                'minecraft:red_mushroom'
            ],
            mana: 40000,
            output: 'botania:rune_summer',
            count: 1,
            id: 'rayzecraft:runic_altar/summer'
        },
        {
            inputs: [
                'botania:rune_fire',
                'botania:rune_air',
                'minecraft:carved_pumpkin',
                'minecraft:carved_pumpkin',
                'minecraft:honeycomb',
                'minecraft:honeycomb',
                'farmersdelight:hot_cocoa',
                'farmersdelight:hot_cocoa',
                'minecraft:yellow_dye'
            ],
            mana: 40000,
            output: 'botania:rune_autumn',
            count: 1,
            id: 'rayzecraft:runic_altar/autumn'
        },
        {
            inputs: [
                'botania:rune_water',
                'botania:rune_earth',
                'farmersdelight:shepherds_pie_block',
                'minecraft:hay_block',
                'minecraft:hay_block',
                'minecraft:snow_block',
                'minecraft:snow_block',
                'minecraft:white_dye'
            ],
            mana: 40000,
            output: 'botania:rune_winter',
            count: 1,
            id: 'rayzecraft:runic_altar/snow'
        },
        {
            inputs: [
                'botania:manasteel_ingot',
                'botania:manasteel_ingot',
                'botania:manasteel_ingot',
                'botania:manasteel_ingot',
                'naturesaura:sky_ingot',
                'botania:mana_pearl',
                'ae2:fluix_crystal',
                'naturesaura:sky_ingot'
            ],
            mana: 80000,
            output: 'botania:rune_mana',
            count: 1,
            id: 'rayzecraft:runic_altar/mana'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_air',
                'botania:rune_summer'
            ],
            mana: 80000,
            output: 'botania:rune_lust',
            count: 1,
            id: 'rayzecraft:runic_altar/lust'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_winter',
                'botania:rune_fire'
            ],
            mana: 80000,
            output: 'botania:rune_gluttony',
            count: 1,
            id: 'rayzecraft:runic_altar/gluttony'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_water',
                'botania:rune_spring'
            ],
            mana: 80000,
            output: 'botania:rune_greed',
            count: 1,
            id: 'rayzecraft:runic_altar/greed'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_air',
                'botania:rune_autumn'
            ],
            mana: 80000,
            output: 'botania:rune_sloth',
            count: 1,
            id: 'rayzecraft:runic_altar/sloth'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_earth',
                'botania:rune_winter'
            ],
            mana: 80000,
            output: 'botania:rune_wrath',
            count: 1,
            id: 'rayzecraft:runic_altar/wrath'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_water',
                'botania:rune_winter'
            ],
            mana: 80000,
            output: 'botania:rune_envy',
            count: 1,
            id: 'rayzecraft:runic_altar/envy'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'forbidden_arcanus:mundabitur_dust',
                'eidolon:shadow_gem',
                'occultism:spirit_attuned_gem',
                'botania:rune_summer',
                'botania:rune_fire'
            ],
            mana: 80000,
            output: 'botania:rune_pride',
            count: 1,
            id: 'rayzecraft:runic_altar/pride'
        },
        {
            inputs: [
                'naturesaura:sky_ingot',
                'botania:rune_air',
                'botania:rune_autumn',
                'botania:rune_pride',
                'botania:bifrost_perm'
            ],
            mana: 120000,
            output: 'mythicbotany:asgard_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/asgard'
        },
        {
            inputs: [
                'occultism:iesnium_ingot',
                'botania:rune_earth',
                'botania:rune_spring',
                'botania:rune_pride',
                'bloodmagic:seersigil'
            ],
            mana: 120000,
            output: 'mythicbotany:vanaheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/vahaheim'
        },
        {
            inputs: [
                'mythicbotany:alfsteel_ingot',
                'botania:rune_air',
                'botania:rune_summer',
                'botania:rune_lust',
                'naturesaura:gold_leaf'
            ],
            mana: 120000,
            output: 'mythicbotany:alfheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/alfheim'
        },
        {
            inputs: [
                'botania:terrasteel_ingot',
                'botania:rune_earth',
                'botania:rune_spring',
                'botania:rune_greed',
                'minecraft:podzol'
            ],
            mana: 120000,
            output: 'mythicbotany:midgard_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/midgard'
        },
        {
            inputs: [
                'minecraft:netherite_ingot',
                'botania:rune_earth',
                'botania:rune_autumn',
                'botania:rune_gluttony',
                'naturesaura:infused_stone'
            ],
            mana: 120000,
            output: 'mythicbotany:joetunheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/joetunmheim'
        },
        {
            inputs: [
                'eidolon:arcane_gold_ingot',
                'botania:rune_fire',
                'botania:rune_summer',
                'botania:rune_wrath',
                'projecte:aeternalis_fuel'
            ],
            mana: 120000,
            output: 'mythicbotany:muspelheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/muspelheim'
        },
        {
            inputs: [
                'forbidden_arcanus:whirlwind_prism',
                'botania:rune_water',
                'botania:rune_winter',
                'botania:rune_wrath',
                'mekanism:ingot_refined_obsidian'
            ],
            mana: 120000,
            output: 'mythicbotany:niflheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/niflheim'
        },
        {
            inputs: [
                'eidolon:shadow_gem',
                'botania:rune_earth',
                'botania:rune_winter',
                'botania:rune_sloth',
                'eidolon:arcane_gold_ingot'
            ],
            mana: 120000,
            output: 'mythicbotany:nidavellir_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/nidavellir'
        },
        {
            inputs: [
                'naturesaura:tainted_gold',
                'botania:rune_fire',
                'botania:rune_autumn',
                'botania:rune_envy',
                'eidolon:wraith_heart'
            ],
            mana: 120000,
            output: 'mythicbotany:helheim_rune',
            count: 1,
            id: 'rayzecraft:runic_altar/helheim'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'ars_nouveau:glyph_accelerate',
                'ars_nouveau:glyph_accelerate'
            ],
            mana: 12000,
            output: 'bloodmagic:speedrune',
            count: 1,
            id: 'rayzecraft:runic_altar/speed_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'ars_elemental:glyph_charm',
                'ars_nouveau:glyph_touch'
            ],
            mana: 12000,
            output: 'bloodmagic:sacrificerune',
            count: 1,
            id: 'rayzecraft:runic_altar/sacrifice_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'ars_elemental:glyph_charm',
                'ars_nouveau:glyph_self'
            ],
            mana: 12000,
            output: 'bloodmagic:selfsacrificerune',
            count: 1,
            id: 'rayzecraft:runic_altar/self_sacrifice_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'ars_nouveau:glyph_extract',
                'ars_nouveau:glyph_accelerate'
            ],
            mana: 12000,
            output: 'bloodmagic:dislocationrune',
            count: 1,
            id: 'rayzecraft:runic_altar/displacement_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reagentholding',
                'bloodmagic:reagentholding'
            ],
            mana: 12000,
            output: 'bloodmagic:altarcapacityrune',
            count: 1,
            id: 'rayzecraft:runic_altar/capacity_rune'
        },
        {
            inputs: [
                'bloodmagic:altarcapacityrune',
                'bloodmagic:demonslate',
                'bloodmagic:demonslate',
                'ars_nouveau:glyph_amplify',
                'ars_nouveau:glyph_amplify',
                'bloodmagic:masterbloodorb'
            ],
            mana: 48000,
            output: 'bloodmagic:bettercapacityrune',
            count: 1,
            id: 'rayzecraft:runic_altar/augmented_capacity_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:demonslate',
                'bloodmagic:demonslate',
                'bloodmagic:masterbloodorb',
                'bloodmagic:masterbloodorb',
                'bloodmagic:masterbloodorb'
            ],
            mana: 48000,
            output: 'bloodmagic:orbcapacityrune',
            count: 1,
            id: 'rayzecraft:runic_altar/orb_rune'
        },
        {
            inputs: [
                'bloodmagic:speedrune',
                'bloodmagic:demonslate',
                'bloodmagic:demonslate',
                'ars_nouveau:glyph_amplify',
                'ars_nouveau:glyph_amplify',
                'bloodmagic:masterbloodorb'
            ],
            mana: 48000,
            output: 'bloodmagic:accelerationrune',
            count: 1,
            id: 'rayzecraft:runic_altar/acceleration_rune'
        },
        {
            inputs: [
                'bloodmagic:blankrune',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'ars_nouveau:glyph_delay',
                'ars_nouveau:glyph_delay'
            ],
            mana: 12000,
            output: 'bloodmagic:chargingrune',
            count: 1,
            id: 'rayzecraft:runic_altar/charging_rune'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
