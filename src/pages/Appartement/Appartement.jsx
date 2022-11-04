import React from 'react';
import Navigation from '../../components/Navigation';
import '../../style/index.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../assets/data/data.json';
import './appartement.css';
import Carrousel from '../../components/Apartement/Carrousel';
import Tags from '../../components/Apartement/Tags';
import Host from '../../components/Apartement/Host';
import Rating from '../../components/Apartement/Rating';

const Appartement = () => {
      // Pourquoi entre accolades ?
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
            <div>
                  <Navigation />
                  <main>
                        <Carrousel />
                        <div className="mainBody">
                              <div className="info">
                                    <h1>{apt.title}</h1>
                                    <p>{apt.location}</p>
                                    <Tags />
                              </div>
                              <div className="info">
                                    <Host />
                                    <Rating />
                              </div>
                        </div>
                  </main>
            </div>
      );
};

export default Appartement;
