import type { Path, Element, World } from "../items/item/ResourcesLists";

export interface Character {

    // Info
    name: string;
    path: Path;
    element: Element;
    world: World;
    image: string;

    // Stats
    baseATK: number;
    baseDEF: number;
    baseHP: number;
    baseSPD: number;
    aggro: number;
    dupe: number;
    traces: Record<string, TraceNodeData>;
}

export interface LightCone {
    // Info
    name: string;
    path: Path;
    description: (superimposition: number ) => string;
    image: string;

    // Stats
    baseATK: number;
    baseHP: number;
    baseDEF: number;
    dupe: number;
}

export interface TraceNodeData {
    id: string;
    name: string;
    type: "basic" | "skill" | "ultimate" | "talent" | "technique" | "bonus" | "stat";
    level?: string;
    icon: string;
    description: string;
}

export interface NodePosition {
    id: string;
    x: number;
    y: number;
}

export interface Connection {
    from: string;
    to: string;

    arc?: { radius: number, sweep: number };
}

export class NihilityTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // Nodos Centrales
    attack: { x: 36, y: 48 },
    skill: { x: 64, y: 48 },
    ultimate: { x: 50, y: 44 },
    talent: { x: 50, y: 31 },
    technique: { x: 50, y: 61 },

    // Pasivas Mayores (Lados)
    b1: { x: 50, y: 17 },
    b2: { x: 23, y: 38 },
    b3: { x: 77, y: 38 },

    // Anillo exterior y extensiones (Puntos reducidos para no ovalar)
    s1: { x: 34, y: 22 },
    s2: { x: 66, y: 22 },
    s3: { x: 14, y: 58 },
    s4: { x: 24, y: 71 },
    s5: { x: 35, y: 84 },
    s6: { x: 50, y: 74 },
    s7: { x: 50, y: 85 },
    s8: { x: 65, y: 84 },
    s9: { x: 76, y: 71 },
    s10: { x: 86, y: 58 },
  };

  // Mantenemos las mismas conexiones
  static readonly connections = [
    { from: "b1", to: "talent" },
    { from: "ultimate", to: "talent" },
    { from: "ultimate", to: "technique" },
    { from: "attack", to: "b2" },
    { from: "technique", to: "s6" },
    { from: "s6", to: "s7" },
    { from: "ultimate", to: "attack", arc: { radius: 21, sweep: 0 } },
    { from: "ultimate", to: "skill", arc: { radius: 21, sweep: 1 } },
    { from: "skill", to: "b3" },
    { from: "s1", to: "b1", arc: { radius: 33, sweep: 1 } },
    { from: "s2", to: "b1", arc: { radius: 33, sweep: 0 } },
    { from: "b2", to: "s3" },
    { from: "s3", to: "s4" },
    { from: "s4", to: "s5" },
    { from: "b3", to: "s10" },
    { from: "s10", to: "s9" },
    { from: "s9", to: "s8" },
  ];
}

export class DestructionTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // Nodos Centrales
    attack: { x: 34, y: 48 },
    skill: { x: 66, y: 48 },
    ultimate: { x: 50, y: 48 },
    talent: { x: 50, y: 34 },
    technique: { x: 50, y: 68 },

    // Pasivas Mayores (Lados y Arriba)
    b1: { x: 50, y: 21 },
    b2: { x: 33, y: 73 },
    b3: { x: 67, y: 73 },

    // Anillo exterior y extensiones
    s1: { x: 33, y: 15 },
    s2: { x: 50, y: 11 },
    s3: { x: 67, y: 15 },
    s4: { x: 86, y: 50 },
    s5: { x: 77, y: 62 },
    s6: { x: 77, y: 38 },
    s7: { x: 50, y: 81 },
    s8: { x: 23, y: 62 },
    s9: { x: 23, y: 38 },
    s10: { x: 14, y: 50 },
  };

  static readonly connections: Connection[] = [
    // Eje vertical y horizontal central
    { from: "talent", to: "b1" },
    { from: "ultimate", to: "talent" },
    { from: "ultimate", to: "technique" },
    { from: "technique", to: "s7" },

    // Ramas de las Pasivas Mayores inferiores (b2 y b3)
    { from: "b2", to: "s8" },
    { from: "s8", to: "s10" },
    { from: "s10", to: "s9" },
    { from: "b3", to: "s5" },
    { from: "s5", to: "s4" },
    { from: "s4", to: "s6" },

    // Arcos superiores sobre el anillo exterior (Radio 33)
    { from: "s1", to: "s2", arc: { radius: 33, sweep: 1 } },
    { from: "s2", to: "s3", arc: { radius: 33, sweep: 1 } },
    { from: "b2", to: "technique", arc: { radius: 21, sweep: 1 } },
    { from: "technique", to: "b3", arc: { radius: 21, sweep: 1 } },
    { from: "b1", to: "s2" },

    // Arcos centrales sobre el anillo interior (Radio 21)
    { from: "ultimate", to: "skill", arc: { radius: 21, sweep: 0 } },
    { from: "ultimate", to: "attack", arc: { radius: 21, sweep: 1 } },
  ];
}