import React from "react";
import dear from "../../images/dear.svg";
import background from "../../images/forest.png";
import ourwedding from "../../images/ourwedding.svg";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import greenCloud from "../../images/greenCloud.png";
import greenCloud2 from "../../images/greenCloud2.png";
import island from "../../images/island.png";
import { date, time } from '../../vendor/const';
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <img src={background} alt="облака" className="info-date__background"></ img>
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Дорогие родные и друзья" src={dear}></img>
        <p className="info-date__text">Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей. 
          С большим удовольствием приглашаем вас на знаменательный праздник - </p>
        <img className="info-date__our-wedding" alt="Нашу свадьбу" src={ourwedding}></img>
      </div>
      <div className="info-date__info">
        <p className="info-date__text">Ждем вас:</p>
        <p className="info-date__day">{date}</p>
        <p className="info-date__text">Сбор гостей в {time}</p>
      </div>
      <div className="info-date__place" id="place">
        <img src={greenCloud} alt="зеленое облако" className="info-date__cloud"></ img>
        <div className="info-date__check-in">
          <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
          <p className="info-date__text">Дворец Бракосочетаяния 1 <br /> Английская набережная, 28 <br />Начало в 15.30</p>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46d88a0009071250c064c30503a26d3cf6644cf299e1b141f328c94ae0a5180d&amp;source=constructor"
            frameBorder="0" title="ЗАГС" className="info-date__map"></iframe>
        </div>
        <div className="info-date__check-in">
          <img src={greenCloud2} alt="зеленое облако" className="info-date__cloud-two"></ img>
          <img className="info-date__where" alt="праздничный банкет" src={banquet}></img>
          <p className="info-date__text">Pесторан «весенний» <br /> Наб. Обводного канала 199 <br /> в 17.00</p>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd356beb7724aa398fee8236be3b813cd4ed5afe081f36c6d5a33f67245094a3&amp;source=constructor" 
            frameBorder="0" title="ресторан" className="info-date__map"></iframe>
        </div>
      </div>
      <img src={island} alt="остров" className="info-date__island"></ img>
    </section>
  );
}

export default InfoDate;