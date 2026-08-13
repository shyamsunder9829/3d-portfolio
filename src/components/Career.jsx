import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA</h4>
                <h5>Master of Computer Applications</h5>
              </div>
              <h3>2024-26</h3>
            </div>
            <h4>
              University Of Technology, Jaipur.
            </h4>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bsc</h4>
                <h5>Bachelor of Science</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <h4>
              Abhilasha Science College, Sandwa.
            </h4>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary </h4>
                <h5>With PCM</h5>
              </div>
              <h3>2020</h3>
            </div>
            <h4>
             Tagore group of education, bikaner.
            </h4>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer (React.js) Intern</h4>
                <h5>Welyft Pte. Ltd. — Singapore (Remote)</h5>
              </div>
              <h3>May 2026 – Aug 2026</h3>
            </div>
            <ul>
              <li>Developed and maintained the company website (welyft.org) using React.js, contributing to frontend architecture, page development, and responsive UI implementation.</li>
              
              <li>Developed and maintained responsive web application; debugged frontend issues to improve reliability.</li>
             
              <li>Collaborated with the IT team on product and technology tasks, supporting end-to-end delivery of frontend features.</li>
              <li>Completed the internship in good standing; certificate of completion available on request.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
