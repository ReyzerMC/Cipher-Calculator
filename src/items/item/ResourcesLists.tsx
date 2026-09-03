export const Paths = {
    Nihility: "Nihility",
    Harmony: "Harmony",
    Destruction: "Destruction",
    Preservation: "Preservation",
    Abundance: "Abundance",
    Hunt: "Hunt",
    Erudition: "Erudition",
    Remembrance: "Remembrance",
    Elation: "Elation"
} as const;

export type Path = typeof Paths[keyof typeof Paths];



export const Elements = {
    Ice: "Ice",
    Wind: "Wind",
    Fire: "Fire",
    Imaginary: "Imaginary",
    Lightning: "Lightning",
    Quantum: "Quantum",
    Physical: "Physical"
} as const;

export type Element = typeof Elements[keyof typeof Elements];

export const Worlds = {
    AstralExpress: "Astral Express",
    AnotherWorld: "Another World",
    MaskedFools: "Masked Fools",
    TheXianzhouYuque: "The Xianzhou Yuque",
    Belobog: "Belobog",
    Amphoreus: "Amphoreus",
    Planacardia: "Planacardia",
    TheCremator: "The Cremator",
    StellaronHunters: "Stellaron Hunters",
    TheXianzhouLuofu: "The Xianzhou Luofu",
    HertaSpaceStation: "Herta Space Station",
    SelfAnnihilator: "Self-Annihilator",
    GardenOfRecollection: "Garden Of Recollection",
    InterastralPeaceCorporation: "Interastral Peace Corporation",
    GalaxyRanger: "Galaxy Ranger",
    TheXianzhouZhuming: "The Xianzhou Zhuming",
    Penacony: "Penacony",
    IntelligentsiaGuild: "Intelligentsia Guild",
    TheXianzhouYaoqing: "The Xianzhou Yaoqing",
} as const;

export type World = typeof Worlds[keyof typeof Worlds];

export const Texts = {

    LiesDanceOnTheBreezeTextENG: (rank: number): string => {
        // Rangos de valores [S1, S2, S3, S4, S5]
        const spdValues = [18, 21, 24, 27, 30];
        const defBamboozleValues = [16, 18, 20, 22, 24];
        const defTheftValues = [8, 9, 10, 11, 12];

        // Aseguramos que el índice esté dentro del rango 0-4
        const index = Math.max(0, Math.min(rank - 1, 4));

        const spd = spdValues[index];
        const defBamboozle = defBamboozleValues[index];
        const defTheft = defTheftValues[index];

        return `<b>Deceit</b><br>Increases the wearer's SPD by <b><u>${spd}%</u></b>. After the wearer uses an attack, there is a 120% base chance to inflict the "Bamboozle" state on every enemy target. While under the "Bamboozle" state, enemy targets have their DEF decreased by <b><u>${defBamboozle}%</u></b> for 2 turn(s). If the wearer's SPD is higher than or equal to 170, there is a 120% base chance to inflict the "Theft" state on every enemy target. While under the "Theft" state, enemy targets have their DEF decreased by <b><u>${defTheft}%</u></b> for 2 turn(s). When "Bamboozle" or "Theft" is repeatedly inflicted, only the most recently inflicted instance takes effect.`;
    },

    FlameOfBloodBlazeMyPathTextENG: (rank: number): string => {
        const HpVal1 = [18, 21, 24, 27, 30];
        const HlVal1 = [20, 25, 30, 35, 40];
        const HpVal2 = [6.0, 6.5, 7.0, 7.5, 8.0];
        const DMGVal1 = [30, 35, 40, 45, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const Hp1 = HpVal1[index];
        const Hl1 = HlVal1[index];
        const Hp2 = HpVal2[index];
        const DMG1 = DMGVal1[index];
        const DMG2 = DMGVal1[index];

        return `Increases the wearer's Max HP by <b><u>${Hp1}%</u></b> and Incoming Healing by <b><u>${Hl1}%</u></b>. When using Skill or Ultimate, consumes HP equal to <b><u>${Hp2}%</u></b> of the wearer's Max HP and increases the DMG dealt by this attack by <b><u>${DMG1}%</u></b>. If this effect's consumed HP is greater than 500, the DMG additionally increases by <b><u>${DMG2}%</u></b>. If the current HP is not sufficient, this effect reduces the wearer's current HP down to 1.`;
    },

    SummerRidesTheSurfENG: (rank: number): string => {
        const CritRateVal = [18, 21, 24, 27, 30];
        const SPDVal = [24, 28, 32, 36, 40];
        const ElationVal = [40, 55, 70, 85, 100];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const CritRate = CritRateVal[index];
        const SPD = SPDVal[index];
        const Elation = ElationVal[index]; 

        return `Increases the wearer's CRIT Rate by <b><u>${CritRate}%</u></b>. When the wearer uses Elation Skill, gains "Updraft," which increases the wearer's SPD by <b><u>${SPD}%</u></b>. If the Elation Skill used is different from the one used last time, additionally gains "Uptrend", which increases the wearer's Elation by <b><u>${Elation}%</u></b>. When every wave starts or after the wearer uses Elation Skill 3 time(s), recovers 1 Skill Point.`;
    },

    PastSelfInMirrorENG: (rank: number): string => {
        const BreakVal = [60, 70, 80, 90, 100];
        const DMGVal = [24, 28, 32, 36, 40];
        const EnergyVal = [10.0, 12.5, 15.0, 17.5, 20.0];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const Break = BreakVal[index];
        const DMG = DMGVal[index];
        const Energy = EnergyVal[index]; 

        return `Increases the wearer's Break Effect by <b><u>${Break}%</u></b>. When the wearer uses their Ultimate, increases all allies' DMG by <b><u>${DMG}%</u></b>, lasting for 3 turn(s). If the wearer's Break Effect exceeds or equals 150%, 1 Skill Point will be recovered. At the start of each wave, all allies regenerate <b><u>${Energy}</u></b> Energy immediately. Abilities of the same type cannot stack.`;
    },

    ScentAloneStaysTrueENG: (rank: number): string => {
        const BreakVal = [60, 70, 80, 90, 100];
        const DMGVal = [10, 12, 14, 16, 18];
        const DMGVal2 = [8, 10, 12, 14, 16];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const Break = BreakVal[index];
        const DMG = DMGVal[index];
        const DMG2 = DMGVal2[index]; 

        return `Increases the wearer's Break Effect by <u><b>${Break}%</u></b> After the wearer uses Ultimate to attack enemy targets, inflicts the targets with the "Woefree" state, lasting for 2 turn(s). While in "Woefree," enemy targets take <u><b>${DMG}%</u></b> increased DMG. The effect of increasing DMG taken is additionally boosted by <u><b>${DMG2}%</u></b> if the wearer's current Break Effect is 150% or higher.`;
    },

    MakeFarewellsMoreBeautifulENG: (rank: number): string => {
        const MaxHPVal = [30, 38, 45, 53, 60];
        const IgnoreVal = [30, 35, 40, 45, 50];
        const ActionVal = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const MaxHP = MaxHPVal[index];
        const Ignore = IgnoreVal[index];
        const Action = ActionVal[index]; 

        return `Increases the wearer's Max HP by <b><u>${MaxHP}</u></b>. When the wearer or their memosprite loses HP during their own turn, the wearer gains "Death Flower." "Death Flower" allows the wearer and their memosprite to ignore <b><u>${Ignore}</u></b> of the target's DEF when dealing DMG, lasting for 2 turn(s). When the wearer's memosprite disappears, advances the wearer's action by <b><u>${Action}</u></b>. This effect can only trigger up to 1 time, and the trigger count resets every time the wearer uses Ultimate.`;
    },

    WorrisomeBlissfulENG: (rank: number): string => {
        const CRITRateVal = [18, 21, 24, 27, 30];
        const ATKVal = [30, 35, 40, 45, 50];
        const CRITDmgVal = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const CRITRate = CRITRateVal[index];
        const ATK = ATKVal[index];
        const CRITDmg = CRITDmgVal[index]; 

        return `Increase the wearer's CRIT Rate by <b><u>${CRITRate}</u></b> and increases DMG dealt by Follow-Up ATK by <b><u>${ATK}</u></b>. After the wearer uses a Follow-Up ATK, inflicts the target with the "Tame" state, stacking up to 2 time(s). When allies hit enemy targets under the "Tame" state, each "Tame" stack increases the CRIT DMG dealt by <b><u>${CRITDmg}</u></b>.`;
    },

    InherentlyUnjustDestinyENG: (rank: number): string => {
        const DEFVal = [40, 46, 52, 58, 64];
        const CRITDmgVal = [40, 46, 52, 58, 64];
        const ChanceVal = [100, 115, 130, 145, 160];
        const DMGVal = [10, 11.5, 13.0, 14.5, 16.0];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const DEF = DEFVal[index];
        const CRITDmg = CRITDmgVal[index];
        const Chance = ChanceVal[index];
        const DMG = DMGVal[index]; 

        return `Increases the wearer's DEF by <b><u>${DEF}%</u></b>. When the wearer provides a Shield to an ally, the wearer's CRIT DMG increases by <b><u>${CRITDmg}%</u></b>, lasting for 2 turn(s). When the wearer's Follow-Up ATK hits an enemy target, there is a <b><u>${Chance}%</u></b> base chance to increase the DMG taken by the attacked enemy target by <b><u>${DMG}%</u></b>, lasting for 2 turn(s).`;
    },

    WhereaboutsShouldDreamsRestENG: (rank: number): string => {
        const BreakVal = [60, 70, 80, 90, 100];
        const BreakDMGVal = [24.0, 28.0, 32.0, 36.0, 40.0];


        const index = Math.max(0, Math.min(rank - 1, 4));

        const Break = BreakVal[index];
        const BreakDMG = BreakDMGVal[index];

        return `Increases the wearer's Break Effect by <b><u>${Break}%</u></b>. When the wearer deals Break DMG to an enemy target, inflicts Routed on the enemy, lasting for 2 turn(s). Targets afflicted with Routed receive <b><u>${BreakDMG}%</u></b> increased Break DMG from the wearer, and their SPD is lowered by 20%. Effects of the same type cannot be stacked.`;
    },

    RiseAndSingENG: (rank: number): string => {
        const HPVal = [30, 38, 45, 53, 60];
        const ActionVal = [30, 33, 35, 38, 40];
        const SPDVal = [20, 25, 30, 35, 40];


        const index = Math.max(0, Math.min(rank - 1, 4));

        const HP = HPVal[index];
        const Action = ActionVal[index];
        const SPD = SPDVal[index];

        return `Increases the wearer's Max HP by <b><u>${HP}%</u></b>. After the wearer uses Ultimate, recovers 1 Skill Point for allies. When entering combat, advances the wearer's action by <b><u>${Action}%</u></b> and grants the wearer "New Melody," lasting for 2 turn(s). While the wearer holds "New Melody," all allies' SPD increases by <b><u>${SPD}%</u></b>.`;
    },

    WhyDoesTheOceanSingENG: (rank: number): string => {
        const EffectHitVal = [40, 45, 50, 55, 60];
        const DoTVal = [5.0, 6.3, 7.5, 8.8, 10.0];
        const SPDVal = [10.0, 12.5, 15.0, 17.5, 20.0];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const EffectHit = EffectHitVal[index];
        const DoT = DoTVal[index];
        const SPD = SPDVal[index];

        return `Increases the wearer's Effect Hit Rate by <b><u>${EffectHit}%</u></b>. When an enemy target gets inflicted with a debuff by the wearer, there is a 80% base chance for them to enter "Enthrallment", lasting for 3 turn(s). Effects of the same type cannot stack. While the target is in "Enthrallment", for every 1 debuff applied by the wearer on the target, increases the target's received DoT by <b><u>${DoT}%</u></b>, stacking up to 6 time(s). When the target gets attacked by an ally, increases the attacker's SPD by <b><u>${SPD}%</u></b> for 3 turn(s). When the wearer gets knocked down, removes all "Enthrallment."`;
    },

    FlickeringStarsENG: (rank: number): string => {
        const CritRateVal = [18, 21, 24, 27, 30];
        const IgnoreVal = [20, 24, 28, 32, 36];
        const SkillDMGVal = [72, 84, 96, 108, 120];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const CritRate = CritRateVal[index];
        const Ignore = IgnoreVal[index];
        const SkillDMG = SkillDMGVal[index];

        return `Increases the wearer's CRIT Rate by <b><u>${CritRate}%</u></b>. When any ally character consumes a total of 4 or more Skill Points in a single turn, the wearer gains "Radiant Crown," lasting for 3 turn(s). While the wearer holds "Radiant Crown," all allies' DMG dealt ignores <b><u>${Ignore}%</u></b> of the target's DEF, and the Skill DMG dealt by the wearer increases by <b><u>${SkillDMG}%</u></b>. Effects of the same type cannot stack.`;
    },

    ATrailOfBygoneBloodENG: (rank: number): string => {
        const CritRateVal = [12, 14, 16, 18, 20];
        const DMGVal = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const CritRate = CritRateVal[index];
        const DMG = DMGVal[index];

        return `Increases the wearer's CRIT Rate by <b><u>${CritRate}%</u></b>. The Skill DMG and Ultimate DMG dealt by the wearer increase by <b><u>${DMG}%</u></b>.`;
    },

    GoodNightAndSleepWellENG: (rank: number): string => {
        const DMGVal = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const DMG = DMGVal[index];

        return `For every debuff the target enemy has, the DMG dealt by the wearer increases by <b><u>${DMG}%</u></b>, stacking up to 3 time(s). This effect also applies to DoT.`;
    },

    InTheNightENG: (rank: number): string => {
        const CritRateVal = [18, 21, 24, 27, 30];
        const DMGVal = [6, 7, 8, 9, 10];
        const CritDmgVal = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));

        const CritRate = CritRateVal[index];
        const DMG = DMGVal[index];
        const CritDmg = CritDmgVal[index];

        return `Increases the wearer's CRIT Rate by <b><u>${CritRate}%</u></b>. While the wearer is in battle, for every 10 SPD that exceeds 100, increases DMG dealt by Basic ATK and Skill by <b><u>${DMG}%</u></b>. At the same time, increases the CRIT DMG of Ultimate by <b><u>${CritDmg}%</u></b>. This effect can stack up to 6 time(s).`;
    },

} as const;

export type Text = typeof Texts[keyof typeof Texts];
