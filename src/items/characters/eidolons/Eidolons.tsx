import * as CA from "../../../assets/characters";
import type { Eidolon } from "../../../types/hsr";

export const CipherEidolons: Eidolon = {
    e1: {
        title: "Read the Room, Seek the Glee",
        desc: "Cipher's tally of DMG is 150% of its original value. When using the Talent's Follow-Up ATK, increases Cipher's ATK by 80%, lasting for 2 turn(s).",
        image: CA.CipherE1,
    },
    e2: {
        title: "In the Fray, Nab On a Spree",
        desc: "When Cipher hits an enemy target, there is a 120% base chance to increase the DMG it receives by 30%, lasting for 2 turn(s).",
        image: CA.CipherE2,
    },
    e3: {
        title: "From Thin Air, Hard to Foresee",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.CipherE3,
    },
    e4: {
        title: "The Jig Is Up, Quick to Flee",
        desc: "After the \"Patron\" gets attacked by an ally target, Cipher deals Quantum Additional DMG to it equal to 50% of Cipher's ATK.",
        image: CA.CipherE4,
    },
    e5: {
        title: "Safe in Numbers, Light as a Bee",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.CipherE5,
    },
    e6: {
        title: "The Thief's Game, Unsung and Free",
        desc: "The DMG dealt by Follow-Up ATK from Cipher's Talent increases by 350%. During the tally, an additional 16% of non-Overflow DMG dealt by this attack is tallied. After the tally is cleared by using Ultimate, 20% of the cleared tally is returned.",
        image: CA.CipherE6,
    },
};

export const MydeiEidolons: Eidolon = {
    e1: {
        title: "Frost Hones Spine of Steel",
        desc: "Increases the DMG multiplier dealt by \"Godslayer Be God\" to the primary target by 30%. This ability now deals to all enemies Imaginary DMG equal to the DMG multiplier dealt to the primary target.",
        image: CA.MydeiE1,
    },
    e2: {
        title: "Strife Beholds Cry of Dead",
        desc: "During \"Vendetta\", the DMG dealt by Mydei ignores 15% of enemy targets' DEF. After he receives healing, converts 40% of the healed amount to Charge. The tally of the converted Charge cannot exceed 40 point(s). Resets this tally of Charge after any unit takes action.",
        image: CA.MydeiE2,
    },
    e3: {
        title: "Honor Exalts Feast of Faith",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.MydeiE3,
    },
    e4: {
        title: "Siren Jolts the Laconic Lion",
        desc: "While in \"Vendetta\", increases CRIT DMG by 30% and restores HP by 10% of this unit's Max HP after receiving attacks from enemy targets.",
        image: CA.MydeiE4,
    },
    e5: {
        title: "War Chisels Flesh of Flame",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.MydeiE5,
    },
    e6: {
        title: "Legacy Scales Mound of Blood",
        desc: "When entering battle, immediately enters the \"Vendetta\" state, and lowers the Charge required for \"Godslayer Be God\" to 100 point(s).",
        image: CA.MydeiE6,
    },
};

export const AvWfEidolons: Eidolon = {
    e1: {
        title: "A Holiday on the Line",
        desc: "Increases All-Type RES PEN by 24%. Talent gets enhanced: When \"Fervor\" reaches 10/20/30 points, immediately uses \"Cheers! To Summer's Blaze.\"",
        image: CA.AvWfE1,
    },
    e2: {
        title: "Idle as the Turning Tide",
        desc: "Increases the upper limit of \"Fervor\" to 50 points. \"Fervor\" reaching 40/50 points can also trigger the Talent to use \"Cheers! To Summer's Blaze\". After using Elation Skill, additionally gains 4 \"Fervor.\"",
        image: CA.AvWfE2,
    },
    e3: {
        title: "A Rendezvous Served Chilled",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15. Elation Skill Lv. +1, up to a maximum of Lv. 15.",
        image: CA.AvWfE3,
    },
    e4: {
        title: "Sunlight Runs No Tab",
        desc: "When Aventurine • Waveflair uses Skill, enables the DMG dealt by all allies to ignore 18% of enemy targets' DEF, lasting for 3 turn(s).",
        image: CA.AvWfE4,
    },
    e5: {
        title: "Into the Eye of the Jackpot",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10. Elation Skill Lv. +1, up to a maximum of Lv. 15.",
        image: CA.AvWfE5,
    },
    e6: {
        title: "The Past in Fast Lane",
        desc: "Elation DMG dealt by Aventurine • Waveflair merrymakes by 25%. After Aventurine • Waveflair uses his Elation Skill 2 time(s), all subsequent Elation Skills used become \"All In! To Summer's Blaze\". And when using the Elation Skill \"All In! To Summer's Blaze\" to additionally deal DMG outside of Aha Instant, it no longer consumes \"Fervor\".",
        image: CA.AvWfE6,
    },
};

export const RuanEidolons: Eidolon = {
    e1: {
        title: "Neuronic Embroidery",
        desc: "While the Ultimate's Zone is deployed, the DMG dealt by all allies ignores 20% of the target's DEF.",
        image: CA.RuanE1,
    },
    e2: {
        title: "Idle as the Turning Tide",
        desc: "While Ruan Mei is on the field, all allies increase their ATK by 40% when dealing DMG to enemies that are Weakness Broken.",
        image: CA.RuanE2,
    },
    e3: {
        title: "A Rendezvous Served Chilled",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.RuanE3,
    },
    e4: {
        title: "Sunlight Runs No Tab",
        desc: "When an enemy target's Weakness is Broken, Ruan Mei's Break Effect increases by 100% for 3 turn(s).",
        image: CA.RuanE4,
    },
    e5: {
        title: "Into the Eye of the Jackpot",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.RuanE5,
    },
    e6: {
        title: "The Past in Fast Lane",
        desc: "Extends the duration of the Ultimate's Zone by 1 turn(s). The Talent's Break DMG multiplier additionally increases by 200%.",
        image: CA.RuanE6,
    },
};

export const LingshaEidolons: Eidolon = {
    e1: {
        title: "Bloom on Vileward Bouquet",
        desc: "Lingsha's Weakness Break Efficiency increases by 50%. When an enemy unit's Weakness is Broken, reduces their DEF by 20%.",
        image: CA.LingshaE1,
    },
    e2: {
        title: "Leisure in Carmine Smokeveil",
        desc: "When using Ultimate, increases all allies' Break Effect by 40%, lasting for 3 turn(s).",
        image: CA.LingshaE2,
    },
    e3: {
        title: "Shine of Floral Wick",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.LingshaE3,
    },
    e4: {
        title: "Redolence from Canopied Banquet",
        desc: "When Fuyuan takes action, restores HP equal to 40% of Lingsha's ATK for the ally target whose current HP is the lowest.",
        image: CA.LingshaE4,
    },
    e5: {
        title: "Poise Atop Twists and Turns",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.LingshaE5,
    },
    e6: {
        title: "Arcadia Under Deep Seclusion",
        desc: "While \"Fuyuan\" is on the field, reduces all enemies' All-Type RES by 20%. When \"Fuyuan\" attacks, additionally deals 4 instance(s) of DMG, with each instance dealing Fire DMG equal to 50% of Lingsha's ATK and 5 Toughness Reduction to one random enemy. This prioritizes targets with both Toughness greater than 0 and Fire Weakness.",
        image: CA.LingshaE6,
    },
};

export const CastorEidolons: Eidolon = {
    e1: {
        title: "Snowbound Maiden, Memory to Tomb",
        desc: "When the enemy target's current HP is 80%/50% of Max HP or lower, the DMG dealt to it by \"Boneclaw, Doomdrake's Embrace,\" \"Claw Splits the Veil,\" \"Breath Scorches the Shadow,\" and \"Wings Sweep the Ruins\" is 120%/140% of the original DMG respectively.",
        image: CA.CastorE1,
    },
    e2: {
        title: "Crown on Wings of Bloom",
        desc: "After summoning the memosprite Netherwing, Castorice gains 2 stack(s) of \"Ardent Will\". \"Ardent Will\" can stack up to 2 time(s) and can be used to offset the HP cost of Netherwing's Memosprite Skill, \"Breath Scorches the Shadow\" and advance Castorice's action by 100%. When using the next Enhanced Skill, Castorice gains \"Newbud\" by an amount equal to 30% of max \"Newbud\".",
        image: CA.CastorE2,
    },
    e3: {
        title: "Pious Pilgrim, Dance in Doom",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10. Memosprite Talent Lv. +1, up to a maximum of Lv. 10.",
        image: CA.CastorE3,
    },
    e4: {
        title: "Rest in Songs of Gloom",
        desc: "While Castorice is on the field, all allies' HP restored when receiving healing increases by 20%.",
        image: CA.CastorE4,
    },
    e5: {
        title: "Pristine Pages, Prophecy as Plume",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15. Memosprite Skill Lv. +1, up to a maximum of Lv. 10.",
        image: CA.CastorE5,
    },
    e6: {
        title: "Await for Years to Loom",
        desc: "When Castorice or Netherwing deals DMG, increases Quantum RES PEN by 20%. During Netherwing's attacks, can reduce enemy Toughness regardless of Weakness Types. When breaking Weaknesses, triggers the Quantum Weakness Break effect. And the number of Bounces for Netherwing's Talent \"Wings Sweep the Ruins\" additionally increases by 3.",
        image: CA.CastorE6,
    },
};

export const TopazEidolons: Eidolon = {
    e1: {
        title: "Future Market",
        desc: "When enemies afflicted with \"Proof of Debt\" receive Follow-Up ATKs, they will enter the \"Debtor\" state. This can take effect only once within a single attack. The \"Debtor\" state increases the CRIT DMG of Follow-Up ATKs inflicted on the enemy target by 25%, stacking up to 2 time(s). When \"Proof of Debt\" is removed, the \"Debtor\" state is also removed.",
        image: CA.TopazE1,
    },
    e2: {
        title: "Bona Fide Acquisition",
        desc: "After Numby takes action and launches an attack, Topaz regenerates 5 Energy.",
        image: CA.TopazE2,
    },
    e3: {
        title: "Seize the Big and Free the Small",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.TopazE3,
    },
    e4: {
        title: "Agile Operation",
        desc: "After Numby's turn begins, Topaz's action advances by 20%.",
        image: CA.TopazE4,
    },
    e5: {
        title: "Inflationary Demand",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.TopazE5,
    },
    e6: {
        title: "Incentive Mechanism",
        desc: "Numby's attack count during the \"Windfall Bonanza!\" state increases by 1, and its Fire RES PEN increases by 10% when it attacks.",
        image: CA.TopazE6,
    },
};

export const AvEidolons: Eidolon = {
    e1: {
        title: "Prisoner's Dilemma",
        desc: "Increases CRIT DMG by 20% for ally targets with Fortified Wager. After using the Ultimate, provides all allies with a Fortified Wager shield, whose Shield Effect is equal to 100% of the one provided by the Skill, lasting for 3 turn(s).",
        image: CA.AvE1,
    },
    e2: {
        title: "Bounded Rationality",
        desc: "When using the Basic ATK, reduces the target's All-Type RES by 12% for 3 turn(s).",
        image: CA.AvE2,
    },
    e3: {
        title: "Droprate Maxing",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.AvE3,
    },
    e4: {
        title: "Unexpected Hanging Paradox",
        desc: "When triggering his Talent's Follow-Up ATK, first increases Aventurine's DEF by 40% for 2 turn(s), and additionally increases the Hits Per Action for his talent's Follow-Up ATK by 3.",
        image: CA.AvE4,
    },
    e5: {
        title: "Ambiguity Aversion",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.AvE5,
    },
    e6: {
        title: "Stag Hunt Game",
        desc: "For every teammate that holds a Shield, the DMG dealt by Aventurine increases by 50%, up to a maximum of 150%.",
        image: CA.AvE6,
    },
};

export const FireflyEidolons: Eidolon = {
    e1: {
        title: "In Reddened Chrysalis, I Once Rest",
        desc: "When using the Enhanced Skill, ignores 15% of the target's DEF. The Enhanced Skill does not consume Skill Points.",
        image: CA.FireflyE1,
    },
    e2: {
        title: "From Shattered Sky, I Free Fall",
        desc: "While in Complete Combustion, using the Enhanced Basic ATK or the Enhanced Skill to defeat an enemy target or to Break their Weakness allows SAM to immediately gain 1 extra turn. This effect can only trigger 1 time per turn, and the trigger count resets at the start of SAM's turn.",
        image: CA.FireflyE2,
    },
    e3: {
        title: "Amidst Silenced Stars, I Deep Sleep",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.FireflyE3,
    },
    e4: {
        title: "Upon Lighted Fyrefly, I Soon Gaze",
        desc: "While in Complete Combustion, increases SAM's Effect RES by 50%.",
        image: CA.FireflyE4,
    },
    e5: {
        title: "From Undreamt Night, I Thence Shine",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.FireflyE5,
    },
    e6: {
        title: "In Finalized Morrow, I Full Bloom",
        desc: "While in Complete Combustion, increases SAM's Fire RES PEN by 20%. When using the Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by 50%.",
        image: CA.FireflyE6,
    },
};

export const RbnSummerettoEidolons: Eidolon = {
    e1: {
        title: "Stray Bird of Summer",
        desc: "\"Summer Songbirds\" will keep a tally of 100% of the non-True DMG dealt by ally targets. When using the Memosprite Skill, additionally deals True DMG to the enemy target with the highest HP, equal to (11% + current Vibes × 0.1%) of the total tally. Then, clears 50% of the tally.",
        image: CA.RbnE1,
    },
    e2: {
        title: "A Heart of Still Water",
        desc: "Ally targets' All-Type RES PEN increases by 18%. The upper limit of Robin • Summeretto's Vibes increases by 20. The first time an ally target uses an ability during any target's turn to cause Robin • Summeretto to gain Vibes, she gains an additional 2 points.",
        image: CA.RbnE2,
    },
    e3: {
        title: "Echoes Left Along the Way",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15. Memosprite Talent Lv. +1, up to a maximum of Lv. 10.",
        image: CA.RbnE3,
    },
    e4: {
        title: "Her Variation on the Theme",
        desc: "Upon entering the \"Fever\" state, immediately gains 12 Vibes, and increases the SPD of \"Summer Songbirds\" by an amount equal to (20% + current Vibes × 0.5%).",
        image: CA.RbnE4,
    },
    e5: {
        title: "To Chase the Dawn Anew",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10. Memosprite Skill Lv. +1, up to a maximum of Lv. 10.",
        image: CA.RbnE5,
    },
    e6: {
        title: "A Song Yet Unnamed",
        desc: "Increases the Memosprite Skill's DMG multiplier by 100% of its original value. While in the \"Fever\" state, Robin • Summeretto can store her Ultimate up to 2 times. After entering the \"Fever\" state for the first time in this battle or when the the \"Fever\" countdown's turn starts, regenerates a fixed 140 Energy.",
        image: CA.RbnE6,
    },
};

export const HysilensEidolons: Eidolon = {
    e1: {
        title: "You Ask Why Hearts Cry",
        desc: "While Hysilens is on the field, the DoT dealt by ally targets is equal to 116% of their original value. When Hysilens inflicts Wind Shear/Bleed/Burn/Shock on enemies via her Talent, there is a 100% base chance to additionally inflict the target with 1 instance of Wind Shear/Bleed/Burn/Shock state that is equivalent to those from the original Talent effect and can coexist with such pre-existing states.",
        image: CA.HysilensE1,
    },
    e2: {
        title: "Tell Me Why Waves Roar High",
        desc: "Ally targets' All-Type RES PEN increases by 18%. The upper limit of Robin • Summeretto's Vibes increases by 20. The first time an ally target uses an ability during any target's turn to cause Robin • Summeretto to gain Vibes, she gains an additional 2 points.",
        image: CA.HysilensE2,
    },
    e3: {
        title: "Why Do Lights Bid Goodbye",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.HysilensE3,
    },
    e4: {
        title: "Lo, How Time Flows By",
        desc: "While the Zone is active, reduces All-Type RES of all enemies by 20%.",
        image: CA.HysilensE4,
    },
    e5: {
        title: "In Ablution, I Hum and Sigh",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.HysilensE5,
    },
    e6: {
        title: "When to Return From Where You Lie",
        desc: "While the Zone is active, at the start of each turn or after one attack by an ally target, increases the maximum trigger count for Hysilens's Physical DoT effect to 12, and increases the multiplier of the DMG dealt by 20%.",
        image: CA.HysilensE6,
    },
};

export const RinEidolons: Eidolon = {
    e1: {
        title: "Zelretch's Apprentice",
        desc: "If one instance of the Enhanced Skill consumes 30 or more \"Gem Energy,\" Rin Tohsaka gains \"Shadow Gem\" equal to the amount of \"Gem Energy\" consumed. While holding \"Shadow Gem,\" enhances Skill to \"Second Magic Experiment.\" The Enhanced Skill consumes all \"Shadow Gem,\" does not trigger the effect that converts Skill Points into \"Gem Energy,\" and does not consume \"Gem Energy.\"",
        image: CA.RinE1,
    },
    e2: {
        title: "Dimensional Traveler",
        desc: "Rin Tohsaka's Skill DMG dealt increases by 30%. While Rin Tohsaka is on the field, Skill DMG dealt by all allies becomes 130% of the original DMG.",
        image: CA.RinE2,
    },
    e3: {
        title: "Holy Grail War: Victory Memorial",
        desc: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
        image: CA.RinE3,
    },
    e4: {
        title: "Red Devil: Triple Speed",
        desc: "When the CRIT DMG boost effect from the Talent \"Gem Magecraft\" applies to Rin Tohsaka, the effect can stack, up to 2 time(s).",
        image: CA.RinE4,
    },
    e5: {
        title: "Goddess of Venus's Favor",
        desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15.",
        image: CA.RinE5,
    },
    e6: {
        title: "Nailed It This Time!",
        desc: "Rin Tohsaka's All-Type RES PEN increases by 20%. When using Ultimate, gains 24 \"Gem Energy\" and 1 extra turn.",
        image: CA.RinE6,
    },
};