import { Data, Drink, Ingredient } from "../utils/types";

const INGREDIENTS: Ingredient[] = [
  {
    name: "Boba",
    texture: "boba.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Milk",
    texture: "milk.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Topping Veggies",
    texture: "topping_veggies.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Cherry",
    texture: "cherry.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Juice",
    texture: "juice.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Sprinkles",
    texture: "sprinkles.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Cream",
    texture: "cream.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Neon Liquid",
    texture: "neon_liquid.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Fizz",
    texture: "fizz.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Glow Powder",
    texture: "glow_powder.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Void",
    texture: "void.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Stars",
    texture: "stars.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
  {
    name: "Rainbow Swirl",
    texture: "rainbow_swirl.png",
    upgradeCosts: [1, 5, 10, 15],
    upgradeDescriptions: [],
  },
];

const DRINKS: Drink[] = [
  {
    name: "Moojito",
    texture: "moojito.png",
    cooldown: 5,
  },
  {
    name: "H2 Ouzini ",
    texture: "h2_ouzini.png",
    cooldown: 5,
  },
  {
    name: "Sunrise Spice",
    texture: "sunrise_spice.png",
    cooldown: 5,
  },
  {
    name: "Lilac Lager",
    texture: "lilac_lager.png",
    cooldown: 5,
  },
  {
    name: "Battery Acid",
    texture: "battery_acid.png",
    cooldown: 5,
  },
  {
    name: "Final Elixir",
    texture: "final_elixir.png",
    cooldown: 5,
  },
];

export const DATA: Data = {
  ingredients: INGREDIENTS,
  drinks: DRINKS,
};
