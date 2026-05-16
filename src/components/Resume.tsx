import '../index.css';

function Resume() {
  const resumeUrl = "/Anne_Ragama_Resume.pdf";

  return (
    <div className="resume-page">
      <div className="resume-header">
        <h2 className="headers">My Resume</h2>
        <p className="journal-subtitle">
          {'>'}_  Anne Ragama — CS Graduate & IT Professional
        </p>
      </div>

      <div className="resume-toolbar">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          ↗ Open in New Tab
        </a>
        <a
          href={resumeUrl}
          download="Anne_Ragama_Resume.pdf"
          className="resume-btn resume-btn--download"
        >
          ↓ Download PDF
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src={resumeUrl}
          className="resume-iframe"
          title="Anne Ragama Resume"
        />
      </div>
    </div>
  );
}

export default Resume;