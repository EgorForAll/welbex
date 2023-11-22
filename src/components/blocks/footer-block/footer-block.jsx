const FooterBlock = ({ footerBlock }) => {
  return (
    <>
      <h3 className="footer__block-title">{footerBlock.title}</h3>
      <ul className="footer__block-list">
        {footerBlock.sections.map((item, index) => (
          <li key={index} className="footer__block-item">
            <a className="footer__link" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterBlock;
