import React, { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ul className="menu">
      <li className={activeTab === "inicio" ? "active" : ""}>
        <a onClick={() => changeTab("inicio")} href="index">
          Inicio
        </a>
      </li>
      <li className={activeTab === "modelo3d" ? "active" : ""}>
        <a onClick={() => changeTab("modelo3d")} href="App">
          Modelo 3D
        </a>
      </li>
    </ul>
  );
};

export default Menu;
