import { ReactComponent as Telegram } from "../../../assets/images/telegram.svg";
import { ReactComponent as Viber } from "../../../assets/images/viber.svg";
import { ReactComponent as WhatsApp } from "../../../assets/images/whatsapp.svg";

const SocialMedia = () => {
  return (
    <nav className="social-media">
      <a href="#" className="social__links">
        <Telegram />
      </a>
      <a href="#" className="social__links">
        <Viber />
      </a>
      <a href="#" className="social__links">
        <WhatsApp />
      </a>
    </nav>
  );
};

export default SocialMedia;
