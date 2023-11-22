const GiftMobile = ({ arr }) =>
  arr &&
  arr.map((item, index) => (
    <li className="gift-item">
      <h2 className="gift-mobile" key={index}>
        {item}
      </h2>
    </li>
  ));

export default GiftMobile;
