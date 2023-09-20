import { createContext, useState, useContext } from "react";

const ToastContext = createContext(null);

export default function ToastContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState({
    title: "",
    msg: "",
  });

  return (
    <ToastContext.Provider value={{ show, setShow, toastMsg, setToastMsg }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error(
      "Toast Context must be wrapped within toast context provider"
    );

  return context;
};
