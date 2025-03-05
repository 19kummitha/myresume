export default function Resume() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Resume</h2>
      <iframe
        src="/resume.pdf"
        width="80%"
        height="600px"
        title="Resume"
        style={{ border: "1px solid black" }}
      ></iframe>
      <br />
      <a href="/resume.pdf" download="My_Resume.pdf">
        <button
          style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
        >
          Download Resume
        </button>
      </a>
    </div>
  );
}
