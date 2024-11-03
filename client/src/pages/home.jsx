export const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best Code Academy</p>
                <h1>Welcome to  CodeCraft Academy</h1>
                <p>
                CodeCraft Academy offers hands-on training in software development, data science, and cybersecurity, preparing students for real-world tech challenges. Our programs focus on practical skills, empowering future tech leaders to excel in today’s digital landscape. Join us to kickstart your tech journey!
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/Service">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/image/code-togather.jpg"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
  
        {/* 2nd section  */}
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>Recorded Sessions</p>
            </div>
            <div className="div1">
              <h2>100,000+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2>5000+</h2>
              <p>Well Known Developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>services</p>
            </div>
          </div>
        </section>



        {/* 3rd section  */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/image/code-together1.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
  
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                Ready to elevate your IT infrastructure with improved efficiency and security? Get in touch for a free consultation, and let CodeCraft Academy support your business success in the digital age.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="http://localhost:5173/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };