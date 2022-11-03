import React from 'react';
import downArrow from '../../assets/imgs/ArrowDown.svg';
import upArrow from '../../assets/imgs/ArrowUp.svg';
import { useState } from 'react';

const Dropdown = ({ title, content }) => {
      const [isOpen, setIsOpen] = useState(false);
      return isOpen ? (
            <div>
                  <div onClick={() => setIsOpen(false)} className="dropContainer">
                        <h1>{title}</h1>
                        <img src={upArrow} alt="flèche - ouvrir le menu" className="downArrow" />
                  </div>
                  <div className="contentContainer">
                        <p>{content}</p>
                  </div>
            </div>
      ) : (
            <div>
                  <div onClick={() => setIsOpen(true)} className="dropContainer">
                        <h1>{title}</h1>
                        <img src={downArrow} alt="flèche - ouvrir le menu" className="downArrow" />
                  </div>
            </div>
      );
};

export default Dropdown;
