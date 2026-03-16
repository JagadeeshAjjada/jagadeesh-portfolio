import { useEffect } from "react";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal = ({ onClose }: ResumeModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div
        className="resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <span className="resume-modal-title">Resume — Jagadeesh Ajjada</span>
          <div className="resume-modal-actions">
            <a
              href="/resume.pdf"
              download="Jagadeesh_Ajjada_Resume.pdf"
              className="resume-download-btn"
              data-cursor="disable"
            >
              Download
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              data-cursor="disable"
              aria-label="Close resume"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe
            src="/resume.pdf"
            title="Jagadeesh Ajjada Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
