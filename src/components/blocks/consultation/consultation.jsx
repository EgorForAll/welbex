import { gifts, giftMobile } from "../../../utils/utils";
import GiftMobile from "../gifts-mobile/gifts-mobile";

const Consultation = () => {
  const isMobile = window.innerWidth < 1025;

  return (
    <div className="consultation">
      <div className="consultation__text">
        Вместе с <span>бесплатной консультацией</span> мы дарим:
      </div>
      <ul className="gifts__list">
        {!isMobile && gifts ? (
          gifts.map((item, index) => (
            <li key={index} className="gifts__item">
              <h2 className="gifts__item-title">{item.title}</h2>
              <div className="gifts__item-desc">{item.desc}</div>
            </li>
          ))
        ) : (
          <GiftMobile arr={giftMobile} />
        )}
      </ul>
      <a href="#" className="consultation__link">
        Получить консультацию
      </a>
    </div>
  );
};

export default Consultation;
