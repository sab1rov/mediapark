import React from 'react'
import { Link } from 'react-router-dom';
import '/src/assets/scss/generals/_header.scss';
import { SearchIcon, OrderIcon, CompareIcon, HeartIcon, UserIcon, CartIcon, BurgerIcon, PhoneIcon, MapPinIcon } from '../../assets/icons/icons.jsx';

function Header() {
  return (
    <header className="header">
      <div className="header__topbar">
        <div className="header__topbar-contacts">
          <p className="header__topbar-phone">
            <PhoneIcon /> +998 71 203 33 33
          </p>
          <p className="header__topbar-city">
            <MapPinIcon /> Ташкент
          </p>
        </div>
        <nav className="header__topbar-nav">
          <a href="#" className="header__topbar-link">О нас</a>
          <a href="#" className="header__topbar-link header__topbar-link--active">Mediablog ↗</a>
          <a href="#" className="header__topbar-link">Доставка</a>
          <a href="#" className="header__topbar-link">Магазины</a>
          <a href="#" className="header__topbar-link">Рассрочка</a>
          <a href="#" className="header__topbar-link">Связаться с нами!</a>
          <div className="header__topbar-lang">
            <button type="button" className="header__topbar-lang-toggle">
              Русский
              <span className="header__topbar-lang-toggle-arrow">▾</span>
            </button>
          </div>
        </nav>
      </div>

      <div className="header__main">
        <a href="/" className="header__logo">
          <span className="header__logo-media">MEDIA</span>
          <span className="header__logo-park">PARK</span>
        </a>

        <button className="header__catalog-btn">
          <BurgerIcon />
          Каталог
        </button>

        <div className="header__search">
          <input type="text" className="header__search-input" placeholder="Искать товары" />
          <button className="header__search-btn">
            <SearchIcon />
          </button>
        </div>

        <div className="header__actions">
          <button className="header__action">
            <OrderIcon />
            <span>Статус заказа</span>
          </button>
          <button className="header__action">
            <CompareIcon />
            <span>Сравнить</span>
          </button>
          <Link to='/cart' className="header__action header__action--active">
            <CartIcon count={1} />
            <span>Корзина</span>
          </Link>
          <Link to='/favorites' className="header__action">
            <HeartIcon />
            <span>Избранное</span>
          </Link>
          <button className="header__action">
            <UserIcon />
            <span>Войти</span>
          </button>
        </div>
      </div>

      <nav className="header__categories">
        <a href="#" className="header__category header__category--promo">Акции</a>
        <a href="#" className="header__category header__category--dyson">Dyson</a>
        <a href="#" className="header__category">Смартфоны</a>
        <a href="#" className="header__category">Кофемашины</a>
        <a href="#" className="header__category">Обогреватели</a>
        <a href="#" className="header__category">Телевизоры</a>
        <a href="#" className="header__category">Apple</a>
        <a href="#" className="header__category">Ноутбуки</a>
        <a href="#" className="header__category">Холодильники</a>
        <a href="#" className="header__category">Кондиционеры</a>
        <a href="#" className="header__category">Стиральные машины</a>
        <a href="#" className="header__category">Смарт-часы</a>
      </nav>
    </header>
  )
}

export default Header