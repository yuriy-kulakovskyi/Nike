import React from 'react';
import './New.css';
import nikeAir from './img/nikeAir.webp';
import nikeRed from './img/nikeRed.webp';

class New extends React.Component {
  render() {
    return (
      <div className="newGoods">
        <div className="newGoods__wrap container">
          <div className="newGoods__wrap__good">
            <div className="newGoods__wrap__good__content">
              <h1 className="newGoods__wrap__good__content__heading">new</h1>
              <p className="newGoods__wrap__good__content__paragraph">AIR JORDAN 1 MID <br /> LIGHT SMOKE GREY</p>
              <div className="newGoods__wrap__good__content__arrow-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                  <path d="M14.9277 13.9952C14.5573 13.8866 14.2778 13.6584 14.0893 13.3105C13.9015 12.9622 13.8532 12.6005 13.9444 12.2254L15.2327 6.92771L2.36516 14.3568C2.03818 14.5455 1.69689 14.5878 1.3413 14.4836C0.986934 14.3798 0.710866 14.1566 0.513091 13.814C0.315316 13.4715 0.259821 13.1204 0.346605 12.7608C0.434624 12.4015 0.642122 12.1275 0.969098 11.9387L13.8366 4.50966L8.55822 2.96286C8.1878 2.85431 7.9065 2.6336 7.71431 2.30071C7.52259 1.96863 7.47232 1.61506 7.56352 1.24C7.65473 0.864944 7.8592 0.585689 8.17694 0.402239C8.49392 0.219233 8.83761 0.182003 9.20803 0.290551L17.6812 2.77358C17.8664 2.82785 18.024 2.91152 18.1539 3.02459C18.283 3.1381 18.3941 3.27546 18.4872 3.43666C18.5803 3.59787 18.6437 3.76276 18.6774 3.93136C18.7104 4.10039 18.7041 4.27868 18.6585 4.46621L16.5608 13.0926C16.4772 13.4364 16.2769 13.6998 15.96 13.8828C15.6422 14.0663 15.2981 14.1037 14.9277 13.9952Z" fill="black" />
                </svg>
              </div>
            </div>
            <img src={nikeAir} alt="Nike Air" className="newGoods__wrap__good__image nikeAir" />
          </div>
          <div className="newGoods__wrap__good">
            <div className="newGoods__wrap__good__content">
              <h1 className="newGoods__wrap__good__content__heading">new</h1>
              <p className="newGoods__wrap__good__content__paragraph">Air Max 200 SE</p>
              <div className="newGoods__wrap__good__content__arrow-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                  <path d="M14.9277 13.9952C14.5573 13.8866 14.2778 13.6584 14.0893 13.3105C13.9015 12.9622 13.8532 12.6005 13.9444 12.2254L15.2327 6.92771L2.36516 14.3568C2.03818 14.5455 1.69689 14.5878 1.3413 14.4836C0.986934 14.3798 0.710866 14.1566 0.513091 13.814C0.315316 13.4715 0.259821 13.1204 0.346605 12.7608C0.434624 12.4015 0.642122 12.1275 0.969098 11.9387L13.8366 4.50966L8.55822 2.96286C8.1878 2.85431 7.9065 2.6336 7.71431 2.30071C7.52259 1.96863 7.47232 1.61506 7.56352 1.24C7.65473 0.864944 7.8592 0.585689 8.17694 0.402239C8.49392 0.219233 8.83761 0.182003 9.20803 0.290551L17.6812 2.77358C17.8664 2.82785 18.024 2.91152 18.1539 3.02459C18.283 3.1381 18.3941 3.27546 18.4872 3.43666C18.5803 3.59787 18.6437 3.76276 18.6774 3.93136C18.7104 4.10039 18.7041 4.27868 18.6585 4.46621L16.5608 13.0926C16.4772 13.4364 16.2769 13.6998 15.96 13.8828C15.6422 14.0663 15.2981 14.1037 14.9277 13.9952Z" fill="black" />
                </svg>
              </div>
            </div>
            <img src={nikeRed} alt="Nike Red" className="newGoods__wrap__good__image nikeRed" />
          </div>
        </div>
      </div>
    );
  }
}

export default New;