import React from 'react';
import { useState } from 'react';
import '../../style/components/card.css';

function ApartmentCard(props) {
      const [isActive, setActive] = useState(true);
      return (
            <article className="article">
                  <img className="articleImg" src={props.cover} alt="" />
                  <div className="articleTitle" onClick={() => setActive(!isActive)}>
                        {props.title}
                  </div>
                  {/* <div className={isActive ? "text" : "hide"}>text</div> */}
                  {/*       <div className={`btn-group pull-right ${showBulkActions ? 'shown' : 'hidden'}`}></div>
                   */}{' '}
            </article>
      );
}

export default ApartmentCard;
