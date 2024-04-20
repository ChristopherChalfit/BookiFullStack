import { NavLink } from "react-router-dom";
import "./Header.sass";
import { useState } from "react";
import Modal from "../loginOrRegister/Modal";
export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const showLogin = ()=> {
        if(!showModal){
            setShowModal(!showModal);
            Modal();
        }
    }
  return (
    <header>
      <div className="navbar" onClick={showLogin}>
        <div className="nav-img">
          <NavLink to="/">
            <img src="/logo/Booki.png" alt="logo de la marque" />
          </NavLink>
        </div>
        <ul>
          <li>
          <NavLink to="#hebergement" className="nav-items">
              Hébergements
            </NavLink>
          </li>
          <li>
          <NavLink to="#activite"className="nav-items">
              Activités
            </NavLink>
          </li>
          <li>
          <NavLink to='' className="nav-items" onClick={() => setShowModal(!showModal)}>
              Utilisateur
            </NavLink>
          </li>
        </ul>
      </div> {showModal ? <Modal /> : null}
    </header>
   
  );
}
