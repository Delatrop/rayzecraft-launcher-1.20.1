// Author: Davi_MCST

ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'ABBBBBA',
            'ABCCCBA',
            'DCEFECD',
            'DGFHFGD',
            'DCEFECD',
            'ABCCCBA',
            'ABBBBBA'],
            key: {
                A: {item: 'powah:capacitor_spirited'},
                B: {item: 'kubejs:yggdralium_ingot'},
                C: {item: 'industrialforegoing:fertilizer'},
                D: {item: 'pneumaticcraft:plastic'},
                E: {item: 'minecraft:nether_star'},
                F: {item: 'botania:gaia_ingot'},
                G: {item: 'mekanism:teleportation_core'},
                H: {item: 'industrialforegoing:machine_frame_supreme'}},
            result: {item: 'industrialforegoing:hydroponic_bed'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAB BAA',
            'ABCBCBA',
            'DCCCCCD',
            'DDECEDD',
            'FDECEDF',
            'FDEEEDF',
            'FDGGGDF'],
            key: {
                A: {item: 'pneumaticcraft:printed_circuit_board'},
                B: {item: 'minecraft:netherite_block'},
                C: {item: 'thermal:phytogro'},
                D: {item: 'kubejs:yggdralium_ingot'},
                E: {item: 'minecraft:nether_star'},
                F: {item: 'industrialforegoing:machine_frame_supreme'},
                G: {item: 'bhc:blue_heart_canister'}},
            result: {item: 'bhc:soul_heart_canister'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'ABBCCDE',
            'BBCFGDD',
            'BCFHIGB',
            'CFHHHFB',
            'CGIHFCB',
            'DDGFCBB',
            'EDCCBBA'],
             key: {
                A: {item: 'industrialforegoing:machine_frame_simple'},
                B: {item: 'mekanism:teleportation_core'},
                C: {item: 'powah:spirited_crystal_block'},
                D: {item: 'minecraft:nether_star'},
                E: {item: 'bloodmagic:magicianbloodorb'},
                F: {item: 'minecraft:netherite_block'},
                G: {item: 'bigreactors:ludicrite_block'},
                H: {item: 'industrialforegoing:pink_slime_ingot'},
                I: {item: 'endrem:exotic_eye'}},
            result: {item: 'industrialforegoing:machine_frame_advanced'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABBB',
            'ACCCB',
            'DDEEB',
            'FDEAA',
            'FFEAA'],
             key: {
                A: {item: 'powah:nitro_crystal_block'},
                B: {item: 'minecraft:netherite_block'},
                C: {item: 'bhc:green_heart_canister'},
                D: {item: 'industrialforegoing:machine_frame_advanced'},
                E: {item: 'bhc:blue_heart'},
                F: {item: 'pneumaticcraft:printed_circuit_board'}},
            result: {item: 'bhc:blue_heart_canister'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ABCBA',
            'DDEDD',
            'DDBDD',
            'DDDDD'],
             key: {
                A: {item: 'minecraft:shulker_box'},
                B: {item: 'minecraft:nether_star'},
                C: {item: 'bhc:yellow_heart_canister'},
                D: {item: 'powah:spirited_crystal_block'},
                E: {item: 'bhc:green_heart'}},
            result: {item: 'bhc:green_heart_canister'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABBBA',
            'ABBBA',
            'CBDBC',
            'CBBBC',
            'CEEEC'],
             key: {
                A: {item: 'minecraft:netherite_ingot'},
                B: {item: 'bhc:yellow_heart'},
                C: {item: 'minecraft:enchanted_golden_apple'},
                D: {item: 'bhc:red_heart_canister'},
                E: {item: 'minecraft:nether_star'}},
            result: {item: 'bhc:yellow_heart_canister'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '   AAA   ',
            '   AAA   ',
            '   AAA   ',
            '   AAA   ',
            'B  AAA  B',
            'BBCDDDCBB',
            'EEEDDDEEE',
            'FFFDDDFFF',
            'FFFDDDFFF'],
             key: {
                A: {item: 'bhc:blue_heart_canister'},
                B: {item: 'powah:capacitor_nitro'},
                C: {item: 'bhc:heart_amulet'},
                D: {item: 'bhc:soul_heart_canister'},
                E: {item: 'forbidden_arcanus:ferrognetic_mixture'},
                F: {item: 'industrialforegoing:machine_frame_supreme'}},
            result: {item: 'bhc:blade_of_vitality'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'ABCDEDCBA',
            'BCDFFFGCB',
            'CDFHHHFGC',
            'DFIJKJIFD',
            'EFHKKKHFE',
            'DFIJKJIFD',
            'CGFGGGFDC',
            'BCGFFFDCB',
            'ABCDEDCBA'],
             key: {
                A: {item: 'industrialforegoing:machine_frame_advanced'},
                B: {item: 'thermal_extra:dragonsteel_ingot'},
                C: {item: 'powah:capacitor_spirited'},
                D: {item: 'bigreactors:ridiculite_block'},
                E: {item: 'extendedcrafting:nether_star_block'},
                F: {item: 'powah:crystal_nitro'},
                G: {item: 'bloodmagic:archmagebloodorb'},
                H: {item: 'mekanism:pellet_polonium'},
                I: {item: 'pneumaticcraft:printed_circuit_board'},
                J: {item: 'kubejs:yggdralium_ingot'},
                K: {item: 'industrialforegoing:ether_gas_bucket'}},
            result: {item: 'industrialforegoing:machine_frame_supreme'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'ABBCBBA',
            'BBDDDBB',
            'CDDDDDC',
            'EEFFFEE',
            'EEGGGEE',
            'EGGGGGE',
            'GGGGGGG'],
             key: {
                A: {item: 'bloodmagic:masterbloodorb'},
                B: {item: 'minecraft:wither_skeleton_skull'},
                C: {item: 'kubejs:yggdralium_ingot'},
                D: {item: 'powah:crystal_nitro'},
                E: {item: 'minecraft:nether_star'},
                F: {item: 'industrialforegoing:machine_frame_advanced'},
                G: {item: 'minecraft:soul_sand'}},
            result: {item: 'industrialforegoing:wither_builder'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABCBA',
            'ADEDA',
            'AFCFA',
            'AAAAA'],
             key: {
                A: {item: 'enderio:dark_steel_block'},
                B: {item: 'industrialforegoing:conveyor'},
                C: {item: 'minecraft:nether_star'},
                D: {item: 'minecraft:anvil'},
                E: {item: 'apotheosis:library'},
                F: {item: 'industrialforegoing:machine_frame_advanced'}},
            result: {item: 'industrialforegoing:enchantment_applicator'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'EDFDE',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'enderio:dark_steel_block'},
                B: {item: 'industrialforegoing:machine_frame_advanced'},
                C: {item: 'enderio:energized_gear'},
                D: {item: 'industrialforegoing:conveyor'},
                E: {item: 'minecraft:nether_star'},
                F: {item: 'apotheosis:ender_library'}},
            result: {item: 'industrialforegoing:enchantment_extractor'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABCBA',
            'ADEDA',
            'AFDFA',
            'AAAAA'],
             key: {
                A: {item: 'enderio:dark_steel_block'},
                B: {item: 'industrialforegoing:machine_frame_advanced'},
                C: {item: 'industrialforegoing:conveyor'},
                D: {item: 'apotheosis:hellshelf'},
                E: {item: 'minecraft:enchanting_table'},
                F: {item: 'minecraft:nether_star'}},
            result: {item: 'industrialforegoing:enchantment_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'ABBBBBA',
            'BCCCCCB',
            'BCDEDCB',
            'BFGEGFB',
            'BHGIGHB',
            'BHHDHHB',
            'JBBBBBJ'],
             key: {
                A: {item: 'industrialforegoing:machine_frame_advanced'},
                B: {item: 'botania:gaia_ingot'},
                C: {item: 'minecraft:netherite_block'},
                D: {item: 'extendedcrafting:nether_star_block'},
                E: {item: 'mekanism:atomic_disassembler'},
                F: {item: 'mekanism_extras:absolute_control_circuit'},
                G: {item: 'industrialforegoing:pink_slime_ingot'},
                H: {item: 'kubejs:yggdralium_ingot'},
                I: {item: 'mekanism:teleportation_core'},
                J: {item: 'powah:capacitor_spirited'}},
            result: {item: 'industrialforegoing:ore_laser_base'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AABBBAA',
            'AABCBAA',
            'AACDCAA',
            'EFCGCFE',
            'HFCDCFH',
            'HFICIFH',
            'HHHHHHH'],
             key: {
                A: {item: 'botania:gaia_ingot'},
                B: {item: 'powah:capacitor_spirited'},
                C: {item: 'minecraft:netherite_block'},
                D: {item: 'extendedcrafting:nether_star_block'},
                E: {item: 'industrialforegoing:machine_frame_advanced'},
                F: {item: 'industrialforegoing:pink_slime_ingot'},
                G: {item: 'mekanism:teleportation_core'},
                H: {item: 'pneumaticcraft:plastic'},
                I: {item: 'kubejs:yggdralium_ingot'}},
            result: {item: 'industrialforegoing:laser_drill'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'A   B',
            ' CDC ',
            ' EFE ',
            ' GHG ',
            'I   J'],
             key: {
                A: {item: 'botania:rune_water'},
                B: {item: 'botania:rune_fire'},
                C: {item: 'pneumaticcraft:upgrade_matrix'},
                D: {item: 'enigmaticlegacy:etherium_ingot'},
                E: {item: 'naturesaura:snow_creator'},
                F: {item: 'botania:rune_mana'},
                G: {item: 'naturesaura:infused_stone'},
                H: {item: 'allthecompressed:hay_block_3x'},
                I: {item: 'botania:rune_air'},
                J: {item: 'botania:rune_earth'}},
            result: {item: 'botania:terra_plate'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AABBCBBAA',
            'DABEEEBAD',
            'DDFEGEHDD',
            'DDBEEEBDD',
            'DDIBJBIDD',
            'DDDDDDDDD',
            'KLMNOPQRS'],
             key: {
                A: {item: '#forge:storage_blocks/elementium'},
                B: {item: 'enigmaticlegacy:etherium_ingot'},
                C: {item: 'ars_elemental:water_focus'},
                D: {item: 'botania:glimmering_dreamwood'},
                E: {item: 'kubejs:queens_slime_ingot'},
                F: {item: 'ars_elemental:earth_focus'},
                G: {item: 'eidolon:prestigious_palm'},
                H: {item: 'ars_elemental:air_focus'},
                I: {item: 'bloodmagic:masterbloodorb'},
                J: {item: 'ars_elemental:fire_focus'},
                K: {item: 'mythicbotany:alfheim_rune'},
                L: {item: 'mythicbotany:midgard_rune'},
                M: {item: 'mythicbotany:helheim_rune'},
                N: {item: 'botania:rune_lust'},
                O: {item: 'botania:rune_mana'},
                P: {item: 'botania:rune_greed'},
                Q: {item: 'botania:rune_gluttony'},
                R: {item: 'mythicbotany:muspelheim_rune'},
                S: {item: 'botania:rune_pride'}},
            result: {item: 'mythicbotany:mana_infuser'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABCCC',
            'BDBEC',
            'CBFBC',
            'CGBDB',
            'CCCBA'],
             key: {
                A: {item: 'mekanism:elite_control_circuit'},
                B: {item: 'pneumaticcraft:drill_bit_compressed_iron'},
                C: {item: '#xnet:cables'},
                D: {item: 'pneumaticcraft:printed_circuit_board'},
                E: {item: 'mekanism_extras:alloy_radiance'},
                F: {item: 'industrialforegoing:machine_frame_advanced'},
                G: {item: 'xnet:controller'}},
            result: {item: 'mekanismgenerators:rotational_complex'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_smelting_factory'}},
            result: {item: 'mekanism:advanced_smelting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_enriching_factory'}},
            result: {item: 'mekanism:advanced_enriching_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_crushing_factory'}},
            result: {item: 'mekanism:advanced_crushing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_compressing_factory'}},
            result: {item: 'mekanism:advanced_compressing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_combining_factory'}},
            result: {item: 'mekanism:advanced_combining_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_purifying_factory'}},
            result: {item: 'mekanism:advanced_purifying_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_injecting_factory'}},
            result: {item: 'mekanism:advanced_injecting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_infusing_factory'}},
            result: {item: 'mekanism:advanced_infusing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_reinforced'},
                B: {item: 'mekanism:advanced_control_circuit'},
                C: {item: '#forge:storage_blocks/osmium'},
                D: {item: 'mekanism:basic_sawing_factory'}},
            result: {item: 'mekanism:advanced_sawing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_smelting_factory'}},
            result: {item: 'mekanism:elite_smelting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_enriching_factory'}},
            result: {item: 'mekanism:elite_enriching_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_crushing_factory'}},
            result: {item: 'mekanism:elite_crushing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_compressing_factory'}},
            result: {item: 'mekanism:elite_compressing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_combining_factory'}},
            result: {item: 'mekanism:elite_combining_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_purifying_factory'}},
            result: {item: 'mekanism:elite_purifying_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_injecting_factory'}},
            result: {item: 'mekanism:elite_injecting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_infusing_factory'}},
            result: {item: 'mekanism:elite_infusing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            'ABA',
            'CDC',
            'ABA'],
             key: {
                A: {item: 'mekanism:alloy_atomic'},
                B: {item: 'mekanism:ultimate_control_circuit'},
                C: {item: 'forbidden_arcanus:deorum_ingot'},
                D: {item: 'mekanism:advanced_sawing_factory'}},
            result: {item: 'mekanism:elite_sawing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_smelting_factory'}},
            result: {item: 'mekanism:ultimate_smelting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_enriching_factory'}},
            result: {item: 'mekanism:ultimate_enriching_factory'},
    })
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_crushing_factory'}},
            result: {item: 'mekanism:ultimate_crushing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_compressing_factory'}},
            result: {item: 'mekanism:ultimate_compressing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_combining_factory'}},
            result: {item: 'mekanism:ultimate_combining_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_purifying_factory'}},
            result: {item: 'mekanism:ultimate_purifying_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_injecting_factory'}},
            result: {item: 'mekanism:ultimate_injecting_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_infusing_factory'}},
            result: {item: 'mekanism:ultimate_infusing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'ACDCA',
            'AABAA'],
             key: {
                A: {item: 'mekanism_extras:alloy_radiance'},
                B: {item: 'megacells:accumulation_processor'},
                C: {item: 'thermal_extra:twinite_ingot'},
                D: {item: 'eidolon:crimson_gem'},
                E: {item: 'mekanism_extras:absolute_control_circuit'},
                F: {item: 'mekanism:elite_sawing_factory'}},
            result: {item: 'mekanism:ultimate_sawing_factory'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABCBA',
            'ACDCA',
            'ABCBA',
            'AAAAA'],
             key: {
                A: {item: '#forge:ingots/dark_steel'},
                B: {item: 'ae2:fluix_smart_cable'},
                C: {item: 'megacells:mega_item_cell_housing'},
                D: {item: 'ae2:energy_acceptor'}},
            result: {item: 'ae2:drive'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AABCDAA',
            'AAECFAA',
            'DFGHGEB',
            'CCHIHCC',
            'BEGHGFD',
            'AAFCEAA',
            'AADCBAA'],
             key: {
                A: {item: 'ae2:sky_stone_block'},
                B: {item: 'bloodmagic:reinforcedslate'},
                C: {item: 'eidolon:arcane_gold_block'},
                D: {item: 'occultism:otherworld_essence'},
                E: {item: 'projecte:aeternalis_fuel_block'},
                F: {item: 'kubejs:grand_large_plate'},
                G: {item: 'forbidden_arcanus:deorum_ingot'},
                H: {item: 'ae2:energy_acceptor'},
                I: {item: 'mekanism_extras:absolute_control_circuit'}},
            result: {item: 'ae2:controller'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'AAAAAAAAA',
            'ABCCDCCBA',
            'ACEEFEECA',
            'ACEFGFECA',
            'ADFGHGFDA',
            'ACEFGFECA',
            'ACEEFEECA',
            'ABCCDCCBA',
            'AAAAAAAAA'],
             key: {
                A: {item: 'enderio:soularium_block'},
                B: {item: 'enderio:sentient_ender'},
                C: {item: 'thermal_extra:dragonsteel_block'},
                D: {item: 'mythicbotany:alfsteel_ingot'},
                E: {item: 'extendedcrafting:flux_star'},
                F: {item: 'powah:crystal_nitro'},
                G: {item: 'projecte:red_matter'},
                H: {item: 'avaritia:neutronium_block'}},
            result: {item: 'enderio:powered_spawner'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'AAAABAAAA',
            'ACDDEDDCA',
            'ADDFEFDDA',
            'ADFGHGFDA',
            'BEEHIHEEB',
            'ADFGHGFDA',
            'ADDFEFDDA',
            'ACDDEDDCA',
            'AAAABAAAA'],
             key: {
                A: {item: 'projecte:dark_matter_block'},
                B: {item: 'megacells:item_storage_cell_256m'},
                C: {item: 'industrialforegoing:machine_frame_supreme'},
                D: {item: 'mysticalagradditions:insanium_ingot_block'},
                E: {item: 'mythicbotany:alfsteel_ingot'},
                F: {item: 'bloodmagic:dungeon_metal'},
                G: {item: 'kubejs:grand_large_plate'},
                H: {item: 'projecte:alchemical_chest'},
                I: {item: 'kubejs:yggdralium_ingot'}},
            result: {item: 'projecte:condenser_mk1'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'AAABCBAAA',
            'ADDBCBDDA',
            'ADDBCBDDA',
            'BBBECEBBB',
            'CCCCFCCCC',
            'BBBECEBBB',
            'ADDBCBDDA',
            'ADDBCBDDA',
            'AAABCBAAA'],
             key: {
                A: {item: 'bigreactors:insanite_block'},
                B: {item: 'kubejs:yggdralium_ingot'},
                C: {item: 'mysticalagradditions:insanium_ingot_block'},
                D: {item: 'projecte:red_matter_block'},
                E: {item: 'projecte:condenser_mk1'},
                F: {item: 'projecte:klein_star_omega'}},
            result: {item: 'projecte:condenser_mk2'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'ABBBCBBBA',
            'BDEFGFEDB',
            'BEEFGFEED',
            'BFFDHDFFB',
            'CGGHIHGGC',
            'BFFDHDFFB',
            'BEEFGFEED',
            'BDEFGFEDB',
            'ABBBCBBBA'],
             key: {
                A: {item: 'forbidden_arcanus:eternal_stella'},
                B: {item: 'bloodmagic:etherealslate'},
                C: {item: 'megacells:256m_crafting_storage'},
                D: {item: 'mekanism_extras:infinite_control_circuit'},
                E: {item: 'extendedcrafting:nether_star_block'},
                F: {item: 'allthecompressed:nitro_crystal_block_4x'},
                G: {item: 'projecte:klein_star_omega'},
                H: {item: 'projecte:condenser_mk2'},
                I: {item: 'bhc:soul_heart_canister'}},
            result: {item: 'projecte:transmutation_table'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'ABCDEFGHI',
            'JKLMNOPQR',
            'STUVWXYZ ',
            '         ',
            '         ',
            '         ',
            '         ',
            '         ',
            '         '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'minecraft:wheat'},
                C: {item: 'minecraft:bread'},
                D: {item: 'pneumaticcraft:sourdough_bread'},
                E: {item: 'corn_delight:cornbread_batter'},
                F: {item: 'minecraft:carrot'},
                G: {item: 'minecraft:golden_carrot'},
                H: {item: 'minecraft:baked_potato'},
                I: {item: 'minecraft:pumpkin'},
                J: {item: 'minecraft:melon'},
                K: {item: 'minecraft:cake'},
                L: {item: 'croptopia:cheese_cake'},
                M: {item: 'farmersdelight:sweet_berry_cheesecake'},
                N: {item: 'ends_delight:stuffed_rice_cake'},
                O: {item: 'ends_delight:chorus_fruit_pie'},
                P: {item: 'farmersdelight:hamburger'},
                Q: {item: 'farmersdelight:roast_chicken'},
                R: {item: 'nethersdelight:plate_of_stuffed_hoglin_snout'},
                S: {item: 'ends_delight:bubble_tea'},
                T: {item: 'quarkdelight:miso_with_bamboo_sprouts'},
                U: {item: 'ends_delight:stir_fried_shulker_meat'},
                V: {item: 'ends_delight:grilled_shulker_block'},
                W: {item: 'farmersdelight:steak_and_potatoes'},
                X: {item: 'corn_delight:cornbread_stuffing'},
                Y: {item: 'farmersdelight:pasta_with_mutton_chop'},
                Z: {item: 'farmersdelight:roasted_mutton_chops'}},
            result: {item: '2x avaritia:ultimate_stew'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
                'ABCDEDCBA',
                'BACFGFCAB',
                'CCAFHGACC',
                'DFFHIHFFD',
                'EGHIJIHGE',
                'DFFHIHFFD',
                'CCAFHGACC',
                'BACFGFCAB',
                'ABCDEDCBA'],
             key: {
                A: {item: 'avaritia:ultimate_stew'},
                B: {item: 'forbidden_arcanus:eternal_stella'},
                C: {item: 'bigreactors:insanite_block'},
                D: {item: 'forbidden_arcanus:dark_nether_star_block'},
                E: {item: 'mysticalagradditions:insanium_ingot_block'},
                F: {item: 'bloodmagic:dungeon_metal'},
                G: {item: 'industrialforegoing:machine_frame_supreme'},
                H: {item: 'allthecompressed:nitro_crystal_block_2x'},
                I: {item: 'mekanism:pellet_antimatter'},
                J: {item: 'mekanism_extras:infinite_control_circuit'}},
            result: {item: 'avaritia:infinity_catalyst'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
                'AAAAAAAAA',
                'ABCCDCCBA',
                'ACBEEEBCA',
                'ABEAFAEBA',
                'ADEFGFEDA',
                'ABEAFAEBA',
                'ACBEEEBCA',
                'ABCCDCCBA',
                'AAAAAAAAA'],
             key: {
                A: {item: 'mythicbotany:alfsteel_block'},
                B: {item: 'projecte:klein_star_omega'},
                C: {item: 'avaritia:neutronium_block'},
                D: {item: 'megacells:256m_crafting_storage'},
                E: {item: 'occultism:storage_stabilizer_tier4'},
                F: {item: 'avaritia:infinity_catalyst'},
                G: {item: 'extendedcrafting:ultimate_singularity'}},
            result: {item: 'avaritia:infinity_ingot'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
                'AABBBBBAA',
                'A BBBBB A',
                'A  CCC  A',
                'D CCCCC D',
                'A CCECC A',
                'D CCCCC D',
                'A  CCC  A',
                'A       A',
                'AAACACAAA'],
             key: {
                A: {item: 'enderio:dark_steel_block'},
                B: {item: 'botania:mana_quartz'},
                C: {item: 'extendedcrafting:enhanced_redstone_ingot_block'},
                D: {item: 'avaritia:crystal_matrix_ingot'},
                E: {item: 'mysticalagriculture:supremium_essence'}},
            result: {item: 'avaritia:neutron_collector'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            '  A  ',
            'ABCBA',
            'ABCBA',
            'DDDDD',
            'DDDDD'],
             key: {
                A: {item: 'allthecompressed:redstone_alloy_block_2x'},
                B: {item: 'forbidden_arcanus:deorum_block'},
                C: {item: 'allthecompressed:diamond_block_2x'},
                D: {item: 'naturesaura:infused_stone'}},
            result: {item: 'mysticalagriculture:infusion_altar'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            ' AAA ',
            'ABBBA',
            ' ACA ',
            ' BBB ',
            'BBBBB'],
             key: {
                A: {item: 'eidolon:arcane_gold_block'},
                B: {item: 'mysticalagriculture:soulstone'},
                C: {item: 'mysticalagriculture:infusion_pedestal'}},
            result: {item: 'mysticalagriculture:awakening_pedestal'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            '   A   ',
            '  ABA  ',
            ' ACCCA ',
            'ABDCDBA',
            'AECCCEA',
            'EEEEEEE',
            'EEEEEEE'],
             key: {
                A: {item: '#forge:storage_blocks/signalum'},
                B: {item: 'thermal_extra:shellite_block'},
                C: {item: 'mysticalagriculture:infusion_altar'},
                D: {item: 'mekanism_extras:absolute_control_circuit'},
                E: {item: '#forge:storage_blocks/bitumen'}},
            result: {item: 'mysticalagriculture:awakening_altar'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAAAAAA',
            'ABBBBBA',
            'ABCDCBA',
            'ABDCDBA',
            'ABEDEBA',
            'ABBBBBA',
            'AAAAAAA'],
             key: {
                A: {item: 'allthecompressed:obsidian_4x'},
                B: {item: 'allthecompressed:lapis_block_2x'},
                C: {item: '#forge:glass_panes'},
                D: {item: 'mekanism:energy_tablet'},
                E: {item: 'pneumaticcraft:drill_bit_netherite'}},
            result: {item: 'hostilenetworks:sim_chamber'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAAAAAA',
            'ABBBBBA',
            'ACCCCCA',
            'ACCDCCA',
            'AACCCAA',
            'ABBBBBA',
            'AAAAAAA'],
             key: {
                A: {item: 'allthecompressed:obsidian_4x'},
                B: {item: 'allthecompressed:gold_block_3x'},
                C: {item: 'allthecompressed:blaze_block_2x'},
                D: {item: 'naturesaura:fortress_finder'}},
            result: {item: 'hostilenetworks:loot_fabricator'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AAAAAAA ',
            'ABCCDCCBA',
            'ADDDEDDDA',
            'ADCDADCDA',
            'ADDDADDDA',
            ' AAA AAA ',
            '         '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'mekanism_extras:infinite_induction_provider'},
                C: {item: 'mekanism:pellet_antimatter'},
                D: {item: 'avaritia:infinity_ingot'},
                E: {item: 'mekanism:mekasuit_helmet'}},
            result: {item: 'avaritia:infinity_armor_helmet'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AAA AAA ',
            'ABBBABBBA',
            'ABCCCCCBA',
            ' ACCDCCA ',
            ' AEEEEEA ',
            ' AEEEEEA ',
            ' AEEEEEA ',
            '  AAAAA  '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'mekanism:pellet_antimatter'},
                C: {item: 'mekanism_extras:infinite_induction_provider'},
                D: {item: 'mekanism:mekasuit_bodyarmor'},
                E: {item: 'avaritia:infinity_ingot'}},
            result: {item: 'avaritia:infinity_armor_chestplate'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AAAAAAA ',
            'ABBBBBBBA',
            'ACCCDCCCA',
            'AEECACEEA',
            'AEEA AEEA',
            'AEEA AEEA',
            'AEEA AEEA',
            ' AA   AA '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'mekanism:pellet_antimatter'},
                C: {item: 'mekanism_extras:infinite_induction_provider'},
                D: {item: 'mekanism:mekasuit_pants'},
                E: {item: 'avaritia:infinity_ingot'}},
            result: {item: 'avaritia:infinity_armor_leggings'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AAAAAAA ',
            ' ABBABBA ',
            ' ACCDCCA ',
            'AACCACCAA',
            'ACCCACCCA',
            ' AAA AAA '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'mekanism_extras:infinite_induction_provider'},
                C: {item: 'avaritia:infinity_ingot'},
                D: {item: 'mekanism:mekasuit_boots'}},
            result: {item: 'avaritia:infinity_armor_boots'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '       AA',
            '      AAA',
            '     AAA ',
            ' B  AAA  ',
            '  BAAA   ',
            '  BCA    ',
            '  DBB    ',
            ' D   B   ',
            'E        '],
             key: {
                A: {item: 'avaritia:infinity_ingot'},
                B: {item: 'mekanism:pellet_antimatter'},
                C: {item: 'projecte:rm_sword'},
                D: {item: 'avaritia:neutronium_block'},
                E: {item: 'mekanism_extras:infinite_induction_provider'}},
            result: {item: 'avaritia:swordofthe_cosmos'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '   AAA   ',
            '  AAAAA  ',
            '  AABAA  ',
            '  AAAAA  ',
            '    C    ',
            '    C    ',
            '    C    ',
            '    C    ',
            '    D    '],
             key: {
                A: {item: 'avaritia:infinity_ingot'},
                B: {item: 'projecte:rm_shovel'},
                C: {item: 'avaritia:neutronium_block'},
                D: {item: 'mekanism_extras:infinite_induction_provider'}},
            result: {item: 'avaritia:planet_eater'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '  AAAA   ',
            '  AAAAAA ',
            '  AABAAA ',
            '  AAAC   ',
            '  A  C   ',
            '     C   ',
            '     C   ',
            '     C   ',
            '     D   '],
             key: {
                A: {item: 'avaritia:infinity_ingot'},
                B: {item: 'projecte:rm_axe'},
                C: {item: 'avaritia:neutronium_block'},
                D: {item: 'mekanism_extras:infinite_induction_provider'}},
            result: {item: 'avaritia:natures_ruin'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '  AAAAA  ',
            ' AAABAA  ',
            ' AAAAA   ',
            ' AA C    ',
            '    C    ',
            '    C    ',
            '    C    ',
            '    C    ',
            '    D    '],
             key: {
                A: {item: 'avaritia:infinity_ingot'},
                B: {item: 'projecte:rm_hoe'},
                C: {item: 'avaritia:neutronium_block'},
                D: {item: 'mekanism_extras:infinite_induction_provider'}},
            result: {item: 'avaritia:hoeofthe_green_earth'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '   AAA   ',
            ' AAAAAAA ',
            'AAAABAAAA',
            'AAA C AAA',
            '    C    ',
            '    C    ',
            '    C    ',
            '    C    ',
            '    D    '],
             key: {
                A: {item: 'avaritia:infinity_ingot'},
                B: {item: 'projecte:rm_pick'},
                C: {item: 'avaritia:neutronium_block'},
                D: {item: 'mekanism_extras:infinite_induction_provider'}},
            result: {item: 'avaritia:world_breaker'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '   AAA   ',
            '  A  B   ',
            ' A   B   ',
            'A    B   ',
            'C    B   ',
            'A    B   ',
            ' A   B   ',
            '  A  B   ',
            '   AAA   '],
             key: {
                A: {item: 'avaritia:neutronium_block'},
                B: {item: 'avaritia:infinity_ingot'},
                C: {item: 'mysticaladaptations:insanium_bow'}},
            result: {item: 'avaritia:longbowofthe_heavens'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAAAAAA',
            'ABBCBBA',
            'ABDEDBA',
            'ACEFECA',
            'ABDEDBA',
            'ABBCBBA',
            'AAAAAAA'],
             key: {
                A: {item: 'forbidden_arcanus:xpetrified_orb'},
                B: {item: 'allthecompressed:emerald_block_1x'},
                C: {item: 'powah:crystal_nitro'},
                D: {item: 'mekanism_extras:alloy_radiance'},
                E: {item: 'forbidden_arcanus:dark_nether_star'},
                F: {item: 'projecte:dark_matter'}},
            result: {item: 'forbidden_arcanus:eternal_stella'},
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABCDE',
            'FGHIJ',
            'KLMNO',
            'PQRST',
            ' UVW '],
             key: {
                A: {item: 'kubejs:large_plate_tconstruct_bloodbone'},
                B: {item: 'kubejs:large_plate_tconstruct_bone'},
                C: {item: 'kubejs:large_plate_tconstruct_bronze'},
                D: {item: 'kubejs:large_plate_tconstruct_constantan'},
                E: {item: 'kubejs:large_plate_tconstruct_cyanite'},
                F: {item: 'kubejs:large_plate_tconstruct_elementium'},
                G: {item: 'kubejs:large_plate_tconstruct_blazing_crystal'},
                H: {item: 'kubejs:large_plate_tconstruct_grains'},
                I: {item: 'kubejs:large_plate_tconstruct_iesnium'},
                J: {item: 'kubejs:large_plate_tconstruct_uranium'},
                K: {item: 'kubejs:large_plate_tconstruct_stone'},
                L: {item: 'kubejs:large_plate_tconstruct_starmetal'},
                M: {item: 'kubejs:large_plate_tconstruct_slimewood'},
                N: {item: 'kubejs:large_plate_tconstruct_soulium'},
                O: {item: 'kubejs:large_plate_tconstruct_rose_gold'},
                P: {item: 'kubejs:large_plate_tconstruct_refined_obsidian'},
                Q: {item: 'kubejs:large_plate_tconstruct_queens_slime'},
                R: {item: 'kubejs:large_plate_tconstruct_refined_glowstone'},
                S: {item: 'kubejs:large_plate_tconstruct_pig_iron'},
                T: {item: 'kubejs:large_plate_tconstruct_netherite'},
                U: {item: 'kubejs:large_plate_tconstruct_lead'},
                V: {item: 'kubejs:large_plate_tconstruct_iron'},
                W: {item: 'kubejs:large_plate_tconstruct_infused_wood'}},
            result: {item: 'kubejs:grand_large_plate'},
    })
})
