import { useEffect, useState } from "react";

const ShowMessage = ({ type = "success", message = "", show = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [show]);

  const styles = {
    success: "bg-emerald-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2
        top-[-60px]
        px-4 py-2 rounded-xl text-sm font-medium
        shadow-lg z-[9999]
        transition-all duration-300 ease-out
        ${styles[type]}
        ${visible ? "top-5 opacity-100" : "opacity-0"}
      `}
    >
      {message}
    </div>
  );
};

export default ShowMessage;
