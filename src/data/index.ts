import { Drink, Ingredient, Upgrades } from "@utils/types";
import { getIngredients } from "@utils/index";
import { GameDataActions } from "@hooks/game_data";

// NOTE: when editing the descriptions, put one less description than upgrading costs, as first description is
// builtin to the component
export const INGREDIENTS: Ingredient[] = [
  {
    name: "Boba",
    texture: "boba_ceres",
    upgradeCosts: [40, 2_000, 5_000, 15_000],
    upgradeDescriptions: [],
  },
  {
    name: "Boba",
    texture: "boba_earth",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Milk",
    texture: "milk",
    upgradeCosts: [50, 4_000, 7_000, 20_000],
    upgradeDescriptions: ["This is upgrade one", "omg another upgrade", "wow another one bites the dust"],
  },
  {
    name: "Topping Veggies",
    texture: "topping_veggies_earth",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Topping Veggies",
    texture: "topping_veggies_sun",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Water",
    texture: "water",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Cherries",
    texture: "cherries",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Juice",
    texture: "juice_sun",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Juice",
    texture: "juice_galaxy",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Sprinkles",
    texture: "sprinkles_universe",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Sprinkles",
    texture: "sprinkles_galaxy",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Cream",
    texture: "cream",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Neon Liquid",
    texture: "neon_liquid",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Fizz",
    texture: "fizz",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Glow Powder",
    texture: "glow_powder_universe",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Glow Powder",
    texture: "glow_powder_multiverse",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Void",
    texture: "void",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Stars",
    texture: "stars",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Rainbow Swirl",
    texture: "rainbow_swirl",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
];

// TODO: remove cooldown
export const DRINKS: Drink[] = [
  {
    name: "Moojito",
    texture: "moojito",
    cooldown: 5,
    ingredients: getIngredients(["boba_ceres", "milk"]),
    baseSellPrice: 1,
  },
  {
    name: "H2 Ouzini ",
    texture: "h2_ouzini",
    cooldown: 5,
    ingredients: getIngredients(["boba_earth", "topping_veggies_earth", "water"]),
    baseSellPrice: 20,
  },
  {
    name: "Sunrise Spice",
    texture: "sunrise_spice",
    cooldown: 5,
    ingredients: getIngredients(["topping_veggies_sun", "cherries", "juice_sun"]),
    baseSellPrice: 50,
  },
  {
    name: "Lilac Lager",
    texture: "lilac_lager",
    cooldown: 5,
    ingredients: getIngredients(["juice_galaxy", "sprinkles_galaxy", "cream"]),
    baseSellPrice: 100,
  },
  {
    name: "Battery Acid",
    texture: "battery_acid",
    cooldown: 5,
    ingredients: getIngredients(["neon_liquid", "fizz", "sprinkles_universe", "glow_powder_universe"]),
    baseSellPrice: 500,
  },
  {
    name: "Final Elixir",
    texture: "final_elixir",
    cooldown: 5,
    ingredients: getIngredients(["glow_powder_multiverse", "void", "stars", "rainbow_swirl"]),
    baseSellPrice: 1000,
  },
];

export const ROCKET_UPGRADE_COSTS = {
  ceres: [10_000, 15_000, 5_000],
  earth: [50_000, 65_000, 80_000],
  sun: [150_000, 300_000, 400_000],
  galaxy: [500_000, 1_000_000, 2_000_000],
  universe: [10_000_000, 30_000_000, 60_000_000],
  multiverse: [140_000_000_000, 800_000_000_000, 1_500_000_000_000],
};

export const PLANETS = ["ceres", "earth", "sun", "galaxy", "universe", "multiverse"] as const;

const DRINK_UPGRADES: {
  [key in typeof PLANETS[number]]: Upgrades[];
} = {
  ceres: [
    {
      name: "More hands",
      texture: "more_hands",
      description:
        "More hands means more drinks! However the surgery bill ain't payin itself and people might look at you weirdly.",
      costs: [75, 150, 300, 722],
      flatIncrease: true,
      increases: [1, 2, 5, 7],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
    {
      name: "Suit",
      texture: "suit",
      description:
        "Shaken, not stirred.",
      costs: [2_000, 5_000, 7_000, 13_000],
      flatIncrease: true,
      increases: [10, 30, 50, 80],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
  ],
  earth: [
    {
      name: "More hands 2",
      texture: "more_hands2",
      description:
        "Look Ma, all hands!",
      costs: [3000, 5000, 10_000, 15_000],
      flatIncrease: true,
      increases: [10, 50, 100, 200],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
    {
      name: "Thermal gloves",
      texture: "thermal_gloves",
      description:
        "Gotta ensure all those fancy new hands don't get burnt.",
      costs: [10_000, 25_000, 75_000, 150_000],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
  ],
  sun: [
    {
      name: "Sunglasses",
      texture: "sunglasses",
      description:
        "Get some drip, make some tips.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
  ],
  galaxy: [
    {
      name: "Ice machine",
      texture: "ice_machine",
      description:
        "Perhaps your drinks will actually be digestible now...",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
  ],
  universe: [
    {
      name: "Cupid's Bow",
      texture: "cupids_bow",
      description:
        "Shall I compare thee to a summer's day? More luvin, more chuggin amirite?",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_DRINK,
    },
  ],
  multiverse: [],
};

const BAR_UPGRADES: {
  [key in typeof PLANETS[number]]: Upgrades[];
} = {
  ceres: [
    {
      name: "More customers",
      texture: "more_customers",
      description: "Is the bar even big enough?",
      costs: [150, 400, 1000, 2_500],
      flatIncrease: true,
      increases: [3, 6, 10, 15],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Better drinks",
      texture: "better_drinks",
      description: "Maybe if our drinks tasted good we'd get more money...",
      costs: [275, 750, 1250, 4_000],
      flatIncrease: true,
      increases: [5, 8, 12, 18],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Alcohol factory",
      texture: "alcohol_factory",
      description: "Everyone loves a strong drink!",
      costs: [3_000, 8_000, 16_000, 32_000],
      flatIncrease: true,
      increases: [20, 30, 50, 60],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Nicer glasses",
      texture: "nicer_glasses",
      description: "'Looks nicer must taste nicer'",
      costs: [16_000, 64_000, 200_000, 500_000],
      flatIncrease: false,
      increases: [1.02, 1.04, 1.06, 1.08],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Atmosphere",
      texture: "atmosphere",
      description: "Great bar, no atmosphere",
      costs: [32_000, 120_000, 750_000, 3_500_000],
      flatIncrease: false,
      increases: [1.02, 1.04, 1.06, 1.08],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Music",
      texture: "music",
      description: "I wanna scream and shout! But no one can hear me in space.",
      costs: [150_000, 500_000, 800_000, 1_200_000],
      flatIncrease: true,
      increases: [200, 300, 500, 700],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  earth: [
    {
      name: "Global cooling",
      texture: "global_cooling",
      description: "Everyone should just chill out.",
      costs: [150_000, 500_000, 800_000, 1_200_000],
      flatIncrease: true,
      increases: [300, 400, 600, 800],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Rocks",
      texture: "rocks",
      description: "Rocks. People from the around here love rocks right?",
      costs: [500_000, 800_000, 1_000_000, 1_800_000],
      flatIncrease: true,
      increases: [400, 500, 1000, 2000],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "'No Politics' sign",
      texture: "no_politics",
      description: "No one likes politics, right?",
      costs: [2_000_000, 5_000_000, 8_000_000, 10_000_000],
      flatIncrease: true,
      increases: [5000, 10000, 20_000, 25_000],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Humans allowed",
      texture: "humans_allowed",
      description: "Humans finally allowed, crazy to think we were only allowing their pets in before.",
      costs: [20_000_000, 50_000_000, 80_000_000, 100_000_000],
      flatIncrease: false,
      increases: [2, 4, 5, 5],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Water filter",
      texture: "water_filter",
      description: "The water here tastes like ****.",
      costs: [20_000_000, 50_000_000, 80_000_000, 100_000_000],
      flatIncrease: true,
      increases: [2, 4, 5, 5],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Outer space social media",
      texture: "social_media",
      description: "Millions of followers waiting to order drinks.",
      costs: [20_000_000, 50_000_000, 80_000_000, 100_000_000],
      flatIncrease: true,
      increases: [2, 4, 5, 5],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  sun: [
    {
      name: "Sun glasses",
      texture: "sun_glasses",
      description: "Ahhh my eyes.",
      costs: [21_000_000, 50_000_000, 80_000_000, 100_000_000],
      flatIncrease: true,
      increases: [3, 4, 5, 5],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Force field",
      texture: "force_field",
      description: "This is a big one! Get this one!! THIS ONE IS REALLY GOOD!!! BUY NOW.",
      costs: [50_000_000, 100_000_000, 800_000_000, 1_000_000_000],
      flatIncrease: false,
      increases: [1, 4, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Solar panels",
      texture: "solar_panel",
      description: "I mean, does this one even need explaining. MAXIMUM EFFICIENCY!",
      costs: [50_000_000, 100_000_000, 800_000_000, 1_000_000_000],
      flatIncrease: false,
      increases: [10, 10, 10, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Magma eater",
      texture: "magma_eater",
      description: "With this, we'll be able to add a tiny little bit of magma to our drinks. Why is it spicy?",
      costs: [50_000_000, 100_000_000, 800_000_000, 1_000_000_000],
      flatIncrease: false,
      increases: [20, 20, 20, 20],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  galaxy: [
    {
      name: "Wormhole",
      texture: "wormhole",
      description: "Transport ingredients at light speed!",
      costs: [500_000_000, 10_000_000_000, 80_000_000_000, 100_000_000_000],
      flatIncrease: true,
      increases: [],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Neutron star",
      texture: "neutron_star",
      description: "A neutron star is the collapsed core of a massive supergiant st- no one really cares do they?",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  universe: [
    {
      name: "Grandma",
      texture: "grandma",
      description: "The ultimate machine! This isn't a rip off I swear.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Dark matter",
      texture: "dark_matter",
      description: "Don't mess with this stuff...",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Black hole",
      texture: "black_hole",
      description: "Nothing can escape this one... catch all light into your drinks",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  multiverse: [],
};

export const MUSIC = [
  "battery_acid",
] as const;

export const SOUNDS = [
  "click",
] as const;

// export const DATA: Data = {
export const DATA = {
  ingredients: INGREDIENTS,
  drinks: DRINKS,
  music: MUSIC,
  sounds: SOUNDS,
  planets: PLANETS,
  barUpgrades: BAR_UPGRADES,
  drinkUpgrades: DRINK_UPGRADES,
  rocketUpgradeCosts: ROCKET_UPGRADE_COSTS,
};
