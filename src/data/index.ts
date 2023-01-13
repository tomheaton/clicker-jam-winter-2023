import { Data, Drink, Ingredient, Item } from "../utils/types";

export const INGREDIENTS: Ingredient[] = [
  {
    name: "Boba",
    texture: "boba",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Milk",
    texture: "milk",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Topping Veggies",
    texture: "topping_veggies",
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
    name: "Cherry",
    texture: "cherry",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Juice",
    texture: "juice",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Sprinkles",
    texture: "sprinkles",
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
    texture: "glow_powder",
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

export const DRINKS: Drink[] = [
  {
    name: "Moojito",
    texture: "moojito",
    cooldown: 5,
    ingredients: ["boba", "milk"],
  },
  {
    name: "H2 Ouzini ",
    texture: "h2_ouzini",
    cooldown: 5,
    ingredients: ["boba", "topping_veggies", "water"],
  },
  {
    name: "Sunrise Spice",
    texture: "sunrise_spice",
    cooldown: 5,
    ingredients: ["topping_veggies", "cherry", "juice"],
  },
  {
    name: "Lilac Lager",
    texture: "lilac_lager",
    cooldown: 5,
    ingredients: ["juice", "sprinkles", "cream"],
  },
  {
    name: "Battery Acid",
    texture: "battery_acid",
    cooldown: 5,
    ingredients: ["neon_liquid", "fizz", "sprinkles", "glow_powder"],
  },
  {
    name: "Final Elixir",
    texture: "final_elixir",
    cooldown: 5,
    ingredients: ["glow_powder", "void", "stars", "rainbow_swirl"],
  },
];

// TODO: @Tufty62
const ITEMS: Item[] = [];

export const DATA: Data = {
  ingredients: INGREDIENTS,
  drinks: DRINKS,
  items: ITEMS,
  // TODO: @tomheaton
  // planets: PLANETS,
};

// TODO: @tomheaton
export const PLANETS = [
  "ceres",
  "earth",
  "sun",
  "galaxy",
  "universe",
  "multiverse",
] as const;
