import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Кошик пустий <icon>😕</icon>
        </h2>
        <p>
          Ймовірніше всього, ви ще не вибрали ні одну піцу.
          <br />
          Щоб вибрати піцу, перейдіть на головну сторінку.
        </p>
        <img src="/img/empty-cart.png" alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
