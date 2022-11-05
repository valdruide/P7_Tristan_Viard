import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import '../../style/index.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../assets/data/data.json';
import './appartement.css';
import Carrousel from '../../components/Apartement/Carrousel';
import Tags from '../../components/Apartement/Tags';
import Host from '../../components/Apartement/Host';
import Rating from '../../components/Apartement/Rating';
import Dropdown from '../../components/About/Dropdown';

const Appartement = () => {
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
                                    <div className="host__rate">
                                          <Host />
                                          <Rating />
                                    </div>
                              </div>
                        </div>
                        <div className="dropBody">
                              <Dropdown title="Description" content={apt.description} />
                              <Dropdown
                                    title="Équipements"
                                    content={
                                          <>
                                                {apt.equipments?.map((equip, index) => (
                                                      <span key={index} className="equip">
                                                            {equip}
                                                      </span>
                                                ))}
                                          </>
                                    }
                              />
                        </div>
                  </main>
                  <Footer />
            </div>
      );
};

export default Appartement;
