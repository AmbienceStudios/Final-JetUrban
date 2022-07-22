import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Allocations from './components/Allocations';
import Artwork from './components/Artwork';
import CollectionStory from './components/CollectionStory';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import RoadMap from './components/RoadMap';
import Utilities from './components/Utilities'






import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <section className='section-nav'>
    <NavBar/>
    </section>

    <section className='section'>
    <App />
    </section>

    <section className='section'>
    <Header/>
    </section>

    <section className='section'>
    <CollectionStory/>
    </section>

    <section className='section-ut'>
    <Utilities/>
    </section>

    <section className='section-artwork'>
    <Artwork/>
    </section>

    <section className='section-all'>
    <Allocations/>
    </section>

    <section className='section-roadmap'>
    <RoadMap/>
    </section>

    <section className='section-footer'>
    <Footer/>
    </section>



  </React.StrictMode>
);


reportWebVitals();
