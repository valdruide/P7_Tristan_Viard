import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../assets/data/data.json';
import gStar from '../../assets/imgs/grayStar.svg';
import rStar from '../../assets/imgs/redStar.svg';

const Rating = () => {
      const { productId } = useParams();
      const [apt, setApt] = useState([]);
      let stars = [];
      let rating = apt.rating;
      const maxRate = 5;

      useEffect(() => {
            getApartment();
      });

      function getApartment() {
            const apartment = data.find((apartment) => apartment.id === productId);
            setApt(apartment);
      }

      // Ajoute 5 étoiles rouges jusqu'au nombre d'étoile dans rating ex: 3
      for (let i = 0; i < rating; i++) stars.push(rStar);

      // Ajoute le reste en gris en faisant maxRate(5) - le nombre d'étoile rouge déjà mise (3) --> 2 étoiles grises
      for (let i = 0; i < maxRate - rating; i++) stars.push(gStar);

      return (
            <div className="stars">
                  {stars.map((star, index) => (
                        <img src={star} alt="étoile" key={index} />
                  ))}
            </div>
      );
};

export default Rating;
