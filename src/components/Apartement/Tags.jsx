import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../assets/data/data.json';

const Tags = () => {
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
            <div className="tagsContainer">
                  {apt.tags?.map((tag, index) => { //récupère tous les tags de l'appartement
                        return (
                              <div className="tag" key={index}>
                                    <p key={index}>{tag}</p>
                              </div>
                        );
                  })}
            </div>
      );
};

export default Tags;
