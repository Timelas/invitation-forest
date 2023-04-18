import React from "react";
import { useMediaQuery } from 'usehooks-ts';
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
  const resizeM = useMediaQuery('(min-width: 800px)');
  const resizeL = useMediaQuery('(min-width: 1300px)');
  const DBmapL = "https://yandex.ru/map-widget/v1/?um=constructor%3A4914c0d42bdbe60395dea9e2fca558b99dfbf04498a0fac055e4d3063117d876&amp;source=constructor";
  const DBmapM = "https://yandex.ru/map-widget/v1/?um=constructor%3A46d88a0009071250c064c30503a26d3cf6644cf299e1b141f328c94ae0a5180d&amp;source=constructor";
  const DBmapS = "https://yandex.ru/map-widget/v1/?um=constructor%3A29f3e18eb4df64b19d60edcc06a46588f4fc841b369c60ba23eed148f2c4a495&amp;source=constructor";
  const BmapL = "https://yandex.ru/map-widget/v1/?um=constructor%3Abd356beb7724aa398fee8236be3b813cd4ed5afe081f36c6d5a33f67245094a3&amp;source=constructor";
  const BmapM = "https://yandex.ru/map-widget/v1/?um=constructor%3A4344da1f02c0fc5d1a31411a9bf8a2ef5c901bf88b8e7bd3f5ed729ab88ba794&amp;source=constructor";
  const BmapS = "https://yandex.ru/map-widget/v1/?um=constructor%3A833851237b5f82df6e65e78eb36cafafc9cdbaa2154ff2dbbddffb5cd6776cb7&amp;source=constructor";

  function resize () {
    if (resizeL) {
      return DBmapL;
    } if (resizeM) {
      return DBmapM; 
    } else {
      return DBmapS;
    }
  };

  function resize2 () {
    if (resizeL) {
      return BmapL;
    } if (resizeM) {
      return BmapM; 
    } else {
      return BmapS;
    }
  };

  function width() {
    if (resizeL) {
      return "800px";
    } if (resizeM) {
      return "600px"; 
    } else {
      return "320px";
    }
  };

  function height() {
    if (resizeL) {
      return "350px";
    } if (resizeM) {
      return "300px"; 
    } else {
      return "240px";
    }
  };

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
          <div className="info-date__map">
            <iframe src= {resize()} frameborder="0" title="ЗАГС" width={width()} height={height()}></iframe>
          </div>
        </div>
        <div className="info-date__check-in">
          <img src={greenCloud2} alt="зеленое облако" className="info-date__cloud-two"></ img>
          <img className="info-date__where" alt="праздничный банкет" src={banquet}></img>
          <p className="info-date__text">Pесторан «весенний» <br /> Наб. Обводного канала 199 <br /> в 17.00</p>
          <div className="info-date__map">
            <iframe src={resize2()} frameBorder="0" title="ресторан" width={width()} height={height()}></iframe>
          </div>
        </div>
      </div>
      <img src={island} alt="остров" className="info-date__island"></ img>
    </section>
  );
}

export default InfoDate;