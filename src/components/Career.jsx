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
                <h4>Experience</h4>
                <h5>Fresher</h5>
              </div>
              
            </div>
            <p>Self-Directed Projects -MERN Stack Development Worked on multiple full-stack projects focusing on REST APIs, authentication, database design, and responsive UI development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
