// Author: Davi_MCST

ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_pity',
                'industrialforegoing:plastic',
                'minecraft:iron_bars',
                'minecraft:iron_bars',
                'enderio:dark_steel_block',
                'powah:crystal_niotic',
                'enderio:dark_steel_block'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 500,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:machine_frame_simple', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/simple_machine_frame'
        },
        {
            inputs: [
                'pneumaticcraft:plastic',
                'industrialforegoing:machine_frame_advanced',
                'pneumaticcraft:plastic',
                'minecraft:nether_star',
                'minecraft:nether_star',
                'pneumaticcraft:plastic',
                'powah:capacitor_spirited',
                'pneumaticcraft:plastic'
            ],
            inputFluid: 'pneumaticcraft:lpg',
            inputFluidAmount: 800,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:fluid_laser_base', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/fluid_laser_base'
        },
        {
            inputs: [
                '#forge:ingots/osmium',
                'powah:blank_card',
                '#forge:ingots/osmium',
                'mekanism:alloy_infused',
                'mekanism:alloy_infused',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: {item: 'mekanism:upgrade_speed', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/speed_upgrade'
        },
        {
            inputs: [
                '#forge:ingots/lead',
                'powah:blank_card',
                '#forge:ingots/lead',
                'mekanism:alloy_reinforced',
                'mekanism:alloy_reinforced',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: {item: 'mekanism:upgrade_energy', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/energy_upgrade'
        },
        {
            inputs: [
                '#forge:wool',
                'powah:blank_card',
                '#forge:wool',
                '#forge:wool',
                '#forge:wool',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: {item: 'mekanism:upgrade_muffling', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/muffling_upgrade'
        },
        {
            inputs: [
                '#forge:ingots/silver',
                'powah:blank_card',
                '#forge:ingots/silver',
                'mekanism:alloy_reinforced',
                'mekanism:alloy_reinforced',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper',
                '#forge:storage_blocks/copper'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 600,
            outputItem: {item: 'mekanism:upgrade_gas', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/gas_upgrade'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'industrialforegoing:machine_frame_simple',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 200,
            processingTime: 600,
            outputItem: {item: 'mekanism:induction_casing', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/induction_casing'
        },
        {
            inputs: [
                '#forge:glass_panes',
                '#forge:glass_panes',
                'mekanism:advanced_control_circuit',
                'ae2:engineering_processor',
                'ae2:engineering_processor',
                'industrialforegoing:plastic',
                '#forge:gears/signalum',
                '#forge:gears/signalum'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:processing_addon_1', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/processing_tier_1'
        },
        {
            inputs: [
                'industrialforegoing:processing_addon_1',
                'forbidden_arcanus:deorum_glass_pane',
                'forbidden_arcanus:deorum_glass_pane',
                '#forge:gears/enderium',
                '#forge:gears/enderium',
                'megacells:accumulation_processor',
                'megacells:accumulation_processor'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:processing_addon_2', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/processing_tier_2'
        },
        {
            inputs: [
                '#forge:gears/signalum',
                '#forge:gears/signalum',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol',
                '#forge:glass_panes',
                '#forge:glass_panes',
                'mekanism:advanced_control_circuit',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 500,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:speed_addon_1', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/speed_tier_1'
        },
        {
            inputs: [
                '#forge:gears/enderium',
                '#forge:gears/enderium',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol',
                'forbidden_arcanus:deorum_glass_pane',
                'forbidden_arcanus:deorum_glass_pane',
                'industrialforegoing:speed_addon_1'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 500,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:speed_addon_2', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/speed_tier_2'
        },
        {
            inputs: [
                'nethersdelight:rich_soul_soil',
                'nethersdelight:rich_soul_soil',
                'nethersdelight:rich_soul_soil',
                'bloodmagic:weakbloodshard',
                'bloodmagic:weakbloodshard',
                'mysticalagriculture:soulium_gemstone_block',
                'mysticalagriculture:soulium_gemstone_block',
                'industrialforegoing:machine_frame_simple'
            ],
            inputFluid: 'bloodmagic:life_essence_fluid',
            inputFluidAmount: 1500,
            processingTime: 600,
            outputItem: {item: 'industrialforegoing:mechanical_dirt', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/mechanical_dirt'
        },
        {
            inputs: [
                'industrialforegoing:machine_frame_advanced',
                'mekanism:elite_control_circuit',
                'mekanism:elite_control_circuit',
                'mekanism_extras:alloy_radiance',
                'botania:terrasteel_nugget',
                'botania:terrasteel_nugget',
                'bigreactors:reinforced_reactorcasing',
                'bigreactors:reinforced_reactorcasing'
            ],
            inputFluid: 'pneumaticcraft:kerosene',
            inputFluidAmount: 2500,
            processingTime: 600,
            outputItem: {item: 'mekanismgenerators:fission_reactor_casing', count: 4},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/fission_reactor_casing'
        },
        {
            inputs: [
                'mekanism:pellet_polonium',
                'mekanism:pellet_polonium',
                'mekanism:pellet_polonium',
                'mekanism:pellet_polonium',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'industrialforegoing:machine_frame_supreme',
                'mekanism_extras:supreme_control_circuit'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 2500,
            processingTime: 600,
            outputItem: {item: 'mekanism:sps_casing', count: 4},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/sps_casing'
        },
        {
            inputs: [
                'mekanism:ultimate_induction_cell',
                'mekanism:ultimate_induction_cell',
                'mekanism_extras:alloy_thermonuclear',
                'mekanism_extras:absolute_control_circuit',
                'mekanism_extras:absolute_control_circuit',
                'mekanism:pellet_plutonium',
                'mekanism:pellet_plutonium',
                'mekanism:laser'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 2000,
            processingTime: 600,
            outputItem: {item: 'mekanism:supercharged_coil', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/supercharged_coil'
        },
        {
            inputs: [
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'mysticalagradditions:prudentium_coal',
                'mysticalagradditions:prudentium_coal'
            ],
            inputFluid: 'pneumaticcraft:oil',
            inputFluidAmount: 200,
            processingTime: 600,
            outputItem: {item: 'projecte:aeternalis_fuel', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/saeternalis_fuel_with_pneumaticcraft_oil'
        },
        {
            inputs: [
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'projecte:mobius_fuel',
                'mysticalagradditions:prudentium_coal',
                'mysticalagradditions:prudentium_coal'
            ],
            inputFluid: 'thermal:crude_oil',
            inputFluidAmount: 200,
            processingTime: 600,
            outputItem: {item: 'projecte:aeternalis_fuel', count: 1},
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rayzecraft:crafting/saeternalis_fuel_with_thermal_oil'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});