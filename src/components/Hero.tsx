import * as React from 'react';
import HeroButton from './header/HeroButton';

const Hero: React.FC = () => (
  <div
    id="hero"
    className="Hero"
    style={{
      backgroundImage:
        'url(http://www.maximumwall.com/wp-content/uploads/2016/11/fond-ecran-wallpaper-image-narcos-19.jpg)',
    }}
  >
    <div className="content">
      <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
      <h2>Season 2 now available</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero
        debitis, magnam quis quod.
      </p>
      <div className="button-wrapper">
        <HeroButton primary={true} text="Watch now" />
        <HeroButton primary={false} text="+ My list" />
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default Hero;
