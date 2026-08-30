import { useState, useEffect } from "react";
import type { Character, LightCone } from "./types/hsr";
import { Characters } from "./items/characters/CharactersList";
import { LightCones } from "./items/lightCones/LightConesList";
import "./App.css";
import { TracesMenu } from "./TracesMenu";
import { nihilityImg, destructionImg } from "./assets/paths";
import { Paths } from "./items/item/ResourcesLists";

const useTraceScale = () => {
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const updateScale = () => {
      if (window.screen.width >= 2500 || window.innerWidth >= 2500) {
        setScale(1.35)
      } else {
        setScale(1.0)
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}


export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedLightCone, setSelectedLightCone] = useState<LightCone | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "skill" | "traces" | "eidolons">("details");

  // Estados para el Cono de Luz
  const [superimposition, setSuperimposition] = useState<number>(1);
  const [showPassivePopover, setShowPassivePopover] = useState<boolean>(false);

  const availableLightCones = selectedCharacter
    ? LightCones.filter(lc => lc.path === selectedCharacter.path)
    : [];

  const scale = useTraceScale();

  return (
    <div className="hsr-container">
      {/* Columna Izquierda */}
      <aside className="hsr-left-panel" style={{transform: `scale(${scale})`}}>
        <div className="hsr-header">
          <h1 className="hsr-title">
            {selectedCharacter?.name ?? "Select Character"}
          </h1>
          <div className="hsr-rarity">★★★★★</div>
        </div>

        <nav className="hsr-menu">
          <button 
            className={`hsr-menu-item ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button 
            className={`hsr-menu-item ${activeTab === "skill" ? "active" : ""}`}
            disabled={!selectedCharacter}
            onClick={() => setActiveTab("skill")}
          >
            Skill
          </button>
          <button 
            className={`hsr-menu-item ${activeTab === "traces" ? "active" : ""}`}
            disabled={!selectedCharacter}
            onClick={() => setActiveTab("traces")}
          >
            Traces
          </button>
          <button 
            className={`hsr-menu-item ${activeTab === "eidolons" ? "active" : ""}`}
            disabled={!selectedCharacter}
            onClick={() => setActiveTab("eidolons")}
          >
            Eidolons
          </button>
        </nav>
      </aside>

      {/* Columna Central */}
      <main className="hsr-center-art">
        {activeTab === "details" && (
          selectedCharacter?.image ? (
          <img src={selectedCharacter.image} alt={selectedCharacter.name} className="hsr-character-img" />
        ) : (
          <div className="hsr-art-placeholder">Character Art</div>
        )
        )}

        {activeTab === "traces" && selectedCharacter && (
          <TracesMenu
            path={selectedCharacter?.path!}
            nodes={selectedCharacter?.traces!}
            bgWatermark={
              {
                [Paths.Nihility]: nihilityImg,
                [Paths.Destruction]: destructionImg,
                [Paths.Abundance]: "",
                [Paths.Elation]: "",
                [Paths.Erudition]: "",
                [Paths.Hunt]: "",
                [Paths.Preservation]: "",
                [Paths.Harmony]: "",
                [Paths.Remembrance]: ""
              } [selectedCharacter.path]
              
            }
          />
        )}
      </main>

      {/* Columna Derecha */}
      {activeTab === "details"  && (
        <aside className="hsr-right-panel" style={{transform: `scale(${scale})`}}>
        {/* Selectores */}
        <div className="hsr-card hsr-selectors">
          <label className="hsr-label">Character</label>
          <select
            className="hsr-select"
            value={selectedCharacter?.name ?? ""}
            onChange={(e) => {
              const char = Characters.find(c => c.name === e.target.value);
              setSelectedCharacter(char ?? null);
              setSelectedLightCone(null);
            }}
          >
            <option value="" disabled>Choose Character</option>
            {Characters.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>

          <label className="hsr-label">Light Cone</label>
          <select
            className="hsr-select"
            value={selectedLightCone?.name ?? ""}
            disabled={!selectedCharacter}
            onChange={(e) => {
              const lc = availableLightCones.find(l => l.name === e.target.value);
              setSelectedLightCone(lc ?? null);
            }}
          >
            <option value="" disabled>Choose Light Cone</option>
            {availableLightCones.map(lc => (
              <option key={lc.name} value={lc.name}>{lc.name}</option>
            ))}
          </select>
        </div>

        {/* Stats del Personaje */}
        <div className="hsr-card hsr-stats">
          <div className="hsr-stats-header">
            <span>Stats</span>
            <span className="hsr-level">Lv. 80</span>
          </div>
          
          <ul className="hsr-stats-list">
            <li><span>ATK</span><strong>{selectedCharacter?.baseATK ?? "--"}</strong></li>
            <li><span>DEF</span><strong>{selectedCharacter?.baseDEF ?? "--"}</strong></li>
            <li><span>HP</span><strong>{selectedCharacter?.baseHP ?? "--"}</strong></li>
            <li><span>SPD</span><strong>{selectedCharacter?.baseSPD ?? "--"}</strong></li>
            <li><span>Aggro</span><strong>{selectedCharacter?.aggro ?? "--"}</strong></li>
          </ul>

          <div className="hsr-details-grid">
            <div><span>Element</span><strong>{selectedCharacter?.element ?? "--"}</strong></div>
            <div><span>Path</span><strong>{selectedCharacter?.path ?? "--"}</strong></div>
          </div>
        </div>

        {/* Panel del Cono de Luz (Light Cone) */}
        <div className="hsr-card hsr-lc-card">
          {/* Parte superior: Nombre e Imagen */}
          <div className="hsr-lc-header">
            <div className="hsr-lc-info">
              <span className="hsr-lc-title">Light Cone</span>
              <h3 className="hsr-lc-name">{selectedLightCone?.name ?? "No Light Cone"}</h3>
            </div>
            {selectedLightCone?.image ? (
              <img src={selectedLightCone.image} alt={selectedLightCone.name} className="hsr-lc-thumb" />
            ) : (
              <div className="hsr-lc-thumb-placeholder" />
            )}
          </div>

          <hr className="hsr-divider" />

          {/* Parte inferior: Stats y Path del Cono */}
          <div className="hsr-stats-header">
            <span>Cone Stats</span>
            <span className="hsr-level">Lv. 80</span>
          </div>

          <ul className="hsr-stats-list">
            <li><span>HP</span><strong>{selectedLightCone?.baseHP ?? "--"}</strong></li>
            <li><span>ATK</span><strong>{selectedLightCone?.baseATK ?? "--"}</strong></li>
            <li><span>DEF</span><strong>{selectedLightCone?.baseDEF ?? "--"}</strong></li>
          </ul>

          <div className="hsr-details-grid">
            <div><span>Path</span><strong>{selectedLightCone?.path ?? "--"}</strong></div>
          </div>

          {/* Botón y desplegable flotante de Habilidad Pasiva */}
          <div className="hsr-passive-wrapper">
            <button
              className="hsr-btn-passive"
              disabled={!selectedLightCone}
              onClick={() => setShowPassivePopover(!showPassivePopover)}
            >
              Passive Ability {showPassivePopover ? "▲" : "▼"}
            </button>

            {showPassivePopover && selectedLightCone && (
              <div className="hsr-popover">
                <div className="hsr-popover-header">
                  <span>Superimposition</span>
                  <select
                    className="hsr-select-super"
                    value={superimposition}
                    onChange={(e) => setSuperimposition(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(rank => (
                      <option key={rank} value={rank}>S{rank}</option>
                    ))}
                  </select>
                </div>
                <p 
                  className="hsr-popover-desc"
                  dangerouslySetInnerHTML={{ __html: selectedLightCone.description(superimposition) ?? "No description available for this Light Cone."}}
                />
              </div>
            )}
          </div>
        </div>
      </aside>
      )}
    </div>
  );
}