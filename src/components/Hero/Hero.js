import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-guides">
        <span className="g1" />
        <span className="g2" />
        <span className="g3" />
        <span className="g4" />
        <span className="g5" />
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">Hello World, I am</p>
          <div className="hero-logo-group">
            <img
              src="/assets/maliko-text.png"
              alt="maliko"
              className="logo-text"
            />
            <img src="/assets/red-dot.png" alt="red dot" className="logo-red" />
            <img
              src="/assets/blue-dot.png"
              alt="blue dot"
              className="logo-blue"
            />
          </div>
          <p className="hero-desc">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </p>
          <button className="hero-cta">schedule free consultation</button>

          <p className="hero-note">Note, This is my dog, not me</p>
        </div>

        {/* right side */}

        <div className="hero-art">
          <div className="dog-stage">
            <img src="/assets/dog-img2.png" alt="Dog" className="dog-img" />

            <div className="tag tag--left tag-ui">UI Design</div>

            <div className="tag tag--right tag-mobile">Mobile Apps</div>

            <div className="tag tag--right tag-graphics">
              Graphics
              <img
                src="/assets/vector1.png"
                alt="vector"
                className="vector vector-graphics"
              />
            </div>

            <div className="tag tag--left tag-branding">
              Branding
              <img
                src="/assets/vector.png"
                alt="vector"
                className="vector vector-branding"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
