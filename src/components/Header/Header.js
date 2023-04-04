import React from "react";
import { dayWeek, year, month } from '../../vendor/const';
import "./Header.css";
import forestcloud from "../../images/forestcloud.jpg";
import names from "../../images/names.svg";
import day from "../../images/day.svg";

function Header() {
  return (
    <section className="header" id="home">
      <div className="header__desctop">
        <img src={forestcloud} alt="облака" className="header__background"></ img>
        <img src={names} alt="имена" className="header__names"></ img>
        <div className="header__date">
          <div className="header__date_info_line"><p className="header__text">{dayWeek}</p></div>
          <div className="header__block-line">
            <img src={day} alt="цифра" className="header__date_info_day"></ img>
            <div className="header__date_info_month">{month}</div>
          </div>
          <div className="header__date_info_line"><p className="header__text">{year}</p></div>
        </div>
       </div>
    </section>
  );
}

export default Header;