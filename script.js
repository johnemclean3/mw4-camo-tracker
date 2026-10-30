
/* =====================================
   MW4 CAMO TRACKER
===================================== */

const STORAGE_KEY = "nvg-mw4-camo-progress";

/* =====================================
   WEAPON DATABASE
===================================== */

const weapons = [

    {
    category: "Assault Rifles",
    icon: "AR",
    guns: [
        {
            name: "Han 86",
            image: "assets/images/weapons/assault-rifles/MW4_han86.png"
        },
        {
            name: "M4",
            image: "assets/images/weapons/assault-rifles/MW4_m4.png"
        },
        {
            name: "Hyeon Burst",
            image: "assets/images/weapons/assault-rifles/MW4_hyeon.png"
        },
        {
            name: "Patriot XMR",
            image: "assets/images/weapons/assault-rifles/MW4_patriot_xmr.png"
        },
        {
            name: "Kastov 762",
            image: "assets/images/weapons/assault-rifles/MW4_kastov762.png"
        },
        {
            name: "Oden",
            image: "assets/images/weapons/assault-rifles/MW4_oden.png"
        },
        {
            name: "Axion",
            image: "assets/images/weapons/assault-rifles/MW4_axion.png"
        },
        {
            name: "Cronen Squall",
            image: "assets/images/weapons/assault-rifles/MW4_cronen_squall.png"
        }
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
            "Astaroth .57",
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
            "RPG-8",
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
    name: "Base Camo",
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

    "Patriot XMR": [
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

    "Kastov 762": [
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

// Fallback challenges for weapons without supplied requirements.
const defaultSpecialCamos = [
    {
        name: "Special Camo 01",
        description: "Weapon-specific challenge.",
        type: "SPECIAL"
    },
    {
        name: "Special Camo 02",
        description: "Weapon-specific challenge.",
        type: "SPECIAL"
    },
    {
        name: "Special Camo 03",
        description: "Weapon-specific challenge.",
        type: "SPECIAL"
    }
];

function getWeaponCamos(weapon) {

    return [
        baseCamo,
        ...(specialCamos[weapon] || defaultSpecialCamos),
        ...masteryCamos
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

    const weaponCamos = getWeaponCamos(weapon);

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

    const weaponCamos = getWeaponCamos(weapon);

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
        const weaponImage = weapon.image || "";

        const completed = getCompletedCamos(
            category,
            weaponName
        );

        const totalCamos = getWeaponCamos(weaponName).length;

const percentage = Math.round(
    completed / totalCamos * 100
);

        return `

            <details class="weapon">

                <summary class="weapon-header">

                    <div class="weapon-image">
                        <img
                            src="${escapeHTML(weaponImage)}"
                            alt="${escapeHTML(weaponName)}"
                            onerror="this.style.display='none'"
                        >
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

                return sum + getWeaponCamos(weaponName).length;

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

        return sum + getWeaponCamos(weaponName).length;

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

            const totalCamos = getWeaponCamos(weaponName).length;

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

    const totalCamos = getWeaponCamos(weapon).length;

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

    const weaponCamos = getWeaponCamos(weaponName);

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
            total += getWeaponCamos(name).length;

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
