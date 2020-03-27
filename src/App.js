import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function App() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="App">
      <AutoplaySlider
        bullets={false}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        style={{ height: '100vh' }}
      >
        <img data-src="/assets/1.jpg" alt="Cayci 1" />
        <img data-src="/assets/2.jpg" alt="Caycl 2" />
        <img data-src="/assets/3.jpg" alt="Caycl 3" />
        <img data-src="/assets/4.jpg" alt="Caycl 4" />
        <img data-src="/assets/5.jpg" alt="Caycl 5" />
        <img data-src="/assets/6.jpg" alt="Caycl 6" />
        <img data-src="/assets/7.jpg" alt="Caycl 7" />
        <img data-src="/assets/8.jpg" alt="Caycl 8" />
        <img data-src="/assets/9.jpg" alt="Caycl 9" />
        <img data-src="/assets/10.jpg" alt="Caycl 10" />
      </AutoplaySlider>
      <ul className="app__social">
        <a href="https://www.facebook.com/akbarteaazerbaijan/" rel="noopener noreferrer" target="_blank">
          <img className="app__social-icons" src="/assets/fb.svg" alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/akbarteaaze/" rel="noopener noreferrer" target="_blank">
          <img className="app__social-icons" src="/assets/insta.svg" alt="instagram icon" />
        </a>
        <a href="https://vm.tiktok.com/GNn2mp/" rel="noopener noreferrer" target="_blank">
          <img className="app__social-icons" src="/assets/tiktalk.svg" alt="tiktalk icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCpRSrnSDTNEKQxa3xcnGfAg" rel="noopener noreferrer" target="_blank">
          <img className="app__social-icons" src="/assets/youtube.svg" alt="youtube icon" />
        </a>
      </ul>
    </div>
  );
}

export default App;
