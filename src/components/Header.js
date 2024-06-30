import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

   // ローカルストレージから状態を取得しないように初期設定を変更
   useEffect(() => {
    // ページの初回起動時にはハンバーガーメニューは非表示にする
    setIsActive(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive));
  }, [isActive]);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="sns">
          <a href="#">X</a>
        </div>
        <h1 className="header__title header-title">
          <Link to="/dynamicSite" onClick={handleLinkClick}>Site</Link>
        </h1>
        
        <nav className={`header__nav nav ${isActive ? 'active' : ''}`} id="js-nav">
          <ul className="nav__items nav-items">
            <li className="nav-items__item">
              <Link to="/dynamicSite" onClick={handleLinkClick}>ホーム</Link>
            </li>
            <li className="nav-items__item">
              <Link to="/NewsPage" onClick={handleLinkClick}>ニュース</Link>
            </li>
            <li className="nav-items__item">
              <a href="#" onClick={handleLinkClick}>サンプル</a>
            </li>
          </ul>
        </nav>

        <button 
          className={`header__hamburger hamburger ${isActive ? 'active' : ''}`} 
          id="js-hamburger" 
          onClick={handleHamburgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
