import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const index = () => {
      return (
            <div>
                  <Navigation />
                  <div className="errorConatiner">
                        <h1 className="errorH1">404</h1>
                        <p className="errorP">Oups! La page que vous demandez n'existe pas.</p>
                        <a href="/" className="errorLink">
                              Retourner à la page d'accueil
                        </a>
                  </div>
                  <Footer />
            </div>
      );
};

export default index;
