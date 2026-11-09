
/* =====================================
   MW4 CAMO TRACKER
===================================== */

const STORAGE_KEY = "nvg-mw4-camo-progress";
const PROGRESS_VERSION_KEY = `${STORAGE_KEY}-version`;
const PROGRESS_VERSION = "3";

/* =====================================
   WEAPON DATABASE
===================================== */

const weapons = [

{
    category: "Assault Rifles",
    icon: "AR",
    guns: [
        "Han 86",
        "M4",
        "Hyeon Burst",
        "Patriot XMR",
        "Kastov 762",
        "Oden",
        "Axion",
        "Cronen Squall"
    ]
},

    {
        category: "SMGs",
        icon: "SMG",
        guns: [
            "ISO Nightshade",
            "VEL 46",
            "Wz.55 Striga",
            "PPSh-41",
            "X-58 Nyx"
        ]
    },

    {
        category: "Shotguns",
        icon: "SG",
        guns: [
            "Rezi 12",
            "Warlord"
        ]
    },

    {
        category: "LMGs",
        icon: "LMG",
        guns: [
            "FiNN LMG",
            "Type 73",
            "APOC-338"
        ]
    },

    {
        category: "Marksman Rifles",
        icon: "MR",
        guns: [
            "MAR-9",
            "Oris 8.6",
            "Mosin-Nagant"
        ]
    },

    {
        category: "Sniper Rifles",
        icon: "SR",
        guns: [
            "KG-7 Vulcan",
            "Astaroth .50",
            "Signal 50"
        ]
    },

    {
        category: "Pistols",
        icon: "PST",
        guns: [
            "Sang 9mm",
            "Krait P68",
            ".50 GS",
            "Mojave .357"
        ]
    },

    {
        category: "Launchers",
        icon: "LCH",
        guns: [
            "PILA",
            "RPG-7",
            "JOKR",
            "PM-40 Anvil"
        ]
    },

    {
        category: "Melee",
        icon: "MEL",
        guns: [
            "FSS Carbon Edge 1095"
        ]
    }

];



/* =====================================
   CAMO CHALLENGES
===================================== */

const baseCamo = {
    name: "Military Camos",
    description: "Complete the base weapon camo challenge.",
    type: "BASE"
};

const specialCamos = {

    "Han 86": [
        {
            name: "Smoke",
            description: "Get 20 kills while mounted.",
            type: "SPECIAL"
        },
        {
            name: "Stormwave",
            description: "Get 50 kills with a silencer.",
            type: "SPECIAL"
        },
        {
            name: "Red",
            description: "Get 3 player kills without dying 15 times.",
            type: "SPECIAL"
        }
    ],

    "M4": [
        {
            name: "Myraid",
            description: "Get 20 point blank kills against players.",
            type: "SPECIAL"
        },
        {
            name: "Night Ops",
            description: "Get 20 kills while mounted.",
            type: "SPECIAL"
        },
        {
            name: "Green",
            description: "Get 25 kills from behind players.",
            type: "SPECIAL"
        }
    ],

    "Hyeon Burst": [
        {
            name: "Ponderosa",
            description: "Get 2 kills without reloading 10 times.",
            type: "SPECIAL"
        },
        {
            name: "Red Rain",
            description: "Get 20 longshot kills against players.",
            type: "SPECIAL"
        },
        {
            name: "Kitty Kaos",
            description: "Get 100 player kills while using a silencer.",
            type: "SPECIAL"
        }
    ],

    "Kastov 762": [
        {
            name: "Samnim",
            description: "Get 20 hip fire kills.",
            type: "SPECIAL"
        },
        {
            name: "Raster Aux",
            description: "Get 50 player kills using a silencer.",
            type: "SPECIAL"
        },
        {
            name: "Yellow",
            description: "Get 30 longshot kills against players.",
            type: "SPECIAL"
        }
    ],

    "Patriot XMR": [
        {
            name: "Dune Sea",
            description: "Get 3 kills without dying 10 times.",
            type: "SPECIAL"
        },
        {
            name: "Scorch",
            description: "Get 20 longshot kills against players.",
            type: "SPECIAL"
        },
        {
            name: "Disperse",
            description: "Get 30 hipfire kills against players.",
            type: "SPECIAL"
        }
    ],

    "Oden": [
        {
            name: "Dark Moss",
            description: "Get 25 player kills with the MIRI 40mm grenade launcher.",
            type: "SPECIAL"
        },
        {
            name: "Shale",
            description: "Get 2 kills without reloading 10 times against players.",
            type: "SPECIAL"
        },
        {
            name: "Hot Rod",
            description: "Get 100 kills while ADS against players.",
            type: "SPECIAL"
        }
    ],

    "Axion": [
        {
            name: "Splinter Rock",
            description: "Get 20 longshot kills against players.",
            type: "SPECIAL"
        },
        {
            name: "Sunset Tropic",
            description: "Get 25 player kills with the MIRI 40mm grenade launcher.",
            type: "SPECIAL"
        },
        {
            name: "Cyan",
            description: "Get 2 kills without reloading 25 times against players.",
            type: "SPECIAL"
        }
    ],

    "Cronen Squall": [
        {
            name: "Oni",
            description: "Get 20 point blank kills against players.",
            type: "SPECIAL"
        },
        {
            name: "Optical Reverb",
            description: "Get 3 kills without dying 15 times against players.",
            type: "SPECIAL"
        },
        {
            name: "Urban Smoke",
            description: "Get 20 mounted kills against players.",
            type: "SPECIAL"
        }
    ],

    "VEL 46": [
        { name: "Ghast", description: "Get 20 player kills while prone.", type: "SPECIAL" },
        { name: "Gunmetal", description: "Get 20 headshot kills against players.", type: "SPECIAL" },
        { name: "Jungle Shadow", description: "Get 50 player kills while aiming down sights.", type: "SPECIAL" }
    ],

    "Wz.55 Striga": [
        { name: "Dark tan", description: "Get 40 point blank kills against players.", type: "SPECIAL" },
        { name: "Rattlesnake", description: "Get 20 player kills while jumping.", type: "SPECIAL" },
        { name: "Stellation", description: "Get 50 player kills using a silencer.", type: "SPECIAL" }
    ],

    "X-58 Nyx": [
        { name: "Carbonated", description: "Get 20 longshot kills against players.", type: "SPECIAL" },
        { name: "Lime", description: "Get 40 headshot kills against players.", type: "SPECIAL" },
        { name: "Sniper veil", description: "Get 20 player kills while moving.", type: "SPECIAL" }
    ],

    "PPSh-41": [
        { name: "Blackwell", description: "Get 10 double kills against players.", type: "SPECIAL" },
        { name: "Currents", description: "Get 100 player kills while aiming down sights.", type: "SPECIAL" },
        { name: "Iron", description: "Get 20 longshot kills against players.", type: "SPECIAL" }
    ],

    "ISO Nightshade": [
        { name: "Asphalt", description: "Get 50 player kills while aiming down sights.", type: "SPECIAL" },
        { name: "Black Topo", description: "Get 10 double kills against players.", type: "SPECIAL" },
        { name: "Brown", description: "Get 3 player kills without dying 15 times.", type: "SPECIAL" }
    ],

    "Warlord": [
        { name: "Corrupted Clay", description: "Get 10 double kills against players.", type: "SPECIAL" },
        { name: "Magma Ire", description: "Get 50 player kills while prone.", type: "SPECIAL" },
        { name: "Redshift", description: "Get 20 player kills while moving.", type: "SPECIAL" }
    ],

    "Rezi 12": [
        { name: "Brushstroke", description: "Get 10 longshot kills against players.", type: "SPECIAL" },
        { name: "Struck Oil", description: "Get 20 point-blank kills against players.", type: "SPECIAL" },
        { name: "White Pine", description: "Get 40 player kills while jumping.", type: "SPECIAL" }
    ],

    "APOC-338": [
        { name: "Mineral", description: "Get 20 longshot kills against players.", type: "SPECIAL" },
        { name: "Phantom Flux", description: "Get 20 hipfire kills against players.", type: "SPECIAL" },
        { name: "Tiger Swipe", description: "Get 100 player kills while prone.", type: "SPECIAL" }
    ],

    "Type 73": [
        { name: "Ash Pine", description: "Get 20 mounted kills against players.", type: "SPECIAL" },
        { name: "Foxtrail", description: "Get 40 headshot kills against players.", type: "SPECIAL" },
        { name: "Outcrop", description: "Get 10 double kills against players.", type: "SPECIAL" }
    ],

    "FiNN LMG": [
        { name: "Desert Tactics", description: "Get 20 point-blank kills against players.", type: "SPECIAL" },
        { name: "Green Tiger", description: "Get 2 player kills without reloading 10 times.", type: "SPECIAL" },
        { name: "Thunderhead", description: "Get 30 longshot kills against players.", type: "SPECIAL" }
    ],

    "Mosin-Nagant": [
        { name: "Fractal Snow", description: "Get 2 player kills without reloading.", type: "SPECIAL" },
        { name: "Ice-Sheer", description: "Get 25 headshot kills against players.", type: "SPECIAL" },
        { name: "Sticker Shock", description: "Get 100 player kills while focused.", type: "SPECIAL" }
    ],

    "Oris 8.6": [
        { name: "Deep Space", description: "Get 3 player kills without dying 15 times.", type: "SPECIAL" },
        { name: "Fire Topo", description: "Get 20 double kills against players.", type: "SPECIAL" },
        { name: "Hibiscus", description: "Get 10 quickscope kills against players.", type: "SPECIAL" }
    ],

    "MAR-9": [
        { name: "Fungal Grid", description: "Get 25 player kills while crouched.", type: "SPECIAL" },
        { name: "Mangrove", description: "Get 20 mounted kills against players.", type: "SPECIAL" },
        { name: "White", description: "Get 30 longshot kills against players.", type: "SPECIAL" }
    ],

    "Astaroth .50": [
        { name: "Backcountry", description: "Get 20 player kills.", type: "SPECIAL" },
        { name: "Dread Plague", description: "Get 2 player kills within 5 seconds 20 times.", type: "SPECIAL" },
        { name: "Dry Brush", description: "Get 3 player kills without dying 10 times.", type: "SPECIAL" }
    ],

    "Signal 50": [
        { name: "Anaconda", description: "Get 2 player kills within 5 seconds 10 times.", type: "SPECIAL" },
        { name: "Ripplewave", description: "Get 20 quickscope kills against players.", type: "SPECIAL" },
        { name: "Sunburn", description: "Get 40 longshot kills against players.", type: "SPECIAL" }
    ],

    "KG-7 Vulcan": [
        { name: "Spidersilk", description: "Get 20 headshot kills against players.", type: "SPECIAL" },
        { name: "Tension", description: "Get 2 player kills without taking damage 20 times.", type: "SPECIAL" },
        { name: "Treeline", description: "Get 10 hipfire kills against players.", type: "SPECIAL" }
    ],

    "Mojave .357": [
        { name: "Garland", description: "Get 30 point-blank kills against players.", type: "SPECIAL" },
        { name: "Miami", description: "Get 15 one-shot kills against players.", type: "SPECIAL" },
        { name: "Wallpaper", description: "Get 2 player kills without reloading 10 times.", type: "SPECIAL" }
    ],

    ".50 GS": [
        { name: "Frosted", description: "Get 20 headshot kills against players.", type: "SPECIAL" },
        { name: "Red Tiger", description: "Get 30 point-blank kills against players.", type: "SPECIAL" },
        { name: "Splatter Ops", description: "Get 7 double kills against players.", type: "SPECIAL" }
    ],

    "Krait P68": [
        { name: "Off Grid", description: "Get 15 player kills while ledge hanging.", type: "SPECIAL" },
        { name: "Smoke Screen", description: "Get 50 player kills while using a silencer.", type: "SPECIAL" },
        { name: "Urban Flamingo", description: "Get 15 point-blank kills against players.", type: "SPECIAL" }
    ],

    "Sang 9mm": [
        { name: "Autumn", description: "Get 25 player kills while aiming down sights.", type: "SPECIAL" },
        { name: "Snakeskin", description: "Get 3 player kills without dying 5 times.", type: "SPECIAL" },
        { name: "Spacetime", description: "Get 50 player kills while using akimbo.", type: "SPECIAL" }
    ],

    "PM-40 Anvil": [
        { name: "Night Snow", description: "Get 25 direct shot kills against players.", type: "SPECIAL" },
        { name: "Recursive", description: "Get 2 kills without reloading 5 times against players.", type: "SPECIAL" },
        { name: "Urban Standard", description: "Get 40 player kills while moving.", type: "SPECIAL" }
    ],

    "JOKR": [
        { name: "Blue Tiger", description: "Destroy 30 killstreaks or vehicles.", type: "SPECIAL" },
        { name: "Tectonic", description: "Get 10 longshot kills against players.", type: "SPECIAL" },
        { name: "Thicket", description: "Get 5 double kills against players.", type: "SPECIAL" }
    ],

    "RPG-7": [
        { name: "Bubblegum Ops", description: "Destroy 30 killstreaks or vehicles.", type: "SPECIAL" },
        { name: "Digi Bark", description: "Get 10 player kills while prone.", type: "SPECIAL" },
        { name: "Stone Bits", description: "Get 10 longshot kills against players.", type: "SPECIAL" }
    ],

    "PILA": [
        { name: "Digital Fall", description: "Destroy 30 killstreaks or vehicles.", type: "SPECIAL" },
        { name: "Frontier", description: "Get 10 direct shot kills against players.", type: "SPECIAL" },
        { name: "Sandwash", description: "Get 5 double kills against players.", type: "SPECIAL" }
    ],

    "FSS Carbon Edge 1095": [
        { name: "Deathbed", description: "Get 2 kills in 5 seconds against players 25 times.", type: "SPECIAL" },
        { name: "Raster Lite", description: "Get 25 player kills while jumping.", type: "SPECIAL" },
        { name: "Stockpile", description: "Get 25 player kills using heavy melee finisher.", type: "SPECIAL" }
    ]

};

const masteryCamos = [

    {
        name: "Gold",
        description: "15 player kills in a single match.",
        type: "MASTERY"
    },

    {
        name: "Platinum",
        description: "Complete Gold on every weapon in its class.",
        type: "MASTERY"
    },

    {
        name: "Harmonic Break",
        description: "Complete Platinum across the arsenal.",
        type: "MASTERY"
    }

];

const assaultRifleMasteryCamos = [
    {
        name: "Gold",
        description: "Get 15 player kills in a single match.",
        type: "MASTERY"
    },
    {
        name: "Platinum",
        description: "Get 50 headshot kills against players.",
        type: "MASTERY"
    },
    {
        name: "Harmonic Break",
        description: "Get 25 double kills against players.",
        type: "MASTERY"
    }
];

const masteryCamosByCategory = {
    "SMGs": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 25 player kills from behind.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 50 hipfire kills against players.", type: "MASTERY" }
    ],
    "Shotguns": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 125 hipfire kills.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 2 player kills without reloading 25 times.", type: "MASTERY" }
    ],
    "LMGs": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 3 player kills without dying 15 times.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 2 player kills without releasing the trigger 25 times.", type: "MASTERY" }
    ],
    "Marksman Rifles": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 75 player kills while prone.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 75 one-shot kills against players.", type: "MASTERY" }
    ],
    "Sniper Rifles": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 75 player kills while prone.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 75 one-shot kills against players.", type: "MASTERY" }
    ],
    "Pistols": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 20 player kills from behind.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 40 hipfire kills against players.", type: "MASTERY" }
    ],
    "Launchers": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 2 player kills without taking damage 15 times.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 10 player kills in a match 7 times.", type: "MASTERY" }
    ],
    "Melee": [
        { name: "Gold", description: "Get 15 player kills in a single match.", type: "MASTERY" },
        { name: "Platinum", description: "Get 3 player kills without dying 15 times.", type: "MASTERY" },
        { name: "Harmonic Break", description: "Get 25 player kills from behind.", type: "MASTERY" }
    ]
};

function getWeaponCamos(weapon, category) {

    return [
        baseCamo,
        ...(specialCamos[weapon] || []),
        ...(category === "Assault Rifles"
            ? assaultRifleMasteryCamos
            : masteryCamosByCategory[category] || masteryCamos)
    ];

}



/* =====================================
   LOCAL STORAGE
===================================== */

let progress = {};

function loadProgress() {

    try {

        progress = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || {};

        const savedVersion = localStorage.getItem(PROGRESS_VERSION_KEY);

        if (savedVersion !== PROGRESS_VERSION) {
            [
                ["Sniper Rifles", "Astaroth .57", "Astaroth .50"],
                ["Launchers", "RPG-8", "RPG-7"]
            ].forEach(([category, oldWeapon, newWeapon]) => {
                for (let index = 0; index <= 6; index++) {
                    const oldId = getCamoId(category, oldWeapon, index);
                    const newId = getCamoId(category, newWeapon, index);

                    if (progress[oldId]) {
                        progress[newId] = progress[oldId];
                    }

                    delete progress[oldId];
                }
            });

            weapons
                .filter(group => group.category !== "Assault Rifles")
                .forEach(group => {
                    group.guns.forEach(weapon => {
                        if (savedVersion !== "2" &&
                            savedVersion !== PROGRESS_VERSION) {
                            [1, 2, 3].forEach(oldIndex => {
                                delete progress[getCamoId(
                                    group.category,
                                    weapon,
                                    oldIndex
                                )];
                            });

                            [4, 5, 6].forEach(oldIndex => {
                                const oldId = getCamoId(
                                    group.category,
                                    weapon,
                                    oldIndex
                                );
                                const newId = getCamoId(
                                    group.category,
                                    weapon,
                                    oldIndex - 3
                                );

                                if (progress[oldId]) {
                                    progress[newId] = progress[oldId];
                                }

                                delete progress[oldId];
                            });
                        }

                        if (specialCamos[weapon]) {
                            const priorMasteryProgress = [1, 2, 3].map(index =>
                                progress[getCamoId(
                                    group.category,
                                    weapon,
                                    index
                                )]
                            );

                            [1, 2, 3].forEach(index => {
                                delete progress[getCamoId(
                                    group.category,
                                    weapon,
                                    index
                                )];
                            });

                            priorMasteryProgress.forEach((completed, index) => {
                                if (completed) {
                                    progress[getCamoId(
                                        group.category,
                                        weapon,
                                        index + 4
                                    )] = true;
                                }
                            });
                        }
                    });
                });

            saveProgress();
            localStorage.setItem(PROGRESS_VERSION_KEY, PROGRESS_VERSION);
        }

    } catch (error) {

        progress = {};

    }

}

function saveProgress() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );

}


/* =====================================
   HELPERS
===================================== */

function getWeaponId(category, weapon) {

    return `${category}-${weapon}`;

}

function getCamoId(category, weapon, index) {

    return `${getWeaponId(category, weapon)}-${index}`;

}


function getCompletedCamos(category, weapon) {

    const weaponCamos = getWeaponCamos(weapon, category);

    return weaponCamos.filter((camo, index) => {

        return progress[
            getCamoId(category, weapon, index)
        ];

    }).length;

}


function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}


/* =====================================
   RENDER CAMO CHALLENGES
===================================== */


function renderCamos(category, weapon) {

    const weaponCamos = getWeaponCamos(weapon, category);

    return weaponCamos.map((camo, index) => {

        const camoId = getCamoId(
            category,
            weapon,
            index
        );

        const checked = progress[camoId]
            ? "checked"
            : "";

        return `

            <label class="challenge">

                <input
                    type="checkbox"
                    data-camo-id="${escapeHTML(camoId)}"
                    ${checked}
                >

                <div class="camo-image"></div>

                <div class="challenge-info">

                    <div class="challenge-name">
                        ${escapeHTML(camo.name)}
                    </div>

                    <div class="challenge-description">
                        ${escapeHTML(camo.description)}
                    </div>

                </div>

                <span class="challenge-type">
                    ${escapeHTML(camo.type)}
                </span>

            </label>

        `;

    }).join("");

}



/* =====================================
   RENDER WEAPONS
===================================== */


function renderWeapons(category, guns) {

    return guns.map(weapon => {

        const weaponName = weapon.name || weapon;

        const completed = getCompletedCamos(
            category,
            weaponName
        );

        const totalCamos = getWeaponCamos(weaponName, category).length;

        const percentage = Math.round(
            completed / totalCamos * 100
        );

        // Display images only when a matching image path is provided.
        const weaponImages = {
    // Assault Rifles
    "Han 86": "./assets/images/weapons/assault-rifles/MW4_han86.png",
    "M4": "./assets/images/weapons/assault-rifles/MW4_m4.png",
    "Hyeon Burst": "./assets/images/weapons/assault-rifles/MW4_hyeon.png",
    "Patriot XMR": "./assets/images/weapons/assault-rifles/MW4_patriot_xmr.png",
    "Kastov 762": "./assets/images/weapons/assault-rifles/MW4_kastov762.png",
    "Oden": "./assets/images/weapons/assault-rifles/MW4_oden.png",
    "Axion": "./assets/images/weapons/assault-rifles/MW4_axion.png",
    "Cronen Squall": "./assets/images/weapons/assault-rifles/MW4_cronen_squall.png",

    // Launchers
    "PM-40 Anvil": "./assets/images/weapons/launchers/MW4_anvil.png",
    "JOKR": "./assets/images/weapons/launchers/MW4_jokr.png",
    "PILA": "./assets/images/weapons/launchers/MW4_pila.png",
    "RPG-7": "./assets/images/weapons/launchers/MW4_rpg.png",

    // LMGs
    "APOC-338": "./assets/images/weapons/lmgs/MW4_apoc.png",
    "FiNN LMG": "./assets/images/weapons/lmgs/MW4_finn.png",
    "Type 73": "./assets/images/weapons/lmgs/MW4_type73.png",

    // Marksman Rifles
    "MAR-9": "./assets/images/weapons/marksman-rifles/MW4_mar.png",
    "Mosin-Nagant": "./assets/images/weapons/marksman-rifles/MW4_mosin.png",
    "Oris 8.6": "./assets/images/weapons/marksman-rifles/MW4_oris.png",

    // Melee
    "FSS Carbon Edge 1095": "./assets/images/weapons/melee/MW4_carbon_edge.png",

    // Pistols
    ".50 GS": "./assets/images/weapons/pistols/MW4_50gs.png",
    "Krait P68": "./assets/images/weapons/pistols/MW4_krait.png",
    "Mojave .357": "./assets/images/weapons/pistols/MW4_mojave.png",
    "Sang 9mm": "./assets/images/weapons/pistols/MW4_sang.png",

    // Shotguns
    "Rezi 12": "./assets/images/weapons/shotguns/MW4_rezi12.png",
    "Warlord": "./assets/images/weapons/shotguns/MW4_warlord.png",

    // SMGs
    "ISO Nightshade": "./assets/images/weapons/smgs/MW4_nightshade.png",
    "X-58 Nyx": "./assets/images/weapons/smgs/MW4_nyx.png",
    "PPSh-41": "./assets/images/weapons/smgs/MW4_ppsh.png",
    "Wz.55 Striga": "./assets/images/weapons/smgs/MW4_striga.png",
    "VEL 46": "./assets/images/weapons/smgs/MW4_vel.png",

    // Sniper Rifles
    "Astaroth .50": "./assets/images/weapons/sniper-rifles/MW4_astaroth.png",
    "Signal 50": "./assets/images/weapons/sniper-rifles/MW4_signal50.png",
    "KG-7 Vulcan": "./assets/images/weapons/sniper-rifles/MW4_vulcan.png"
};

const weaponImage = weaponImages[weaponName] || "";

        return `
            <details class="weapon">

                <summary class="weapon-header">

                    <div class="weapon-image">
                        ${weaponImage ? `
                            <img
                                src="${weaponImage}"
                                alt="${escapeHTML(weaponName)}"
                            >
                        ` : ""}
                    </div>

                    <div class="weapon-info">
                        <div class="weapon-name">
                            ${escapeHTML(weaponName)}
                        </div>

                        <div class="weapon-type">
                            ${escapeHTML(category)}
                        </div>
                    </div>

                    <div class="weapon-progress">
                        <span>
                            ${completed}/${totalCamos} CAMOS
                        </span>

                        <div class="mini-progress">
                            <div style="width: ${percentage}%"></div>
                        </div>
                    </div>

                    <span class="category-arrow">›</span>

                </summary>

                <div class="challenge-area">
                    <div class="challenge-grid">
                        ${renderCamos(category, weaponName)}
                    </div>
                </div>

            </details>
        `;

    }).join("");

}


/* =====================================
   RENDER CATEGORIES
===================================== */


/* =====================================
   RENDER CATEGORIES
===================================== */

function renderCategories(search = "") {

    const container = document.getElementById(
        "weapon-categories"
    );

    container.innerHTML = "";

    const query = search.toLowerCase().trim();

    weapons.forEach(group => {

        // Filter weapons based on search.
        const filteredGuns = group.guns.filter(weapon => {

            const weaponName = weapon.name || weapon;

            return (
                weaponName.toLowerCase().includes(query) ||
                group.category.toLowerCase().includes(query)
            );

        });

        if (filteredGuns.length === 0) return;

        // Calculate completed challenges.
        const completed = filteredGuns.reduce(
            (sum, weapon) => {

                const weaponName = weapon.name || weapon;

                return sum + getCompletedCamos(
                    group.category,
                    weaponName
                );

            },
            0
        );

        // Calculate total challenges for this category.
        const total = filteredGuns.reduce(
            (sum, weapon) => {

                const weaponName = weapon.name || weapon;

                return sum + getWeaponCamos(weaponName, group.category).length;

            },
            0
        );

        // Create category accordion.
        const categoryElement = document.createElement("details");

        categoryElement.className = "category";

        categoryElement.open = query.length > 0;

        categoryElement.innerHTML = `

            <summary class="category-header">

                <div class="category-icon">
                    ${escapeHTML(group.icon)}
                </div>

                <span class="category-name">
                    ${escapeHTML(group.category)}
                </span>

                <span class="category-count">
                    ${filteredGuns.length} WEAPONS ·
                    ${completed}/${total}
                </span>

                <span class="category-arrow">›</span>

            </summary>

            <div class="weapon-list">

                ${renderWeapons(
                    group.category,
                    filteredGuns
                )}

            </div>

        `;

        container.appendChild(categoryElement);

    });

    updateStatistics();

}



/* =====================================
   UPDATE STATISTICS
===================================== */

function updateStatistics() {

    const totalWeapons = weapons.reduce(
        (total, group) => total + group.guns.length,
        0
    );

    const totalChallenges = weapons.reduce((total, group) => {

    return total + group.guns.reduce((sum, weapon) => {

        const weaponName = weapon.name || weapon;

        return sum + getWeaponCamos(weaponName, group.category).length;

    }, 0);

}, 0);

    let completedChallenges = 0;
    let startedWeapons = 0;
    let completedWeapons = 0;

    weapons.forEach(group => {

        group.guns.forEach(weapon => {

    const weaponName = weapon.name || weapon;

    const completed = getCompletedCamos(
        group.category,
        weaponName
    );

            completedChallenges += completed;

            if (completed > 0) {
                startedWeapons++;
            }

            const totalCamos = getWeaponCamos(
                weaponName,
                group.category
            ).length;

if (completed === totalCamos) {
    completedWeapons++;
}

        });

    });

    const percentage = Math.round(
        completedChallenges / totalChallenges * 100
    );

    document.getElementById("overall").textContent =
        percentage + "%";

    document.getElementById("overall-bar").style.width =
        percentage + "%";

    document.getElementById("completed").textContent =
        `${completedChallenges} / ${totalChallenges}`;

    document.getElementById("started").textContent =
        `${startedWeapons} / ${totalWeapons}`;

    document.getElementById("weapons-complete").textContent =
        `${completedWeapons} / ${totalWeapons}`;

}



/* =====================================
   UPDATE INDIVIDUAL WEAPON
===================================== */

function updateWeaponDisplay(category, weapon, weaponElement) {

    const totalCamos = getWeaponCamos(weapon, category).length;

    const completed = getCompletedCamos(
        category,
        weapon
    );

    const percentage = Math.round(
        completed / totalCamos * 100
    );

    const progressText = weaponElement.querySelector(
        ".weapon-progress span"
    );

    const progressBar = weaponElement.querySelector(
        ".mini-progress > div"
    );

    if (progressText) {
        progressText.textContent =
            `${completed}/${totalCamos} CAMOS`;
    }

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

}


/* =====================================
   CHECKBOX EVENTS
===================================== */

document.addEventListener("change", event => {

    if (!event.target.matches(
        'input[type="checkbox"][data-camo-id]'
    )) return;

    const checkbox = event.target;
    const id = checkbox.dataset.camoId;

    const weaponElement = checkbox.closest(".weapon");

    if (!weaponElement) return;

    const weaponName = weaponElement.querySelector(
        ".weapon-name"
    ).textContent.trim();

    const categoryName = weaponElement.querySelector(
        ".weapon-type"
    ).textContent.trim();

    const weaponCamos = getWeaponCamos(weaponName, categoryName);

    const camoIndex = weaponCamos.findIndex((camo, index) => {

        return getCamoId(
            categoryName,
            weaponName,
            index
        ) === id;

    });

    if (camoIndex === -1) return;

    // Apply progression hierarchy.
    weaponCamos.forEach((camo, index) => {

        const camoId = getCamoId(
            categoryName,
            weaponName,
            index
        );

        const shouldBeChecked = checkbox.checked
            ? index <= camoIndex
            : index < camoIndex;

        progress[camoId] = shouldBeChecked;

        const relatedCheckbox = weaponElement.querySelector(
            `input[data-camo-id="${CSS.escape(camoId)}"]`
        );

        if (relatedCheckbox) {
            relatedCheckbox.checked = shouldBeChecked;
        }

    });

    saveProgress();

    // Update weapon progress.
    updateWeaponDisplay(
        categoryName,
        weaponName,
        weaponElement
    );

    // Update category progress.
    document.querySelectorAll(".category").forEach(categoryElement => {

        const category = categoryElement.querySelector(
            ".category-name"
        ).textContent.trim();

        const categoryWeapons = [
            ...categoryElement.querySelectorAll(".weapon")
        ];

        let completed = 0;
        let total = 0;

        categoryWeapons.forEach(element => {

            const name = element.querySelector(
                ".weapon-name"
            ).textContent.trim();

            completed += getCompletedCamos(category, name);
            total += getWeaponCamos(name, category).length;

        });

        const countElement = categoryElement.querySelector(
            ".category-count"
        );

        if (countElement) {

            countElement.textContent =
                `${categoryWeapons.length} WEAPONS · ${completed}/${total}`;

        }

    });

    // Update overall statistics.
    updateStatistics();

});


/* =====================================
   SEARCH
===================================== */

document.getElementById("weapon-search")
    .addEventListener("input", event => {

        renderCategories(event.target.value);

    });


/* =====================================
   EXPAND / COLLAPSE
===================================== */

document.getElementById("expand-all")
    .addEventListener("click", () => {

        document.querySelectorAll(
            ".category, .weapon"
        ).forEach(element => {

            element.open = true;

        });

    });


document.getElementById("collapse-all")
    .addEventListener("click", () => {

        document.querySelectorAll(
            ".category, .weapon"
        ).forEach(element => {

            element.open = false;

        });

    });


/* =====================================
   RESET PROGRESS
===================================== */

document.getElementById("reset-progress")
    .addEventListener("click", () => {

        const confirmed = confirm(
            "Are you sure you want to reset all camo progress?"
        );

        if (!confirmed) return;

        progress = {};

        saveProgress();

        renderCategories(
            document.getElementById("weapon-search").value
        );

    });


/* =====================================
   INITIALIZE APPLICATION
===================================== */

loadProgress();

renderCategories();
