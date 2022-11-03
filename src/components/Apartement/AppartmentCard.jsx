import React from 'react';
import '../../pages/Home/card.css';

function ApartmentCard(props) {
      return (
            <article className="article">
                  <img className="articleImg" src={props.cover} alt={'Appartement ' + props.location} />
                  <div className="articleTitle">{props.title}</div>
            </article>
      );
}

export default ApartmentCard;
