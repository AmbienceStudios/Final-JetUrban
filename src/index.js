import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Allocations from './components/Allocations';
import Artwork from './components/Artwork';
import CollectionStory from './components/CollectionStory';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import RoadMap from './components/RoadMap';
import Utilities from './components/Utilities'







ReactDOM.createRoot(document.getElementById('root')).render(
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

    <section id="p-collection" className='section-col'>
    <CollectionStory/>
    </section>

    <section id="p-ut" className='section-ut'>
    <Utilities/>
    </section>

    <section id="p-art" className='section-artwork'>
    <Artwork/>
    </section>

    <section id="p-all"className='section-all'>
    <Allocations/>
    </section>

    <section id="p-roadmap" className='section-roadmap'>
    <RoadMap/>
    </section>

    <section className='section-footer'>
    <Footer/>
    </section>



  </React.StrictMode>
);



