// XXX !!! IMPORTANT !!! XXX
// NOTE: THIS IS JUST A FILE SO I CAN WRITE THE UPGRADES FOR NOW WHILST I WAIT FOR TOM TO UPDATE
// THE DATA STUFF, WILL BE MOVED TO ./index.tsx AND THE UPGRADE TYPE WILL BE MOVED TO "../utils/types"

type Upgrades = {
  name: string;
  texture: string;
  description: string[];
  costs: number[];
  flatIncrease: boolean; // 1: the upgrade increases the drinks/click at a flat rate, 0: it's a multiplier
  increases: number[];
};

const CLICKABLE_UPGRADES: Upgrades[][] = {
    [
        // Ceres upgrades
        [
            {
                "More hands",
                "more_hands",
                "More hands means more drinks! However the surgery pill ain't payin itself and people might look at you weirdly.",
                [ 20, 100, 200, 500 ],
                true,
                [ 1, 2, 5, 10 ]
            },
            {
                "More cups",
                "more_cups",
                "So many cups...",
                [ 20, 100, 200, 500 ],
                true,
                [ 1, 2, 5, 10 ]
            }
        ],

        // Earth upgrades
        [

        ],

        // Sun upgrades
        [

        ],

        // Galaxy upgrades
        [

        ],

        // Universe upgrades
        [

        ],

        // Multiverse upgrades
        [

        ]
    ]
};


const BAR_UPGRADES: Upgrades[][] = {
    [
        // Ceres upgrades
        [
            {
                "More customers",
                "more_customers",
                "Is the bar even big enough?",
                [ 20, 100, 200, 500 ],
                true,
                [ 1, 2, 5, 10 ]
            },
            {
                "Better drinks",
                "",
                "Maybe if our drinks tasted good we'd get more money...",
                [ 20, 100, 200, 500 ],
                true,
                [ 1, 2, 5, 10 ]
            },
            {
                "Rocks",
                "",
                "Rocks. People from the around here love rocks right?",
                [ 20, 100, 200, 500 ],
                true,
                [ 1, 2, 5, 10 ]
            }
        ],

        // Earth upgrades
        [

        ],

        // Sun upgrades
        [

        ],

        // Galaxy upgrades
        [

        ],

        // Universe upgrades
        [

        ],

        // Multiverse upgrades
        [

        ]
    ]
};
