import type { LightCone } from "../../types/hsr";
import { Paths, Texts } from "../item/ResourcesLists";
import { LiesDanceOnTheBreezeImg, FlameOfBloodBlazeMyPathImg, SummerRidesTheSurfImg, PastSelfInMirrorImg, ScentAloneStaysTrueImg, MakeFarewellsMoreBeautifulImg, WorrisomeBlissfulImg, InherentlyUnjustDestinyImg } from "../../assets/lightcones/index";

export const LightCones : LightCone[] = [];

const LiesDanceOnTheBreeze : LightCone = {
    name: "Lies Dance On The Breeze",
    path: Paths.Nihility,
    description: Texts.LiesDanceOnTheBreezeTextENG,
    image: LiesDanceOnTheBreezeImg,

    baseHP: 952,
    baseATK: 582,
    baseDEF: 529,
    dupe: 0,
};

const FlameOfBlood_BlazeMyPath : LightCone = {
    name: "Flame of Blood, Blaze My Path",
    path: Paths.Destruction,
    description: Texts.FlameOfBloodBlazeMyPathTextENG,
    image: FlameOfBloodBlazeMyPathImg,

    baseHP: 1375,
    baseATK: 476,
    baseDEF: 396,
    dupe: 1,
};

const ATrailOfBygoneBlood : LightCone = {
    name: "A Trail of Bygone Blood",
    path: Paths.Destruction,
    description: Texts.FlameOfBloodBlazeMyPathTextENG,
    image: "",

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 330,
    dupe: 1,
};

const GoodNightAndSleepWell : LightCone = {
    name: "Good Night and Sleep Well",
    path: Paths.Nihility,
    description: Texts.LiesDanceOnTheBreezeTextENG,
    image: "",

    baseHP: 952,
    baseATK: 476,
    baseDEF: 330,
    dupe: 1,
};

const InTheNight : LightCone = {
    name: "In the Night",
    path: Paths.Hunt,
    description: Texts.LiesDanceOnTheBreezeTextENG,
    image: "",

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const SummerRidesTheSurf : LightCone = {
    name: "Summer Rides the Surf",
    path: Paths.Elation,
    description: Texts.SummerRidesTheSurfENG,
    image: SummerRidesTheSurfImg,

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const PastSelfInMirror : LightCone = {
    name: "Past Self in Mirror",
    path: Paths.Harmony,
    description: Texts.PastSelfInMirrorENG,
    image: PastSelfInMirrorImg,

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 529,
    dupe: 1,
};

const ScentAloneStaysTrue : LightCone = {
    name: "Scent Alone Stays True",
    path: Paths.Abundance,
    description: Texts.ScentAloneStaysTrueENG,
    image: ScentAloneStaysTrueImg,

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 529,
    dupe: 1,
};

const MakeFarewellsMoreBeautiful : LightCone = {
    name: "Make Farewells More Beautiful",
    path: Paths.Remembrance,
    description: Texts.MakeFarewellsMoreBeautifulENG,
    image: MakeFarewellsMoreBeautifulImg,

    baseHP: 1270,
    baseATK: 529,
    baseDEF: 396,
    dupe: 1,
};

const WorrisomeBlissful : LightCone = {
    name: "Worrisome, Blissful",
    path: Paths.Hunt,
    description: Texts.WorrisomeBlissfulENG,
    image: WorrisomeBlissfulImg,

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const InherentlyUnjustDestiny : LightCone = {
    name: "Inherently Unjust Destiny",
    path: Paths.Preservation,
    description: Texts.InherentlyUnjustDestinyENG,
    image: InherentlyUnjustDestinyImg,

    baseHP: 1058,
    baseATK: 423,
    baseDEF: 661,
    dupe: 1,
};

// Nihility
LightCones.push(LiesDanceOnTheBreeze);
LightCones.push(GoodNightAndSleepWell);
// Destruction
LightCones.push(FlameOfBlood_BlazeMyPath);
LightCones.push(ATrailOfBygoneBlood);
// Hunt
LightCones.push(WorrisomeBlissful);
LightCones.push(InTheNight);
// Elation
LightCones.push(SummerRidesTheSurf);
// Harmony
LightCones.push(PastSelfInMirror);
// Abundance
LightCones.push(ScentAloneStaysTrue);
// Remembrance
LightCones.push(MakeFarewellsMoreBeautiful);
// Preservation
LightCones.push(InherentlyUnjustDestiny);
