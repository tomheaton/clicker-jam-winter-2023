import { Drink, Ingredient, Item, Upgrades } from "@utils/types";
import { getIngredients } from "../utils";
import { GameDataActions } from "@hooks/game_data";

// NOTE: when editing the descriptions, put one less description than upgrading costs, as first description is
// builtin to the component
export const INGREDIENTS: Ingredient[] = [
  {
    name: "Boba",
    texture: "boba_ceres",
    upgradeCosts: [1, 5, 10, 15],
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
    upgradeCosts: [1, 5, 10, 15],
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
  },
  {
    name: "H2 Ouzini ",
    texture: "h2_ouzini",
    cooldown: 5,
    ingredients: getIngredients(["boba_earth", "topping_veggies_earth", "water"]),
  },
  {
    name: "Sunrise Spice",
    texture: "sunrise_spice",
    cooldown: 5,
    ingredients: getIngredients(["topping_veggies_sun", "cherries", "juice_sun"]),
  },
  {
    name: "Lilac Lager",
    texture: "lilac_lager",
    cooldown: 5,
    ingredients: getIngredients(["juice_galaxy", "sprinkles_galaxy", "cream"]),
  },
  {
    name: "Battery Acid",
    texture: "battery_acid",
    cooldown: 5,
    ingredients: getIngredients(["neon_liquid", "fizz", "sprinkles_universe", "glow_powder_universe"]),
  },
  {
    name: "Final Elixir",
    texture: "final_elixir",
    cooldown: 5,
    ingredients: getIngredients(["glow_powder_multiverse", "void", "stars", "rainbow_swirl"]),
  },
];

const ITEMS: Item[] = [
  {
    name: "Ceres Rocket",
    texture: "ceres",
    itemCost: 1_000_000,
    itemDescription: "Return to Ceres",
    costs: [1, 5, 10, 15],
  },
  {
    name: "Earth Rocket",
    texture: "earth",
    itemCost: 1_000_000,
    itemDescription: "Unlock Earth",
    costs: [1, 5, 10, 15],
  },
  {
    name: "Sun Rocket",
    texture: "sun",
    itemCost: 2_000_000,
    itemDescription: "Unlock Sun",
    costs: [1, 5, 10, 15],
  },
  {
    name: "Galaxy Rocket",
    texture: "galaxy",
    itemCost: 4_000_000,
    itemDescription: "Unlock Galaxy",
    costs: [1, 5, 10, 15],
  },
  {
    name: "Universe Rocket",
    texture: "universe",
    itemCost: 8_000_000,
    itemDescription: "Unlock Universe",
    costs: [1, 5, 10, 15],
  },
  {
    name: "Multiverse Rocket",
    texture: "multiverse",
    itemCost: 16_000_000,
    itemDescription: "Unlock Multiverse",
    costs: [1, 5, 10, 15],
  },
];

export const PLANETS = ["ceres", "earth", "sun", "galaxy", "universe", "multiverse"] as const;

const CLICKABLE_UPGRADES: {
  [key in typeof PLANETS[number]]: Upgrades[];
} = {
  ceres: [
    {
      name: "More hands",
      texture: "more_hands",
      description:
        "More hands means more drinks! However the surgery bill ain't payin itself and people might look at you weirdly.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_CLICKABLE,
    },
    {
      name: "More hands 2",
      texture: "more_hands2",
      description:
        "More hands 2 means more drinks! However the surgery bill ain't payin itself and people might look at you weirdly.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_CLICKABLE,
    },
  ],
  earth: [],
  sun: [],
  galaxy: [],
  universe: [],
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
      costs: [20_000, 100, 200, 500],
      flatIncrease: false,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Better drinks",
      texture: "better_drinks",
      description: "Maybe if our drinks tasted good we'd get more money...",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Alcohol factory",
      texture: "alcohol_factory",
      description: "Everyone loves a strong drink!",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Nicer glasses",
      texture: "nicer_glasses",
      description: "'Looks nicer must taste nicer'",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Atmosphere",
      texture: "atmosphere",
      description: "Great bar, no atmosphere",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Music",
      texture: "music",
      description: "I wanna scream and shout! But no one can hear me in space.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  earth: [
    {
      name: "Global cooling",
      texture: "global_cooling",
      description: "Everyone should just chill out.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Rocks",
      texture: "rocks",
      description: "Rocks. People from the around here love rocks right?",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "'No Politics' sign",
      texture: "no_politics",
      description: "No one likes politics, right?",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Humans allowed",
      texture: "no_politics",
      description: "Humans finally allowed, crazy to think we were only allowing their pets in before.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Water filter",
      texture: "water_filter",
      description: "The water here tastes like ****.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Outter space social media",
      texture: "social_media",
      description: "Millions of followers waiting to order drinks.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  sun: [
    {
      name: "Sun glasses",
      texture: "sun_glasses",
      description: "Ahhh my eyes.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Force field",
      texture: "force_field",
      description: "This is a big one! Get this one!! THIS ONE IS REALLY GOOD!!! BUY NOW.",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Solar panels",
      texture: "solar_panel",
      description: "I mean, does this one even need explaining. MAXIMUM EFFICIENCY!",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
    {
      name: "Magma eater",
      texture: "magma_eater",
      description: "With this, we'll be able to add a tiny little bit of magma to our drinks. Why is it spicy?",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
      upgradeType: GameDataActions.UPGRADE_BAR,
    },
  ],
  galaxy: [
    {
      name: "Wormhole",
      texture: "wormhole",
      description: "Transport ingredients at light speed!",
      costs: [20, 100, 200, 500],
      flatIncrease: true,
      increases: [1, 2, 5, 10],
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
  items: ITEMS,
  music: MUSIC,
  sounds: SOUNDS,
  planets: PLANETS,
  barUpgrades: BAR_UPGRADES,
  clickableUpgrades: CLICKABLE_UPGRADES,
};
