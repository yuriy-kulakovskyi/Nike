import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() { 
    return ( 
      <header className="header">
        <div className="header__wrap container">
          <svg className='header__wrap__burger-btn' xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
            <path d="M1 1H18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1 8H25" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1 15H18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <nav className="header__wrap__nav-links">
            <ul>
              <li>
                <a href="#">
                  woman 
                  <div className="underline"></div>
                </a>
              </li>
              <li>
                <a href="#">
                  men
                  <div className="underline"></div>
                </a>
              </li>
              <li>
                <a href="#" className='active'>
                  all
                  <div className="underline"></div>
                </a>
              </li>
            </ul>
          </nav>

          <h4 className="header__wrap__logo"><span className="grey">your</span>SNEAKER</h4>

          <div className="header__wrap__account-buttons">
            <div className="header__wrap__account-buttons__button login">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 31" fill="none">
                <path d="M25 21.1371V21.1409V23.1039C25 24.5492 23.9875 26.0018 21.8304 27.148C19.6942 28.283 16.6157 29 13 29C9.38456 29 6.30595 28.2822 4.16959 27.1471C2.01185 26.0006 1.00002 24.5487 1.00002 23.1075L1.00003 21.1409L1.00001 21.1371C0.999057 20.8845 1.04894 20.6338 1.14738 20.3989C1.24584 20.164 1.39122 19.949 1.5763 19.7668C1.76142 19.5845 1.98261 19.4385 2.22777 19.3384C2.47253 19.2384 2.73573 19.1862 3.00217 19.1854H23.0004C23.2666 19.1865 23.5295 19.2389 23.774 19.3391C24.0188 19.4394 24.2397 19.5853 24.4246 19.7676C24.6094 19.9498 24.7545 20.1647 24.8529 20.3995C24.9511 20.6342 25.0009 20.8847 25 21.1371ZM26 21.1409V23.1039C26 27.0482 20.4657 30 13 30C5.5343 30 2.06702e-05 27.0445 2.06702e-05 23.1075V21.1409H26ZM19.4286 7.26947C19.4292 8.09039 19.2646 8.9039 18.9437 9.66377C18.6228 10.4237 18.1515 11.1157 17.5556 11.6998C16.9597 12.2839 16.251 12.7485 15.4693 13.0661C14.6875 13.3837 13.8488 13.5477 13.0011 13.5483C12.1535 13.5489 11.3145 13.3861 10.5322 13.0697C9.75003 12.7532 9.04054 12.2897 8.44374 11.7064C7.84699 11.1232 7.37461 10.4319 7.05252 9.67245C6.73044 8.91304 6.56464 8.09976 6.56401 7.27885C6.56274 5.62186 7.23386 4.02779 8.43693 2.84855C9.64073 1.66859 11.2786 1.00126 12.9914 1C14.7043 0.998745 16.3432 1.66368 17.5488 2.84189C18.7537 4.01939 19.4273 5.61248 19.4286 7.26947Z" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <div className="header__wrap__account-buttons__button search">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M19.4785 19.4785L26.0002 26.0002" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.326 21.6521C17.0289 21.6521 21.652 17.029 21.652 11.326C21.652 5.62313 17.0289 1 11.326 1C5.6231 1 1 5.62313 1 11.326C1 17.029 5.6231 21.6521 11.326 21.6521Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="header__wrap__account-buttons__button cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M5.16667 1L1 6V23.5C1 24.163 1.29266 24.7989 1.81359 25.2678C2.33453 25.7366 3.04107 26 3.77778 26H23.2222C23.9589 26 24.6655 25.7366 25.1864 25.2678C25.7073 24.7989 26 24.163 26 23.5V6L21.8333 1H5.16667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 6.12695H26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.125 11.2539C19.125 12.614 18.5324 13.9184 17.4775 14.8801C16.4226 15.8418 14.9918 16.3821 13.5 16.3821C12.0082 16.3821 10.5774 15.8418 9.52252 14.8801C8.46763 13.9184 7.875 12.614 7.875 11.2539" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
 
export default Header;