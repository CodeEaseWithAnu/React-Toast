import { forwardRef, useImperativeHandle, useState } from "react";
import Toast from "./Toast";
import "./Toast.css";

const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [
      ...prevToasts,
      { message, type, id, animationClass: "popup" },
    ]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000); 
  };

  useImperativeHandle(ref, () => ({
    addToast,
  }));

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          animationClass={toast.animationClass} 
          onClose={() =>
            setToasts((prevToasts) =>
              prevToasts.filter((t) => t.id !== toast.id)
            )
          }
        />
      ))}
    </div>
  );
});

export default ToastContainer;
