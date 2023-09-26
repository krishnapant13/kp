import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#ffb000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};
