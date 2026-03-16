import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>A&A Innovative Solutions</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Collected and processed raw data, performing data cleaning and
              structuring using Python (NumPy, OpenCV), and PostgreSQL. Optimised
              code using Java, reducing execution time from 40 minutes to 8 minutes
              for large Excel datasets with 200k+ rows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Banyan Technologies</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Designed and implemented high-performance REST APIs in Python (Django),
              wrote queries in MySQL, integrated user-facing elements with back-end
              logic, and deployed and maintained the database in AWS with strong
              debugging and optimization skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software AI Engineer</h4>
                <h5>Slickbit Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on Moneris Go Appetit POS with cloud-based infrastructure and
              hundreds of users in Canada. Built a real-time voice AI platform using
              FastAPI, Twilio, and Deepgram with multi-LLM integration (OpenAI,
              Anthropic, Groq). Optimized critical algorithms for 15% faster execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
