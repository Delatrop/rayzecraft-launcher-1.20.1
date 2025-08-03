ServerEvents.recipes((event) => {
  event.remove ({output: 'forbidden_arcanus:stellarite_piece'});
  event.remove ({output: 'forbidden_arcanus:stellarite_block'});
  event.remove ({output: Item.of('ae2:facade', '{item:"forbidden_arcanus:stellarite_block"}')});
  event.remove ({output: 'ae2:network_tool'});
  event.remove ({output: 'mekanism:cardboard_box'});
  event.remove ({output: 'forbidden_arcanus:quantum_catcher'});
  event.remove ({output: 'ae2:spatial_anchor'});
  event.remove ({output: 'mekanism:upgrade_anchor'});
  event.remove ({output: 'minecraft:respawn_anchor'});
  event.remove ({output: 'createendertransmission:chunk_loader'});
  event.remove ({output: 'occultism:storage_controller'});
  event.remove ({output: 'occultism:stable_wormhole'});
  event.remove ({output: 'occultism:storage_controller_base'});
  event.remove ({output: 'occultism:storage_stabilizer_tier1'});
  event.remove ({output: 'occultism:storage_stabilizer_tier2'});
  event.remove ({output: 'occultism:storage_stabilizer_tier3'});
  event.remove ({output: 'occultism:storage_stabilizer_tier4'});
  event.remove ({output: 'ae2:formation_plane'});
  event.remove ({output: 'ae2:annihilation_plane'});
  event.remove ({output: Item.of('ae2:annihilation_plane').enchant('minecraft:silk_touch', 1)})
  event.remove ({output: 'draconicevolution:celestial_manipulator'})
  event.remove ({output: 'draconicevolution:potentiometer'})
  event.remove ({output: 'draconicevolution:rain_sensor'})
  event.remove ({output: 'sophisticatedstorage:magnet_upgrade'})
  event.remove ({output: 'sophisticatedstorage:advanced_magnet_upgrade'})
  event.remove ({output: 'sophisticatedbackpacks:advanced_magnet_upgrade'})
  event.remove ({output: 'sophisticatedbackpacks:magnet_upgrade'})
  event.remove ({output: 'mekanism:module_magnetic_attraction_unit'})
  event.remove ({output: 'ae2wtlib:magnet_card'})
  event.remove ({output: 'enderio:electromagnet'})
  event.remove ({output: 'advanced_ae:magnet_card'})
  event.remove ({output: 'draconicevolution:mob_soul'})
  event.remove ({output: 'draconicevolution:stabilized_spawner'})
  
})