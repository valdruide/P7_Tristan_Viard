import React from 'react';
import data from '../../assets/data/data.json';
import ApartmentCard from '../Apartement/AppartmentCard';
import { Link } from 'react-router-dom';

const card = () => {
      return (
            <div>
                  <main>
                        <div className="cardContainer" id="cardContainer">
                              {data.map((apartment) => {
                                    //récupère tous les appartements dans le JSON
                                    return (
                                          <Link to={`/apartment/${apartment.id}`} key={apartment.id} className="linkCard">
                                                <ApartmentCard {...apartment} />
                                          </Link>
                                    );
                              })}
                        </div>
                  </main>
            </div>
      );
};

export default card;
