import type { LightCone } from "../../types/hsr";
import { Paths, Texts } from "../item/ResourcesLists";
import { lightConeImg } from "../../utils/assets";

export const LightCones : LightCone[] = [];

const LiesDanceOnTheBreeze : LightCone = {
    name: "Lies Dance On The Breeze",
    path: Paths.Nihility,
    description: Texts.LiesDanceOnTheBreezeTextENG,
    image: lightConeImg("LiesDanceOnTheBreeze"),

    baseHP: 952,
    baseATK: 582,
    baseDEF: 529,
    dupe: 0,
};

const FlameOfBlood_BlazeMyPath : LightCone = {
    name: "Flame of Blood, Blaze My Path",
    path: Paths.Destruction,
    description: Texts.FlameOfBloodBlazeMyPathTextENG,
    image: lightConeImg("FlameOfBloodBlazeMyPath"),

    baseHP: 1375,
    baseATK: 476,
    baseDEF: 396,
    dupe: 1,
};

const ATrailOfBygoneBlood : LightCone = {
    name: "A Trail of Bygone Blood",
    path: Paths.Destruction,
    description: Texts.ATrailOfBygoneBloodENG,
    image: lightConeImg("ATrailOfBygoneBlood"),

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 330,
    dupe: 1,
};

const GoodNightAndSleepWell : LightCone = {
    name: "Good Night and Sleep Well",
    path: Paths.Nihility,
    description: Texts.GoodNightAndSleepWellENG,
    image: lightConeImg("GoodNightAndSleepWell"),

    baseHP: 952,
    baseATK: 476,
    baseDEF: 330,
    dupe: 1,
};

const InTheNight : LightCone = { 
    name: "In the Night",
    path: Paths.Hunt,
    description: Texts.InTheNightENG,
    image: lightConeImg("InTheNight"),

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const SummerRidesTheSurf : LightCone = {
    name: "Summer Rides the Surf",
    path: Paths.Elation,
    description: Texts.SummerRidesTheSurfENG,
    image: lightConeImg("SummerRidesTheSurf"),

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const PastSelfInMirror : LightCone = {
    name: "Past Self in Mirror",
    path: Paths.Harmony,
    description: Texts.PastSelfInMirrorENG,
    image: lightConeImg("PastSelfInMirror"),

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 529,
    dupe: 1,
};

const ScentAloneStaysTrue : LightCone = {
    name: "Scent Alone Stays True",
    path: Paths.Abundance,
    description: Texts.ScentAloneStaysTrueENG,
    image: lightConeImg("ScentAloneStaysTrue"),

    baseHP: 1058,
    baseATK: 529,
    baseDEF: 529,
    dupe: 1,
};

const MakeFarewellsMoreBeautiful : LightCone = {
    name: "Make Farewells More Beautiful",
    path: Paths.Remembrance,
    description: Texts.MakeFarewellsMoreBeautifulENG,
    image: lightConeImg("MakeFarewellsMoreBeautiful"),

    baseHP: 1270,
    baseATK: 529,
    baseDEF: 396,
    dupe: 1,
};

const WorrisomeBlissful : LightCone = {
    name: "Worrisome, Blissful",
    path: Paths.Hunt,
    description: Texts.WorrisomeBlissfulENG,
    image: lightConeImg("WorrisomeBlissful"),

    baseHP: 1058,
    baseATK: 582,
    baseDEF: 463,
    dupe: 1,
};

const InherentlyUnjustDestiny : LightCone = {
    name: "Inherently Unjust Destiny",
    path: Paths.Preservation,
    description: Texts.InherentlyUnjustDestinyENG,
    image: lightConeImg("InherentlyUnjustDestiny"),

    baseHP: 1058,
    baseATK: 423,
    baseDEF: 661,
    dupe: 1,
};

const WhereaboutsShouldDreamsRest : LightCone = {
    name: "Whereabouts Should Dreams Rest",
    path: Paths.Destruction,
    description: Texts.WhereaboutsShouldDreamsRestENG,
    image: lightConeImg("WhereaboutsShouldDreamsRest"),

    baseHP: 1164,
    baseATK: 476,
    baseDEF: 529,
    dupe: 1,
};

const RiseAndSing : LightCone = {
    name: "Rise and Sing",
    path: Paths.Remembrance,
    description: Texts.RiseAndSingENG,
    image: lightConeImg("RiseAndSing"),

    baseHP: 1164,
    baseATK: 582,
    baseDEF: 396,
    dupe: 1,
};

const WhyDoesTheOceanSing : LightCone = {
    name: "Why Does the Ocean Sing",
    path: Paths.Nihility,
    description: Texts.WhyDoesTheOceanSingENG,
    image: lightConeImg("WhyDoesTheOceanSing"),

    baseHP: 952,
    baseATK: 635,
    baseDEF: 463,
    dupe: 1,
};

const FlickeringStars : LightCone = {
    name: "Flickering Stars",
    path: Paths.Erudition,
    description: Texts.FlickeringStarsENG,
    image: lightConeImg("FlickeringStars"),

    baseHP: 856,
    baseATK: 635,
    baseDEF: 529,
    dupe: 1,
};

// Nihility
LightCones.push(LiesDanceOnTheBreeze);
LightCones.push(GoodNightAndSleepWell);
LightCones.push(WhyDoesTheOceanSing);
// Destruction
LightCones.push(FlameOfBlood_BlazeMyPath);
LightCones.push(ATrailOfBygoneBlood);
LightCones.push(WhereaboutsShouldDreamsRest);
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
LightCones.push(RiseAndSing);
// Preservation
LightCones.push(InherentlyUnjustDestiny);
// Erudition
LightCones.push(FlickeringStars);