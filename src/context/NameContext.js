import { createContext, useState } from "react";

export const NameContext = createContext();
export const PopUpContext = createContext();
export const NumbersContext = createContext();

const NameContextProvider = (props) => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [randomNum,setRandomNum]=useState(['2321','3213','2312','3213']);
  return (
    <NameContext.Provider value={[name, setName]}>
      <PopUpContext.Provider value={[isOpen, setIsOpen]}>
      <NumbersContext.Provider value={[randomNum,setRandomNum]}>
            {props.children}
        </NumbersContext.Provider>
      </PopUpContext.Provider>
    </NameContext.Provider>
  );
};

export default NameContextProvider;
