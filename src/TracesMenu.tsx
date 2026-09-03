import React, { useEffect, useState } from "react";
import type { TraceNodeData } from "./types/hsr";
import {
  AbundanceTreeLayout,
  DestructionTreeLayout,
  ElationTreeLayout,
  EruditionTreeLayout,
  HarmonyTreeLayout,
  HuntTreeLayout,
  NihilityTreeLayout,
  PreservationTreeLayout,
  RemembranceTreeLayout
} from "./types/hsr";
import "./TracesMenu.css";
import {
  abundanceImg,
  destructionImg,
  elationImg,
  eruditionImg,
  harmonyImg,
  huntImg,
  nihilityImg,
  preservationImg,
  remembranceImg
} from "./assets/paths";

interface TracesMenuProps {
  path: string;
  nodes: Record<string, TraceNodeData>;
  bgWatermark?: string;
  // Callback para exportar el nivel actual al exterior (e.g. index para arrays de daño)
  onLevelChange?: (nodeId: string, level: number, index: number) => void;
}

const useTraceScale = () => {
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width >= 2500) {
        setScale(1.35);
      } else {
        setScale(1.0);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
};

// Función auxiliar para obtener el nivel máximo desde la cadena "x/max"
const getMaxLevel = (levelStr?: string): number => {
  if (!levelStr) return 1;
  const parts = levelStr.split("/");
  if (parts.length > 1) {
    const parsed = parseInt(parts[1], 10);
    return isNaN(parsed) ? 1 : parsed;
  }
  return 1;
};

export const TracesMenu: React.FC<TracesMenuProps> = ({
  path,
  nodes,
  bgWatermark,
  onLevelChange
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  
  // Diccionario para almacenar el nivel dinámico actual de cada nodo (id -> nivel)
  const [nodeLevels, setNodeLevels] = useState<Record<string, number>>({});

  const scale = useTraceScale();
  const selectedNode = selectedNodeId ? nodes[selectedNodeId] : null;

  // Manejar cambio de nivel en el slider
  const handleSliderChange = (nodeId: string, newLevel: number) => {
    setNodeLevels((prev) => ({
      ...prev,
      [nodeId]: newLevel
    }));

    // Exportamos el nivel y el índice (0-based) para arrays de escalado
    if (onLevelChange) {
      onLevelChange(nodeId, newLevel, newLevel - 1);
    }
  };

  const getLayoutConnections = () => {
    if (bgWatermark === nihilityImg) return NihilityTreeLayout.connections;
    if (bgWatermark === destructionImg) return DestructionTreeLayout.connections;
    if (bgWatermark === elationImg) return ElationTreeLayout.connections;
    if (bgWatermark === harmonyImg) return HarmonyTreeLayout.connections;
    if (bgWatermark === abundanceImg) return AbundanceTreeLayout.connections;
    if (bgWatermark === remembranceImg) return RemembranceTreeLayout.connections;
    if (bgWatermark === huntImg) return HuntTreeLayout.connections;
    if (bgWatermark === preservationImg) return PreservationTreeLayout.connections;
    if (bgWatermark === eruditionImg) return EruditionTreeLayout.connections;
    return [];
  };

  const getLayoutPositions = () => {
    if (bgWatermark === nihilityImg) return NihilityTreeLayout.positions;
    if (bgWatermark === destructionImg) return DestructionTreeLayout.positions;
    if (bgWatermark === elationImg) return ElationTreeLayout.positions;
    if (bgWatermark === harmonyImg) return HarmonyTreeLayout.positions;
    if (bgWatermark === abundanceImg) return AbundanceTreeLayout.positions;
    if (bgWatermark === remembranceImg) return RemembranceTreeLayout.positions;
    if (bgWatermark === huntImg) return HuntTreeLayout.positions;
    if (bgWatermark === preservationImg) return PreservationTreeLayout.positions;
    if (bgWatermark === eruditionImg) return EruditionTreeLayout.positions;
    return {};
  };

  const positions = getLayoutPositions();
  const connections = getLayoutConnections();

  // Datos para el nodo seleccionado actualmente
  const currentMaxLevel = selectedNode
  ? getMaxLevel(selectedNode.level)
  : 1;

const currentLevel = selectedNodeId
  ? (nodeLevels[selectedNodeId] ?? 1)
  : 1;

const currentDescription = selectedNode
  ? typeof selectedNode.description === "function"
    ? selectedNode.description(currentLevel - 1)
    : selectedNode.description
  : "";

  return (
    <div className="hsr-traces-container">
      {/* Contenedor Canvas */}
      <div className="hsr-traces-canvas" style={{ transform: `scale(${scale})` }}>
        {bgWatermark && (
          <img src={bgWatermark} alt={path} className="hsr-traces-watermark" />
        )}

        {/* Anillos SVG */}
        <svg className="hsr-traces-svg-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="42" className="hsr-svg-orbit" />
          <circle cx="50" cy="50" r="38" className="hsr-svg-orbit" />

          {connections.map((conn, idx) => {
            const start = positions[conn.from];
            const end = positions[conn.to];
            if (!start || !end) return null;

            if (conn.arc) {
              const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
              return <path key={idx} d={d} className="hsr-svg-line" fill="none" />;
            }

            return (
              <line
                key={idx}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className="hsr-svg-line"
              />
            );
          })}
        </svg>

        {/* Layer de Nodos */}
        <div className="hsr-traces-nodes-layer">
          {Object.entries(positions).map(([id, pos]) => {
            const nodeData = nodes[id];
            if (!nodeData) return null;
            const isSelected = selectedNodeId === id;
            const maxLvl = getMaxLevel(nodeData.level);
            const activeLvl = nodeLevels[id] ?? 1;

            return (
              <div
                key={id}
                className={`hsr-trace-node-wrapper node-type-${nodeData.type} ${isSelected ? "selected" : ""}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onClick={() => setSelectedNodeId(id)}
              >
                {isSelected && <div className="hsr-node-arrow" />}
                <button className="hsr-trace-node-btn">
                  <img src={nodeData.icon} alt={nodeData.name} className="hsr-node-icon" />
                </button>
                {nodeData.level && (
                  <span className="hsr-node-level">
                    {activeLvl}/{maxLvl}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Flotante alineada a la derecha */}
      {selectedNode && (
        <aside className="hsr-trace-info-popover">
          <header className="hsr-info-header">
            <span className="hsr-info-badge">
              {selectedNode.type === "bonus"
                ? "Bonus Ability"
                : selectedNode.type === "stat"
                ? "Stat Bonus"
                : "Ability"}
            </span>
            <h3 className="hsr-info-title">{selectedNode.name}</h3>

            {/* ZONA INDICADA POR LA FLECHA: SLIDER DE NIVEL */}
            {selectedNode.level && currentMaxLevel > 1 ? (
              <div className="hsr-info-level-control">
                <div className="hsr-level-header">
                  <span className="hsr-info-level">Lv. {currentLevel}</span>
                  <span className="hsr-info-max-level">/ {currentMaxLevel}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={currentMaxLevel}
                  value={currentLevel}
                  onChange={(e) =>
                    handleSliderChange(selectedNode.id, parseInt(e.target.value, 10))
                  }
                  className="hsr-level-slider"
                />
              </div>
            ) : selectedNode.level ? (
              <span className="hsr-info-level">Lv. 1</span>
            ) : null}
          </header>

          <div className="hsr-info-divider" />
          <p
            className="hsr-info-desc"
            dangerouslySetInnerHTML={{ __html: currentDescription }}
          />
        </aside>
      )}
    </div>
  );
};