import type { Character } from '../../types/hsr';
import { Paths, Elements, Worlds } from "../item/ResourcesLists";
import * as CA from '../../assets/characters/index';

export const Characters : Character[] = [];

const Cipher: Character = {
    name: "Cipher",
    path: Paths.Nihility,
    element: Elements.Quantum,
    world: Worlds.Amphoreus,
    image: CA.cipherImg,

    baseATK: 640,
    baseDEF: 509,
    baseHP: 931,
    baseSPD: 106,
    aggro: 100,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Oops, a Missed Catch",
            type: "basic",
            level: "7/7",
            icon: CA.CipherBasicATK,
            description: "Deals Quantum DMG equal to <u>130%</u> of Cipher's ATK to one designated enemy."
        },
        skill: {
            id: "skill",
            name: "Skill: Hey, Jackpot for the Taking",
            type: "skill",
            level: "12/12",
            icon: CA.CipherSkill,
            description: "Has a 120% base chance to Weaken one designated enemy and its adjacent targets (decreasing their DMG dealt by 10%) and increases Cipher's ATK by 30%, lasting for 2 turn(s). Moreover, deals Quantum DMG equal to <u>230%</u> of Cipher's ATK to one designated enemy, and Quantum DMG equal to <u>115%</u> of Cipher's ATK to the adjacent targets."
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Yours Truly, Kitty Phantom Thief!",
            type: "ultimate",
            level: "12/12",
            icon: CA.CipherUltimate,
            description: "<b>Energy: 130</b><br> Deals Quantum DMG equal to <u>138%</u> of Cipher's ATK to one designated enemy. Then, deals True DMG equal to 25% of the current tally kept by Talent to the one designated enemy. Moreover, deals Quantum DMG equal to <u>46%</u> of Cipher's ATK alongside True DMG equal to 75% of the current tally kept by Talent to the one designated enemy and its adjacent targets. And this True DMG is distributed evenly among all targets of this ability."
        },
        talent: {
            id: "talent",
            name: "Talent: The Hospitable Dolosian",
            type: "talent",
            level: "12/12",
            icon: CA.CipherTalent,
            description: "When there are no enemy targets in the \"Patron\" state on the battlefield, Cipher immediately causes one enemy target with the highest Max HP on the battlefield to become the \"Patron\". When using Skill and Ultimate, the primary target becomes the \"Patron\". The \"Patron\" state only takes effect on the most recent target. After the \"Patron\" gets attacked by other ally targets, Cipher immediately launches Follow-Up ATK against the \"Patron\", dealing Quantum DMG equal to <u>150%</u> of Cipher's ATK. This effect can trigger up to 1 time(s) per turn, and this trigger count resets at the start of Cipher's turn. Cipher will tally 12% of the non-True DMG dealt by ally targets to the \"Patron.\" Overflow DMG will not be tallied. After using Ultimate, clears this tally."
        },
        technique: {
            id: "technique",
            name: "Technique: Puss in Boots",
            type: "technique",
            level: "1/1",
            icon: CA.CipherTechnique,
            description: "Gains \"Zagreus's Blessing\" that lasts for 15 second(s). During this time, Cipher will be undetectable by enemies and her movement speed increases by 50%. When approaching an enemy in the overworld/Simulated Universe/Divergent Universe, can immediately gain a random Consumable. Consumables can be gained this way for up to 50 time(s) in each Earth day. When entering battle with \"Zagreus's Blessing\" active, deals Quantum DMG equal to 100% of Cipher's ATK to all enemies. And the tallied amount Cipher gains from this instance of DMG increases by 200%."
        },

        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Sleight of Sky",
            type: "bonus",
            level: "1/1",
            icon: CA.SleightOfSky,
            description: "Increases the CRIT DMG dealt by the Talent's Follow-Up ATK by 100%. When Cipher is on the battlefield, DMG received by all enemy targets increases by 40%.",
        },
        b2: {
            id: "b2",
            name: "Empyrean Strides",
            type: "bonus",
            level: "1/1",
            icon: CA.EmpyreanStrides,
            description: "When Cipher's SPD is higher than or equal to 140/170, CRIT Rate increases by 25%/50%, and the gained tally increases by 50%/100%.",
        },
        b3: {
            id: "b3",
            name: "300 Rogues",
            type: "bonus",
            level: "1/1",
            icon: CA.Rogues,
            description: "Cipher can tally 8% of the non-True DMG dealt by ally targets to the enemy targets other than the \"Patron.\" Overflow DMG is not tallied.",
        },
        // --- Stats Nodes (Nodos Pequeños) ---
        s1: {
            id: "s1",
            name: "Effect Hit Rate Boost",
            type: "stat",
            icon: CA.EffectHitRate,
            description: "Effect Hit Rate Increases by: <b><u>6.0%</u></b>",
        },
        s2: {
            id: "s2",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by <b><u>6.4%</u></b>",
        },
        s3: {
            id: "s3",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },
        s4: {
            id: "s4",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by <b><u>4.8%</u></b>",
        },
        s5: {
            id: "s5",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },
        s6: {
            id: "s6",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by <b><u>3.2%</u></b>",
        },
        s7: {
            id: "s7",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },
        s8: {
            id: "s8",
            name: "Effect Hit Rate Boost",
            type: "stat",
            icon: CA.EffectHitRate,
            description: "Effect Hit Rate Increases by: <b><u>4.0%</u></b>",
        },
        s9: {
            id: "s9",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },
        s10: {
            id: "s10",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>4</u></b>",
        },
    },
};

const Midey: Character = {
    name: "Midey",
    path: Paths.Destruction,
    element: Elements.Imaginary,
    world: Worlds.Amphoreus,
    image: CA.mideyImg,

    baseATK: 426,
    baseDEF: 194,
    baseHP: 1552,
    baseSPD: 95,
    aggro: 125,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Vow of Voyage",
            type: "basic",
            level: "7/7",
            icon: CA.mideyBasicATK,
            description: "Deals Imaginary DMG equal to 55% of Mydei's Max HP to one designated enemy."
        },
        skill: {
            id: "skill",
            name: "Skill: Deaths are Legion, Regrets are None",
            type: "skill",
            level: "12/12",
            icon: CA.mideySkill,
            description: "<b>Deaths are Legion, Regrets are None</b><br>Consumes HP by an amount equal to 50% of Mydei's current HP. Deals Imaginary DMG equal to <u>99%</u> of Mydei's Max HP to one designated enemy and Imaginary DMG equal to <u>55%</u> of Mydei's Max HP to adjacent targets. If the current HP is not sufficient, using Skill reduces Mydei's current HP to 1.<br><br><b>Kingslayer Be King</b><br>" +
            "Consumes HP by an amount equal to 35% of Mydei's current HP. Deals Imaginary DMG equal to <u>121%</u> of Mydei's Max HP to one enemy and Imaginary DMG equal to <u>73%</u> of Mydei's Max HP to adjacent targets. If the current HP is not sufficient, using Skill reduces Mydei's current HP to 1. This ability will be automatically used.<br><br><b>Godslayer Be God</b><br>" +
            "Consumes 150 point(s) of Charge. Deals Imaginary DMG equal to <u>308%</u> of Mydei's Max HP to one enemy and Imaginary DMG equal to <u>185%</u> of Mydei's Max HP to adjacent targets. This ability will be automatically used. While this ability is in use, Charge cannot be accumulated."
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Throne of Bones",
            type: "ultimate",
            level: "12/12",
            icon: CA.mideyUltimate,
            description: "<b>Energy: 160</b><br> Restores HP by <u>21.0%</u> of Mydei's Max HP and accumulates 20 Talent's Charge point(s). Deals Imaginary DMG equal to <u>173%</u> of Mydei's Max HP to one designated enemy, and deals Imaginary DMG equal to <u>108%</u> of Mydei's Max HP to adjacent targets. Additionally, Taunts the target and targets adjacent to it, lasting for 2 turn(s). The next use of \"Godslayer Be God\" prioritizes attacking one designated enemy, and this effect only works on the latest target."
        },
        talent: {
            id: "talent",
            name: "Talent: Blood for Blood",
            type: "talent",
            level: "12/12",
            icon: CA.mideyTalent,
            description: "For each 1% of HP lost, accumulates 1 point of Charge (up to 200 points). When Charge reaches 100, consumes 100 points of Charge to enter the \"Vendetta\" state, restores HP equal to <u>27%</u> of Mydei's Max HP, and advances action by 100%. While the \"Vendetta\" state is active, Max HP increases by 50% of the current Max HP and DEF remains at 0. At the start of this unit's turn, automatically uses \"Kingslayer Be King.\" When Charge reaches 150 points during the \"Vendetta\" state, Mydei immediately gains 1 extra turn and automatically uses \"Godslayer Be God.\" When receiving a killing blow during the \"Vendetta\" state, Mydei will not be knocked down, but will clear his Charge, exits the \"Vendetta\" state, and restores HP by 50% of his Max HP."
        },
        technique: {
            id: "technique",
            name: "Technique: Cage of Broken Lance",
            type: "technique",
            level: "1/1",
            icon: CA.mideyTechnique,
            description: "After using Technique, pulls in enemies within a certain area and inflicts Daze on them for 10 second(s). Dazed enemies will not actively attack ally targets. If actively attacking Dazed enemies, when entering battle, deals Imaginary DMG equal to 80% of Mydei's Max HP to all enemies, and Taunts the targets, lasting for 1 turn(s). This unit accumulates 50 point(s) of Talent's Charge."
        },

        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Bloodied Chiton",
            type: "bonus",
            level: "1/1",
            icon: CA.BloodiedChiton,
            description: "When battle starts, if Mydei's Max HP exceeds 4000, for every 100 excess HP, Mydei's CRIT Rate increases by 1.2%, his Charge ratio from enemy targets' DMG increases by 2.5%, and his HP restored when receiving healing increases by 0.75%. Up to 4000 excess HP can be taken into account for this effect.",
        },
        b2: {
            id: "b2",
            name: "Earth and Water",
            type: "bonus",
            level: "1/1",
            icon: CA.EarthAndWater,
            description: "During the \"Vendetta\" state, Mydei will not exit the \"Vendetta\" state when receiving a killing blow. This effect can trigger 3 time(s) per battle.",
        },
        b3: {
            id: "b3",
            name: "Thirty Tyrants",
            type: "bonus",
            level: "1/1",
            icon: CA.ThirtyTyrants,
            description: "While in the \"Vendetta\" state, Mydei is immune to Crowd Control debuffs.",
        },
        // --- Stats Nodes (Nodos Pequeños) ---
        s1: {
            id: "s1",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>8.0%</u></b>",
        },
        s2: {
            id: "s2",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by <b><u>3</u></b>",
        },
        s3: {
            id: "s3",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
        },
        s4: {
            id: "s4",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>6.0%</u></b>",
        },
        s5: {
            id: "s5",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>8.0%</u></b>",
        },
        s6: {
            id: "s6",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>8.0%</u></b>",
        },
        s7: {
            id: "s7",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
        },
        s8: {
            id: "s8",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>4.0%</u></b>",
        },
        s9: {
            id: "s9",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by <b><u>2</u></b>",
        },
        s10: {
            id: "s10",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
        },
    }
};

Characters.push(Cipher);
Characters.push(Midey);