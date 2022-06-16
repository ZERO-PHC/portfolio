const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" onClick={() => scrollTop()} className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Crafted with love and passion by your friendly dev Zerø
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
