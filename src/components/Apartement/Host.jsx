import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../assets/data/data.json';

const Host = () => {
      const { productId } = useParams();
      const [apt, setApt] = useState([]);

      useEffect(() => {
            getApartment();
      });

      function getApartment() {
            const apartment = data.find((apartment) => apartment.id === productId);
            setApt(apartment);
      }
      return (
            <div className="hostContainer">
                  <p>{apt.host?.name}</p>
                  <img src={apt.host?.picture} alt="propriétaire" />
            </div>
      );
};

export default Host;
