import React from "react";

function Menu (){

    return (
        <div className="checkbox-container">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="toggle" />
                <label className="checkbox">
                    <div className="trace"></div>
                    <div className="trace"></div>
                    <div className="trace"></div>
                </label>
                <div className="menu"></div>
                <nav className="menu-items">
                    <ul>
                        <li>
                            <a id="sobre" href="#sobremin">Sobre mim</a>
                        </li>
                        <li>
                            <a id="projects" href="#myProjects">Meu Projeto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
