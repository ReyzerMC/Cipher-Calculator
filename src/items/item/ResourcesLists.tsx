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
    }
} as const;

export type Text = typeof Texts[keyof typeof Texts];

