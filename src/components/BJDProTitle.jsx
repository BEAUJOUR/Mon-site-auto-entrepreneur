// src/components/BJDProTitle.jsx
import React from "react";

export default function BJDProTitle() {
  return (
    <div className="leading-none select-none">
      <h1
        className="font-[Orbitron] uppercase tracking-wider 
                   text-[clamp(1rem,2.5vw,1.4rem)] font-semibold"
      >
        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          BJD - HOME
        </span>
        <span className="ml-1 text-text-dark">- PRO</span>
      </h1>
    </div>
  );
}
