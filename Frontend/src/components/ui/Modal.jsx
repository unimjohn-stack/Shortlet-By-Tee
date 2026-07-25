import { FiX } from "react-icons/fi";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, className = "", }) => {

    useEffect(() => {
        if(!isOpen) return;
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);
    if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <div onClick={(e) => e.stopPropagation()} className={`relative w-full max-w-lg rounded-xl bg-white p-6 shadow-lg ${className}`}>
            <button onClick={onClose} className="absolute right-4 top-4 text-muted transition hover:text-primary">
                {/* <X size={20} /> */}
                <FiX size={20} />
            </button>
            {title && (
                <h2 className="mb-5 text-2xl font-bold text-heading">
                    {title}
                </h2>
            )}
            {children}
        </div>
    </div>
  );
};

export default Modal;