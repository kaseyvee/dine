/* eslint-disable @next/next/no-img-element */

function Hero() {
  return (
    <div className="hero">
      <picture>
        <source media="(min-width: 1100px)" srcSet="homepage/hero-bg-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="homepage/hero-bg-tablet@2x.jpg" />
        <img
          src="homepage/hero-bg-mobile@2x.jpg"
          alt=""
        />
      </picture>
      <header>
        <img src="logo.svg" alt="" />
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <button>BOOK A TABLE</button>
      </header>
    </div>
  );
}

export default Hero;
