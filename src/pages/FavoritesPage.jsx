import React from 'react';
import { Link } from 'react-router';
import { CartSmallIcon, HeartFilledIcon } from '../assets/icons/icons.jsx';

export default function Favorites() {
    return (
        <div className="favorites favorites--empty">
            <div className="favorites__empty">
                <div className="favorites__empty-icon">
                    <HeartFilledIcon />
                </div>

                <h2 className="favorites__empty-title">У вас нет избранных товаров</h2>

                <p className="favorites__empty-text">
                    Добавляйте товары в Избранное с помощью💝
                </p>

                <a href='/' className="favorites__empty-btn">
                    Назад
                </a>
            </div>
        </div>
    );
}
