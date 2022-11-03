import React from 'react';
import Footer from '../../components/Footer';
import Banner from '../../components/Home/Banner';
import Card from '../../components/Home/Card';
import Navigation from '../../components/Navigation';

const Home = () => {
      return (
            <div>
                  <Navigation />
                  <Banner />
                  <Card />
                  <Footer />
            </div>
      );
};

export default Home;
