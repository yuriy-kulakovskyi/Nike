import React from 'react';
import './Home.css';
import mobileBackground from './img/mobileBackground.webp';

class Home extends React.Component {
  render() { 
    return ( 
      <section className="home">
        <div className="home__mobile">
          <img className='home__mobile__background' src={mobileBackground} alt="Background for mobile version" />
          <div className="home__mobile__content">
            <h1 className="home__mobile__content__title">we are never done</h1>
            <p className="home__mobile__content__subtitle">
              Celebrating 50 years of Nike from May 16th! <br /> Exclusive products, experiences and much <br /> more await you for five days. Scan and join <br /> the Nike app!
            </p>
            <button className="home__wrap__content__button">Celebrate with us</button>
          </div>
        </div>
        <div className="home__wrap container">
          <div className="home__wrap__content">
            <h1 className="home__wrap__content__title">we are never done</h1>
            <p className="home__wrap__content__subtitle">
              Celebrating 50 years of Nike from May 16th! <br /> Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
            </p>
            <button className="home__wrap__content__button">Celebrate with us</button>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Home;