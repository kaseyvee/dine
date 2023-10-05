/* eslint-disable @next/next/no-img-element */

function Hero() {
  return (
    <div className="hero">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet="homepage/hero-bg-desktop@2x.jpg"
        />
        <source
          media="(min-width: 500px)"
          srcSet="homepage/hero-bg-tablet.jpg"
        />
        <img src="homepage/hero-bg-mobile@2x.jpg" alt="" />
      </picture>

      <div className="wrapper | hero_content">
        <img src="logo.svg" alt="" />
        <header>
          <h1 className="hero-title">Exquisite dining <br/> since 1989</h1>
          <p className="paragraph">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="button">BOOK A TABLE</button>
        </header>
      </div>
    </div>
  );
}

export default Hero;
