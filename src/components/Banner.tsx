function Banner() {
  return (
    <div className="banner">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet="homepage/ready-bg-desktop@2x.jpg"
        />
        <source
          media="(min-width: 500px)"
          srcSet="homepage/ready-bg-tablet@2x.jpg"
        />
        <img src="homepage/ready-bg-mobile@2x.jpg" alt="" />
      </picture>

      <div className="banner_content | wrapper">
        <span className="main-title">Ready to make a reservation?</span>
        <button className="button">BOOK A TABLE</button>
      </div>
    </div>
  );
}

export default Banner;
