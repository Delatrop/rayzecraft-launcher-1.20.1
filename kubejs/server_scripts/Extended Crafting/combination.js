// Author: Davi_MCST

ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination("projecte:mobius_fuel",
    'minecraft:lava_bucket',
    ['projecte:alchemical_coal', 'projecte:alchemical_coal', 'pneumaticcraft:biodiesel_bucket', 'pneumaticcraft:lpg_bucket'],
    10000);
})