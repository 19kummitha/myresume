import "./Home.css"; // Import CSS file

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="back-video">
        <source src="/assets/video4.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="home-text">
        <h4>Hello</h4>
        <h1>
          <span>I'm Kummitha Venkata Koti Reddy</span>
        </h1>
        <h3>Software Developer and Programming Enthusiast</h3>
        <a
          href="resume.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
