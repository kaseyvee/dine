/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <footer className="footer | wrapper">
      <img src="logo.svg" alt="" />
      <div className="footer_content">
        <div className="footer_content_contact">
          <p>Marthwaite, Sedbergh <br/> Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="footer_content_hours">
          <p>OPEN TIMES</p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
