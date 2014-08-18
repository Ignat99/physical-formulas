/************************************************************************
## Physical Medium Blocks Module

You hate having to lookup [Data Values][dv] when you use ScriptCraft's
Drone() functions. So do I.  So I created this blocks object which is
a helper object for use in construction.

### Examples

    box( blocks.oak ); // creates a single oak wood block
    box( blocks.sand, 3, 2, 1 ); // creates a block of sand 3 wide x 2 high x 1 long
    box( blocks.wool.green, 2 ); // creates a block of green wool 2 blocks wide

Color aliased properties that were a direct descendant of the blocks
object are no longer used to avoid confusion with carpet and stained
clay blocks. In addition, there's a convenience array `blocks.rainbow`
which is an array of the 7 colors of the rainbow (or closest
approximations).

The blocks module is globally exported by the Drone module.

***/
var physical_medium_blocks = {
  air: {
    number: 0,
    physical_law: '24:53:54:57:58:59:64:67:71:79:82:83:85:86'
  },
  stone: {
    number: 1,
    physical_law: '11:18:25:30:65:71:73:75:79:82:83'
  },
  grass: {
    number: 2,
    physical_law: '11:22:25:30:52:54:65:66:67:68:69:71:73:75:82:83'
  },
  dirt: {
    number: 3,
    physical_law: '9:10:11:19:22:25:30:52:54:65:66:67:68:69:71:73:75:82:83' // 10:19 only for a very thin layer
  },
  cobblestone: {
    number: 4,
    physical_law: '11:18:25:30:65:71:73:75:79:82:83'
  },
  oak: {
    number: 5
  },
  spruce: '5:1',
  birch: '5:2',
  jungle: '5:3',
  sapling: {
    oak: 6,
    spruce: '6:1',
    birch: '6:2',
    jungle: '6:3'
  },
  bedrock: {
    number: 7,
    physical_law: '30:65:69:73:75:79:82'
  },
  water: {
    number: 8,
    physical_law: '1:2:9:18:26:30:39:65:67:68:70:71:75:79:82:83:85:86'
  },
  // distilled
  water_still: {
    number: 9,
    physical_law: '9:18:26:30:39:52:54:65:66:67:68:70:71:75:79:82:83:85:86'
  },
  lava: 10,
  lava_still: 11,
  sand: 12,
  gravel: 13,
  gold_ore: 14,
  iron_ore: {
    number: 15,
    physical_law: '11:13:14:15:17:18:19:20:21:23:24:25:26:27:28:30:31:32:33:37:39:40:42:44:45:46:47:50:51:52:54:56:61:62:65:66:69:71:72:73:75:76:79:82:83:86'
    // 31:32:33:50:66:76 only for a very thin layer 42:46:47:62 after ter remelting
  },
  coal_ore: 16,
  wood: {
    number: 17,
    physical_law: '9:18:25:30:37:65:67:69:71:73:75:79:82:83'
  },
  leaves: {
    number: 18,
    physical_law: '9:11:19:22:25:30:52:54:65:66:67:68:69:71:73:75:82:83'
  },
  sponge: {
    number: 19,
    physical_law: '11:30:52:54:71:73:75:79:82:83'
  },
  glass: {
    number: 20,
    physical_law: '52:54:65:67:68:70:71:73:75:77:79:82:83'
  },
  lapis_lazuli_ore: 21,
  lapis_lazuli_block: {
    number: 22,
    physical_law: '11:14:24:25:26:42:62:67:68:75:77:85'
  },
  dispenser: 23,
  sandstone: 24,
  note: 25,
  bed: 26,
  powered_rail: 27,
  detector_rail: 28,
  sticky_piston: 29,
  cobweb: 30,
  grass_tall: 31,
  dead_bush: 32,
  piston: 33,
  piston_extn: 34,
  wool: {
    white: 35 // All other colors added below
  },
  dandelion: 37,
  flower_yellow: 37,
  rose: 38,
  flower_red: 38,
  mushroom_brown: 39,
  mushroom_red: 40,
  gold: {
    number: 41,
    physical_law: '1:2:4:6:7:9:11:12:16:19:22:25:30:34:35:36:37:38:39:40:43:55:65:69:71:73:74:75:76:82'
  },
  iron: 42,
  tnt: 46,
  bookshelf: 47,
  moss_stone: {
    number: 48
  },
  obsidian: {
    number: 49,
    physical_law: '11:25:26:30:52:54:65:67:70:71:73:75:77:79:82:83',
    light_absorption: '680:670:660:650:635:595:555:500'
  },
  torch: 50,
  fire: {
    number: 51,
    physical_law: '24:34:35:53:54:57:58:59:64:66:67:71:82:83:85:86'
  },
  monster_spawner: 52,
  stairs: {
    oak: 53,
    cobblestone: 67,
    brick: 108,
    stone: 109,
    nether: 114,
    sandstone: 128,
    spruce: 134,
    birch: 135,
    jungle: 136,
    quartz: 156
  },
  chest: 54,
  redstone_wire: {
    number: 55,
    physical_law: '1:2:4:6:7:8:9:10:12:16:19:22:34:35:36:37:38:39:40:49:55:65:74:76'
  },
  diamond_ore: 56,
  diamond: 57,
  crafting_table: 58,
  wheat_seeds: 59,
  farmland: 60,
  furnace: 61,
  furnace_burning: 62,
  sign_post: 63,
  door_wood: 64,
  ladder: 65,
  rail: 66,
  sign: 68,
  lever: 69,
  pressure_plate_stone: 70,
  door_iron: 71,
  pressure_plate_wood: 72,
  redstone_ore: 73,
  redstone_ore_glowing: 74,
  torch_redstone: 75,
  torch_redstone_active: 76,
  stone_button: 77,
  ice: 79,
  snow: 80,
  cactus: 81,
  clay: 82,
  sugar_cane: 83,
  jukebox: 84,
  fence: 85,
  pumpkin: 86,
  netherrack: 87,
  soulsand: 88,
  glowstone: 89,
  netherportal: 90,
  jackolantern: 91,
  cake: 92,
  redstone_repeater: 93,
  redeston_repeater_active: 94,
  chest_locked: 95,
  trapdoor: 96,
  monster_egg: 97,
  brick: {
    stone: 98,
    mossy: '98:1',
    cracked: '98:2',
    chiseled: '98:3',
    red: 45
  },
  mushroom_brown_huge: 99,
  mushroom_red_huge: 100,
  iron_bars: 101,
  glass_pane: 102,
  melon: 103,
  pumpkin_stem: 104,
  melon_stem: 105,
  vines: 106,
  fence_gate: 107,
  mycelium: 110,
  lily_pad: 111,
  nether: 112,
  nether_fence: 113,
  netherwart: 115,
  table_enchantment: 116,
  brewing_stand: 117,
  cauldron: 118,
  endportal: 119,
  endportal_frame: 120,
  endstone: 121,
  dragon_egg: 122,
  redstone_lamp: 123,
  redstone_lamp_active: 124,
  slab: {
    snow: 78,
    stone: 44,
    sandstone: '44:1',
    wooden: '44:2',
    cobblestone: '44:3',
    brick: '44:4',
    stonebrick: '44:5',
    netherbrick:'44:6',
    quartz: '44:7',
    oak: 126,
    spruce: '126:1',
    birch: '126:2',
    jungle: '126:3',
    upper: {
      stone: '44:8',
      sandstone: '44:9',
      wooden: '44:10',
      cobblestone: '44:11',
      brick: '44:12',
      stonebrick: '44:13',
      netherbrick:'44:14',
      quartz: '44:15',
      oak: '126:8',
      spruce: '126:9',
      birch: '126:10',
      jungle: '126:11'
    }
  },
  cocoa: 127,
  emerald_ore: 129,
  enderchest: 130,
  tripwire_hook: 131,
  tripwire: 132,
  emerald: 133,
  command: 137,
  beacon: 138,
  cobblestone_wall: 139,
  flowerpot: 140,
  carrots: 141,
  potatoes: 142,
  button_wood: 143,
  mobhead: 144,
  anvil: 145,
  chest_trapped: 146,
  pressure_plate_weighted_light: 147,
  pressure_plate_weighted_heavy: 148,
  redstone_comparator: 149,
  redstone_comparator_active: 150,
  daylight_sensor: 151,
  redstone: 152,
  netherquartzore: 153,
  hopper: 154,
  quartz: 155,
  rail_activator: 157,
  dropper: 158,
  stained_clay: {
    white: 159 // All other colors added below
  },
  hay: 170,
  carpet: {
    white: 171 // All other colors added below
  },
  hardened_clay:  {
    number: 172,
    physical_law: '52:54:65:71:73:75:79:82:83'
  }, 
  coal_block: 173
};

// Add all available colors to colorized block collections

var colors = {
  orange: ':1',
  magenta: ':2',
  lightblue: ':3',
  yellow: ':4',
  lime: ':5',
  pink: ':6',
  gray: ':7',
  lightgray: ':8',
  cyan: ':9',
  purple: ':10',
  blue: ':11',
  brown: ':12',
  green: ':13',
  red: ':14',
  black: ':15'
};
var colorized_blocks = ['wool', 'stained_clay', 'carpet'];

for (var i = 0, len = colorized_blocks.length; i < len; i++) {
  var block = colorized_blocks[i],
      data_value = blocks[block].white;
  
  for (var color in colors) {
    blocks[block][color] = data_value + colors[color];
  }
};

/*
 rainbow colors - a convenience
 Color aliased properties that were a direct descendant of the blocks
 object are no longer used to avoid confusion with carpet and stained
 clay blocks.
 */
blocks.rainbow = [
  blocks.wool.red,
  blocks.wool.orange,
  blocks.wool.yellow,
  blocks.wool.lime,
  blocks.wool.lightblue,
  blocks.wool.blue,
  blocks.wool.purple];

module.exports = blocks;
