import React from 'react';
import Navigation from '../components/Navigation';
import '../style/index.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../assets/data/data.json';

const Appartement = () => {
      // Pourquoi entre accolades ?
      const { productId } = useParams();
      const [apt, setApt] = useState([]);

      useEffect(() => {
            getApartment();
      }, []);

      function getApartment() {
            const apartment = data.find((apartment) => apartment.id === productId);
            setApt(apartment);
      }

      return (
            <div>
                  <Navigation />
                  <h1>{apt.title}</h1>
                  <p>{apt.description}</p>
            </div>
      );
};

export default Appartement;
