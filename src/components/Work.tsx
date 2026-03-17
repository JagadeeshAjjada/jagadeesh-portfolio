import { useEffect } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const base = import.meta.env.BASE_URL;

const categoryColors: Record<string, string> = {
  "AI / ML":         "#5eead4",
  "NLP / AI":        "#38bdf8",
  "Voice AI":        "#a78bfa",
  "Computer Vision": "#f472b6",
  "Data Analytics":  "#facc15",
  "Backend & Cloud": "#fb923c",
};

const projects = [
  {
    title: "RAG AI Chatbot",
    category: "AI / ML",
    tools: ["Python", "LangChain", "RAG", "FAISS", "LLM", "Streamlit"],
    image: `${base}images/Solidx.png`,
    link: "https://github.com/JagadeeshAjjada/RAG_AI_Chat_bot",
    desc: "Production-ready RAG chatbot with vector search, memory, and LLM integration.",
  },
  {
    title: "Sentiment Analysis with BERT",
    category: "NLP / AI",
    tools: ["Python", "BERT", "HuggingFace", "PyTorch", "Pandas", "Scikit-learn"],
    image: `${base}images/bond.png`,
    link: "https://github.com/JagadeeshAjjada/Sentiment_Analysis_with_BERT_Transformers",
    desc: "Fine-tuned BERT transformer for multi-class sentiment classification at scale.",
  },
  {
    title: "RAG on Multi-File & Web",
    category: "AI / ML",
    tools: ["Python", "LangChain", "RAG", "Vector DB", "PDF/CSV/DOCX", "Web Scraping"],
    image: `${base}images/sapphire.png`,
    link: "https://github.com/JagadeeshAjjada/RAG_model_on_multi_file_type_and_website",
    desc: "Unified retrieval pipeline ingesting PDFs, CSVs, DOCXs, and live web content.",
  },
  {
    title: "JARVIS AI Assistant",
    category: "AI / ML",
    tools: ["Python", "OpenAI", "Speech Recognition", "NLP", "TTS", "Automation"],
    image: `${base}images/radix.png`,
    link: "https://github.com/JagadeeshAjjada/JARVIS_AI",
    desc: "Iron Man-inspired AI assistant with voice commands, web search, and task automation.",
  },
  {
    title: "RAG over Audio",
    category: "Voice AI",
    tools: ["Python", "Whisper", "LangChain", "RAG", "FAISS", "Audio Processing"],
    image: `${base}images/rag_audio.png`,
    link: "https://github.com/JagadeeshAjjada/RAG_over_audio",
    desc: "End-to-end pipeline transcribing audio files and enabling Q&A over spoken content.",
  },
  {
    title: "Facial Emotion Recognition",
    category: "Computer Vision",
    tools: ["Python", "OpenCV", "DeepFace", "Deep Learning", "TensorFlow", "Real-time"],
    image: `${base}images/facial_emotion.png`,
    link: "https://github.com/JagadeeshAjjada/Facial_Emotion_Recognition_using_OpenCV_and_Deepface",
    desc: "Real-time facial emotion detection using DeepFace and OpenCV with live webcam feed.",
  },
  {
    title: "Engineering Impact Dashboard",
    category: "Data Analytics",
    tools: ["Python", "Pandas", "Plotly", "Dash", "Data Visualization", "Analytics"],
    image: `${base}images/eng_dashboard.png`,
    link: "https://github.com/JagadeeshAjjada/Engineering_Impact_Dash_Analysis",
    desc: "Interactive analytics dashboard tracking engineering team performance and impact metrics.",
  },
  {
    title: "Moneris Go Appetit POS",
    category: "Backend & Cloud",
    tools: ["Python", "Flask", "FastAPI", "AWS", "MySQL", "Docker", "Elasticsearch"],
    image: `${base}images/Maxlife.png`,
    link: undefined,
    desc: "Full-stack POS system with Moneris payment integration, cloud deployment, and real-time search.",
  },
  {
    title: "AI Call Assistant",
    category: "Voice AI",
    tools: ["FastAPI", "Twilio", "Deepgram STT", "Deepgram TTS", "OpenAI", "Groq"],
    image: `${base}images/ai_call.png`,
    link: undefined,
    desc: "Real-time voice AI platform with low-latency streaming, multi-LLM integration, and production telephony at Slickbit.",
  },
];

const Work = () => {
  // After the full grid renders, tell GSAP to recalculate all scroll trigger
  // positions with the correct page height so the character animation stays smooth.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project, i) => {
            const color = categoryColors[project.category] ?? "#5eead4";
            return (
              <div className="project-card" key={i}>
                <div
                  className="project-card-top"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div
                    className="project-card-overlay"
                    style={{ borderColor: color }}
                  />
                  <span
                    className="project-cat-chip"
                    style={{ background: color + "22", color }}
                  >
                    {project.category}
                  </span>
                  <span className="project-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-card-body">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tools">
                    {project.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="tool-pill"
                        style={{
                          borderColor: color + "55",
                          color: color + "cc",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color }}
                      data-cursor="disable"
                    >
                      View Project <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
