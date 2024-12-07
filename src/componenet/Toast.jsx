import "./Toast.css";

const Toast = ({ message, type, onClose, animationClass }) => {
  return (
    <div className={`toast toast-${type} ${animationClass}`}>
      <span>{message}</span>
      <button className="toast-close-button" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
