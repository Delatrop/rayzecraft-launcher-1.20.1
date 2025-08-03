// Author: Davi_MCST

ServerEvents.recipes(event => { 
    const recipes = [
        {
            output: 'kubejs:yggdralium_ingot',
            pattern: [' A ',
                      'ABA',
                      ' A '],
            key: {
                A: 'kubejs:yggdralium_shard',
                B: 'botania:gaia_ingot'},
            id: 'rayzecraft:yggdralium_ingot'
        },
        {
            output: 'bhc:red_heart_canister',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'bhc:canister',
                B: 'powah:blazing_crystal_block',
                C: 'botania:terrasteel_ingot',
                D: 'bhc:red_heart'},
            id: 'rayzecraft:red_heart_canister'
        },
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#minecraft:logs',
                B: 'minecraft:redstone_block',
                C: 'minecraft:cobblestone',
                D: 'pneumaticcraft:compressed_iron_block'},
            id: 'rayzecraft:pity_machine_frame'
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'industrialforegoing:machine_frame_pity',
                C: 'enderio:dark_steel_block'},
            id: 'rayzecraft:enrichment_chamber'
        },
        {
            output: 'mekanism:osmium_compressor',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:alloy_infused',
                C: 'enderio:dark_steel_block',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:osmium_compressor'
        },
        {
            output: 'mekanism:metallurgic_infuser',
            pattern: ['ABA',
                      'CDC',
                      'EBE'],
            key: {
                A: 'minecraft:redstone_block',
                B: 'powah:capacitor_basic_large',
                C: 'bloodmagic:reinforcedslate',
                D: 'mekanism:block_osmium',
                E: '#forge:storage_blocks/gold'},
            id: 'rayzecraft:metallurgic_infuser'
        },
        {
            output: 'mekanism:chemical_washer',
            pattern: ['ABA',
                      'CDC',
                      'EBE'],
            key: {
                A: '#forge:storage_blocks/cyanite',
                B: 'industrialforegoing:machine_frame_simple',
                C: 'mekanism:ultimate_control_circuit',
                D: '#forge:storage_blocks/dark_steel',
                E: '#forge:ingots/swift_alloy'},
            id: 'rayzecraft:chemical_washer'
        },
        {
            output: 'botania:mana_pool',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'botania:livingrock',
                B: 'ars_nouveau:source_gem_block'},
            id: 'rayzecraft:mana_pool'
        },
        {
            output: 'mekanism:basic_energy_cube',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'powah:capacitor_blazing',
                B: 'industrialforegoing:machine_frame_simple',
                C: 'naturesaura:sky_ingot',
                D: 'pneumaticcraft:lpg_bucket',
                E: '#forge:ingots/signalum'},
            id: 'rayzecraft:basic_energy_cube'
        },
        {
            output: 'mekanism:advanced_energy_cube',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'powah:capacitor_niotic',
                B: 'mekanism:basic_energy_cube',
                C: 'eidolon:pewter_ingot',
                D: 'mekanism:lithium_bucket',
                E: 'mekanism:alloy_infused'},
            id: 'rayzecraft:advanced_energy_cube'
        },
        {
            output: 'mekanism:elite_energy_cube',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'powah:capacitor_spirited',
                B: 'mekanism:advanced_energy_cube',
                C: 'bloodmagic:infusedslate',
                D: 'thermal_extra:crystallized_sunflower_oil_bucket',
                E: 'mekanism:alloy_reinforced'},
            id: 'rayzecraft:elite_energy_cube'
        },
        {
            output: 'mekanism:ultimate_energy_cube',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'powah:capacitor_nitro',
                B: 'mekanism:elite_energy_cube',
                C: 'forbidden_arcanus:deorum_ingot',
                D: 'pneumaticcraft:kerosene_bucket',
                E: 'mekanism:alloy_atomic'},
            id: 'rayzecraft:ultimate_energy_cube'
        },
        {
            output: 'bloodmagic:alchemicalreactionchamber',
            pattern: ['AAA',
                      'BCB',
                      'DED'],
            key: {
                A: 'bloodmagic:dungeon_stone',
                B: 'bloodmagic:infusedslate',
                C: 'bloodmagic:masterbloodorb',
                D: 'powah:blazing_crystal_block',
                E: 'minecraft:blast_furnace'},
            id: 'rayzecraft:alchemical_reaction_chamber'
        },
        {
            output: 'bloodmagic:altar',
            pattern: ['AAA',
                      'BCB',
                      'DED'],
            key: {
                A: 'eidolon:gold_inlay',
                B: 'farmersdelight:cooking_pot',
                C: 'occultism:otherstone',
                D: 'minecraft:heart_of_the_sea',
                E: 'eidolon:arcane_gold_ingot'},
            id: 'rayzecraft:blood_altar'
        },
        {
            output: 'bloodmagic:alchemytable',
            pattern: ['ABC',
                      'DDD',
                      'EEE'],
            key: {
                A: 'minecraft:brewing_stand',
                B: 'bloodmagic:blankslate',
                C: 'ars_nouveau:source_jar',
                D: 'apotheosis:uncommon_material',
                E: 'eidolon:stone_altar'},
            id: 'rayzecraft:alchemy_table'
        },
        {
            output: 'ae2:cell_component_1k',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/conductive_alloy',
                B: 'ae2:certus_quartz_crystal',
                C: 'ae2:logic_processor'},
            id: 'rayzecraft:1k_storage_component'
        },
        {
            output: 'ae2:cell_component_4k',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/conductive_alloy',
                B: 'ae2:cell_component_1k',
                C: 'ae2:calculation_processor'},
            id: 'rayzecraft:4k_storage_component'
        },
        {
            output: 'ae2:cell_component_16k',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/lumium',
                B: 'ae2:cell_component_4k',
                C: 'ae2:calculation_processor'},
            id: 'rayzecraft:16k_storage_component'
        },
        {
            output: 'ae2:cell_component_64k',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/lumium',
                B: 'ae2:cell_component_16k',
                C: 'ae2:calculation_processor'},
            id: 'rayzecraft:64k_storage_component'
        },
        {
            output: 'ae2:cell_component_256k',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/energetic_alloy',
                B: 'ae2:cell_component_64k',
                C: 'kubejs:rose_gold_ingot'},
            id: 'rayzecraft:256k_storage_component'
        },
        {
            output: 'ae2:crafting_unit',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'powah:steel_energized',
                B: 'megacells:accumulation_processor',
                C: 'ae2:fluix_smart_cable',
                D: 'mekanism_extras:alloy_radiance'},
            id: 'rayzecraft:crafting_unit'
        },
        {
            output: 'ae2:speed_card',
            pattern: ['AB ',
                      'CDB',
                      'AB '],
            key: {
                A: 'ae2:fluix_crystal',
                B: '#forge:ingots/compressed_iron',
                C: '#forge:ingots/refined_glowstone',
                D: 'ae2:advanced_card'},
            id: 'rayzecraft:acceleration_card'
        },
        {
            output: 'ae2:advanced_card',
            pattern: ['AB ',
                      'CDB',
                      'AB '],
            key: {
                A: 'thermal:signalum_ingot',
                B: '#forge:ingots/compressed_iron',
                C: 'mekanism:alloy_reinforced',
                D: 'ae2:basic_card'},
            id: 'rayzecraft:advanced_card'
        },
        {
            output: '2x ae2:basic_card',
            pattern: ['AB ',
                      'CDB',
                      'AB '],
            key: {
                A: 'thermal:signalum_ingot',
                B: '#forge:ingots/compressed_iron',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'ae2:calculation_processor'},
            id: 'rayzecraft:basic_card'
        },
        {
            output: 'ae2:capacity_card',
            pattern: ['AB ',
                      'CDB',
                      'AB '],
            key: {
                A: 'ae2:charged_certus_quartz_crystal',
                B: '#forge:ingots/compressed_iron',
                C: '#forge:chests/wooden',
                D: 'ae2:basic_card'},
            id: 'rayzecraft:capacity_card'
        },
        {
            output: 'ae2:crafting_card',
            pattern: ['AB ',
                      'CDB',
                      'AB '],
            key: {
                A: 'ae2:charged_certus_quartz_crystal',
                B: '#forge:ingots/compressed_iron',
                C: 'ae2:crafting_unit',
                D: 'ae2:basic_card'},
            id: 'rayzecraft:crafting_card'
        },
        {
            output: 'ae2:fluix_pearl',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: 'botania:manasteel_ingot',
                B: 'ae2:fluix_crystal',
                C: 'botania:mana_pearl'},
            id: 'rayzecraft:fluix_pearl'
        },
        {
            output: 'mekanism:chemical_infuser',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:alloy_reinforced',
                B: 'mekanism:advanced_control_circuit',
                C: 'mekanism:advanced_chemical_tank',
                D: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:chemical_infuser'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['ABA',
                      'CDC',
                      'EFE'],
            key: {
                A: 'mekanism:advanced_mechanical_pipe',
                B: 'industrialforegoing:machine_frame_pity',
                C: 'mekanism:advanced_fluid_tank',
                D: 'industrialforegoing:plastic',
                E: 'mekanism:superheating_element',
                F: 'mekanism:advanced_control_circuit'},
            id: 'rayzecraft:dissolution_chamber'
        },
        {
            output: 'mekanism:superheating_element',
            pattern: ['AAA',
                      'BCB',
                      'DBD'],
            key: {
                A: 'pneumaticcraft:heat_sink',
                B: '#forge:ingots/electrum',
                C: 'minecraft:red_nether_bricks',
                D: 'pneumaticcraft:heat_pipe'},
            id: 'rayzecraft:superheating_element'
        },
        {
            output: 'mekanismgenerators:fission_fuel_assembly',
            pattern: ['AAA',
                      'ACA',
                      'ABA'],
            key: {
                A: 'forbidden_arcanus:arcane_polished_darkstone_rod',
                B: 'industrialforegoing:machine_frame_simple',
                C: 'bigreactors:reinforced_reactorcontrolrod'},
            id: 'rayzecraft:fission_fuel_assembly'
        },
        {
            output: 'mekanismgenerators:control_rod_assembly',
            pattern: ['ABA',
                      'CDC',
                      'EFE'],
            key: {
                A: 'thermal:redstone_servo',
                B: 'industrialforegoing:machine_frame_simple',
                C: '#forge:gears/shellite',
                D: 'mekanism:elite_control_circuit',
                E: 'forbidden_arcanus:arcane_polished_darkstone_rod',
                F: 'bigreactors:reinforced_reactorcontrolrod'},
            id: 'rayzecraft:control_rod_assembly'
        },
        {
            output: '2x mekanismgenerators:turbine_casing',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:plates/netherite',
                B: 'mekanism:alloy_atomic',
                C: 'mekanism:hdpe_sheet',
                D: 'bigreactors:reinforced_turbinecasing'},
            id: 'rayzecraft:turbine_casing'
        },
        {
            output: 'mekanismgenerators:turbine_rotor',
            pattern: ['ABA',
                      'ACA',
                      'ABA'],
            key: {
                A: '#forge:ingots/dark_steel',
                B: 'mekanism:alloy_reinforced',
                C: 'bigreactors:reinforced_turbinerotorshaft'},
            id: 'rayzecraft:turbine_rotor'
        },
        {
            output: '2x mekanism:thermal_evaporation_block',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:storage_blocks/bronze',
                B: 'mekanism:alloy_reinforced',
                C: 'pneumaticcraft:heat_pipe',
                D: 'minecraft:red_nether_bricks'},
            id: 'rayzecraft:thermal_evaporation_block'
        },
        {
            output: 'mekanism:basic_smelting_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:energized_smelter'},
            id: 'rayzecraft:basic_smelting'
        },
        {
            output: 'mekanism:basic_enriching_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:enrichment_chamber'},
            id: 'rayzecraft:basic_enriching'
        },
        {
            output: 'mekanism:basic_crushing_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:crusher'},
            id: 'rayzecraft:basic_crushing'
        },
        {
            output: 'mekanism:basic_compressing_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:osmium_compressor'},
            id: 'rayzecraft:basic_compressing'
        },
        {
            output: 'mekanism:basic_combining_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:combiner'},
            id: 'rayzecraft:basic_combining'
        },
        {
            output: 'mekanism:basic_purifying_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:purification_chamber'},
            id: 'rayzecraft:basic_purifying'
        },
        {
            output: 'mekanism:basic_injecting_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:chemical_injection_chamber'},
            id: 'rayzecraft:basic_injection'
        },
        {
            output: 'mekanism:basic_infusing_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:metallurgic_infuser'},
            id: 'rayzecraft:basic_infusing'
        },
        {
            output: 'mekanism:basic_sawing_factory',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'extendedcrafting:enhanced_redstone_ingot',
                B: 'mekanism:basic_control_circuit',
                C: 'enderio:dark_steel_ingot',
                D: 'mekanism:precision_sawmill'},
            id: 'rayzecraft:basic_sawing'
        },
        {
            output: '2x ae2:annihilation_core',
            pattern: ['ABC'],
            key: {
                A: 'botania:quartz_mana',
                B: 'ae2:fluix_dust',
                C: 'ae2:logic_processor'},
            id: 'rayzecraft:annihilation_core'
        },
        {
            output: '2x ae2:formation_core',
            pattern: ['ABC'],
            key: {
                A: 'botania:mana_powder',
                B: 'ae2:fluix_dust',
                C: 'ae2:logic_processor'},
            id: 'rayzecraft:formation_core'
        },
        {
            output: '2x bigreactors:basic_reactorcasing',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/dark_steel',
                B: 'bigreactors:graphite_ingot',
                C: 'minecraft:red_nether_bricks'},
            id: 'rayzecraft:reactor_casing_basic'
        },
        {
            output: 'bigreactors:basic_reactorfuelrod',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:ingots/dark_steel',
                B: 'bigreactors:graphite_ingot',
                C: '#forge:glass',
                D: '#forge:ingots/uranium'},
            id: 'rayzecraft:reactor_fuel_rod_basic'
        },
        {
            output: '4x bigreactors:basic_turbinecasing',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: '#forge:ingots/dark_steel',
                B: '#forge:ingots/cyanite',
                C: '#forge:ingots/redstone_alloy'},
            id: 'rayzecraft:turbine_housing_basic'
        },
        {
            output: 'minecraft:stone_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:cobblestone',
                B: 'minecraft:wooden_sword'},
            id: 'rayzecraft:stone_sword'
        },
        {
            output: 'minecraft:iron_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:ingots/iron',
                B: 'minecraft:stone_sword'},
            id: 'rayzecraft:iron_sword'
        },
        {
            output: 'minecraft:golden_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:ingots/gold',
                B: 'minecraft:iron_sword'},
            id: 'rayzecraft:golden_sword'
        },
        {
            output: 'minecraft:diamond_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:gems/diamond',
                B: 'minecraft:golden_sword'},
            id: 'rayzecraft:diamond_sword'
        },
        {
            output: 'naturesaura:infused_iron_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'naturesaura:infused_iron',
                B: 'minecraft:diamond_sword'},
            id: 'rayzecraft:botanists_sword'
        },
        {
            output: 'botania:manasteel_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:ingots/manasteel',
                B: 'naturesaura:infused_iron_sword'},
            id: 'rayzecraft:manasteel_sword'
        },
        {
            output: 'naturesaura:sky_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'naturesaura:sky_ingot',
                B: 'botania:manasteel_sword'},
            id: 'rayzecraft:skyseekers_sword'
        },
        {
            output: 'mekanismtools:refined_glowstone_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'mekanism:ingot_refined_glowstone',
                B: 'naturesaura:sky_sword'},
            id: 'rayzecraft:refined_glowstone_sword'
        },
        {
            output: 'minecraft:netherite_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: '#forge:ingots/netherite',
                B: 'mekanismtools:refined_glowstone_sword'},
            id: 'rayzecraft:netherite_sword'
        },
        {
            output: 'mekanismtools:refined_obsidian_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'mekanism:ingot_refined_obsidian',
                B: 'minecraft:netherite_sword'},
            id: 'rayzecraft:refined_obsidian_sword'
        },
        {
            output: 'mysticalagriculture:inferium_sword',
            pattern: [' B ',
                      'ACA',
                      ' B '],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'mysticalagriculture:inferium_gemstone',
                C: 'mekanismtools:refined_obsidian_sword'},
            id: 'rayzecraft:inferium_sword'
        },
        {
            output: 'deeperdarker:warden_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'minecraft:echo_shard',
                B: 'mysticalagriculture:inferium_sword'},
            id: 'rayzecraft:warden_sword'
        },
        {
            output: 'mysticalagriculture:prudentium_sword',
            pattern: [' B ',
                      'ACA',
                      ' B '],
            key: {
                A: 'mysticalagriculture:prudentium_ingot',
                B: 'mysticalagriculture:prudentium_gemstone',
                C: 'deeperdarker:warden_sword'},
            id: 'rayzecraft:prudentium_sword'
        },
        {
            output: 'forbidden_arcanus:draco_arcanus_sword',
            pattern: [' A ',
                      ' C ',
                      ' B '],
            key: {
                A: 'forbidden_arcanus:dragon_scale',
                B: 'mysticalagriculture:prudentium_sword',
                C: 'forbidden_arcanus:golden_dragon_scale'},
            id: 'rayzecraft:draco_arcanus_sword'
        },
        {
            output: 'mysticalagriculture:tertium_sword',
            pattern: [' B ',
                      'ACA',
                      ' B '],
            key: {
                A: 'mysticalagriculture:tertium_ingot',
                B: 'mysticalagriculture:tertium_gemstone',
                C: 'forbidden_arcanus:draco_arcanus_sword'},
            id: 'rayzecraft:tertium_sword'
        },
        {
            output: 'projecte:dm_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'projecte:dark_matter',
                B: 'mysticaladaptations:insanium_sword'},
            id: 'rayzecraft:dark_matter_sword'
        },
        {
            output: 'enigmaticlegacy:etherium_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'enigmaticlegacy:etherium_ingot',
                B: 'projecte:dm_sword'},
            id: 'rayzecraft:etherium_sword'
        },
        {
            output: 'projecte:rm_sword',
            pattern: [' A ',
                      ' A ',
                      ' B '],
            key: {
                A: 'projecte:red_matter',
                B: 'enigmaticlegacy:etherium_sword'},
            id: 'rayzecraft:red_matter_sword'
        },
        {
            output: 'mekanism:precision_sawmill',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'mekanism:basic_control_circuit',
                C: 'mekanism:alloy_infused',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:precision_sawmill'
        },
        {
            output: 'mekanism:fuelwood_heater',
            pattern: ['ABA',
                      'CDC',
                      'AAA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'mekanism:basic_control_circuit',
                C: 'minecraft:blast_furnace',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:fuelwood_heater'
        },
        {
            output: 'mekanism:teleporter',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'industrialforegoing:machine_frame_advanced',
                C: 'mekanism:teleportation_core'},
            id: 'rayzecraft:teleporter'
        },
        {
            output: 'mekanism:combiner',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:alloy_reinforced',
                B: 'mekanism:elite_control_circuit',
                C: 'allthecompressed:cobblestone_3x',
                D: 'industrialforegoing:machine_frame_advanced'},
            id: 'rayzecraft:combiner'
        },
        {
            output: 'mekanism:antiprotonic_nucleosynthesizer',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:alloy_atomic',
                B: 'mekanism:ultimate_control_circuit',
                C: 'mekanism:pellet_antimatter',
                D: 'industrialforegoing:machine_frame_supreme'},
            id: 'rayzecraft:antiprotonic_nucleosynthesizer'
        },
        {
            output: 'mekanism:chemical_dissolution_chamber',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:ingot_refined_obsidian',
                B: 'mekanism:basic_chemical_tank',
                C: 'mekanism:ultimate_control_circuit',
                D: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:chemical_dissolution_chamber'
        },
        {
            output: 'mekanism:security_desk',
            pattern: ['ABA',
                      'CDC',
                      'AEA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'botania:mana_glass',
                C: 'mekanism:elite_control_circuit',
                D: 'industrialforegoing:machine_frame_pity',
                E: 'mekanism:teleportation_core'},
            id: 'rayzecraft:security_desk'
        },
        {
            output: 'mekanism:solar_neutron_activator',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'mekanism:alloy_reinforced',
                B: 'mekanism:hdpe_sheet',
                C: 'mekanism:elite_control_circuit',
                D: 'industrialforegoing:machine_frame_simple',
                E: '#forge:storage_blocks/bronze'},
            id: 'rayzecraft:solar_neutron_activator'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['ABA',
                      'BCB',
                      'ADA'],
            key: {
                A: '#forge:ingots/tin',
                B: 'minecraft:redstone',
                C: 'industrialforegoing:machine_frame_pity',
                D: 'mekanism:energy_tablet'},
            id: 'rayzecraft:resistive_heater'
        },
        {
            output: 'mekanism:energized_smelter',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'minecraft:redstone',
                B: 'mekanism:basic_control_circuit',
                C: '#forge:glass',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:energized_smelter'
        },
        {
            output: 'mekanism:formulaic_assemblicator',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'minecraft:crafting_table',
                C: 'mekanism:basic_control_circuit',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:formulaic_assemblicator'
        },
        {
            output: 'mekanism:nutritional_liquifier',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'minecraft:redstone',
                B: 'mekanism:basic_control_circuit',
                C: 'minecraft:bowl',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:nutritional_liquifier'
        },
        {
            output: 'mekanism:modification_station',
            pattern: ['ABA',
                      'CDC',
                      'AEA'],
            key: {
                A: 'mekanism:modification_station',
                B: '#forge:chests/wooden',
                C: 'mekanism:ultimate_control_circuit',
                D: 'industrialforegoing:machine_frame_advanced',
                E: 'mekanism:pellet_polonium'},
            id: 'rayzecraft:modification_station'
        },
        {
            output: 'mekanism:chemical_crystallizer',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'mekanism:ingot_refined_obsidian',
                B: 'mekanism:block_fluorite',
                C: 'mekanism:ultimate_control_circuit',
                D: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:chemical_crystallizer'
        },
        {
            output: 'packagedmekemicals:chemical_package_filler',
            pattern: ['ABA',
                      'CDC',
                      'AEA'],
            key: {
                A: '#forge:ingots/osmium',
                B: '#forge:ingots/osmium',
                C: 'mekanism:basic_control_circuit',
                D: 'industrialforegoing:machine_frame_pity',
                E: 'mekanism:basic_chemical_tank'},
            id: 'rayzecraft:chemical_package_filler'
        },
        {
            output: 'mekanism:laser',
            pattern: ['AB ',
                      'ACD',
                      'AB '],
            key: {
                A: 'mekanism:alloy_reinforced',
                B: 'mekanism:energy_tablet',
                C: 'industrialforegoing:machine_frame_simple',
                D: 'botania:mana_diamond'},
            id: 'rayzecraft:mekanism_laser'
        },
        {
            output: 'mekanism:seismic_vibrator',
            pattern: ['ABA',
                      'CDC',
                      'AAA'],
            key: {
                A: '#forge:ingots/tin',
                B: 'minecraft:lapis_block',
                C: 'mekanism:basic_control_circuit',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:seismic_vibrator'
        },
        {
            output: 'mekanism:crusher',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: 'minecraft:redstone',
                B: 'mekanism:basic_control_circuit',
                C: 'bloodmagic:lavacrystal',
                D: 'industrialforegoing:machine_frame_pity'},
            id: 'rayzecraft:crusher'
        },
        {
            output: 'mekanism:electric_pump',
            pattern: [' A ',
                      'BCB',
                      'DDD'],
            key: {
                A: 'minecraft:bucket',
                B: 'mekanism:alloy_infused',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:ingots/osmium'},
            id: 'rayzecraft:electric_pump'
        },
        {
            output: '4x mekanism_extras:reinforced_induction_casing',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: 'mekanism:induction_casing',
                B: 'industrialforegoing:machine_frame_simple',
                C: 'mekanism:energy_tablet'},
            id: 'rayzecraft:reinforced_induction_casing'
        },
        {
            output: '4x mekanismgenerators:fusion_reactor_frame',
            pattern: ['ABA',
                      'BCB',
                      'ABA'],
            key: {
                A: 'mekanism_extras:alloy_thermonuclear',
                B: 'mekanism:pellet_polonium',
                C: 'industrialforegoing:machine_frame_advanced'},
            id: 'rayzecraft:fusion_reactor_frame'
        },
        {
            output: 'thermal:machine_furnace',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:redstone',
                B: 'minecraft:bricks',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/copper',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:redstone_furnace'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'thermal:saw_blade',
                B: '#forge:cobblestone',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/copper',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:thermal_sawmill'
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:piston',
                B: 'minecraft:flint',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/copper',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:thermal_pulverizer'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:blast_furnace',
                B: '#forge:sandstone',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/invar',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:induction_smelter'
        },
        {
            output: 'thermal:machine_centrifuge',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:compass',
                B: '#forge:ingots/tin',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/constantan',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:centrifugal_separator'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:glass',
                B: 'minecraft:nether_bricks',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/invar',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:magma_crucible'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:glass',
                B: 'minecraft:blue_ice',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/invar',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:blast_chiller'
        },
        {
            output: 'thermal:machine_refinery',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:glass',
                B: '#forge:ingots/copper',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/invar',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:fractionating_still'
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:blaze_rod',
                B: 'minecraft:nether_bricks',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/constantan',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:pyrolyzer'
        },
        {
            output: 'thermal:machine_bottler',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:bucket',
                B: '#forge:glass',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/copper',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:fluid_encapsulator'
        },
        {
            output: 'thermal:machine_brewer',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:brewing_stand',
                B: '#forge:glass',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/constantan',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:alchemical_imbuer'
        },
        {
            output: 'thermal:machine_crystallizer',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:glass',
                B: '#forge:plates/signalum',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/constantan',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:crystallizer'
        },
        {
            output: 'thermal:machine_crafter',
            pattern: [' A ',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:crafting_table',
                B: '#forge:ingots/tin',
                C: 'industrialforegoing:machine_frame_pity',
                D: '#forge:gears/copper',
                E: 'thermal:rf_coil'},
            id: 'rayzecraft:sequential_fabricator'
        },
        {
            output: 'enderio:wired_charger',
            pattern: ['AAA',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/copper_alloy',
                B: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:wired_charger'
        },
        {
            output: 'enderio:sag_mill',
            pattern: ['AAA',
                      'BCB',
                      'DED'],
            key: {
                A: 'minecraft:flint',
                B: '#forge:ingots/dark_steel',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#forge:gears/iron',
                E: 'minecraft:piston'},
            id: 'rayzecraft:sag_mill'
        },
        {
            output: 'enderio:painting_machine',
            pattern: ['AAA',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:dyes',
                B: '#forge:ingots/copper_alloy',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#forge:gears/iron',
                E: '#forge:ingots/redstone_alloy'},
            id: 'rayzecraft:painting_machine'
        },
        {
            output: 'enderio:alloy_smelter',
            pattern: ['ABA',
                      'BCB',
                      'DED'],
            key: {
                A: '#forge:ingots/dark_steel',
                B: 'minecraft:blast_furnace',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#forge:gears/iron',
                E: 'minecraft:cauldron'},
            id: 'rayzecraft:alloy_smelter'
        },
        {
            output: 'enderio:stirling_generator',
            pattern: ['ABA',
                      'CDC',
                      'EEE'],
            key: {
                A: 'minecraft:stone_bricks',
                B: 'minecraft:blast_furnace',
                C: '#forge:ingots/dark_steel',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'minecraft:piston'},
            id: 'rayzecraft:stirling_generator'
        },
        {
            output: 'enderio:slice_and_splice',
            pattern: ['ABA',
                      'ACA',
                      'DED'],
            key: {
                A: '#forge:ingots/soularium',
                B: '#forge:heads',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#forge:gears/energized',
                E: 'enderio:end_steel_bars'},
            id: 'rayzecraft:slice_n_splice'
        },
        {
            output: 'enderio:soul_engine',
            pattern: ['ABA',
                      'CDC',
                      'AEA'],
            key: {
                A: '#forge:ingots/soularium',
                B: '#enderio:fused_quartz',
                C: 'minecraft:bucket',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'enderio:zombie_electrode'},
            id: 'rayzecraft:soul_engine'
        },
        {
            output: 'enderio:soul_binder',
            pattern: ['ABA',
                      'CDC',
                      'AEA'],
            key: {
                A: '#forge:ingots/soularium',
                B: 'enderio:empty_soul_vial',
                C: '#forge:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'enderio:z_logic_controller'},
            id: 'rayzecraft:soul_binder'
        },
        {
            output: 'enderio:xp_obelisk',
            pattern: [' A ',
                      ' B ',
                      'BCB'],
            key: {
                A: 'enderio:experience_rod',
                B: '#forge:ingots/soularium',
                C: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:xp_obelisk'
        },
        {
            output: 'mysticalagriculture:harvester',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:ingots/iron',
                B: '#forge:ingots/soulium',
                C: 'mysticalagriculture:diamond_scythe',
                D: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:mystical_harvester'
        },
        {
            output: 'mysticalagriculture:seed_reprocessor',
            pattern: ['ABA',
                      'CDC',
                      'ABA'],
            key: {
                A: '#forge:ingots/iron',
                B: '#forge:ingots/soulium',
                C: 'minecraft:diamond_hoe',
                D: 'industrialforegoing:machine_frame_simple'},
            id: 'rayzecraft:seed_reprocessor'
        },
        {
            output: 'mekanism:laser_tractor_beam',
            pattern: [' A ',
                      ' B ',
                      '   '],
            key: {
                A: 'projecte:alchemical_chest',
                B: 'mekanism:laser_amplifier'},
            id: 'rayzecraft:laser_tractor_beam'
        },
        {
            output: 'mekanism:chemical_oxidizer',
            pattern: ['ABA',
                      'CDE',
                      'ABA'],
            key: {
                A: 'mekanism:alloy_infused',
                B: 'mekanism:basic_control_circuit',
                C: 'projecte:alchemical_chest',
                D: 'mekanism:dynamic_tank',
                E:'mekanism:basic_chemical_tank' },
            id: 'rayzecraft:chemical_oxidizer'
        },
        {
            output: 'botania:livingwood_bow',
            pattern: [' AB',
                      'C B',
                      ' AB'],
            key: {
                A: 'botania:livingwood_twig',
                B: 'botania:mana_string',
                C: 'minecraft:bow'},
            id: 'rayzecraft:livingwood_bow'
        },
        {
            output: 'botania:crystal_bow',
            pattern: [' AB',
                      'C B',
                      ' AB'],
            key: {
                A: 'botania:dragonstone',
                B: 'botania:mana_string',
                C: 'botania:livingwood_bow'},
            id: 'rayzecraft:crystal_bow'
        },
        {
            output: 'mekanism:electric_bow',
            pattern: [' AB',
                      'C B',
                      ' AB'],
            key: {
                A: 'mekanism:energy_tablet',
                B: 'botania:mana_string',
                C: 'botania:crystal_bow'},
            id: 'rayzecraft:electric_bow'
        },
        {
            output: 'mysticalagriculture:inferium_bow',
            pattern: [' A ',
                      'BCB',
                      ' A '],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'mysticalagriculture:inferium_gemstone',
                C: 'mekanism:electric_bow'},
            id: 'rayzecraft:inferium_bow'
        },
        {
            output: 'minecraft:iron_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/iron',
                B: 'minecraft:leather_helmet'},
            id: 'rayzecraft:iron_helmet'
        },
        {
            output: 'minecraft:iron_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'minecraft:leather_chestplate'},
            id: 'rayzecraft:iron_chestplate'
        },
        {
            output: 'minecraft:iron_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/iron',
                B: 'minecraft:leather_leggings'},
            id: 'rayzecraft:iron_leggings'
        },
        {
            output: 'minecraft:iron_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'minecraft:leather_boots'},
            id: 'rayzecraft:iron_boots'
        },
        {
            output: 'minecraft:golden_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/gold',
                B: 'minecraft:iron_helmet'},
            id: 'rayzecraft:gold_helmet'
        },
        {
            output: 'minecraft:golden_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/gold',
                B: 'minecraft:iron_chestplate'},
            id: 'rayzecraft:gold_chestplate'
        },
        {
            output: 'minecraft:golden_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/gold',
                B: 'minecraft:iron_leggings'},
            id: 'rayzecraft:gold_leggings'
        },
        {
            output: 'minecraft:golden_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/gold',
                B: 'minecraft:iron_boots'},
            id: 'rayzecraft:gold_boots'
        },
        {
            output: 'naturesaura:infused_iron_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'naturesaura:infused_iron',
                B: 'minecraft:golden_helmet'},
            id: 'rayzecraft:botanists_helmet'
        },
        {
            output: 'naturesaura:infused_iron_chest',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'naturesaura:infused_iron',
                B: 'minecraft:golden_chestplate'},
            id: 'rayzecraft:botanists_chestplate'
        },
        {
            output: 'naturesaura:infused_iron_pants',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'naturesaura:infused_iron',
                B: 'minecraft:golden_leggings'},
            id: 'rayzecraft:botanists_leggings'
        },
        {
            output: 'naturesaura:infused_iron_shoes',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'naturesaura:infused_iron',
                B: 'minecraft:golden_boots'},
            id: 'rayzecraft:botanists_boots'
        },
        {
            output: 'minecraft:diamond_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:gems/diamond',
                B: 'naturesaura:infused_iron_helmet'},
            id: 'rayzecraft:diamond_helmet'
        },
        {
            output: 'minecraft:diamond_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:gems/diamond',
                B: 'naturesaura:infused_iron_chest'},
            id: 'rayzecraft:diamond_chestplate'
        },
        {
            output: 'minecraft:diamond_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:gems/diamond',
                B: 'naturesaura:infused_iron_pants'},
            id: 'rayzecraft:diamond_leggings'
        },
        {
            output: 'minecraft:diamond_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:gems/diamond',
                B: 'naturesaura:infused_iron_shoes'},
            id: 'rayzecraft:diamond_boots'
        },
        {
            output: 'pneumaticcraft:compressed_iron_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'minecraft:diamond_helmet'},
            id: 'rayzecraft:compressed_iron_helmet'
        },
        {
            output: 'pneumaticcraft:compressed_iron_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'minecraft:diamond_chestplate'},
            id: 'rayzecraft:compressed_iron_chestplate'
        },
        {
            output: 'pneumaticcraft:compressed_iron_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'minecraft:diamond_leggings'},
            id: 'rayzecraft:compressed_iron_leggings'
        },
        {
            output: 'pneumaticcraft:compressed_iron_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'minecraft:diamond_boots'},
            id: 'rayzecraft:compressed_iron_boots'
        },
        {
            output: 'botania:manasteel_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:compressed_iron_helmet'},
            id: 'rayzecraft:manasteel_helmet'
        },
        {
            output: 'botania:manasteel_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:compressed_iron_chestplate'},
            id: 'rayzecraft:manasateel_chestplate'
        },
        {
            output: 'botania:manasteel_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:compressed_iron_leggings'},
            id: 'rayzecraft:manasteel_leggings'
        },
        {
            output: 'botania:manasteel_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:compressed_iron_boots'},
            id: 'rayzecraft:manasteel_boots'
        },
        {
            output: 'botania:elementium_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/elementium',
                B: 'botania:manasteel_helmet'},
            id: 'rayzecraft:elementium_helmet'
        },
        {
            output: 'botania:elementium_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/elementium',
                B: 'botania:manasteel_chestplate'},
            id: 'rayzecraft:elementium_chestplate'
        },
        {
            output: 'botania:elementium_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/elementium',
                B: 'botania:manasteel_leggings'},
            id: 'rayzecraft:elementium_leggings'
        },
        {
            output: 'botania:elementium_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/elementium',
                B: 'botania:manasteel_boots'},
            id: 'rayzecraft:elementium_boots'
        },
        {
            output: 'minecraft:netherite_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/netherite',
                B: 'botania:elementium_helmet'},
            id: 'rayzecraft:netherite_helmet'
        },
        {
            output: 'minecraft:netherite_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/netherite',
                B: 'botania:elementium_chestplate'},
            id: 'rayzecraft:netherite_chestplate'
        },
        {
            output: 'minecraft:netherite_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/netherite',
                B: 'botania:elementium_leggings'},
            id: 'rayzecraft:netherite_leggings'
        },
        {
            output: 'minecraft:netherite_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: '#forge:ingots/netherite',
                B: 'botania:elementium_boots'},
            id: 'rayzecraft:netherite_boots'
        },
        {
            output: 'pneumaticcraft:pneumatic_helmet',
            pattern: ['CBC',
                      'A A',
                      '   '],
            key: {
                A: 'pneumaticcraft:reinforced_air_canister',
                B: 'minecraft:netherite_helmet',
                C: 'pneumaticcraft:printed_circuit_board'},
            id: 'rayzecraft:pneumatic_helmet'
        },
        {
            output: 'pneumaticcraft:pneumatic_chestplate',
            pattern: ['A A',
                      'CBC',
                      'AAA'],
            key: {
                A: 'pneumaticcraft:reinforced_air_canister',
                B: 'minecraft:netherite_chestplate',
                C: 'pneumaticcraft:printed_circuit_board'},
            id: 'rayzecraft:pneumatic_chestplate'
        },
        {
            output: 'pneumaticcraft:pneumatic_leggings',
            pattern: ['CBC',
                      'A A',
                      'A A'],
            key: {
                A: 'pneumaticcraft:reinforced_air_canister',
                B: 'minecraft:netherite_leggings',
                C: 'pneumaticcraft:printed_circuit_board'},
            id: 'rayzecraft:pneumatic_leggings'
        },
        {
            output: 'pneumaticcraft:pneumatic_boots',
            pattern: ['   ',
                      'C C',
                      'ABA'],
            key: {
                A: 'pneumaticcraft:reinforced_air_canister',
                B: 'minecraft:netherite_boots',
                C: 'pneumaticcraft:printed_circuit_board'},
            id: 'rayzecraft:pneumatic_boots'
        },
        {
            output: 'mekanismtools:refined_glowstone_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/refined_glowstone',
                B: 'pneumaticcraft:pneumatic_helmet'},
            id: 'rayzecraft:refined_glowstone_helmet'
        },
        {
            output: 'mekanismtools:refined_glowstone_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/refined_glowstone',
                B: 'pneumaticcraft:pneumatic_chestplate'},
            id: 'rayzecraft:refined_glowstone_chestplate'
        },
        {
            output: 'mekanismtools:refined_glowstone_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/refined_glowstone',
                B: 'pneumaticcraft:pneumatic_leggings'},
            id: 'rayzecraft:refined_glowstone_leggings'
        },
        {
            output: 'mekanismtools:refined_glowstone_boots',
            pattern: ['   ',
                      'A A ',
                      'ABA'],
            key: {
                A: '#forge:ingots/refined_glowstone',
                B: 'pneumaticcraft:pneumatic_boots'},
            id: 'rayzecraft:refined_glowstone_boots'
        },
        {
            output: 'naturesaura:sky_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'naturesaura:sky_ingot',
                B: 'mekanismtools:refined_glowstone_helmet'},
            id: 'rayzecraft:skysseekers_helmet'
        },
        {
            output: 'naturesaura:sky_chest',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'naturesaura:sky_ingot',
                B: 'mekanismtools:refined_glowstone_chestplate'},
            id: 'rayzecraft:skysseekers_chestplate'
        },
        {
            output: 'naturesaura:sky_pants',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'naturesaura:sky_ingot',
                B: 'mekanismtools:refined_glowstone_leggings'},
            id: 'rayzecraft:skysseekers_leggings'
        },
        {
            output: 'naturesaura:sky_shoes',
            pattern: ['   ',
                      'A A ',
                      'ABA'],
            key: {
                A: 'naturesaura:sky_ingot',
                B: 'mekanismtools:refined_glowstone_boots'},
            id: 'rayzecraft:skysseekers_boots'
        },
        {
            output: 'mysticalagriculture:inferium_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'naturesaura:sky_helmet'},
            id: 'rayzecraft:inferium_helmet'
        },
        {
            output: 'mysticalagriculture:inferium_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'naturesaura:sky_chest'},
            id: 'rayzecraft:inferium_chestplate'
        },
        {
            output: 'mysticalagriculture:inferium_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'naturesaura:sky_pants'},
            id: 'rayzecraft:inferium_leggings'
        },
        {
            output: 'mysticalagriculture:inferium_boots',
            pattern: ['   ',
                      'A A ',
                      'ABA'],
            key: {
                A: 'mysticalagriculture:inferium_ingot',
                B: 'naturesaura:sky_shoes'},
            id: 'rayzecraft:inferium_boots'
        },
        {
            output: 'naturesaura:depth_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'naturesaura:depth_ingot',
                B: 'mysticalagriculture:prudentium_helmet'},
            id: 'rayzecraft:soul_striders_helmet'
        },
        {
            output: 'naturesaura:depth_chest',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'naturesaura:depth_ingot',
                B: 'mysticalagriculture:prudentium_chestplate'},
            id: 'rayzecraft:soul_striders_chestplate'
        },
        {
            output: 'naturesaura:depth_pants',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'naturesaura:depth_ingot',
                B: 'mysticalagriculture:prudentium_leggings'},
            id: 'rayzecraft:soul_striders_leggings'
        },
        {
            output: 'naturesaura:depth_shoes',
            pattern: ['   ',
                      'A A ',
                      'ABA'],
            key: {
                A: 'naturesaura:depth_ingot',
                B: 'mysticalagriculture:prudentium_boots'},
            id: 'rayzecraft:soul_striders_boots'
        },
        {
            output: 'botania:terrasteel_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: '#forge:ingots/terrasteel',
                B: 'naturesaura:depth_helmet'},
            id: 'rayzecraft:terrasteel_helmet'
        },
        {
            output: 'botania:terrasteel_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: '#forge:ingots/terrasteel',
                B: 'naturesaura:depth_chest'},
            id: 'rayzecraft:terrasteel_chestplate'
        },
        {
            output: 'botania:terrasteel_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: '#forge:ingots/terrasteel',
                B: 'naturesaura:depth_pants'},
            id: 'rayzecraft:terrasteel_leggings'
        },
        {
            output: 'botania:terrasteel_boots',
            pattern: ['   ',
                      'A A ',
                      'ABA'],
            key: {
                A: '#forge:ingots/terrasteel',
                B: 'naturesaura:depth_shoes'},
            id: 'rayzecraft:terrasteel_boots'
        },
        {
            output: 'mythicbotany:alfsteel_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'mythicbotany:alfsteel_ingot',
                B: 'mysticaladaptations:insanium_helmet'},
            id: 'rayzecraft:alfsteel_helmet'
        },
        {
            output: 'mythicbotany:alfsteel_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'mythicbotany:alfsteel_ingot',
                B: 'mysticaladaptations:insanium_chestplate'},
            id: 'rayzecraft:alfsteel_chestplate'
        },
        {
            output: 'mythicbotany:alfsteel_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'mythicbotany:alfsteel_ingot',
                B: 'mysticaladaptations:insanium_leggings'},
            id: 'rayzecraft:alfsteel_leggings'
        },
        {
            output: 'mythicbotany:alfsteel_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'mythicbotany:alfsteel_ingot',
                B: 'mysticaladaptations:insanium_boots'},
            id: 'rayzecraft:alfsteel_boots'
        },
        {
            output: 'mysticalagriculture:tertium_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'mysticalagriculture:tertium_ingot',
                B: 'botania:terrasteel_helmet'},
            id: 'rayzecraft:tertium_helmet'
        },
        {
            output: 'mysticalagriculture:tertium_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'mysticalagriculture:tertium_ingot',
                B: 'botania:terrasteel_chestplate'},
            id: 'rayzecraft:tertium_chestplate'
        },
        {
            output: 'mysticalagriculture:tertium_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'mysticalagriculture:tertium_ingot',
                B: 'botania:terrasteel_leggings'},
            id: 'rayzecraft:tertium_leggings'
        },
        {
            output: 'mysticalagriculture:tertium_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'mysticalagriculture:tertium_ingot',
                B: 'botania:terrasteel_boots'},
            id: 'rayzecraft:tertium_boots'
        },
        {
            output: 'projecte:dm_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'projecte:dark_matter',
                B: 'mythicbotany:alfsteel_helmet'},
            id: 'rayzecraft:dark_matter_helmet'
        },
        {
            output: 'projecte:dm_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'projecte:dark_matter',
                B: 'mythicbotany:alfsteel_chestplate'},
            id: 'rayzecraft:dark_matter_chestplate'
        },
        {
            output: 'projecte:dm_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'projecte:dark_matter',
                B: 'mythicbotany:alfsteel_leggings'},
            id: 'rayzecraft:dark_matter_leggings'
        },
        {
            output: 'projecte:dm_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'projecte:dark_matter',
                B: 'mythicbotany:alfsteel_boots'},
            id: 'rayzecraft:dark_matter_boots'
        },
        {
            output: 'projecte:rm_helmet',
            pattern: ['ABA',
                      'A A',
                      '   '],
            key: {
                A: 'projecte:red_matter',
                B: 'projecte:dm_helmet'},
            id: 'rayzecraft:red_matter_helmet'
        },
        {
            output: 'projecte:rm_chestplate',
            pattern: ['A A',
                      'ABA',
                      'AAA'],
            key: {
                A: 'projecte:red_matter',
                B: 'projecte:dm_chestplate'},
            id: 'rayzecraft:red_matter_chestplate'
        },
        {
            output: 'projecte:rm_leggings',
            pattern: ['ABA',
                      'A A',
                      'A A'],
            key: {
                A: 'projecte:red_matter',
                B: 'projecte:dm_leggings'},
            id: 'rayzecraft:red_matter_leggings'
        },
        {
            output: 'projecte:rm_boots',
            pattern: ['   ',
                      'A A',
                      'ABA'],
            key: {
                A: 'projecte:red_matter',
                B: 'projecte:dm_boots'},
            id: 'rayzecraft:red_matter_boots'
        },
        {
            output: 'mekanism:mekasuit_helmet',
            pattern: ['ABA',
                      'ACA',
                      'DED'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'mekanism_extras:supreme_control_circuit',
                C: 'projecte:rm_helmet',
                D: 'mekanism:pellet_polonium',
                E: 'mekanism_extras:supreme_control_circuit'},
            id: 'rayzecraft:meka_suit_helmet'
        },
        {
            output: 'mekanism:mekasuit_bodyarmor',
            pattern: ['ABA',
                      'ACA',
                      'DED'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'mekanism_extras:supreme_control_circuit',
                C: 'projecte:rm_chestplate',
                D: 'mekanism:pellet_polonium',
                E: 'mekanism_extras:supreme_control_circuit'},
            id: 'rayzecraft:meka_suit_chesplate'
        },
        {
            output: 'mekanism:mekasuit_pants',
            pattern: ['ABA',
                      'ACA',
                      'DED'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'mekanism_extras:supreme_control_circuit',
                C: 'projecte:rm_leggings',
                D: 'mekanism:pellet_polonium',
                E: 'mekanism_extras:supreme_control_circuit'},
            id: 'rayzecraft:meka_suit_leggings'
        },
        {
        output: 'mekanism:mekasuit_boots',
        pattern: ['ABA',
                  'ACA',
                  'DED'],
        key: {
            A: 'mekanism:hdpe_sheet',
            B: 'mekanism_extras:supreme_control_circuit',
            C: 'projecte:rm_boots',
            D: 'mekanism:pellet_polonium',
            E: 'mekanism_extras:supreme_control_circuit'},
        id: 'rayzecraft:meka_suit_boots'
        },
        {
            output: 'kubejs:foam_powder',
            pattern: ['ABA',
                      'ACA',
                      'ABA'],
            key: {
                A: 'kubejs:stone_dust',
                B: '#forge:sand',
                C: '#forge:clay'},
            id: 'rayzecraft:foam_powder'
            }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
