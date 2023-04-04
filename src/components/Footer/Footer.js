import React from "react";
import names from "../../images/namesFooter.svg";
import background from "../../images/footer.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <img src={background} alt="облака" className="footer__background"></ img>
      <p className="footer__text">До скорой встречи,</p>
      <img src={names} alt="Алексей и Виктория" className="footer__names"></ img>
    </section>
  );
}

export default Footer;