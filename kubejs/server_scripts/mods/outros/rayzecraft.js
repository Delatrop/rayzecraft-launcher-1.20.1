ServerEvents.recipes((event) => {
	event.remove ({output: 'ars_nouveau:source_gem'})
	event.remove ({output: 'ars_nouveau:spell_parchment'})
	event.remove ({output: 'ars_nouveau:magebloom_fiber'})
	event.remove ({output: 'ars_nouveau:novice_spell_book'})
	event.remove ({output: 'ars_nouveau:apprentice_spell_book'})
	event.remove ({output: 'tiab:time_in_a_bottle'})
	event.remove ({output: 'ars_nouveau:archmage_spell_book'})
	event.remove ({output: 'forbidden_arcanus:eternal_stella'})


	event.recipes.create.deploying('kubejs:runic_tablet', ['minecraft:smooth_stone_slab', 'forbidden_arcanus:rune'])
	event.recipes.create.mixing([Fluid.of('kubejs:source', 500)], ['ars_nouveau:spell_parchment', Fluid.of('kubejs:impure_source', 500)])
	event.recipes.create.mixing([Fluid.of('kubejs:source', 6)], [Fluid.of('kubejs:impure_source', 24)]).heated()
	event.shaped(Item.of('ars_nouveau:spell_parchment'), [
		'AA',
		'AA'],
		{A: 'ars_nouveau:magebloom_fiber'})
	event.recipes.create.deploying('ars_nouveau:magebloom_fiber', ['kubejs:mage_leaf', 'occultism:butcher_knife']).keepHeldItem()
	event.recipes.create.splashing([Item.of('minecraft:bowl'), Item.of('kubejs:mage_leaf').withChance(0.38)], 'kubejs:dirty_bowl')
	event.recipes.createEmptying(['kubejs:dirty_bowl', Fluid.of('kubejs:impure_source', 50)], 'kubejs:magebloom_sourceberry_smoothie_bowl')
	event.recipes.create.filling('kubejs:magebloom_sourceberry_smoothie_bowl', ['minecraft:bowl', Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100)])
	event.recipes.createMixing(Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100), [Fluid.of('kubejs:magebloom_juice', 100), Fluid.of ('kubejs:sourceberry_juice', 100)])
	event.recipes.create.crushing(Item.of('kubejs:sourcegem_fragments', 1).withChance(0.4), 'ars_nouveau:source_gem')
	event.recipes.createCompacting(Fluid.of(('kubejs:sourceberry_juice'), 100), ['ars_nouveau:sourceberry_bush'])
    event.recipes.createCompacting(Fluid.of(('kubejs:magebloom_juice'), 100), ['ars_nouveau:magebloom'])
	event.recipes.createCompacting('ars_nouveau:source_gem', [Fluid.of('kubejs:source', 200), 'kubejs:runic_tablet']).heated()
	event.shaped(Item.of('ars_nouveau:novice_spell_book'), [
		'AB'],
		{A: 'minecraft:writable_book',
		 B: 'kubejs:sourcegem_fragments'})
	event.shaped(Item.of('ars_nouveau:apprentice_spell_book'), [
		'AB'],
		{A: 'ars_nouveau:novice_spell_book',
		 B: 'tiab:time_in_a_bottle'})
	event.shaped(Item.of('ars_nouveau:archmage_spell_book'), [
		'ABC'],
		{A: 'ars_nouveau:apprentice_spell_book',
		 B: 'forbidden_arcanus:eternal_stella',
		 C: 'ars_nouveau:wilden_tribute'})
	event.recipes.createSequencedAssembly([
		'tiab:time_in_a_bottle'],
		'forbidden_arcanus:aureal_bottle', [
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'forbidden_arcanus:arcane_crystal']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'kubejs:sourcegem_fragments']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'forbidden_arcanus:deorum_nugget']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'occultism:demons_dream_essence']),
		event.recipes.createFilling('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', Fluid.of('kubejs:source',144)]),
		event.recipes.createPressing('create_connected:incomplete_control_chip', 'create_connected:incomplete_control_chip')]).transitionalItem('create_connected:incomplete_control_chip').loops(1)
	event.recipes.create.mixing([Item.of('ars_nouveau:blue_archwood_sapling')],['#minecraft:saplings', '#forge:dyes/blue', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_elemental:yellow_archwood_sapling')],['#minecraft:saplings', '#forge:dyes/yellow', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_nouveau:green_archwood_sapling')],['#minecraft:saplings', '#forge:dyes/green', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_nouveau:purple_archwood_sapling')],['#minecraft:saplings', '#forge:dyes/purple', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_nouveau:red_archwood_sapling')],['#minecraft:saplings', '#forge:dyes/red', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_nouveau:sourceberry_bush')],['minecraft:sweet_berries', '#forge:dyes/purple', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.create.mixing([Item.of('ars_nouveau:magebloom')],['minecraft:sweet_berries', '#forge:dyes/pink', Fluid.of ('exdeorum:witch_water', 200)])
	event.recipes.createSequencedAssembly([
		'forbidden_arcanus:eternal_stella'],
		'create_dreams_and_desires:portable_mechanism', [
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'forbidden_arcanus:ferrognetic_mixture']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'forbidden_arcanus:smelter_prism']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'ars_elemental:fire_focus']),
		event.recipes.createDeploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'occultism:dimensional_matrix']),
		event.recipes.createFilling('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', Fluid.of('kubejs:matrix',1000)]),
		event.recipes.createPressing('create_connected:incomplete_control_chip', 'create_connected:incomplete_control_chip')]).transitionalItem('create_connected:incomplete_control_chip').loops(3)

});
