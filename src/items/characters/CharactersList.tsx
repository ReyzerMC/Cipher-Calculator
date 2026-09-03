import type { Character } from '../../types/hsr';
import { Paths, Elements, Worlds } from "../item/ResourcesLists";
import * as CA from '../../assets/characters/index';
import { CipherScaling, MydeiScaling, AvWfScalling, RuanmeiScalling, LingshaScaling, CastoriceScaling, TopazScaling, AvScaling, FireflyScaling, RbnSummerettoScaling, HysilensScaling } from './scalingData';
import * as Eidolons from './eidolons/Eidolons';

export const scaleValue = (
    values: number[],
    index: number,
    suffix = "%"
) => {
    return `<b><u>${values[index]}${suffix}</u></b>`
}

export const Characters : Character[] = [];

const Cipher: Character = {
  name: "Cipher",
  path: Paths.Nihility,
  element: Elements.Quantum,
  world: Worlds.Amphoreus,
  image: CA.cipherImg,
  pfp: CA.cipherPfp,
  eidolons: Eidolons.CipherEidolons,

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
      level: "1/7",
      icon: CA.CipherBasicATK,

      description: (i) => `
        Deals Quantum DMG equal to
        ${scaleValue(CipherScaling.attack, i)}
        of Cipher's ATK to one designated enemy.
      `,
    },

    skill: {
      id: "skill",
      name: "Skill: Hey, Jackpot for the Taking",
      type: "skill",
      level: "1/12",
      icon: CA.CipherSkill,

      description: (i) => `
        Has a 120% base chance to Weaken one designated enemy and its adjacent targets
        (decreasing their DMG dealt by 10%) and increases Cipher's ATK by 30%,
        lasting for 2 turn(s).

        Moreover, deals Quantum DMG equal to
        <b><u>${CipherScaling.skill.damage[i]}%</u></b>
        of Cipher's ATK to one designated enemy, and Quantum DMG equal to
        <b><u>${CipherScaling.skill.adjacent[i]}%</u></b>
        of Cipher's ATK to adjacent targets.
      `,
    },

    ultimate: {
      id: "ultimate",
      name: "Ultimate: Yours Truly, Kitty Phantom Thief!",
      type: "ultimate",
      level: "1/12",
      icon: CA.CipherUltimate,

      description: (i) => `
        <b>Energy: 130</b><br>

        Deals Quantum DMG equal to
        <b><u>${CipherScaling.ultimate.main[i]}%</u></b>
        of Cipher's ATK to one designated enemy.

        Moreover, deals Quantum DMG equal to
        <b><u>${CipherScaling.ultimate.adjacent[i]}%</u></b>
        of Cipher's ATK to the one designated enemy and its adjacent targets.
      `,
    },

    talent: {
      id: "talent",
      name: "Talent: The Hospitable Dolosian",
      type: "talent",
      level: "1/12",
      icon: CA.CipherTalent,

      description: (i) => `
        After the "Patron" gets attacked by other ally targets,
        Cipher immediately launches Follow-Up ATK against the "Patron",
        dealing Quantum DMG equal to
        <b><u>${CipherScaling.talent[i]}%</u></b>
        of Cipher's ATK.
      `,
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
            description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
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
            description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
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
            description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
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

const Mydei: Character = {
    name: "Mydei",
    path: Paths.Destruction,
    element: Elements.Imaginary,
    world: Worlds.Amphoreus,
    eidolons: Eidolons.MydeiEidolons,
    image: CA.MydeiImg,
    pfp: CA.MydeiPfp,

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
            icon: CA.MydeiBasicATK,

            description: (i) => `
                Deals Imaginary DMG equal to
                ${scaleValue(MydeiScaling.attack, i)}
                of Mydei's Max HP to one designated enemy.
            `,
        },

        skill: {
            id: "skill",
            name: "Skill: Deaths are Legion, Regrets are None",
            type: "skill",
            level: "12/12",
            icon: CA.MydeiSkill,

            description: (i) => `
                <b>Deaths are Legion, Regrets are None</b><br>

                Consumes HP by an amount equal to 50% of Mydei's current HP.
                Deals Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.main, i)}
                of Mydei's Max HP to one designated enemy and Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.adj, i)}
                of Mydei's Max HP to adjacent targets.

                If the current HP is not sufficient, using Skill reduces Mydei's
                current HP to 1.

                <br><br>

                <b>Kingslayer Be King</b><br>

                Consumes HP by an amount equal to 35% of Mydei's current HP.
                Deals Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.adj2, i)}
                of Mydei's Max HP to one enemy and Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.adj3, i)}
                of Mydei's Max HP to adjacent targets.

                If the current HP is not sufficient, using Skill reduces Mydei's
                current HP to 1.

                This ability will be automatically used.

                <br><br>

                <b>Godslayer Be God</b><br>

                Consumes 150 point(s) of Charge.
                Deals Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.adj4, i)}
                of Mydei's Max HP to one enemy and Imaginary DMG equal to
                ${scaleValue(MydeiScaling.skill.adj5, i)}
                of Mydei's Max HP to adjacent targets.

                This ability will be automatically used.
                While this ability is in use, Charge cannot be accumulated.
            `,
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Throne of Bones",
            type: "ultimate",
            level: "12/12",
            icon: CA.MydeiUltimate,

            description: (i) => `
                <b>Energy: 160</b><br>

                Restores HP by
                ${scaleValue(MydeiScaling.ultimate.main, i)}
                of Mydei's Max HP and accumulates 20 Talent's Charge point(s).

                Deals Imaginary DMG equal to
                ${scaleValue(MydeiScaling.ultimate.adj, i)}
                of Mydei's Max HP to one designated enemy, and deals Imaginary DMG
                equal to
                ${scaleValue(MydeiScaling.ultimate.adj2, i)}
                of Mydei's Max HP to adjacent targets.

                Additionally, Taunts the target and targets adjacent to it,
                lasting for 2 turn(s).

                The next use of "Godslayer Be God" prioritizes attacking one
                designated enemy, and this effect only works on the latest target.
            `,
        },

        talent: {
            id: "talent",
            name: "Talent: Blood for Blood",
            type: "talent",
            level: "12/12",
            icon: CA.MydeiTalent,

            description: (i) => `
                For each 1% of HP lost, accumulates 1 point of Charge
                (up to 200 points).

                When Charge reaches 100, consumes 100 points of Charge to enter
                the "Vendetta" state, restores HP equal to ${scaleValue(MydeiScaling.talent, i)}
                of Mydei's Max HP, and advances action by 100%.

                While the "Vendetta" state is active, Max HP increases by 50%
                of the current Max HP and DEF remains at 0.

                At the start of this unit's turn, automatically uses
                "Kingslayer Be King."

                When Charge reaches 150 points during the "Vendetta" state,
                Mydei immediately gains 1 extra turn and automatically uses
                "Godslayer Be God."

                When receiving a killing blow during the "Vendetta" state,
                Mydei will not be knocked down, but will clear his Charge,
                exits the "Vendetta" state, and restores HP by 50% of his Max HP.
            `,
        },

        technique: {
            id: "technique",
            name: "Technique: Cage of Broken Lance",
            type: "technique",
            level: "1/1",
            icon: CA.MydeiTechnique,

            description: `
                After using Technique, pulls in enemies within a certain area
                and inflicts Daze on them for 10 second(s).

                Dazed enemies will not actively attack ally targets.

                If actively attacking Dazed enemies, when entering battle,
                deals Imaginary DMG equal to <b><u>80%</u></b> of Mydei's Max HP
                to all enemies, and Taunts the targets, lasting for 1 turn(s).

                This unit accumulates 50 point(s) of Talent's Charge.
            `,
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Bloodied Chiton",
            type: "bonus",
            level: "1/1",
            icon: CA.BloodiedChiton,

            description: `
                When battle starts, if Mydei's Max HP exceeds 4000,
                for every 100 excess HP, Mydei's CRIT Rate increases by 1.2%,
                his Charge ratio from enemy targets' DMG increases by 2.5%,
                and his HP restored when receiving healing increases by 0.75%.

                Up to 4000 excess HP can be taken into account for this effect.
            `,
        },

        b2: {
            id: "b2",
            name: "Earth and Water",
            type: "bonus",
            level: "1/1",
            icon: CA.EarthAndWater,

            description: `
                During the "Vendetta" state, Mydei will not exit the
                "Vendetta" state when receiving a killing blow.

                This effect can trigger 3 time(s) per battle.
            `,
        },

        b3: {
            id: "b3",
            name: "Thirty Tyrants",
            type: "bonus",
            level: "1/1",
            icon: CA.ThirtyTyrants,

            description: `
                While in the "Vendetta" state, Mydei is immune to
                Crowd Control debuffs.
            `,
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description: `
                Max HP Increases by: <b><u>8.0%</u></b>
            `,
        },

        s2: {
            id: "s2",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description: `
                SPD Increases by: <b><u>3</u></b>
            `,
        },

        s3: {
            id: "s3",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,

            description: `
                CRIT DMG Increases by: <b><u>10.7%</u></b>
            `,
        },

        s4: {
            id: "s4",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description: `
                Max HP Increases by: <b><u>6.0%</u></b>
            `,
        },

        s5: {
            id: "s5",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,

            description: `
                CRIT DMG Increases by: <b><u>8.0%</u></b>
            `,
        },

        s6: {
            id: "s6",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,

            description: `
                CRIT DMG Increases by: <b><u>8.0%</u></b>
            `,
        },

        s7: {
            id: "s7",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,

            description: `
                CRIT DMG Increases by: <b><u>5.3%</u></b>
            `,
        },

        s8: {
            id: "s8",
            name: "HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description: `
                Max HP Increases by: <b><u>4.0%</u></b>
            `,
        },

        s9: {
            id: "s9",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description: `
                SPD Increases by: <b><u>2</u></b>
            `,
        },

        s10: {
            id: "s10",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,

            description: `
                CRIT DMG Increases by: <b><u>5.3%</u></b>
            `,
        },
    },
};

const AventurineWaveflair: Character = {

    name: "Aventurine Waveflair",
    path: Paths.Elation,
    element: Elements.Quantum,
    world: Worlds.InterastralPeaceCorporation,
    image: CA.AvWfImg,
    eidolons: Eidolons.AvWfEidolons,
    pfp: CA.AvWfPfp,

    baseATK: 485,
    baseDEF: 606,
    baseHP: 1164,
    baseSPD: 107,
    aggro: 100,
    dupe: 0,

    traces: {

        attack: {
            id: "attack",
            name: "Basic ATK: Dead Center, the Torrent Hits",
            type: "basic",
            level: "7/7",
            icon: CA.AvWfBaseATK,

            description: (i) =>
                `Deals Quantum DMG equal to ${
                    scaleValue(AvWfScalling.attack, i)
                } of Aventurine • Waveflair's ATK to one designated enemy.`
        },

        skill: {
            id: "skill",
            name: "Skill: Kill Shot, the Sands Boil",
            type: "skill",
            level: "12/12",
            icon: CA.AvWfSkill,

            description: (i) =>
                `Deals Quantum DMG equal to ${
                    scaleValue(AvWfScalling.skill, i)
                } of Aventurine • Waveflair's ATK to all enemies. ` +

                `Gains 4 Punchline and 4 "Fervor."` +

                `<br><br>` +

                `<b>Punchline</b><br>` +

                `Punchline is shared by the whole team. When dealing Elation DMG, ` +
                `the more Punchline taken into account, the higher the Elation DMG.`
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Grand Slam, Crest That High Tide",
            type: "ultimate",
            level: "12/12",
            icon: CA.AvWfUltimate,

            description: (i) =>
                `<b>Energy: 130</b><br>` +

                `Deals Quantum DMG equal to ${
                    scaleValue(AvWfScalling.ultimate.main, i)
                } of Aventurine • Waveflair's ATK to all enemies. ` +

                `Gains 6 Punchline and 8 "Fervor." ` +

                `Increases this unit's SPD by ${
                    scaleValue(AvWfScalling.ultimate.adj, i)
                }, lasting for 4 turn(s).`
        },

        talent: {
            id: "talent",
            name: "Talent: Ante Up, the Abyss Answers",
            type: "talent",
            level: "12/12",
            icon: CA.AvWfTalent,

            description: (i) =>
                `The duration of Aventurine • Waveflair's "Certified Banger" ` +
                `increases by 1 turn. After a teammate uses an attack, ` +
                `Aventurine • Waveflair gains 1 "Fervor" and 1 Punchline. ` +

                `"Fervor" is capped at 30 points. When "Fervor" reaches 10, ` +
                `Aventurine • Waveflair uses 1 instance of ` +
                `"Cheers! To Summer's Blaze" that takes into account ` +
                `a fixed amount of 20 Punchline. ` +

                `After this use, the next Elation Skill used by this unit ` +
                `in the Aha Instant gets enhanced into ` +
                `"All In! To Summer's Blaze."` +

                `<br><br>` +

                `While Aventurine • Waveflair holds "Certified Banger", ` +
                `Skill additionally deals ${
                    scaleValue(AvWfScalling.talent.main, i)
                } Quantum Elation DMG to all enemies, ` +

                `and Ultimate additionally deals ${
                    scaleValue(AvWfScalling.talent.adj, i)
                } Quantum Elation DMG to all enemies.`
        },

        technique: {
            id: "technique",
            name: "Technique: Make Waves in Still Waters",
            type: "technique",
            level: "1/1",
            icon: CA.AvWfTechnique,

            description:
                `Moves forward rapidly for a set distance, attacking all enemies ` +
                `in contact and blocking all incoming attacks. ` +

                `After entering combat via actively attacking enemies, ` +
                `deals Quantum DMG to all enemies equal to ` +
                `<b><u>100%</u></b> of Aventurine • Waveflair's ATK, ` +
                `and gains 2 "Fervor" and 20 "Certified Banger." ` +

                `Technique Points are not consumed if no enemies are hit.`
        },


        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Elation Skill: Cheers! To Summer's Blaze",
            type: "bonus",
            level: "12/12",
            icon: CA.AvWfElationSkill,

            description: (index: number = 11) =>
                `Deals ${
                    scaleValue(AvWfScalling.ElationSkill.main, index)
                } Quantum Elation DMG to all enemies, ` +

                `and additionally deals 10 instance(s) of DMG, ` +
                `with each instance dealing ${
                    scaleValue(AvWfScalling.ElationSkill.adj, index)
                } Quantum Elation DMG to one random enemy.` +

                `<br><br>` +

                `<b>All In! To Summer's Blaze</b><br>` +

                `Deals ${
                    scaleValue(AvWfScalling.ElationSkill.adj2, index)
                } Quantum Elation DMG to all enemies, ` +

                `and additionally deals 10 instances of DMG, ` +
                `with each instance dealing ${
                    scaleValue(AvWfScalling.ElationSkill.adj3, index)
                } Quantum Elation DMG to one random enemy. ` +

                `Consumes all "Fervor" upon use. ` +

                `For every 1 point of "Fervor" consumed, ` +
                `additionally deals 1 instance of ${
                    scaleValue(AvWfScalling.ElationSkill.adj4, index)
                } Quantum Elation DMG to one random enemy.`
        },

        b2: {
            id: "b2",
            name: "Party in Perfect Paradise",
            type: "bonus",
            level: "1/1",
            icon: CA.PartyInPerfectParadise,

            description:
                `When SPD is 140 or higher, increases this unit's Elation by 30%. ` +
                `For every 1 SPD exceeding that threshold, additionally increases ` +
                `this unit's Elation by 1%. ` +
                `Up to a max of 200 excess SPD can be taken into account for this effect.`
        },

        b3: {
            id: "b3",
            name: "Revel in Raging Tides",
            type: "bonus",
            level: "1/1",
            icon: CA.RevelInRagingTides,

            description:
                `At the start of combat, if the team includes an Elation ` +
                `character besides Aventurine • Waveflair, then while ` +
                `Aventurine • Waveflair is on the field, increases all allies' ` +
                `Elation by 20% and Aventurine • Waveflair's Elation by an ` +
                `additional 80%. ` +

                `At the start of combat, if Aventurine • Waveflair is the only ` +
                `Elation character in the team, then when Aventurine • Waveflair ` +
                `uses Elation Skill to deal DMG, it is considered as having ` +
                `launched Follow-Up ATK. ` +

                `After a teammate uses an attack, Aventurine • Waveflair gains ` +
                `2 "Certified Banger" and 1 Punchline, and increases Aha's SPD by 25. ` +

                `The SPD Boost effect lasts until the end of Aha Instant.`
        },

        b4: {
            id: "b4",
            name: "Sift Through Gilded Dreams",
            type: "bonus",
            level: "1/1",
            icon: CA.SiftThroughGildedDreams,

            description:
                `Increases CRIT DMG by 48%. ` +

                `After a teammate uses Basic ATK, Skill, Follow-Up ATK, or Ultimate, ` +
                `all allies' CRIT DMG increases by 48%, lasting for 3 turn(s), ` +

                `and Aventurine • Waveflair additionally gains 2 "Fervor." ` +

                `This effect can trigger up to 6 time(s), and the trigger count ` +
                `resets when Aventurine • Waveflair uses Skill.`
        },


        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                `CRIT Rate Increases by: <b><u>2.7%</u></b>`
        },

        s2: {
            id: "s2",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                `CRIT Rate Increases by: <b><u>4.0%</u></b>`
        },

        s3: {
            id: "s3",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description:
                `SPD Increases by: <b><u>3</u></b>`
        },

        s4: {
            id: "s4",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description:
                `SPD Increases by: <b><u>2</u></b>`
        },

        s5: {
            id: "s5",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                `CRIT Rate Increases by: <b><u>5.3%</u></b>`
        },

        s6: {
            id: "s6",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description:
                `SPD Increases by: <b><u>4</u></b>`
        },

        s7: {
            id: "s7",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                `CRIT Rate Increases by: <b><u>2.7%</u></b>`
        },

        s8: {
            id: "s8",
            name: "Elation Boost",
            type: "stat",
            icon: CA.ElationStat,

            description:
                `Elation Increases by: <b><u>4.0%</u></b>`
        },

        s9: {
            id: "s9",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                `CRIT Rate Increases by: <b><u>4.0%</u></b>`
        },

        s10: {
            id: "s10",
            name: "Elation Boost",
            type: "stat",
            icon: CA.ElationStat,

            description:
                `Elation Increases by: <b><u>6.0%</u></b>`
        },

    }
};

const Ruanmei: Character = {
    name: "Ruan Mei",
    path: Paths.Harmony,
    element: Elements.Ice,
    world: Worlds.HertaSpaceStation,
    image: CA.RuanmeiImg,
    eidolons: Eidolons.RuanEidolons,
    pfp: CA.RuanmeiPfp,

    baseATK: 659,
    baseDEF: 485,
    baseHP: 1086,
    baseSPD: 104,
    aggro: 100,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Threading Fragrance",
            type: "basic",
            level: "7/7",
            icon: CA.RuanmeiBasicATK,

            description: (i) => `
                Deals Ice DMG equal to
                ${scaleValue(RuanmeiScalling.attack, i)}
                of Ruan Mei's ATK to one designated enemy target.
            `,
        },

        skill: {
            id: "skill",
            name: "Skill: String Sings Slow Swirls",
            type: "skill",
            level: "12/12",
            icon: CA.RuanmeiSkill,

            description: (i) => `
                After using her Skill, Ruan Mei gains Overtone,
                lasting for 3 turn(s).

                This duration decreases by 1 at the start of
                Ruan Mei's every turn.

                When Ruan Mei has Overtone, all allies' DMG increases by
                ${scaleValue(RuanmeiScalling.skill, i)}
                and Weakness Break Efficiency increases by 50%.
            `,
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Petals to Stream, Repose in Dream",
            type: "ultimate",
            level: "12/12",
            icon: CA.RuanmeiUltimate,

            description: (i) => `
                <b>Energy: 130</b><br>

                Ruan Mei deploys a Zone that lasts for 2 turns.
                The Zone's duration decreases by 1 at the start of her turn.

                While inside the Zone, all allies' All-Type RES PEN increases by
                ${scaleValue(RuanmeiScalling.ultimate.main, i)}
                and their attacks apply Thanatoplum Rebloom to the enemies hit.

                When these enemies attempt to recover from Weakness Break,
                Thanatoplum Rebloom is triggered, extending the duration of
                their Weakness Break, delaying their action by an amount equal
                to 20% of Ruan Mei's Break Effect plus 10%, and dealing Break DMG
                equal to
                ${scaleValue(RuanmeiScalling.ultimate.adj, i)}
                of Ruan Mei's Ice Break DMG.

                Enemy targets cannot have Thanatoplum Rebloom re-applied
                to them until they recover from Weakness Break.
            `,
        },

        talent: {
            id: "talent",
            name: "Talent: Somatotypical Helix",
            type: "talent",
            level: "12/12",
            icon: CA.RuanmeiTalent,

            description: (i) => `
                Increases SPD by
                ${scaleValue(RuanmeiScalling.talent.main, i)}
                for all teammates (i.e., excluding this unit).

                When allies Break an enemy target's Weakness,
                Ruan Mei deals to this enemy target Break DMG equal to
                ${scaleValue(RuanmeiScalling.talent.adj, i)}
                of her Ice Break DMG.
            `,
        },

        technique: {
            id: "technique",
            name: "Technique: Silken Serenade",
            type: "technique",
            level: "1/1",
            icon: CA.RuanmeiTechnique,

            description: `
                After using the Technique, gains Silken Serenade.

                At the start of the next battle, automatically triggers
                the Skill for 1 time(s) without consuming Skill Points.

                In Simulated Universe or Divergent Universe, when Ruan Mei
                has Silken Serenade, the team actively attacking enemies
                will always be regarded as attacking their Weakness to enter combat,
                and this attack can reduce all enemies' Toughness regardless
                of Weakness types.

                When breaking Weakness, triggers Weakness Break Effect
                corresponding to the attacker's Type.

                For every Blessing in possession
                (up to a max of 20 Blessings will be taken into account),
                additionally increases the Toughness Reduction of this attack by 100%.

                After breaking an enemy target's Weakness,
                additionally deals to the enemy target Break DMG equal to
                100% of Ruan Mei's Ice Break DMG.
            `,
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Candle Lights on Still Waters",
            type: "bonus",
            level: "1/1",
            icon: CA.CandleLightsOnStillWaters,

            description: `
                In battle, for every 10% of Ruan Mei's Break Effect
                that exceeds 120%, her Skill additionally increases allies'
                DMG by 6%, up to a maximum of 36%.
            `,
        },

        b2: {
            id: "b2",
            name: "Inert Respiration",
            type: "bonus",
            level: "1/1",
            icon: CA.InertRespiration,

            description: `
                Increases Break Effect by 20% for all allies.
            `,
        },

        b3: {
            id: "b3",
            name: "Days Wane, Thoughts Wax",
            type: "bonus",
            level: "1/1",
            icon: CA.DaysWaneThoughtsWax,

            description: `
                Ruan Mei regenerates 5 Energy at the start of her turn.
            `,
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: `
                DEF Increases by: <b><u>10.0%</u></b>
            `,
        },

        s2: {
            id: "s2",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description: `
                SPD Increases by: <b><u>3</u></b>
            `,
        },

        s3: {
            id: "s3",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: `
                Break Effect Increases by: <b><u>10.7%</u></b>
            `,
        },

        s4: {
            id: "s4",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: `
                Break Effect Increases by: <b><u>5.3%</u></b>
            `,
        },

        s5: {
            id: "s5",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: `
                DEF Increases by: <b><u>5.0%</u></b>
            `,
        },

        s6: {
            id: "s6",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: `
                DEF Increases by: <b><u>7.5%</u></b>
            `,
        },

        s7: {
            id: "s7",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: `
                Break Effect Increases by: <b><u>8.0%</u></b>
            `,
        },

        s8: {
            id: "s8",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: `
                Break Effect Increases by: <b><u>5.3%</u></b>
            `,
        },

        s9: {
            id: "s9",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description: `
                SPD Increases by: <b><u>2</u></b>
            `,
        },

        s10: {
            id: "s10",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: `
                Break Effect Increases by: <b><u>8.0%</u></b>
            `,
        },
    }
};

const Lingsha: Character = {

    name: "Lingsha",
    path: Paths.Abundance,
    element: Elements.Fire,
    world: Worlds.TheXianzhouLuofu,
    image: CA.LingshaImg,
    eidolons: Eidolons.LingshaEidolons,
    pfp: CA.LingshaPfp,

    baseATK: 679,
    baseDEF: 436,
    baseHP: 1358,
    baseSPD: 98,
    aggro: 100,
    dupe: 0,

    traces: {

        attack: {
            id: "attack",
            name: "Basic ATK: Votive Incense",
            type: "basic",
            level: "7/7",
            icon: CA.LingshaBasicATK,

            description: (i) =>
                `Deals Fire DMG equal to ${
                    scaleValue(LingshaScaling.attack, i)
                } of Lingsha's ATK to one designated enemy target.`
        },

        skill: {
            id: "skill",
            name: "Skill: Smoke and Splendor",
            type: "skill",
            level: "12/12",
            icon: CA.LingshaSkill,

            description: (i) =>
                `Deals Fire DMG equal to ${
                    scaleValue(LingshaScaling.skill.main, i)
                } of Lingsha's ATK to all enemies and at the same time, ` +

                `restores HP equal to ${
                    scaleValue(LingshaScaling.skill.adj, i)
                } of Lingsha's ATK plus ${
                    scaleValue(LingshaScaling.skill.adj2, i, "")
                } for all allies. Fuyuan's action advances by 20%.`
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Dripping Mistscape",
            type: "ultimate",
            level: "12/12",
            icon: CA.LingshaUltimate,

            description: (i) =>
                `<b>Energy: 110</b><br>` +

                `Inflicts "Befog" on all enemies. While in "Befog," ` +
                `targets receive ${
                    scaleValue(LingshaScaling.ultimate.main, i)
                } increased Break DMG, lasting for 2 turn(s). ` +

                `Deals Fire DMG equal to ${
                    scaleValue(LingshaScaling.ultimate.adj, i)
                } of Lingsha's ATK to all enemies, and at the same time ` +
                `restores HP equal to ${
                    scaleValue(LingshaScaling.ultimate.adj2, i)
                } of Lingsha's ATK plus ${
                    scaleValue(LingshaScaling.ultimate.adj3, i, "")
                } for all allies. ` +

                `Fuyuan's action advances by 100%.`
        },

        talent: {
            id: "talent",
            name: "Talent: Mistdance Manifest",
            type: "talent",
            level: "12/12",
            icon: CA.LingshaTalent,

            description: (i) =>
                `When using Skill, summons "Fuyuan," with an initial SPD of 90 ` +
                `and an initial action count of 3. When taking action, "Fuyuan" ` +
                `launches Follow-Up ATK, dealing Fire DMG equal to ${
                    scaleValue(LingshaScaling.talent.main, i)
                } of Lingsha's ATK to all enemies. ` +

                `Additionally deals Fire DMG equal to ${
                    scaleValue(LingshaScaling.talent.adj, i)
                } of Lingsha's ATK to one random enemy, and this DMG prioritizes ` +
                `targets that have both Toughness greater than 0 and Fire Weakness. ` +

                `Dispels 1 debuff(s) from all allies and restores HP equal to ${
                    scaleValue(LingshaScaling.talent.adj2, i)
                } of Lingsha's ATK plus ${
                    scaleValue(LingshaScaling.talent.adj3, i, "")
                }. ` +

                `"Fuyuan's" action count can accumulate up to 5. When the action ` +
                `count reaches 0 or when Lingsha is knocked down, "Fuyuan" disappears. ` +

                `While "Fuyuan" is on the field, using Skill can increase ` +
                `"Fuyuan's" action count by 3.`
        },

        technique: {
            id: "technique",
            name: "Technique: Wisps of Aurora",
            type: "technique",
            level: "1/1",
            icon: CA.LingshaTechnique,

            description:
                `After using Technique, immediately summons Fuyuan at the start ` +
                `of the next battle and inflicts "Befog" on all enemies, ` +
                `lasting for 2 turn(s).`
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Ember's Echo",
            type: "bonus",
            level: "1/1",
            icon: CA.EmbersEcho,

            description:
                `While "Fuyuan" is on the field and any ally character takes DMG ` +
                `or consumes HP, if a character in the team has their current HP ` +
                `percentage lower than or equal to 60%, "Fuyuan" will immediately ` +
                `launch the Talent's Follow-Up ATK against enemies. ` +

                `This does not consume Fuyuan's action count. ` +
                `This effect can trigger again after 2 turn(s).`
        },

        b2: {
            id: "b2",
            name: "Sylvan Smoke",
            type: "bonus",
            level: "1/1",
            icon: CA.SylvanSmoke,

            description:
                `When using Basic ATK, additionally regenerates 10 Energy.`
        },

        b3: {
            id: "b3",
            name: "Vermilion Waft",
            type: "bonus",
            level: "1/1",
            icon: CA.VermilionWaft,

            description:
                `Increases this unit's ATK or Outgoing Healing by an amount equal ` +
                `to 25%/10% of Break Effect, up to a maximum increase of 50%/20% respectively.`
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "Max HP Increases by: <b><u>8.0%</u></b>",
        },

        s2: {
            id: "s2",
            name: "ATK Boost",
            type: "stat",
            icon: CA.ATK,

            description:
                "ATK Increases by: <b><u>6.0%</u></b>",
        },

        s3: {
            id: "s3",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description:
                "Break Effect Increases by: <b><u>8.0%</u></b>",
        },

        s4: {
            id: "s4",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "Max HP Increases by: <b><u>6.0%</u></b>",
        },

        s5: {
            id: "s5",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description:
                "Break Effect Increases by: <b><u>8.0%</u></b>",
        },

        s6: {
            id: "s6",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "Max HP Increases by: <b><u>4.0%</u></b>",
        },

        s7: {
            id: "s7",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description:
                "Break Effect Increases by: <b><u>5.3%</u></b>",
        },

        s8: {
            id: "s8",
            name: "ATK Boost",
            type: "stat",
            icon: CA.ATK,

            description:
                "ATK Increases by: <b><u>4.0%</u></b>",
        },

        s9: {
            id: "s9",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description:
                "Break Effect Increases by: <b><u>10.7%</u></b>",
        },

        s10: {
            id: "s10",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description:
                "Break Effect Increases by: <b><u>5.3%</u></b>",
        },

    }
};

const Castorice: Character = {
    name: "Castorice",
    path: Paths.Remembrance,
    element: Elements.Quantum,
    world: Worlds.Amphoreus,
    image: CA.CastoriceImg,
    eidolons: Eidolons.CastorEidolons,
    pfp: CA.CastoricePfp,

    baseATK: 523,
    baseDEF: 485,
    baseHP: 1629,
    baseSPD: 95,
    aggro: 100,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lament, Nethersea's Ripple",
            type: "basic",
            level: "7/7",
            icon: CA.CastoriceBasicATK,
            description: (i) => "Deals Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.attack, i)}` +
                         " of Castorice's Max HP to one designated enemy."
        },

        skill: {
            id: "skill",
            name: "Skill: Silence, Wraithfly's Caress",
            type: "skill",
            level: "12/12",
            icon: CA.CastoriceSkill,
            description: (i) => "Consumes 30% of all allies' current HP. Deals Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.skill.main, i)}` +
                         " of Castorice's Max HP to one designated enemy and Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.skill.adj, i)}` +
                         " of Castorice's Max HP to adjacent targets. If the current HP is insufficient, reduces the current HP down to 1. " +
                         "If Netherwing is on the battlefield, the Skill becomes \"Boneclaw, Doomdrake's Embrace\" instead." +
                         "<br><br>" +
                         "<b>Boneclaw, Doomdrake's Embrace</b><br>" +
                         "Consumes 40% of the current HP of all allies (except Netherwing). Castorice and Netherwing launch Joint ATK on the targets, dealing Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.skill.adj2, i)}` +
                         " and " +
                         `${scaleValue(CastoriceScaling.skill.adj3, i)}` +
                         " of Castorice's Max HP to all enemies. If the current HP is insufficient, reduces the current HP down to 1"
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Doomshriek, Dawn's Chime",
            type: "ultimate",
            level: "12/12",
            icon: CA.CastoriceUltimate,
            description: (i) => "<b>Energy: --</b><br>" +
                         `Summons the memosprite Netherwing and advances its action by 100%. At the same time, deploys the Territory \"Lost Netherland,\" which decreases all enemies' All-Type RES by ${scaleValue(CastoriceScaling.ultimate, i)}. ` +
                         "If Castorice has the DMG Boost effect from her Talent, then this effect spreads to Netherwing. Netherwing has an initial SPD of 165 and a set Max HP equal to 100% of max \"Newbud.\" " +
                         "After Netherwing experiences 3 turns or when its HP is 0, it disappears and dispels the Territory \"Lost Netherland.\""
        },

        talent: {
            id: "talent",
            name: "Talent: Desolation Across Palms",
            type: "talent",
            level: "12/12",
            icon: CA.CastoriceTalent,
            description: (i) => 
                         "The maximum limit of \"Newbud\" is related to the levels of all characters on the battlefield. " +
                         "For every 1 point of HP lost by all allies, Castorice gains 1 point of \"Newbud.\" When \"Newbud\" reaches its maximum limit, can activate the Ultimate. " +
                         `When allies lose HP, Castorice's and Netherwing's DMG dealt increases by ${scaleValue(CastoriceScaling.talent, i)}. This effect can stack up to 3 time(s), lasting for 3 turn(s). ` +
                         "When Netherwing is on the field, \"Newbud\" cannot be gained through Talent, and every 1 point of HP lost by all allies (except Netherwing) will be converted to an equal amount of HP for Netherwing."
        },

        technique: {
            id: "technique",
            name: "Technique: Wail, Death's Herald",
            type: "technique",
            level: "1/1",
            icon: CA.CastoriceTechnique,
            description: "After using Technique, enters the \"Netherveil\" state that lasts for 20 seconds. While \"Netherveil\" is active, enemies are unable to actively approach Castorice. " +
                         "During \"Netherveil\", active attacks will cause all enemies within range to enter combat. At the same time, summons the memosprite Netherwing, advances its action by 100%, and deploys the Territory \"Lost Netherland\". " +
                         "Netherwing has its current HP equal to 50% of max \"Newbud.\" After entering battle, consumes 40% of the current HP of all allies (except Netherwing). " +
                         "If Netherwing is not summoned after entering battle, Castorice gains \"Newbud\" by an amount equal to 30% of max \"Newbud\"."
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Where The West Wind Dwells",
            type: "bonus",
            level: "1/1",
            icon: CA.WhereTheWestWindDwells,
            description: "Each time Netherwing uses \"Breath Scorches the Shadow\", the DMG dealt increases by 30%. " +
                         "This effect stacks up to 6 time(s) and lasts until the end of this turn.",
        },

        b2: {
            id: "b2",
            name: "Contained Dark Tide",
            type: "bonus",
            level: "1/1",
            icon: CA.ContainedDarkTide,
            description: "After ally targets (excluding Netherwing) receive healing, converts 100% of the healed amount into \"Newbud\". " +
                         "If Netherwing is on the field, this is converted to Netherwing's HP instead. Each ally target can accumulate a conversion amount up to 12% of the max \"Newbud\". " +
                         "After any unit takes action, all units reset their accumulated conversion amount.",
        },

        b3: {
            id: "b3",
            name: "Inverted Torch",
            type: "bonus",
            level: "1/1",
            icon: CA.InvertedTorch,
            description: "When Castorice's current HP is higher than or equal to 50% of her Max HP, her SPD increases by 40%. " +
                         "When Netherwing uses \"Breath Scorches the Shadow\" and deals fatal damage to all enemies on the field or brings them to a point where their HP cannot be reduced further, " +
                         "Netherwing's SPD increases by 100%, lasting for 1 turn.",
        },

        b4: {
            id: "b4",
            name: "Memosprite Talent: Mooncocoon Shrouds the Form",
            type: "bonus",
            level: "7/7",
            icon: CA.CastoriceMemoTalent,
            description: (i) => 
                         "When Netherwing is on the field, it acts as backup for allies. When allies take DMG or consume HP, their current HP can be reduced down to a minimum of 1, after which Netherwing will bear the HP loss. " +
                         "But Netherwing consumes HP equal to 500% of the original value. This lasts until Netherwing disappears." +
                         "<br><br>" +
                         "<b>Roar Rumbles the Realm</b><br>" +
                         "When Netherwing is summoned, increases DMG dealt by all allies by 10%, lasting for 3 turn(s)." +
                         "<br><br>" +
                         "<b>Wings Sweep the Ruins</b><br>" +
                         "When Netherwing disappears, deals 6 instance(s) of DMG, with each instance dealing Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.memotalent.main, i)}` +
                         ` of Castorice's Max HP to one random enemy. At the same time, restores HP by an amount equal to ${scaleValue(CastoriceScaling.memotalent.adj, i, "")} of Castorice's Max HP plus ` +
                         `${scaleValue(CastoriceScaling.memotalent.adj2, i, "")}` +
                         " for all allies.",
        },

        b5: {
            id: "b5",
            name: "Memosprite Skill: Claw Splits the Veil",
            type: "bonus",
            level: "7/7",
            icon: CA.CastoriceMemoSkill,
            description: (i) => 
                         "Deals Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.memoskill.main, i)}` +
                         " of Castorice's Max HP to all enemies." +
                         "<br><br>" +
                         "<b>Breath Scorches the Shadow</b><br>" +
                         "Launching \"Breath Scorches the Shadow\" will consume 25% of Netherwing's Max HP to deal Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.memoskill.adj1, i)}` +
                         " of Castorice's Max HP to all enemies. In one attack, \"Breath Scorches the Shadow\" can be launched repeatedly, " +
                         "with the DMG multiplier increased progressively to " +
                         `${scaleValue(CastoriceScaling.memoskill.adj2, i)}` +
                         " / " +
                         `${scaleValue(CastoriceScaling.memoskill.adj3, i)}` +
                         ". After reaching " +
                         `${scaleValue(CastoriceScaling.memoskill.adj4, i)}` +
                         ", it will not increase further. The DMG Multiplier Boost effect will not decrease before Netherwing disappears. " +
                         "When Netherwing's current HP is equal to or less than 25% of its Max HP, launching this ability will actively reduce HP down to 1, " +
                         "and then trigger the ability effect equal to that of the Talent \"Wings Sweep the Ruins\"." +
                         "<br><br>" +
                         "<b>Wings Sweep the Ruins</b><br>" +
                         "Consumes all HP and deals 6 instance(s) of DMG, with each instance dealing Quantum DMG equal to " +
                         `${scaleValue(CastoriceScaling.memoskill.adj5, i)}` +
                         " of Castorice's Max HP to one random enemy. At the same time, restores HP by an amount equal to 8% of Castorice's Max HP plus " +
                         `${scaleValue(CastoriceScaling.memoskill.adj7, i, "")}` +
                         " for all allies.",
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
        },

        s2: {
            id: "s2",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
        },

        s3: {
            id: "s3",
            name: "CRIT DMG Boost",
            type: "stat",
            icon: CA.CritDMG,
            description: "CRIT DMG Increases by: <b><u>8.0%</u></b>",
        },

        s4: {
            id: "s4",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
        },

        s5: {
            id: "s5",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
        },

        s6: {
            id: "s6",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
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
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "CRIT Rate Increases by: <b><u>4.0%</u></b>",
        },

        s9: {
            id: "s9",
            name: "DMG Boost: Quantum",
            type: "stat",
            icon: CA.QuantumBoost,
            description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
        },

        s10: {
            id: "s10",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "CRIT Rate Increases by: <b><u>4.0%</u></b>",
        },
    }
};

const Topaz: Character = {

    name: "Topaz & Numby",
    path: Paths.Hunt,
    element: Elements.Fire,
    world: Worlds.InterastralPeaceCorporation,
    image: CA.TopazImg,
    eidolons: Eidolons.TopazEidolons,
    pfp: CA.TopazPfp,

    baseATK: 620,
    baseDEF: 412,
    baseHP: 931,
    baseSPD: 110,
    aggro: 75,
    dupe: 0,

    traces: {

        attack: {
            id: "attack",
            name: "Basic ATK: Deficit...",
            type: "basic",
            level: "7/7",
            icon: CA.TopazBasicATK,

            description: (i) =>
                "Deals Fire DMG equal to " +
                `${scaleValue(TopazScaling.attack, i)}` +
                " of Topaz's ATK to one designated enemy."
        },

        skill: {
            id: "skill",
            name: "Skill: Difficulty Paying?",
            type: "skill",
            level: "12/12",
            icon: CA.TopazSkill,

            description: (i) =>
                "Inflicts one designated enemy target with a \"Proof of Debt\" state, " +
                "increasing the Follow-Up ATK DMG it receives by 55%. " +
                "\"Proof of Debt\" only takes effect on the most recent target it is applied to. " +
                "If there are no enemies inflicted with \"Proof of Debt\" on the field when an ally's turn starts or when an ally takes action, " +
                "Topaz will inflict a random enemy with \"Proof of Debt\". " +
                "Numby deals Fire DMG equal to " +
                `${scaleValue(TopazScaling.skill.adj, i)}` +
                " of Topaz's ATK to this target. " +
                "Using this Skill to deal DMG is considered as launching a Follow-Up ATK."
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Turn a Profit!",
            type: "ultimate",
            level: "12/12",
            icon: CA.TopazUltimate,

            description: (i) =>
                "<b>Energy: 130</b><br>" +
                "Numby enters the Windfall Bonanza! state and its DMG multiplier increases by " +
                `${scaleValue(TopazScaling.ultimate.main, i)}` +
                " and CRIT DMG increases by " +
                `${scaleValue(TopazScaling.ultimate.adj, i)}` +
                ". Also, when enemies with Proof of Debt are hit by an ally's Basic ATK, Skill, or Ultimate, " +
                "Numby's action is Advanced Forward by 50%. " +
                "Numby exits the Windfall Bonanza! state after using 2 attacks."
        },

        talent: {
            id: "talent",
            name: "Talent: Trotter Market!?",
            type: "talent",
            level: "12/12",
            icon: CA.TopazTalent,

            description: (i) =>
                "Summons Numby at the start of battle. Numby has 80 SPD by default. " +
                "When taking action, Numby launches Follow-Up ATKs on one enemy target afflicted with \"Proof of Debt\", " +
                "dealing Fire DMG equal to " +
                `${scaleValue(TopazScaling.talent, i)}` +
                " of Topaz's ATK. " +
                "When enemies afflicted with \"Proof of Debt\" receive an ally's Follow-Up ATKs, Numby's action is Advanced Forward by 50%. " +
                "The action Advance Forward effect cannot be triggered during Numby's own turn. " +
                "When Topaz is downed, Numby disappears."
        },

        technique: {
            id: "technique",
            name: "Technique: Explicit Subsidy",
            type: "technique",
            level: "1/1",
            icon: CA.TopazTechnique,

            description:
                "Summons Numby when Topaz enters the overworld. " +
                "Numby will automatically search for Basic Treasures and Trotters within a set radius. " +
                "Using her Technique will regenerate 60 Energy for Topaz after Numby's first attack in the next battle. " +
                "If Topaz is still in the team after using her Technique and defeating overworld enemies, " +
                "a small bonus amount of credits will be added to the earned credits. " +
                "A maximum of 10000 bonus credits can be received per calendar day. " +
                "After using her Technique and defeating enemies in Simulated Universe or Divergent Universe, " +
                "additionally receive a small amount of Cosmic Fragments with a small chance to obtain 1 random Curio."
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Stonks Market",
            type: "bonus",
            level: "1/1",
            icon: CA.StonksMarket,

            description:
                "After Numby uses an attack while in the Windfall Bonanza! state, " +
                "Topaz additionally regenerates 10 Energy.",
        },

        b2: {
            id: "b2",
            name: "Overdraft",
            type: "bonus",
            level: "1/1",
            icon: CA.Overdraft,

            description:
                "When Topaz uses Basic ATK to deal DMG, it is considered as a Follow-Up ATK.",
        },

        b3: {
            id: "b3",
            name: "Financial Turmoil",
            type: "bonus",
            level: "1/1",
            icon: CA.FinancialTurmoil,

            description:
                "Increases Topaz & Numby's DMG dealt to enemy targets with Fire Weakness by 15%.",
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                "CRIT Rate Increases by: <b><u>5.3%</u></b>",
        },

        s2: {
            id: "s2",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "Max HP Increases by: <b><u>6.0%</u></b>",
        },

        s3: {
            id: "s3",
            name: "DMG Boost: Fire",
            type: "stat",
            icon: CA.FireBoost,

            description:
                "Fire DMG Increases by: <b><u>6.4%</u></b>",
        },

        s4: {
            id: "s4",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "Max HP Increases by: <b><u>4.0%</u></b>",
        },

        s5: {
            id: "s5",
            name: "DMG Boost: Fire",
            type: "stat",
            icon: CA.FireBoost,

            description:
                "Fire DMG Increases by: <b><u>3.2%</u></b>",
        },

        s6: {
            id: "s6",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.MaxHP,

            description:
                "CRIT Rate Increases by: <b><u>2.7%</u></b>",
        },

        s7: {
            id: "s7",
            name: "DMG Boost: Fire",
            type: "stat",
            icon: CA.FireBoost,

            description:
                "Fire DMG Increases by: <b><u>4.8%</u></b>",
        },

        s8: {
            id: "s8",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,

            description:
                "CRIT Rate Increases by: <b><u>4.0%</u></b>",
        },

        s9: {
            id: "s9",
            name: "DMG Boost: Fire",
            type: "stat",
            icon: CA.FireBoost,

            description:
                "Fire DMG Increases by: <b><u>4.8%</u></b>",
        },

        s10: {
            id: "s10",
            name: "DMG Boost: Fire",
            type: "stat",
            icon: CA.FireBoost,

            description:
                "Fire DMG Increases by: <b><u>3.2%</u></b>",
        },

    }

};

const Aventurine: Character = {
    name: "Aventurine",
    path: Paths.Preservation,
    element: Elements.Imaginary,
    world: Worlds.InterastralPeaceCorporation,
    image: CA.AvImg,
    eidolons: Eidolons.AvEidolons,
    pfp: CA.AvPfp,

    baseATK: 446,
    baseDEF: 654,
    baseHP: 1203,
    baseSPD: 106,
    aggro: 100,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Straight Bet",
            type: "basic",
            level: "7/7",
            icon: CA.AvBasicATK,

            description: (i) =>
                `Deals Imaginary DMG equal to ${scaleValue(AvScaling.attack, i)} of Aventurine's DEF to one designated enemy target.`,
        },

        skill: {
            id: "skill",
            name: "Skill: Cornerstone Deluxe",
            type: "skill",
            level: "12/12",
            icon: CA.AvSkill,

            description: (i) =>
                `Provides all allies with a Fortified Wager shield that can block DMG equal to ${scaleValue(AvScaling.skill.main, i)} of Aventurine's DEF plus ${scaleValue(AvScaling.skill.adj, i, "")}, lasting for 3 turn(s). When Fortified Wager is gained repeatedly, the Shield Effect can stack, up to 200% of the current Shield Effect provided by the Skill.`,
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Roulette Shark",
            type: "ultimate",
            level: "12/12",
            icon: CA.AvUltimate,

            description: (i) =>
                `<b>Energy: 110</b><br>
                Randomly gains 1 to 7 points of "Blind Bet". Then, inflicts "Unnerved" on one designated enemy target for 3 turn(s) and deals Imaginary DMG equal to ${scaleValue(AvScaling.ultimate.main, i)} of Aventurine's DEF to that enemy target. When an ally hits an "Unnerved" enemy target, the CRIT DMG dealt increases by ${scaleValue(AvScaling.ultimate.adj, i)}.`,
        },

        talent: {
            id: "talent",
            name: "Talent: Shot Loaded Right",
            type: "talent",
            level: "12/12",
            icon: CA.AvTalent,

            description: (i) =>
                `For any single ally with "Fortified Wager", their Effect RES increases by ${scaleValue(AvScaling.talent.main, i)}, and when they get attacked, Aventurine gains 1 point of "Blind Bet." When Aventurine has "Fortified Wager," he can resist Crowd Control debuffs. This effect can trigger again after 2 turn(s). Aventurine additionally gains 1 point(s) of "Blind Bet" after getting attacked. Upon reaching 7 points of "Blind Bet," Aventurine consumes the 7 points to launch a 7-hit Follow-Up ATK, with each hit dealing Imaginary DMG equal to ${scaleValue(AvScaling.talent.adj, i)} of Aventurine's DEF to one random enemy. "Blind Bet" is capped at 10 points.`,
        },

        technique: {
            id: "technique",
            name: "Technique: The Red or the Black",
            type: "technique",
            level: "1/1",
            icon: CA.AvTechnique,

            description:
                `After using the Technique, 1 of the following effects will be granted:<br>
                There is a chance for DEF to increase by 24%.<br>
                There is a high chance for DEF to increase by 36%.<br>
                There is a small chance for DEF to increase by 60%.<br>
                When this Technique is used repeatedly, the acquired effect with the highest buff value is retained.<br>
                When the next battle starts, increases all allies' DEF by the corresponding value, lasting for 3 turn(s).`,
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Bingo!",
            type: "bonus",
            level: "1/1",
            icon: CA.Bingo,

            description:
                `After a teammate with "Fortified Wager" launches Follow-Up ATK, Aventurine accumulates 1 "Blind Bet" point. This effect can trigger up to 3 time(s). Its trigger count resets at the start of Aventurine's turn. After Aventurine launches his Talent's Follow-Up ATK, provides all ally targets with a "Fortified Wager" that can offset DMG equal to 7% of Aventurine's DEF plus 96, and additionally grants a "Fortified Wager" that can block DMG equal to 7% of Aventurine's DEF plus 96 to the ally with the lowest Shield Effect, lasting for 3 turns.`,
        },

        b2: {
            id: "b2",
            name: "Leverage",
            type: "bonus",
            level: "1/1",
            icon: CA.Leverage,

            description:
                `For every 100 of Aventurine's DEF that exceeds 1600, increases his own CRIT Rate by 2%, up to a maximum increase of 48%.`,
        },

        b3: {
            id: "b3",
            name: "Hot Hand",
            type: "bonus",
            level: "1/1",
            icon: CA.HotHand,

            description:
                `When battle starts, grants all allies a Fortified Wager shield, whose Shield Effect is equal to 100% of the one provided by the Skill, lasting for 3 turn(s).`,
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "DMG Boost: Imaginary",
            type: "stat",
            icon: CA.ImaginaryBoost,

            description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
        },

        s2: {
            id: "s2",
            name: "Effect RES Boost",
            type: "stat",
            icon: CA.EffectRES,

            description: "Effect RES Increases by: <b><u>6.0%</u></b>",
        },

        s3: {
            id: "s3",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: "DEF Increases by: <b><u>10.0%</u></b>",
        },

        s4: {
            id: "s4",
            name: "Effect RES Boost",
            type: "stat",
            icon: CA.EffectRES,

            description: "Effect RES Increases by: <b><u>4.0%</u></b>",
        },

        s5: {
            id: "s5",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: "DEF Increases by: <b><u>5.0%</u></b>",
        },

        s6: {
            id: "s6",
            name: "DMG Boost: Imaginary",
            type: "stat",
            icon: CA.ImaginaryBoost,

            description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
        },

        s7: {
            id: "s7",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: "DEF Increases by: <b><u>7.5%</u></b>",
        },

        s8: {
            id: "s8",
            name: "DMG Boost: Imaginary",
            type: "stat",
            icon: CA.ImaginaryBoost,

            description: "DEF Increases by: <b><u>4.8%</u></b>",
        },

        s9: {
            id: "s9",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: "DEF Increases by: <b><u>7.5%</u></b>",
        },

        s10: {
            id: "s10",
            name: "DEF Boost",
            type: "stat",
            icon: CA.Def,

            description: "DEF Increases by: <b><u>5.0%</u></b>",
        },
    },
};

const Firefly: Character = {
    name: "Firefly",
    path: Paths.Destruction,
    element: Elements.Fire,
    world: Worlds.StellaronHunters,
    image: CA.FireflyImg,
    eidolons: Eidolons.FireflyEidolons,
    pfp: CA.FireflyPfp,

    baseATK: 523,
    baseDEF: 776,
    baseHP: 814,
    baseSPD: 104,
    aggro: 125,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Order: Flare Propulsion",
            type: "basic",
            level: "7/7",
            icon: CA.FireflyBasicATK,

            description: (i) =>
                `Deals Fire DMG equal to ${scaleValue(FireflyScaling.attack.main, i)} of SAM's ATK to one designated enemy.<br><br>`+
                `Restores HP by an amount equal to 20% of this unit's Max HP. Deals Fire DMG equal to ${scaleValue(FireflyScaling.attack.adj, i)} of SAM's ATK to one designated enemy.`,
        },

        skill: {
            id: "skill",
            name: "Skill: Order: Aerial Bombardment",
            type: "skill",
            level: "12/12",
            icon: CA.FireflySkill,

            description: (i) =>
                `Consumes HP equal to 40% of this unit's Max HP and regenerates a fixed amount of Energy equal to ${scaleValue(FireflyScaling.skill.main, i)} 
                 of this unit's Max Energy. Deals Fire DMG equal to ${scaleValue(FireflyScaling.skill.adj, i)} of SAM's ATK to one designated enemy. If the current 
                 HP is not sufficient, reduces SAM's HP to 1 when using this Skill. Advances this unit's next Action by 25%.`+
                `Restores HP by an amount equal to 25% of this unit's Max HP. Adds Fire Weakness to one designated enemy and its adjacent targets, lasting for 2 turns. 
                 Deals Fire DMG equal to (0.2 × Break Effect + ${scaleValue(FireflyScaling.skill.adj2, i)}) of SAM's ATK to this target. At the same time, deals Fire DMG 
                 equal to (0.1 × Break Effect + ${scaleValue(FireflyScaling.skill.adj3, i)}) of SAM's ATK to adjacent targets. The Break Effect taken into the calculation 
                 is capped at 360%.`,
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Fyrefly Type-IV: Complete Combustion",
            type: "ultimate",
            level: "12/12",
            icon: CA.FireflyUltimate,

            description: (i) =>
                `<b>Energy: 240</b><br>
                Enters the Complete Combustion state, advances this unit's Action by 100%, and gains Enhanced Basic ATK and Enhanced Skill. 
                While in Complete Combustion, increases SPD by ${scaleValue(FireflyScaling.ultimate.main, i, "")}, and when using the Enhanced Basic ATK or Enhanced Skill, 
                increases this unit's Weakness Break Efficiency by 50% and increases the Break DMG dealt by SAM to the enemy targets by 
                ${scaleValue(FireflyScaling.ultimate.adj, i)}, lasting until this current attack ends. A countdown timer for the Complete Combustion state appears in the Action Order. 
                When the countdown timer's turn starts, SAM exits the Complete Combustion state. The countdown timer has a fixed SPD of 70.
                SAM cannot use Ultimate while in Complete Combustion.`,
        },

        talent: {
            id: "talent",
            name: "Talent: Shot Loaded Right",
            type: "talent",
            level: "12/12",
            icon: CA.FireflyTalent,

            description: (i) =>
                `The lower the HP, the less DMG received. When HP is 20% or lower, the DMG Reduction reaches its maximum effect, reducing up to ${scaleValue(FireflyScaling.talent.main, i)}. 
                 During the Complete Combustion, the DMG Reduction remains at its maximum effect, and the Effect RES increases by ${scaleValue(FireflyScaling.talent.adj, i)}.
                 If Energy is lower than 50% when the battle starts, regenerates Energy to 50%. Once Energy is regenerated to its maximum, dispels all debuffs on this unit.`,
        },

        technique: {
            id: "technique",
            name: "Technique: The Red or the Black",
            type: "technique",
            level: "1/1",
            icon: CA.FireflyTechnique,

            description:
                `After using the Technique, 1 of the following effects will be granted:<br>
                There is a chance for DEF to increase by 24%.<br>
                There is a high chance for DEF to increase by 36%.<br>
                There is a small chance for DEF to increase by 60%.<br>
                When this Technique is used repeatedly, the acquired effect with the highest buff value is retained.<br>
                When the next battle starts, increases all allies' DEF by the corresponding value, lasting for 3 turn(s).`,
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Module γ: Core Overload",
            type: "bonus",
            level: "1/1",
            icon: CA.ModuleγCoreOverload,

            description:
                `For every 10 point(s) of SAM's ATK that exceeds 1800, increases this unit's Break Effect by 0.8%.`,
        },

        b2: {
            id: "b2",
            name: "Module α: Antilag Outburst",
            type: "bonus",
            level: "1/1",
            icon: CA.ModuleαAntilagOutburst,

            description:
                `While in the Complete Combustion state, SAM's Break Effect increases by 25%. When using Enhanced Basic ATK or Enhanced Skill to inflict Weakness Break on a target, the Complete Combustion countdown is delayed by 10%. This effect can trigger a maximum of 3 time(s) during each Complete Combustion state.`,
        },

        b3: {
            id: "b3",
            name: "Module β: Autoreactive Armor",
            type: "bonus",
            level: "1/1",
            icon: CA.ModuleβAutoreactiveArmor,

            description:
                `When SAM is in Complete Combustion with a Break Effect that is equal to or greater than 150%/300%, attacking a Weakness-Broken enemy target will convert the Toughness Reduction of this attack into 1 instance of 100%/150% Super Break DMG.`,
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "Effect RES Boost",
            type: "stat",
            icon: CA.EffectRES,

            description: "Effect RES Increases by: <b><u>8.0%</u></b>",
        },

        s2: {
            id: "s2",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,

            description: "SPD Increases by: <b><u>3</u></b>",
        },

        s3: {
            id: "s3",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: "Break Effect Increases by: <b><u>10.7%</u></b>",
        },

        s4: {
            id: "s4",
            name: "Effect RES Boost",
            type: "stat",
            icon: CA.EffectRES,

            description: "Effect RES Increases by: <b><u>6.0%</u></b>",
        },

        s5: {
            id: "s5",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: "Break Effect Increases by: <b><u>8.0%</u></b>",
        },

        s6: {
            id: "s6",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: "Break Effect Increases by: <b><u>8.0%</u></b>",
        },

        s7: {
            id: "s7",
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: "Break Effect Increases by: <b><u>5.3%</u></b>",
        },

        s8: {
            id: "s8",
            name: "Effect RES Boost",
            type: "stat",
            icon: CA.EffectRES,

            description: "Effect RES Increases by: <b><u>4.0%</u></b>",
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
            name: "Break Boost",
            type: "stat",
            icon: CA.Break,

            description: "Break Effect Increases by: <b><u>5.3%</u></b>",
        },
    },
};

const RbnSummeretto: Character = {
    name: "Robin • Summeretto",
    path: Paths.Remembrance,
    element: Elements.Wind,
    world: Worlds.Penacony,
    image: CA.RbnSummerettoImg,
    eidolons: Eidolons.RbnSummerettoEidolons,
    pfp: CA.RbnSummerettoPfp,

    baseATK: 601,
    baseDEF: 485,
    baseHP: 1203,
    baseSPD: 95,
    aggro: 100,
    dupe: 0,

    traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: The Sea Sings in My Key",
            type: "basic",
            level: "7/7",
            icon: CA.RbnSummerettoBasicATK,

            description: (i) =>
                `Deals Wind DMG equal to ${scaleValue(RbnSummerettoScaling.main, i)} of Robin • Summeretto's Max HP to one enemy.`,
        },

        skill: {
            id: "skill",
            name: "Skill: Summer Strums the Soul",
            type: "skill",
            level: "12/12",
            icon: CA.RbnSummerettoSkill,

            description: (i) =>
                `Summons the memosprite "Summer Songbirds" Bessie. If any member of the "Summer Songbirds" is already on the field, 
                 restores their HP by an amount equal to ${scaleValue(RbnSummerettoScaling.skill, i)} of "Summer Songbirds'" Max HP, and gains 6 Vibes.`,
        },

        ultimate: {
            id: "ultimate",
            name: "Ultimate: Ascend That Rhapsody in Blue",
            type: "ultimate",
            level: "12/12",
            icon: CA.RbnSummerettoUltimate,

            description: (i) =>
                `<b>Energy: 140</b><br>
                Advances the action of one designated ally character (excluding Robin • Summeretto) by 100% and regenerates a fixed amount of Energy equal 
                to ${scaleValue(RbnSummerettoScaling.ultimate, i)} of their Max Energy. Then, grants them the "Special Guest" effect. When the "Special Guest" character or their summon attacks, they 
                additionally grant Robin • Summeretto 2 Vibes but cannot make other friendly targets gain the action advance effect. This lasts for 2 turn(s), 
                and its duration decreases by 1 at the start of this character's turn.`,
        },

        talent: {
            id: "talent",
            name: "Talent: Wings Heed No Borders",
            type: "talent",
            level: "12/12",
            icon: CA.RbnSummerettoTalent,

            description: (i) =>
                `Memosprite "Summer Songbirds" has an initial Max HP equal to 70% of Robin • Summeretto's Max HP and an initial SPD equal to 180% of Robin • Summeretto's SPD. 
                 When an ally target uses an attack, or when they provide healing or Shield for the first time in any target's turn, Robin • Summeretto gains Vibes by 1 point, 
                 capped at 50. While "Summer Songbirds" Bessie is on the field, if Robin • Summeretto's Vibes is 6 or higher, immediately summons "Summer Songbirds" Drummie, 
                 and if Vibes is 12 or higher, immediately summons "Summer Songbirds" Paddie. When all "Summer Songbirds" take the stage, 
                 dispels all Crowd Control debuffs inflicted upon Robin • Summeretto and the "Summer Songbirds", starts the "Fever" state, 
                 and deploys a Zone. When ally targets deal DMG within the Zone, they ignore a percentage of enemy targets' DEF equal to (${scaleValue(RbnSummerettoScaling.talent, i)} + Vibes × 0.5%).
                 While in the "Fever" state, Robin • Summeretto and the "Summer Songbirds" are immune to Crowd Control debuffs. Robin • Summeretto will not enter her turn until the "Fever" state ends.`,
        },

        technique: {
            id: "technique",
            name: "Technique: We Are the Melody",
            type: "technique",
            level: "1/1",
            icon: CA.RbnSummerettoTechnique,

            description:
                `After using Technique, advances action by 20% at the start of the next battle, immediately gains 6 Vibes, and increases all allies' DMG dealt by 30%, lasting for 2 turn(s).`,
        },

        // --- Pasivas ---

        b1: {
            id: "b1",
            name: "Rebuilt Harmony",
            type: "bonus",
            level: "1/1",
            icon: CA.RebuiltHarmony,
            description: "Increases the CRIT Rate of Robin • Summeretto and \"Summer Songbirds\" by 50%.",
        },

        b2: {
            id: "b2",
            name: "Deviated Chords",
            type: "bonus",
            level: "1/1",
            icon: CA.DeviatedChords,
            description: "When an ally target causes Robin • Summeretto to gain Vibes, if their ATK is higher than Robin • Summeretto's, increases that target's ATK by an amount equal to (16% + Vibes × 0.4%) of Robin • Summeretto's Max HP. Otherwise, increases that target's CRIT DMG by an amount equal to (40% + Vibes × 1.5%). Lasts for 2 turn(s).",
        },

        b3: {
            id: "b3",
            name: "Improvised Blues",
            type: "bonus",
            level: "1/1",
            icon: CA.ImprovisedBlues,
            description: "When Robin • Summeretto or the \"Summer Songbirds\" receive healing or Shield provided by teammates, causes Robin • Summeretto to gain 12 stack(s) of \"Groove\", capped at 12. The first time Robin • Summeretto gains Vibes during any target's turn, if she has \"Groove\", consumes 1 stack of \"Groove\" and regenerates a fixed 3 Energy.",
        },

        b4: {
            id: "b4",
            name: "Memosprite Talent: A Warble of Wings",
            type: "bonus",
            level: "7/7",
            icon: CA.RbnMemoTalent,
            description: (i) => 
                         `While in the "Fever" state, the "Summer Songbirds" and a countdown will appear on the Action Order. 
                          And the DMG dealt by Robin • Summeretto and "Summer Songbirds" increases by an amount equal to (${scaleValue(RbnSummerettoScaling.memotalent.main, i)} 
                          + Vibes × ${scaleValue(RbnSummerettoScaling.memotalent.adj, i)}). 
                          When "Summer Songbirds'" turn starts, uses the Memosprite Skill. The countdown has an initial SPD of 140. And when its turn starts, 
                          deducts 50% of the current Vibes (minimum 12 points). When the Vibes reaches 0, the "Summer Songbirds" 
                          disappears and Robin • Summeretto exits the "Fever" state. While the "Summer Songbirds" is on the field, 
                          based on the number of its members present, increases the DMG taken by all enemies by ${scaleValue(RbnSummerettoScaling.memotalent.adj2, i)}/
                          ${scaleValue(RbnSummerettoScaling.memotalent.adj3, i)}/${scaleValue(RbnSummerettoScaling.memotalent.adj4, i)} respectively.<br><br>`+
                          `<b>Near the Sea's Heartbeat</b><br>When the "Summer Songbirds" gets summoned, regenerates 20 Energy for Robin • Summeretto.<br><br>`+
                          `<b>Astride Summer's Nightwind</b><br>When the "Summer Songbirds" disappears, Robin • Summeretto's action advances by 50%.`,
        },

        b5: {
            id: "b5",
            name: "Memosprite Skill: Chirrup Quartet",
            type: "bonus",
            level: "7/7",
            icon: CA.RbnMemoSkill,
            description: (i) => 
                         `Deals Wind DMG equal to ${scaleValue(RbnSummerettoScaling.memoskill, i)} of "Summer Songbirds'" Max HP to all enemies.`,
        },

        // --- Stats Nodes (Nodos Pequeños) ---

        s1: {
            id: "s1",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>8.0%</u></b>",
        },

        s2: {
            id: "s2",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>4</u></b>",
        },

        s3: {
            id: "s3",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "Crit Rate Increases by: <b><u>4.0%</u></b>",
        },

        s4: {
            id: "s4",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>4.0%</u></b>",
        },

        s5: {
            id: "s5",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },

        s6: {
            id: "s6",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },

        s7: {
            id: "s7",
            name: "CRIT Rate Boost",
            type: "stat",
            icon: CA.CritRate,
            description: "Crit Rate Increases by: <b><u>2.7%</u></b>",
        },

        s8: {
            id: "s8",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },

        s9: {
            id: "s9",
            name: "Max HP Boost",
            type: "stat",
            icon: CA.MaxHP,
            description: "Max HP Increases by: <b><u>6.0%</u></b>",
        },

        s10: {
            id: "s10",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },
    },
};

const Hysilens: Character = {
  name: "Hysilens",
  path: Paths.Nihility,
  element: Elements.Physical,
  world: Worlds.Amphoreus,
  image: CA.HysilensImg,
  eidolons: Eidolons.HysilensEidolons,
  pfp: CA.HysilensPfp,

  baseATK: 601,
  baseDEF: 485,
  baseHP: 1203,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
    attack: {
      id: "attack",
      name: "Basic ATK: Aeolian Mode: Echoes in Still Waters",
      type: "basic",
      level: "1/7",
      icon: CA.HysilensBasicATK,

      description: (i) => `
        Deals Physical DMG equal to ${scaleValue(HysilensScaling.attack, i)} of Hysilens's ATK to one designated enemy.
      `,
    },

    skill: {
      id: "skill",
      name: "Skill: Overtone Hum: Chorus After Dark Tides",
      type: "skill",
      level: "1/12",
      icon: CA.HysilensSkill,

      description: (i) => `
        Has a 100% base chance to increase the DMG taken by all enemies by ${scaleValue(HysilensScaling.skill.main, i)}, lasting for 3 turn(s). At the same time, deals Physical DMG equal to ${scaleValue(HysilensScaling.skill.adj, i)} of Hysilens's ATK to all enemies.
      `,
    },

    ultimate: {
      id: "ultimate",
      name: "Ultimate: Maelstrom Rhapsody",
      type: "ultimate",
      level: "1/12",
      icon: CA.HysilensUltimate,

      description: (i) => `
        <b>Energy: 110</b><br>

        Hysilens deploys a Zone that reduces enemy targets' ATK by 15.0% and DEF by ${scaleValue(HysilensScaling.ultimate.main, i)}, and deals Physical DMG equal to ${scaleValue(HysilensScaling.ultimate.adj, i)} of Hysilens's ATK to all enemies.
        For every 1 instance of DoT taken by an enemy target within the Zone, Hysilens deals Physical DoT equal to ${scaleValue(HysilensScaling.ultimate.adj2, i)} of her ATK to them. This damage triggers at the start of each turn or after one attack by an ally target, up to 8 time(s). And it cannot repeatedly trigger this effect.
        The Zone lasts for 3 turn(s) and this duration decreases by 1 at the start of this unit's every turn. When Hysilens gets knocked down, the Zone will also be dispelled.
      `,
    },

    talent: {
      id: "talent",
      name: "Talent: Sirenic Serenade",
      type: "talent",
      level: "1/12",
      icon: CA.HysilensTalent,

      description: (i) => `
        When an ally target attacks, there is a 100% base chance for Hysilens to inflict the hit enemy target with one of the following states: Wind Shear, Bleed, Burn, or Shock. Priority is given to inflicting a different state.
        While in the Wind Shear/Burn/Shock state, at the start of each turn, the enemy target takes Wind/Fire/Lightning DoT equal to ${scaleValue(HysilensScaling.talent.main, i)} of Hysilens's ATK for 2 turn(s).
        While in the Bleed state, at the start of each turn, the enemy target takes Physical DoT equal to 20.0% of their Max HP, up to ${scaleValue(HysilensScaling.talent.adj, i)} of Hysilens's ATK, lasting for 2 turn(s).
      `,
    },
        technique: {
            id: "technique",
            name: "Technique: At Ocean's Abode",
            type: "technique",
            level: "1/1",
            icon: CA.HysilensTechnique,
            description: "After using Technique, creates a Special Dimension that lasts for 20 seconds and automatically moves forward. Enemies within the Special Dimension enter the \"Soulstruck\" state. \"Soulstruck\" enemies will not attack ally targets and will follow the dimension while it persists. After entering combat with \"Soulstruck\" enemies, there is a 100% base chance to inflict each enemy target with 2 of the following states: Wind Shear/Bleed/Burn/Shock, all of which are equivalent to those provided by Hysilens's Talent effect. Only 1 Dimension Effect created by allies can exist at the same time."
        },

        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "The Fiddle of Pearls",
            type: "bonus",
            level: "1/1",
            icon: CA.TheFiddleOfPearls,
            description: "For every 10% of Hysilens's Effect Hit Rate that exceeds 60%, increases her DMG dealt by 15%, up to a max increase of 90%.",
        },
        b2: {
            id: "b2",
            name: "The Gladius of Conquest",
            type: "bonus",
            level: "1/1",
            icon: CA.TheGladiusOfConquest,
            description: "At the start of combat, Hysilens deploys a Zone, equivalent to that provided by her Ultimate, lasting for 3 turn(s). Whenever Hysilens deploys a Zone, she recovers 1 Skill Point(s).",
        },
        b3: {
            id: "b3",
            name: "The Bubble of Banquets",
            type: "bonus",
            level: "1/1",
            icon: CA.TheBubbleOfBanquets,
            description: "When Hysilens uses Ultimate, if the enemy target is currently afflicted with DoT(s), all DoTs currently applied on the target will immediately produce DMG equal to 150% of their original DMG.",
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
            name: "ATK Boost",
            type: "stat",
            icon: CA.ATK,
            description: "Quantum DMG Increases by: <b><u>8.0%</u></b>",
        },
        s3: {
            id: "s3",
            name: "ATK Boost",
            type: "stat",
            icon: CA.ATK,
            description: "SPD Increases by: <b><u>4.0%</u></b>",
        },
        s4: {
            id: "s4",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },
        s5: {
            id: "s5",
            name: "Effect Hit Rate Boost",
            type: "stat",
            icon: CA.EffectHitRate,
            description: "Effect Hit Rate Increases by: <b><u>4.0%</u></b>",
        },
        s6: {
            id: "s6",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>2</u></b>",
        },
        s7: {
            id: "s7",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>4</u></b>",
        },
        s8: {
            id: "s8",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },
        s9: {
            id: "s9",
            name: "ATK Boost",
            type: "stat",
            icon: CA.ATK,
            description: "ATK Increases by: <b><u>6.0%</u></b>",
        },
        s10: {
            id: "s10",
            name: "SPD Boost",
            type: "stat",
            icon: CA.SPD,
            description: "SPD Increases by: <b><u>3</u></b>",
        },
    },
};

// Nihility
Characters.push(Cipher);
Characters.push(Hysilens);
// Destruction
Characters.push(Mydei);
Characters.push(Firefly);
// Elation
Characters.push(AventurineWaveflair);
// Harmony
Characters.push(Ruanmei);
// Abundace
Characters.push(Lingsha);
// Remembrance
Characters.push(Castorice);
Characters.push(RbnSummeretto);
// Hunt
Characters.push(Topaz);
// Preservation
Characters.push(Aventurine);