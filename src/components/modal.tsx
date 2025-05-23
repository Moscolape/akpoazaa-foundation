import { ReactNode } from "react";

const Modal = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#000000a9] bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;