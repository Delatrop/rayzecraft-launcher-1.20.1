// Author: Davi_MCST

ServerEvents.recipes(event => {
    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:starmetal_ingot", 1),
        [Item.of("2x minecraft:iron_ingot"), Ingredient.of("minecraft:lapis_block")],
        15000,
    );

    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:queens_slime_ingot"),
        [Ingredient.of("kubejs:starmetal_ingot"), "minecraft:gold_ingot", "minecraft:magma_cream"]
    );

    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:pigiron_ingot"),
        [Ingredient.of("minecraft:iron_ingot"), "minecraft:clay", "2x kubejs:blood_slime_ball"]
    );

    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:rose_gold_ingot"),
        [Ingredient.of("kubejs:starmetal_ingot"), "#forge:dyes/pink"]
    );
})