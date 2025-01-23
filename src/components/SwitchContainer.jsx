import React from "react";

export default function SwitchContainer({ checked, onToggle }) {
  return (
    <div className="switch-container">
      <p className={`label ${!checked ? "active" : ""}`}>Monthly</p>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className="switch"
        onClick={onToggle}
      >
        <span
          className={`switch-thumb ${checked ? "switch-thumb-checked" : ""}`}
        ></span>
      </button>
      <p className={`label ${checked ? "active" : ""}`}>Annually</p>
    </div>
  );
}
