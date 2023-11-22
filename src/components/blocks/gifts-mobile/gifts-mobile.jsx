const GiftMobile = ({ arr }) =>
  arr &&
  arr.map((item, index) => (
    <li className="gift-item" key={index}>
      <h2 className="gift-mobile">{item}</h2>
    </li>
  ));

export default GiftMobile;
