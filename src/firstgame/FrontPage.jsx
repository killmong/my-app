import React, { useEffect } from "react";
import "./FrontPage.css";

const FrontPage = () => {
  useEffect(() => {
    // Cursor effect
    const handleMouseMove = (e) => {
      const cursor = document.getElementById("cursor");
      const blurCursor = document.getElementById("cursor-blur");

      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      blurCursor.style.left = `${e.pageX - 30}px`;
      blurCursor.style.top = `${e.pageY - 30}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Arrow scroll effect
    const arrow = document.getElementById("arrow");
    arrow.addEventListener("click", () => {
      document.getElementById("page2").scrollIntoView({
        behavior: "smooth",
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <header id="nav">
        <img
          src="https://www.freeiconspng.com/uploads/emblem-ashoka-chakra-india-shrihub-background-23.png"
          alt="Ashoka Chakra"
          className="logo"
        />
        <nav>
          <ul>
            <li>
              <a href="#page1">Preamble</a>
            </li>
            <li>
              <a href="#page2">Fundamental Rights</a>
            </li>
            <li>
              <a href="#page3">Directive Principles</a>
            </li>
            <li>
              <a href="#page4">Schedules</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      <section id="hero">
        <video
          autoPlay
          loop
          muted
          src="https://www.indianconstitution.in/assets/constitution_video.mp4"
          className="background-video"
        ></video>
        <div className="hero-text">
          <h1>WE THE PEOPLE OF INDIA</h1>
          <h2>WELCOME TO THE INDIAN CONSTITUTION!</h2>
          <p>
            The Constitution of India is the supreme law of the land, outlining
            the framework for the governance of our great nation. A tribute to
            democracy, justice, liberty, equality, and fraternity for all
            citizens.
          </p>
          <div id="arrow">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
      </section>

      <section id="main-content">
        <article id="page1" className="page-section">
          <h3>Preamble</h3>
          <p>
            The Preamble serves as an introduction to the Constitution,
            reflecting the core values of justice, liberty, equality, and
            fraternity.
          </p>
        </article>

        <article id="page2" className="page-section">
          <h3>Fundamental Rights</h3>
          <p>
            Fundamental Rights guarantee the protection of rights such as
            freedom of speech, equality, and right to life to all citizens.
          </p>
        </article>

        <article id="page3" className="page-section">
          <h3>Directive Principles</h3>
          <p>
            Directive Principles guide the government in making policies aimed
            at ensuring social justice and welfare for all citizens.
          </p>
        </article>

        <article id="page4" className="page-section">
          <h3>Schedules</h3>
          <p>
            The schedules outline important legal, social, and economic
            provisions in the Constitution.
          </p>
        </article>
      </section>

      <section id="pathfinder">
        <h3>Explore More Learning Resources</h3>
        <div className="pathfinder-links">
          <div className="pathfinder-item">
            <a href="/FirstArticle">My Learning</a>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.unjKVcmbx5qHF3nFF_nRVQHaE7&pid=Api&P=0&h=180"
              alt="Ashoka Chakra"
            />
            <p>
              Learn more about the Indian Constitution, a foundation of our
              democracy, and its relevance in today's context.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#page1">Preamble</a>
              </li>
              <li>
                <a href="#page2">Fundamental Rights</a>
              </li>
              <li>
                <a href="#page3">Directive Principles</a>
              </li>
              <li>
                <a href="#page4">Schedules</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Constitution Hall, New Delhi, India</p>
            <p>Phone: 011-12345678</p>
            <p>Email: info@constitution.in</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
