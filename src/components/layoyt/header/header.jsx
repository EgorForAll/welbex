import { ReactComponent as Logo } from "../../../assets/images/logo_welbex.svg";

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
        </div>
        <div className="header__right"></div>
      </div>
    </header>
  );
};

export default Header;
