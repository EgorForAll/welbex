import { aboutBlock, menuBlock } from "../../../utils/utils";
import FooterBlock from "../../blocks/footer-block/footer-block";
import SocialMedia from "../../ui/social-media/social-media";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__block">
          {aboutBlock ? <FooterBlock footerBlock={aboutBlock} /> : null}
        </div>
        <div className="footer__block">
          {menuBlock ? <FooterBlock footerBlock={menuBlock} /> : null}
        </div>
        <div className="footer__block contacts-block">
          <h3 className="footer__block-title contacts-title">Контакты</h3>
          <ul className="footer__block-list">
            <li className="footer__block-item contact-item">
              <a className="footer__link" href="tel:+75555555555">
                +7 555 555-55-55
              </a>
            </li>
            <li className="footer__block-item contact-item">
              <SocialMedia />
            </li>
            <li className="footer__block-item contact-item">
              <div className="footer__address">
                Москва, Путевой проезд 3с1, к 902
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__rights">
        <span className="footer__rights-text">
          ©WELBEX 2022. Все права защищены.
        </span>
        <a href="#" className="footer__rights-link">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
