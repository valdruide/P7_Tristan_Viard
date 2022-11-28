import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NextArrow from '../../assets/imgs/NextArrow.svg';
import PrevArrow from '../../assets/imgs/PrevArrow.svg';
import data from '../../assets/data/data.json';

const Carrousel = () => {
      const { productId } = useParams();
      const [apt, setApt] = useState([]);
      const [current, setCurrent] = useState(0);

      const nextSlide = (length) => {
            setCurrent(current === length - 1 ? 0 : current + 1); //Si on est sur la dernière image (length -1), on repasse sur la premiere (0)
      };
      const prevSlide = (length) => {
            setCurrent(current === 0 ? length - 1 : current - 1); //si on est sur la première image (0), on va a la dernière (length -1)
      };

      useEffect(() => {
            getApartment();
      });

      function getApartment() {
            const apartment = data.find((apartment) => apartment.id === productId);
            setApt(apartment);
      }

      return (
            <div className="carrouselContainer">
                  {apt.pictures?.length > 1 ? ( //vérifie si il y a plus d'une image
                        <>
                              <img src={PrevArrow} alt="flèche précédente" className="prevArrow" onClick={() => prevSlide(apt.pictures.length)} />
                              <img src={NextArrow} alt="flèche suivante" className="nextArrow" onClick={() => nextSlide(apt.pictures.length)} />
                        </>
                  ) : (
                        ''
                  )}
                  {apt.pictures?.map((imgSrc, index) => { //carrousel
                        return (
                              <div className={index === current ? 'image active' : 'image'} key={index}> 
                                    {index === current && <img key={index} alt="logement" src={imgSrc} className="mainImg" />}
                              </div>
                        );
                  })}
                  <p className="imgNumber"> 
                        {`${current + 1}`}/{`${apt.pictures?.length}`}
                  </p>
            </div>
      );
};

export default Carrousel;
