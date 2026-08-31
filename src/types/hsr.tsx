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

export class ElationTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES (Eje Vertical) ---
    b1: { x: 50, y: 15 },         // Elation Skill
    ultimate: { x: 50, y: 35 },   // Habilidad Definitiva
    talent: { x: 50, y: 52 },     // Talento
    technique: { x: 50, y: 69 },  // Técnica
    b2: { x: 50, y: 86 },         // Pasiva Mayor Inferior

    // --- NODOS SUPERIORES / DIAGONALES ---
    attack: { x: 36, y: 22 },     // Ataque Básico (Izquierda)
    skill: { x: 64, y: 22 },      // Habilidad Basica (Derecha)

    // --- PASIVAS MAYORES LATERALES ---
    b3: { x: 23, y: 32 },         // Pasiva Mayor (Izquierda)
    b4: { x: 77, y: 32 },         // Pasiva Mayor (Derecha)

    // --- ANILLO EXTERIOR Y RAMAS DE ATRIBUTOS (s1 a s10) ---
    // Rama Izquierda (Conectada desde Technique)
    s1: { x: 35, y: 64 },         // Stat Bonus (Diagonal inferior izq)
    s2: { x: 29, y: 50 },         // Stat Bonus
    s3: { x: 18, y: 58 },         // Stat Bonus (Borde externo izq)

    // Rama Derecha (Conectada desde Technique)
    s4: { x: 66, y: 64 },         // Stat Bonus (Diagonal inferior der)
    s5: { x: 71, y: 50 },         // Stat Bonus
    s6: { x: 82, y: 58 },         // Stat Bonus (Borde externo der)

    // Rama Inferior (Conectada desde Pasiva Mayor b2)
    s7: { x: 38, y: 86 },         // Stat Bonus (Abajo Izquierda)
    s8: { x: 62, y: 86 },         // Stat Bonus (Abajo Derecha)

    // Extensión del Anillo Exterior
    s9: { x: 17, y: 44 },         // Stat Bonus (Entre B3 y S3)
    s10: { x: 83, y: 45 },        // Stat Bonus (Entre B4 y S6)
  };

  static readonly connections: Connection[] = [
    // --- TRONCO CENTRAL VERTICAL ---
    { from: "ultimate", to: "talent" },
    { from: "talent", to: "technique" },
    { from: "technique", to: "b2" },

    // --- RAMIFICACIONES CENTRALES SUPERIORES ---
    { from: "ultimate", to: "attack" },
    { from: "ultimate", to: "skill" },

    // --- ARCOS SUPERIORES DEL ANILLO EXTERIOR (Radio 33) ---
    { from: "b3", to: "attack", arc: { radius: 33, sweep: 1 } },
    { from: "skill", to: "b4", arc: { radius: 33, sweep: 1 } },

    { from: "b3", to: "s9", arc: { radius: 33, sweep: 0 } },
    { from: "s9", to: "s3", arc: { radius: 33, sweep: 0 } },
    { from: "s3", to: "s2" },
    { from: "technique", to: "s1", arc: { radius: 33, sweep: 1 } },
    { from: "technique", to: "s4", arc: { radius: 33, sweep: 0 } },
    { from: "b4", to: "s10", arc: { radius: 33, sweep: 1 } },
    { from: "s10", to: "s6", arc: { radius: 33, sweep: 1 } },
    { from: "s6", to: "s5" },
    { from: "b2", to: "s7" },
    { from: "b2", to: "s8" },
  ];
}

export class HarmonyTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 36, y: 47 },
    skill: { x: 64, y: 47 },
    ultimate: { x: 50, y: 59 },
    talent: { x: 50, y: 43 },
    technique: { x: 50, y: 73 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 26 },         // Pasiva Mayor Superior
    b2: { x: 19, y: 55 },         // Pasiva Mayor Izquierda
    b3: { x: 81, y: 55 },         // Pasiva Mayor Derecha

    // --- ANILLO EXTERIOR Y EXTENSIONES (s1 a s10) ---
    // Arco Superior (Conectado a b1)
    s1: { x: 35, y: 16 },         // Stat Bonus (Arriba Izq)
    s2: { x: 50, y: 12 },         // Stat Bonus (Arriba Centro)
    s3: { x: 65, y: 16 },         // Stat Bonus (Arriba Der)

    // Rama Diagonal Izquierda (Desde b2 hacia afuera)
    s4: { x: 24, y: 34 },         // Stat Bonus (Interno izq)
    s5: { x: 11, y: 42 },         // Stat Bonus (Borde externo izq)

    // Rama Diagonal Derecha (Desde b3 hacia abajo)
    s6: { x: 61, y: 62 },         // Stat Bonus (Interno der)
    s7: { x: 74, y: 68 },         // Stat Bonus (Extremo inferior der)

    // Arco Inferior (Conectado desde Technique)
    s8: { x: 50, y: 86 },         // Stat Bonus (Centro Abajo)
    s9: { x: 34, y: 83 },         // Stat Bonus (Abajo Izq)
    s10: { x: 66, y: 83 },        // Stat Bonus (Abajo Der)
  };

  static readonly connections: Connection[] = [
    
    { from: "s2", to: "s1" },
    { from: "s2", to: "s3" },
    { from: "s2", to: "b1" },

    { from: "b2", to: "s5" },
    { from: "s5", to: "s4" },
    
    { from: "talent", to: "b1" },
    { from: "talent", to: "attack", arc: { radius: 33, sweep: 0 } },
    { from: "talent", to: "skill", arc: { radius: 33, sweep: 1 } },
    { from: "attack", to: "b2", arc: { radius: 60, sweep: 0 } },
    { from: "skill", to: "b3", arc: { radius: 60, sweep: 1 } },
    { from: "talent", to: "ultimate" },
    { from: "ultimate", to: "technique" },


    { from: "b3", to: "s7" },
    { from: "s7", to: "s6" },

    { from: "technique", to: "s8" },
    { from: "s8", to: "s9" },
    { from: "s8", to: "s10" }
  ];
}

export class AbundanceTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    talent: { x: 50, y: 31 },   // Definitiva (Arriba)
    attack: { x: 34, y: 45 },      // Habilidad Básica (Izquierda)
    ultimate: { x: 50, y: 48 },     // Ataque Básico (Centro)
    skill: { x: 66, y: 45 },     // Talento (Derecha)
    technique: { x: 50, y: 68 },  // Técnica (Abajo)

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 10 },         // Pasiva Mayor Superior
    b2: { x: 27, y: 72 },         // Pasiva Mayor Inferior Izquierda
    b3: { x: 73, y: 72 },         // Pasiva Mayor Inferior Derecha

    // --- ANILLO EXTERIOR Y RAMAS DE ATRIBUTOS (s1 a s10) ---
    // Arco Superior (Conectado a b1)
    s1: { x: 31, y: 15 },         // Stat Bonus (HP% - Arriba Izq)
    s2: { x: 69, y: 15 },         // Stat Bonus (ATK% - Arriba Der)

    // Rama Lateral Izquierda (Conectada desde Pasiva b2)
    s3: { x: 20, y: 60 },         // Stat Bonus
    s4: { x: 13, y: 47 },         // Stat Bonus (Extremo Izquierda)
    s5: { x: 24, y: 36 },         // Stat Bonus

    // Rama Lateral Derecha (Conectada desde Pasiva b3)
    s6: { x: 80, y: 60 },         // Stat Bonus
    s7: { x: 86, y: 47 },         // Stat Bonus (Extremo Derecha)
    s8: { x: 75, y: 36 },         // Stat Bonus

    // Base Inferior (Conectada desde Technique)
    s9: { x: 41, y: 83 },         // Stat Bonus (Abajo Izq)
    s10: { x: 59, y: 83 },        // Stat Bonus (Abajo Der)
  };

  static readonly connections: Connection[] = [
    { from: "b1", to: "s1", arc: { radius: 45, sweep: 0 } },
    { from: "b1", to: "s2", arc: { radius: 45, sweep: 1 } },

    { from: "b1", to: "talent" },
    { from: "talent", to: "ultimate" },
    { from: "ultimate", to: "attack", arc: { radius: 33, sweep: 1 } },
    { from: "ultimate", to: "skill", arc: { radius: 33, sweep: 0 } },
    { from: "ultimate", to: "technique" },
    { from: "technique", to: "b2", arc: { radius: 45, sweep: 0 } },
    { from: "technique", to: "b3", arc: { radius: 45, sweep: 1 } },

    { from: "b2", to: "s3" },
    { from: "s3", to: "s4" },
    { from: "s4", to: "s5" },

    { from: "b3", to: "s6" },
    { from: "s6", to: "s7" },
    { from: "s7", to: "s8" },

    { from: "s10", to: "s9" },

  ];
}

export class RemembranceTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    // Eje Vertical
    attack: { x: 38, y: 63 },
    ultimate: { x: 52, y: 69 },
    skill: { x: 66, y: 63 },
    talent: { x: 74, y: 47 },
    technique: { x: 29, y: 47 },

    // Anillo Interior / Habilidades adicionales
    b4: { x: 52, y: 26 },
    b5: { x: 52, y: 45 },

    // --- PASIVAS MAYORES (B1 a B5) ---
    b1: { x: 38, y: 30 },              // Pasiva Mayor Superior Izquierda
    b2: { x: 87, y: 47 },              // Pasiva Mayor Derecha
    b3: { x: 52, y: 84 },              // Pasiva Mayor Inferior
    

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    // Arco Superior
    s1: { x: 44, y: 12 },              // Stat Bonus (Arriba Centro-Izq)
    s2: { x: 59.5, y: 12.50 },              // Stat Bonus (Arriba Centro-Der)
    s3: { x: 29, y: 18 },              // Stat Bonus (Arriba Izq, salida de b1)

    // Arco Lateral Izquierdo (Conectado desde attack)
    s4: { x: 18, y: 32 },              // Stat Bonus
    s5: { x: 13, y: 47 },              // Stat Bonus (Extremo Izquierda)
    s6: { x: 16, y: 63 },              // Stat Bonus

    // Arco Lateral Derecho (Conectado desde b2)
    s7: { x: 82, y: 32 },              // Stat Bonus (Arriba de b2)
    s8: { x: 84, y: 64 },              // Stat Bonus (Abajo de b2)

    // Arco Inferior (Conectado a b3)
    s9: { x: 39, y: 80 },              // Stat Bonus (Abajo Izq)
    s10: { x: 65, y: 80 },             // Stat Bonus (Abajo Der)
  };

  static readonly connections: Connection[] = [
    { from: "b4", to: "b5" },

    { from: "talent", to: "b2" },
    { from: "talent", to: "skill", arc: { radius: 20, sweep: 1} },
    { from: "skill", to: "ultimate", arc: { radius: 20, sweep: 1} },
    { from: "ultimate", to: "attack", arc: { radius: 20, sweep: 1} },
    { from: "ultimate", to: "b3" },
    { from: "attack", to: "technique", arc: { radius: 20, sweep: 1} },
    { from: "technique", to: "s5" },
    { from: "technique", to: "b1", arc: { radius: 20, sweep: 1} },
    { from: "b1", to: "s3" },

    { from: "s3", to: "s1", arc: { radius: 33, sweep: 1} },
    { from: "s1", to: "s2", arc: { radius: 53, sweep: 1} },

    { from: "b2", to: "s7", arc: { radius: 33, sweep: 0} },
    { from: "b2", to: "s8", arc: { radius: 33, sweep: 1} },

    { from: "s5", to: "s4", arc: { radius: 33, sweep: 1} },
    { from: "s5", to: "s6", arc: { radius: 33, sweep: 0} },

    { from: "b3", to: "s9", arc: { radius: 33, sweep: 1} },
    { from: "b3", to: "s10", arc: { radius: 33, sweep: 0} },
  ];
}