import { ReactComponent as Logo } from "../../../assets/images/logo_welbex.svg";
import SocialMedia from "../../ui/social-media/social-media";
import { links } from "../../../utils/utils";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo-wrapper">
            <Logo />
            <div className="header__logo-title">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>
          <nav className="header__nav">
            {links &&
              links.map((item, index) => (
                <a href="#" className="header__links" key={index}>
                  {item}
                </a>
              ))}
          </nav>
        </div>
        <div className="header__right">
          <a href="tel:+75555555555" className="header__links header__phone">
            +7 555 555-55-55
          </a>
          <SocialMedia />
        </div>
      </div>
    </header>
  );
};

export default Header;
