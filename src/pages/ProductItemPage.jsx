import { Swiper, SwiperSlide } from "swiper/react";
import { AboutData } from "../utils/data";
import { BasketIcon, LikeIcon, TbcIcon, UzumIcon } from "../assets/icons";
import ClickImg from "/images/click.png";
import PaymeImg from "/images/payme.png";
import OctoImg from "/images/octobank.png";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function ProductItemPage() {
  return (
    <section className="product">
      <div className="container">
        <div className="product__bar">
          <a href="/" className="product__bar-btn">
            Главный 
          </a>
          <a href="#" className="product__bar-btn">
            Каталог
          </a>
          <a href="#" className="product__bar-btn">
            Товары для детей
          </a>
          <a href="#" className="product__bar-btn">
            Игрушки и транспорт
          </a>
          <a href="#" className="product__bar-btn">
            Детские конструкторы
          </a>
        </div>
        <div className="product__main">
          <div className="product__swiper">
            <Swiper
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {AboutData.map((item) => (
                <SwiperSlide>
                  <img
                    className="product__swiper-img"
                    key={item.id}
                    src={item.img}
                    alt="product"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="product__about">
            <h1 className="product__about-title">
              Конструктор LEGO Editions 43020 Официальный трофей чемпионата мира
              FIFA в Ташкенте
            </h1>
            <div className="product__about-product">
              <p className="product__about-subtitle">Коротко о товаре</p>

              <div className="product__about-items">
                {AboutData.map((item) => (
                  <div className="product__about-list" key={item.id}>
                    <span className="product__about-label">{item.label}</span>
                    <span className="product__about-value">{item.value}</span>
                  </div>
                ))}
              </div>
              <button className="product__about-btn">
                Все характеристики
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="product__cards">
            <div className="product__card">
              <div className="product__price">
                <h3 className="product__summa">4 350 000 сум</h3>
                <p className="product__code">Код: 43020</p>
              </div>
              <div className="product__card-card">
                <p className="product__card-title">В рассрочку</p>
                <div className="product__card-subtitles">
                  <p className="product__card-subtitle">от 507 500 сум</p>
                  <p className="product__card-subtitle">x 12 мес.</p>
                </div>
                <div className="product__card-logos">
                  <TbcIcon />
                  <UzumIcon />
                </div>
              </div>

              <div className="product__texts">
                <div className="product__text-icon">
                  <BasketIcon />
                </div>
                <p className="product__text">Товар в 4 корзинах сейчас</p>
              </div>
              <button className="product__card-btn">Купить в рассрочку</button>
              <div className="product__card-btns">
                <button className="product__korzina-btn">В корзину</button>
                <button className="product__like-btn">
                  <LikeIcon />
                </button>
              </div>
            </div>
            <div className="product__payment">
              <h4 className="product__payment-title">
                Удобная и безопасная оплата
              </h4>
              <div className="product__payment-logos">
                <div className="product__payment-logo">
                  <img src={ClickImg} alt="Click" />
                </div>
                <div className="product__payment-logo">
                  <img src={PaymeImg} alt="Payme" />
                </div>
                <div className="product__payment-logo">
                  <img src={OctoImg} alt="Octobank" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductItemPage;
