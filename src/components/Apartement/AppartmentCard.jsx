import React from 'react';
import { useState } from 'react';
import '../../style/components/card.css';

function ApartmentCard(props) {
      const [isActive, setActive] = useState(true);
      return (
            <article className="article">
                  <img className="articleImg" src={props.cover} alt={"Appartement " + props.location} />
                  <div className="articleTitle" onClick={() => setActive(!isActive)}>
                        {props.title}
                  </div>
            </article>
      );
}

export default ApartmentCard;
