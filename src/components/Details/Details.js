import React from "react";
import details from "../../images/Details.svg";
import greenCloud4 from "../../images/greenCloud4.png";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу для нашей семейной библиотеки</p>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!"
и сохранить атмосферу уютного семейного праздника.</p>
      <img src={greenCloud4} alt="зеленое облако" className="details__cloud"></ img>
    </section>
  );
}

export default Details;