import React from "react";

// Al declarar el siguiente Prop, podria haber utilizado interface
// interface ModalProps {
//   ...
// }
// Tecnicamente es igual y te daria el mismo resultado, pero type es mejor en este caso:
// Type solo existe en typescript
//
// Cuando se hace el build (typescript -> javascript) los tipos desaparecen, es decir
// los tipos son para declarar algo debe seguir una cierta estructura cuando estas desarrollando.
//
// Interface es para cuando quieres que no solo tenga la estructura, sino una serie de funcionalidades (metodos se le llaman; son funciones que solo se pueden ejecutar para una clase en especifico)
// Son intercambiables y dan el mismo pego, typescript los trata igual, debe cumplirse la estructura.
// Favorece los tipos cuando no quieras que tengan funciones.
// Te recomendaria que miraras al respecto de interfaces y tipos por tu banda, hay mas cosas.
type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Modal generico reutilizable: Lo he sacado de App.tsx ya que es muy posible que quireas
// que haya otro lugar de la app con modales, entonces ya no tienes que escribir todo de nuevo
// Solo tienes que importarlo y ya.
//
// El contenido concreto de cada modal (buscador, filtros, grid...) se pasa como children.
export const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => (
  <div className="hsr-modal-backdrop" onClick={onClose}>
    <div className="hsr-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="hsr-modal-header">
        <h2>{title}</h2>
        <button className="hsr-modal-close" onClick={onClose}>✕</button>
      </div>
      {children}
    </div>
  </div>
);
