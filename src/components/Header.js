import React, { useState, useEffect } from "react";

const Header = () => {
  // ハンバーガーメニューとナビゲーションの状態を管理するステートを宣言
  const [isActive, setIsActive] = useState(false);

  // クリックイベントのハンドラーを定義
  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  // ページの再読み込み時に状態をlocalStorageから復元する
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('isActive'));
    if (savedState) {
      setIsActive(savedState);
    }
  }, []);

  // isActiveの変更を監視し、localStorageに保存
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
          <a href="index.html">Site</a>
        </h1>
        
        <nav className={`header__nav nav ${isActive ? 'active' : ''}`} id="js-nav">
          <ul className="nav__items nav-items">
            <li className="nav-items__item">
              <a href="index.html">ホーム</a>
            </li>
            <li className="nav-items__item">
              <a href="news01.html">ニュース</a>
            </li>
            <li className="nav-items__item">
              <a href="#">サンプル</a>
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
