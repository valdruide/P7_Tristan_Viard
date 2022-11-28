import React from 'react';
import downArrow from '../../assets/imgs/ArrowDown.svg';
import upArrow from '../../assets/imgs/ArrowUp.svg';
import { useState } from 'react';

const Dropdown = ({ title, content }) => {
      const [isOpen, setIsOpen] = useState(false);
      return isOpen ? ( //vérifie si il est ouvert ou non, si c'est le cas, afficher le texte
            <div className="mainDrop">
                  <div onClick={() => setIsOpen(false)} className="dropContainer">
                        <h2>{title}</h2>
                        <img src={upArrow} alt="flèche - fermer le menu" className="downArrow" />
                  </div>
                  <div className="contentContainer">
                        <p>{content}</p>
                  </div>
            </div>
      ) : (
            <div className="mainDrop">
                  <div onClick={() => setIsOpen(true)} className="dropContainer">
                        <h2>{title}</h2>
                        <img src={downArrow} alt="flèche - ouvrir le menu" className="downArrow" />
                  </div>
            </div>
      );
};

export default Dropdown;
