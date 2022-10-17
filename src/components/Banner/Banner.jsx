import React from 'react';
import './Banner.css';

class Banner extends React.Component {
  render() { 
    return ( 
      <section className="banner">
        <div className="banner__images">
          <div className="banner__images__image justDoIt"></div>
          <div className="banner__images__image bluredImg">
            <svg width="370" height="132" viewBox="0 0 370 132" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M370 0L99.3121 116.834C76.8652 126.461 58.0105 131.29 42.7633 131.29C25.4965 131.29 12.9626 125.164 5.19259 112.896C0.305466 105.02 -1.1283 95.0335 0.875887 82.9218C2.88007 70.8102 8.21428 57.9171 16.8477 44.1958C24.0473 33.1 35.8412 18.5191 52.26 0.43758C46.6909 9.32466 42.6071 19.0826 40.1733 29.318C35.8566 47.9934 39.7416 61.6991 51.8284 70.4507C57.5788 74.5296 65.4876 76.5769 75.5702 76.5769C83.6178 76.5769 92.6829 75.2642 102.765 72.6387L370 0Z" fill="white"/>
            </svg>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Banner;