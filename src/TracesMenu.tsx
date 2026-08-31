import React, { useEffect, useState } from "react";
import type { TraceNodeData } from "./types/hsr";
import { AbundanceTreeLayout, DestructionTreeLayout, ElationTreeLayout, HarmonyTreeLayout, NihilityTreeLayout, RemembranceTreeLayout } from "./types/hsr";
import "./TracesMenu.css";
import { abundanceImg, destructionImg, elationImg, harmonyImg, nihilityImg, remembranceImg } from "./assets/paths";

interface TracesMenuProps {
  path: string;
  nodes: Record<string, TraceNodeData>;
  bgWatermark?: string;
}

const useTraceScale = () => {
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const updateScale = () => {
      if (window.screen.width >= 2500 || window.innerWidth >= 2500) {
        setScale(1.75)
      } else {
        setScale(1.35)
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}

export const TracesMenu: React.FC<TracesMenuProps> = ({ path, nodes, bgWatermark }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const selectedNode = selectedNodeId ? nodes[selectedNodeId] : null;

  const scale = useTraceScale();

  return (
    <div className="hsr-traces-container">
      {/* Contenedor Cuadrado para Mantener la Forma Circular */}
      <div className="hsr-traces-canvas" style={{transform: `scale(${scale})`}}>
        {bgWatermark && (
          <img src={bgWatermark} alt={path} className="hsr-traces-watermark" />
        )}

        {/* Anillos SVG */}
        <svg className="hsr-traces-svg-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Anillos de fondo */}
        <circle cx="50" cy="50" r="42" className="hsr-svg-orbit" />
        <circle cx="50" cy="50" r="38" className="hsr-svg-orbit" />

        {/* Conexiones */}
        { bgWatermark === nihilityImg && (
            NihilityTreeLayout.connections.map((conn, idx) => {
                const start = NihilityTreeLayout.positions[conn.from];
                const end = NihilityTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}

        { bgWatermark === destructionImg && (
            DestructionTreeLayout.connections.map((conn, idx) => {
                const start = DestructionTreeLayout.positions[conn.from];
                const end = DestructionTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}

        { bgWatermark === elationImg && (
            ElationTreeLayout.connections.map((conn, idx) => {
                const start = ElationTreeLayout.positions[conn.from];
                const end = ElationTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}

        { bgWatermark === harmonyImg && (
            HarmonyTreeLayout.connections.map((conn, idx) => {
                const start = HarmonyTreeLayout.positions[conn.from];
                const end = HarmonyTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}

        { bgWatermark === abundanceImg && (
            AbundanceTreeLayout.connections.map((conn, idx) => {
                const start = AbundanceTreeLayout.positions[conn.from];
                const end = AbundanceTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}

        { bgWatermark === remembranceImg && (
            RemembranceTreeLayout.connections.map((conn, idx) => {
                const start = RemembranceTreeLayout.positions[conn.from];
                const end = RemembranceTreeLayout.positions[conn.to];
                if (!start || !end) return null;

                if (conn.arc) {
                const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
                    return (
                        <path
                        key={idx}
                        d={d}
                        className="hsr-svg-line"
                        fill="none"
                        />
                    );
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
            })
        )}
        
        </svg>

        {/* Nodos */}
        <div className="hsr-traces-nodes-layer">
            {bgWatermark === nihilityImg && (
                Object.entries(NihilityTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}

            {bgWatermark === destructionImg && (
                Object.entries(DestructionTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}

            {bgWatermark === elationImg && (
                Object.entries(ElationTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}

            {bgWatermark === harmonyImg && (
                Object.entries(HarmonyTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}

            {bgWatermark === abundanceImg && (
                Object.entries(AbundanceTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}

            {bgWatermark === remembranceImg && (
                Object.entries(RemembranceTreeLayout.positions).map(([id, pos]) => {
                    const nodeData = nodes[id];
                    if (!nodeData) return null;
                    const isSelected = selectedNodeId === id;

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
                        {nodeData.level && <span className="hsr-node-level">{nodeData.level}</span>}
                    </div>
                    );
                })
            )}
        </div>
      </div>

      {/* Info Flotante alineada a la derecha de la pantalla (Sin fondo opaco) */}
      {selectedNode && (
        <aside className="hsr-trace-info-popover">
          <header className="hsr-info-header">
            <span className="hsr-info-badge">
              {selectedNode.type === "bonus" ? "Bonus Ability" : selectedNode.type === "stat" ? "Stat Bonus" : "Ability"}
            </span>
            <h3 className="hsr-info-title">{selectedNode.name}</h3>
            {selectedNode.level && (
              <span className="hsr-info-level">Lv. {selectedNode.level.split('/')[0]}</span>
            )}
          </header>
          <p
            className="hsr-info-desc"
            dangerouslySetInnerHTML={{ __html: selectedNode.description }}
          />
        </aside>
      )}
    </div>
  );
};