import React from 'react';
import '/src/assets/scss/components/_CartaPage.scss';
import { BoxIcon, TrashIcon, TruckIcon } from '../assets/icons/icons.jsx';
import { cartItems } from '../utils/data.jsx';



function CartaPage() {

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__panel">
          <h1 className="cart__title">Корзина</h1>

          <div className="cart__toolbar">
            <label className="cart__select-all">
              <input type="checkbox" className="cart__checkbox" />
              Выбрать все
            </label>
            <button className="cart__delete-btn">
              <TrashIcon /> Удалить выбранные
            </button>
          </div>

          <div className="cart__items">
            {cartItems.map((item) => (
              <div className="cart__item" key={item.id}>
                <input
                  type="checkbox"
                  className="cart__checkbox"
                />
                <div className="cart__item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart__item-info">
                  <span className="cart__item-name">{item.name}</span>
                  <span className="cart__item-monthly">{item.monthly}</span>
                  <div className="cart__item-actions">
                    <button className="cart__item-remove">Удалить</button>
                    <button className="cart__item-like">Нравится</button>
                  </div>
                </div>
                <div className="cart__item-right">
                  <span className="cart__item-price">{item.priceLabel}</span>
                  <div className="cart__qty">
                    <button className="cart__qty-btn">−</button>
                    <span className="cart__qty-value">{item.quantity}</span>
                    <button className="cart__qty-btn">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart__summary">
          <h2 className="cart__summary-title">Ваш заказ</h2>
          <div className="cart__summary-row">
            <span>товар на сумму</span>
          </div>
          <div className="cart__summary-row cart__summary-row--total">
            <span>Итого</span>
          </div>
          <div className="cart__summary-delivery">
            <TruckIcon />
            <div>
              <span className="cart__summary-delivery-label">Служба доставки.<br /></span>
              <a href="#">Узнать больше</a>
            </div>
          </div>
          <button className="cart__summary-btn">Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}

export default CartaPage