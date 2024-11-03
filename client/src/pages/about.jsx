import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth(); 
    return(
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>
                            Welcome, {user ? `${user.username}` : ``}</p>
                        <h1>Why Choose Us?</h1>
                        <p>
                            Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
                        </p>
                        <p>
                            Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
                        </p>
                        <p>
                            Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
                        </p>
                        <p>
                            Affordability: We offer competitive pricing without compromising on the quality of our services.
                        </p>
                        <p>
                            Realiabilty: Count on us to be there when you need us. We're commited to ensuring your IT environment is reliable and available 24/7.
                        </p>
                        <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img
                        src="/image/about-us-vector.png"
                        alt="coding together"
                        width="400"
                        height="500"
                        />
                    </div>
                </div>
            </section>
        </main> 
        </>
    )
};

