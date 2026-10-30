
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

const camos = [

    {
        name: "Base Camo",
        description: "Complete the base weapon camo challenge.",
        type: "BASE"
    },

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
    },

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

    return camos.filter((camo, index) => {

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

    return camos.map((camo, index) => {

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

        const completed = getCompletedCamos(
            category,
            weapon
        );

        const percentage = Math.round(
            completed / camos.length * 100
        );

        return `

            <details class="weapon">

                <summary class="weapon-header">

                    <div class="weapon-image">
                        ${escapeHTML(weapon)}
                    </div>

                    <div class="weapon-info">

                        <div class="weapon-name">
                            ${escapeHTML(weapon)}
                        </div>

                        <div class="weapon-type">
                            ${escapeHTML(category)}
                        </div>

                    </div>

                    <div class="weapon-progress">

                        <span>
                            ${completed}/${camos.length} CAMOS
                        </span>

                        <div class="mini-progress">

                            <div style="width: ${percentage}%"></div>

                        </div>

                    </div>

                    <span class="category-arrow">›</span>

                </summary>

                <div class="challenge-area">

                    <div class="challenge-grid">

                        ${renderCamos(category, weapon)}

                    </div>

                </div>

            </details>

        `;

    }).join("");

}


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

        const filteredGuns = group.guns.filter(weapon => {

            return (
                weapon.toLowerCase().includes(query) ||
                group.category.toLowerCase().includes(query)
            );

        });

        if (filteredGuns.length === 0) return;

        const completed = filteredGuns.reduce(
            (total, weapon) => {

                return total + getCompletedCamos(
                    group.category,
                    weapon
                );

            },
            0
        );

        const total = filteredGuns.length * camos.length;

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

    const totalChallenges = totalWeapons * camos.length;

    let completedChallenges = 0;
    let startedWeapons = 0;
    let completedWeapons = 0;

    weapons.forEach(group => {

        group.guns.forEach(weapon => {

            const completed = getCompletedCamos(
                group.category,
                weapon
            );

            completedChallenges += completed;

            if (completed > 0) {
                startedWeapons++;
            }

            if (completed === camos.length) {
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

    const completed = getCompletedCamos(
        category,
        weapon
    );

    const percentage = Math.round(
        completed / camos.length * 100
    );

    const progressText = weaponElement.querySelector(
        ".weapon-progress span"
    );

    const progressBar = weaponElement.querySelector(
        ".mini-progress > div"
    );

    if (progressText) {
        progressText.textContent =
            `${completed}/${camos.length} CAMOS`;
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

    progress[id] = checkbox.checked;

    saveProgress();

    // Find the weapon accordion without rebuilding the page.
    const weaponElement = checkbox.closest(".weapon");

    if (weaponElement) {

        const weaponName = weaponElement.querySelector(
            ".weapon-name"
        ).textContent.trim();

        const categoryName = weaponElement.querySelector(
            ".weapon-type"
        ).textContent.trim();

        updateWeaponDisplay(
            categoryName,
            weaponName,
            weaponElement
        );

    }

    // Update category completion counts without closing accordions.
    document.querySelectorAll(".category").forEach(categoryElement => {

        const categoryName = categoryElement.querySelector(
            ".category-name"
        ).textContent.trim();

        const categoryWeapons = weapons.find(
            group => group.category === categoryName
        );

        if (!categoryWeapons) return;

        const filteredWeaponElements = [
            ...categoryElement.querySelectorAll(".weapon")
        ];

        const completed = filteredWeaponElements.reduce(
            (total, element) => {

                const name = element.querySelector(
                    ".weapon-name"
                ).textContent.trim();

                return total + getCompletedCamos(
                    categoryName,
                    name
                );

            },
            0
        );

        const total = filteredWeaponElements.length * camos.length;

        const countElement = categoryElement.querySelector(
            ".category-count"
        );

        if (countElement) {

            countElement.textContent =
                `${filteredWeaponElements.length} WEAPONS · ${completed}/${total}`;

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
