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

        return `<b>Deceit</b><br>Increases the wearer's SPD by <u>${spd}%</u>. After the wearer uses an attack, there is a 120% base chance to inflict the "Bamboozle" state on every enemy target. While under the "Bamboozle" state, enemy targets have their DEF decreased by <u>${defBamboozle}%</u> for 2 turn(s). If the wearer's SPD is higher than or equal to 170, there is a 120% base chance to inflict the "Theft" state on every enemy target. While under the "Theft" state, enemy targets have their DEF decreased by <u>${defTheft}%</u> for 2 turn(s). When "Bamboozle" or "Theft" is repeatedly inflicted, only the most recently inflicted instance takes effect.`;
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

        return `Increases the wearer's Max HP by <u>${Hp1}%</u> and Incoming Healing by <u>${Hl1}</u>%. When using Skill or Ultimate, consumes HP equal to <u>${Hp2}%</u> of the wearer's Max HP and increases the DMG dealt by this attack by <u>${DMG1}%</u>. If this effect's consumed HP is greater than 500, the DMG additionally increases by <u>${DMG2}%</u>. If the current HP is not sufficient, this effect reduces the wearer's current HP down to 1.`;
    }
} as const;

export type Text = typeof Texts[keyof typeof Texts];

