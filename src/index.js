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

      <div className='musicplayer'>
        <div className='nowPlaying'> 
        <span>Now Playing</span>
        </div>
        <div className='player'>
          <div className='song-cover'>


          </div>

          <div className='song-meta'>
        <span>KIMET</span> <br/>
        <span>Urban Warriors Anthem</span>
        </div>
        </div>
 
      </div>


    <section className='section-nav'>
    <NavBar/>
    </section>

    <section className='section'>
    <App />
    </section>

    <div id="control-settings">
      <p>
        <br/>
        <div class="desktop">Left Click = Rotate -- Right Click = Pan -- Scroll Wheel = Zoom  </div>
        <div class="mobile">1-Finger Touch = Rotate <br/> 2-Finger Touch = Pan  <br/> 2-Finger Pinch = Zoom </div>
      </p>

    </div>

    <section id="p-collection" className='section'>
    <Header/>
    </section>

    <section className='section-col'>
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



